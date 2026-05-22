"use client";

import { useState, useTransition } from "react";

async function submitDemoRequest(data: {
  name: string;
  email: string;
  company: string;
}) {
  const res = await fetch("/api/chat/demo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Submission failed");
}

type Props = {
  onSuccess: () => void;
};

export function DemoMiniForm({ onSuccess }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !company) return;
    setError("");
    startTransition(async () => {
      try {
        await submitDemoRequest({ name, email, company });
        onSuccess();
      } catch {
        setError("Something went wrong. Please try again or email us at hello@ops-flo.com");
      }
    });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px 10px",
    border: "1.5px solid rgba(8,65,130,0.15)",
    borderRadius: 8,
    fontFamily: "'Cabinet Grotesk', sans-serif",
    fontSize: 13,
    color: "#084182",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        background: "#f0f7fd",
        border: "1.5px solid rgba(8,65,130,0.12)",
        borderRadius: 12,
        padding: 16,
        marginTop: 4,
      }}
    >
      <p
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#084182",
          margin: "0 0 12px",
          fontFamily: "'Cabinet Grotesk', sans-serif",
        }}
      >
        Book a Demo: share a few details and we will be in touch.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          required
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          required
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={inputStyle}
        />
        {error && (
          <p style={{ fontSize: 12, color: "#ef4444", margin: 0 }}>{error}</p>
        )}
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          <button
            type="submit"
            disabled={pending}
            style={{
              flex: 1,
              padding: "9px 16px",
              background: pending ? "#a8aeb6" : "var(--color-primary, #6bbf54)",
              color: "white",
              border: "none",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: pending ? "not-allowed" : "pointer",
              fontFamily: "'Cabinet Grotesk', sans-serif",
            }}
          >
            {pending ? "Sending..." : "Request Demo"}
          </button>
        </div>
      </form>
    </div>
  );
}
