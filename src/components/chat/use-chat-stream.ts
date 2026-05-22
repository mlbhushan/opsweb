"use client";

import { useState, useCallback, useRef } from "react";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export function useChatStream(initialMessages: ChatMessage[] = []) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const append = useCallback(
    async (message: { role: "user" | "assistant"; content: string }, opts?: { currentUrl?: string }) => {
      const userMsg: ChatMessage = { id: uid(), ...message };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      const assistantId = uid();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const allMessages = await new Promise<ChatMessage[]>((resolve) => {
          setMessages((prev) => {
            resolve(prev);
            return prev;
          });
        });

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: allMessages
              .filter((m) => m.id !== assistantId)
              .map((m) => ({ role: m.role, content: m.content })),
            currentUrl: opts?.currentUrl ?? window.location.pathname,
          }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: "Sorry, I'm having trouble connecting right now. Please try again or email us at hello@ops-flo.com" }
                : m
            )
          );
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content ?? "";
              if (delta) {
                accumulated += delta;
                const snap = accumulated;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId ? { ...m, content: snap } : m
                  )
                );
              }
            } catch {
              // Ignore malformed SSE lines
            }
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content:
                    "Sorry, something went wrong. Please try again or contact us at hello@ops-flo.com",
                }
              : m
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const sendMessage = useCallback(
    async (text: string, currentUrl?: string) => {
      if (!text.trim() || isLoading) return;
      setInput("");
      await append({ role: "user", content: text.trim() }, { currentUrl });
    },
    [append, isLoading]
  );

  return { messages, input, setInput, isLoading, append, sendMessage };
}
