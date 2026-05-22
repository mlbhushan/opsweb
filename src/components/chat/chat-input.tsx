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
        style={{
          flex: 1,
          resize: "none",
          border: "1.5px solid rgba(8,65,130,0.12)",
          borderRadius: 10,
          padding: "9px 12px",
          fontFamily: "'Cabinet Grotesk', var(--font-heading), sans-serif",
          fontSize: 14,
          lineHeight: 1.5,
          color: "#1a1d1f",
          background: "#f7f7f5",
          outline: "none",
          minHeight: 40,
          maxHeight: 96,
          overflow: "auto",
          transition: "border-color 200ms ease",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--color-primary, #6bbf54)";
          e.target.style.background = "#fff";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(8,65,130,0.12)";
          e.target.style.background = "#f7f7f5";
        }}
      />
      <button
        type="button"
        onClick={onSubmit}
        disabled={!input.trim() || isLoading}
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background:
            !input.trim() || isLoading
              ? "#e2e5e9"
              : "var(--color-primary, #6bbf54)",
          border: "none",
          cursor: !input.trim() || isLoading ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 200ms ease",
        }}
        aria-label="Send message"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
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
