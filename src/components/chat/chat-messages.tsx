"use client";

import { useEffect, useRef, Fragment } from "react";
import Link from "next/link";
import type { ChatMessage } from "./use-chat-stream";

// ─── Inline parser: bold + links ───────────────────────────────────────────
function parseInline(text: string, keyPrefix: string): React.ReactNode[] {
  // Matches **bold** and [link text](href)
  const tokenRegex = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = tokenRegex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));

    if (m[0].startsWith("**")) {
      nodes.push(<strong key={`${keyPrefix}-b-${m.index}`}>{m[2]}</strong>);
    } else {
      const linkText = m[3];
      const href = m[4];
      const isInternal = href.startsWith("/");
      nodes.push(
        isInternal ? (
          <Link
            key={`${keyPrefix}-l-${m.index}`}
            href={href}
            style={{
              color: "var(--color-primary, #6bbf54)",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1.5px solid rgba(107,191,84,0.3)",
            }}
          >
            {linkText}
          </Link>
        ) : (
          <a
            key={`${keyPrefix}-l-${m.index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-primary, #6bbf54)",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1.5px solid rgba(107,191,84,0.3)",
            }}
          >
            {linkText}
          </a>
        )
      );
    }
    last = m.index + m[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

// ─── Block renderer ─────────────────────────────────────────────────────────
function renderMarkdown(content: string): React.ReactNode[] {
  const blocks: React.ReactNode[] = [];
  // Split on blank lines to get paragraphs / list groups
  const rawBlocks = content.split(/\n{2,}/);

  rawBlocks.forEach((block, bi) => {
    const lines = block.split("\n").filter((l) => l.trim() !== "");
    if (lines.length === 0) return;

    const isList = lines.every((l) => /^[\*\-] /.test(l.trim()));

    if (isList) {
      blocks.push(
        <ul
          key={`ul-${bi}`}
          style={{ margin: "4px 0", paddingLeft: 18, listStyleType: "disc" }}
        >
          {lines.map((line, li) => {
            const text = line.replace(/^[\*\-] /, "");
            return (
              <li key={li} style={{ marginBottom: 2 }}>
                {parseInline(text, `${bi}-${li}`)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      // Paragraph: join lines, insert <br> for single newlines within the block
      const para: React.ReactNode[] = [];
      lines.forEach((line, li) => {
        para.push(...parseInline(line, `${bi}-${li}`));
        if (li < lines.length - 1) para.push(<br key={`br-${bi}-${li}`} />);
      });
      blocks.push(
        <p key={`p-${bi}`} style={{ margin: bi === 0 ? "0" : "6px 0 0" }}>
          {para}
        </p>
      );
    }
  });

  return blocks;
}

// ─── Sub-components ─────────────────────────────────────────────────────────
function BotAvatar() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "#032044",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: 12,
        fontWeight: 700,
        color: "var(--color-primary, #6bbf54)",
        fontFamily: "'Cabinet Grotesk', sans-serif",
      }}
    >
      F
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
      <BotAvatar />
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(8,65,130,0.06)",
          borderRadius: "4px 12px 12px 12px",
          padding: "12px 16px",
          boxShadow: "0 2px 4px rgba(8,65,130,0.06)",
          display: "flex",
          gap: 4,
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="chat-dot"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#a8aeb6",
              display: "inline-block",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
type Props = {
  messages: ChatMessage[];
  isLoading: boolean;
};

export function ChatMessages({ messages, isLoading }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px 16px 8px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {messages.map((msg) => {
        const isBot = msg.role === "assistant";
        return (
          <div
            key={msg.id}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              flexDirection: isBot ? "row" : "row-reverse",
            }}
          >
            {isBot && <BotAvatar />}
            <div
              style={{
                maxWidth: "80%",
                background: isBot ? "#fff" : "var(--color-green-100, #e8f5e2)",
                border: isBot ? "1px solid rgba(8,65,130,0.06)" : "none",
                borderRadius: isBot ? "4px 12px 12px 12px" : "12px 4px 12px 12px",
                padding: "10px 14px",
                boxShadow: isBot ? "0 2px 4px rgba(8,65,130,0.06)" : "none",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#1a1d1f",
                fontFamily: "'Cabinet Grotesk', var(--font-heading), sans-serif",
                wordBreak: "break-word",
              }}
            >
              {typeof msg.content === "string"
                ? renderMarkdown(msg.content)
                : msg.content}
            </div>
          </div>
        );
      })}

      {isLoading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}
