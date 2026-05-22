import Link from "next/link";
import { createKnowledgeDoc } from "../actions";
import { DocForm } from "../doc-form";

export default function NewDocPage() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link
          href="/admin/bot"
          style={{
            fontSize: 13,
            color: "#6b7280",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            marginBottom: 16,
          }}
        >
          ← Back to Documents
        </Link>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "var(--color-navy-900, #084182)",
            margin: 0,
            marginBottom: 6,
          }}
        >
          Add Knowledge Document
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
          Add text content or extract from a PDF. Active documents are used by FloAssist to answer questions.
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 4px rgba(8,65,130,0.06)",
          border: "1px solid rgba(8,65,130,0.06)",
          padding: 40,
        }}
      >
        <DocForm action={createKnowledgeDoc} submitLabel="Save Document" />
      </div>
    </div>
  );
}
