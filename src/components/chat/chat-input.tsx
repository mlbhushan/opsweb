"use client";

import { useRef, useEffect } from "react";

type Props = {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
};

export function ChatInput({ input, onChange, onSubmit, isLoading }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
  }, [input]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        onSubmit(e as unknown as React.FormEvent);
      }
    }
  }

  return (
    <div
      style={{
        padding: "12px 14px",
        borderTop: "1px solid rgba(8,65,130,0.06)",
        background: "#fff",
        display: "flex",
        gap: 8,
        alignItems: "flex-end",
        borderRadius: "0 0 16px 16px",
      }}
    >
      <textarea
        ref={textareaRef}
        value={input}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask FloAssist anything..."
        rows={1}
        disabled={isLoading}
        className="chat-textarea"
        style={{
          flex: 1,
          resize: "none",
          border: "1px solid rgba(8,65,130,0.15)",
          borderRadius: 8,
          padding: "10px 14px",
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          lineHeight: 1.5,
          color: "#032044",
          background: "#fff",
          outline: "none",
          minHeight: 40,
          maxHeight: 96,
          overflow: "auto",
          transition: "border-color 200ms ease, box-shadow 200ms ease",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--color-primary, #6bbf54)";
          e.target.style.boxShadow = "0 0 0 2px rgba(107,191,84,0.15)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(8,65,130,0.15)";
          e.target.style.boxShadow = "none";
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        .chat-textarea::-webkit-scrollbar { display: none; }
        .chat-textarea { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <button
        type="button"
        onClick={onSubmit}
        disabled={!input.trim() || isLoading}
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background:
            !input.trim() || isLoading
              ? "rgba(8,65,130,0.06)"
              : "#032044",
          color: !input.trim() || isLoading ? "rgba(8,65,130,0.3)" : "#fff",
          border: "none",
          cursor: !input.trim() || isLoading ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 200ms ease",
        }}
        aria-label="Send message"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
}
