"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });
      if (res.ok) {
        router.push("/admin/bot");
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-bg-secondary, #f7f7f5)",
        fontFamily: "'Cabinet Grotesk', var(--font-heading), sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          borderRadius: "var(--radius-lg, 16px)",
          boxShadow: "var(--shadow-lg, 0 8px 24px rgba(8,65,130,0.1))",
          padding: 40,
        }}
      >
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "var(--color-primary, #6bbf54)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--color-navy-900, #084182)",
              margin: 0,
              marginBottom: 6,
            }}
          >
            FloAssist Admin
          </h1>
          <p style={{ color: "var(--color-text-muted, #6b7280)", fontSize: 14, margin: 0 }}>
            Enter your admin password to manage the knowledge base.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--color-navy-900, #084182)",
              marginBottom: 6,
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Enter admin password"
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1.5px solid var(--color-border, #e2e5e9)",
              borderRadius: "var(--radius-sm, 8px)",
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: 15,
              marginBottom: 8,
              boxSizing: "border-box",
              outline: "none",
              color: "var(--color-navy-900, #084182)",
            }}
          />
          {error && (
            <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 8, marginTop: 0 }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !secret}
            style={{
              width: "100%",
              padding: "11px 20px",
              background: loading || !secret ? "#c5cad0" : "var(--color-primary, #6bbf54)",
              color: "white",
              border: "none",
              borderRadius: "var(--radius-sm, 8px)",
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              cursor: loading || !secret ? "not-allowed" : "pointer",
              marginTop: 8,
              transition: "background 200ms ease",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
