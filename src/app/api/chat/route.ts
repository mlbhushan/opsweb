import { type NextRequest } from "next/server";
import { fetchActiveKnowledgeDocs } from "@/lib/bot/knowledge";
import { buildSystemPrompt } from "@/lib/bot/system-prompt";

export const runtime = "nodejs";
export const maxDuration = 30;

type ChatApiMessage = { role: "system" | "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  try {
    const { messages, currentUrl } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response("Invalid request body", { status: 400 });
    }

    if (!process.env.GROQ_API_KEY) {
      return new Response("Chat service not configured", { status: 503 });
    }

    const knowledgeDocs = await fetchActiveKnowledgeDocs();
    const systemPrompt = buildSystemPrompt(knowledgeDocs);
    const contextNote = currentUrl
      ? `\n\nCURRENT PAGE: The user is currently viewing: ${currentUrl}`
      : "";

    const systemMessage: ChatApiMessage = {
      role: "system",
      content: systemPrompt + contextNote,
    };

    const chatMessages: ChatApiMessage[] = messages
      .filter((m: { role?: string }) => m.role === "user" || m.role === "assistant")
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: typeof m.content === "string" ? m.content : "",
      }));

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [systemMessage, ...chatMessages],
        stream: true,
        max_tokens: 500,
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("[/api/chat] Groq error:", response.status, text);
      return new Response("AI service error", { status: 502 });
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("[/api/chat]", err);
    return new Response("Internal server error", { status: 500 });
  }
}
