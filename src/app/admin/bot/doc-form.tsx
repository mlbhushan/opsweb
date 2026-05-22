"use client";

import { useState, useRef, useTransition } from "react";
import { extractPdfText } from "./actions";

const CATEGORIES = [
  "General",
  "Product",
  "Features",
  "Pricing",
  "Technical",
  "FAQ",
  "Case Study",
  "Industry",
];

type DocFormProps = {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: {
    _id?: string;
    title?: string;
    category?: string;
    content?: string;
    tags?: string[];
    active?: boolean;
  };
  submitLabel: string;
};

export function DocForm({ action, defaultValues = {}, submitLabel }: DocFormProps) {
  const [content, setContent] = useState(defaultValues.content ?? "");
  const [extracting, setExtracting] = useState(false);
  const [extractError, setExtractError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [, startTransition] = useTransition();

  async function handleExtract() {
    const file = fileRef.current?.files?.[0];
    if (!file) return;
    setExtracting(true);
    setExtractError("");
    try {
      const fd = new FormData();
      fd.set("pdfFile", file);
      const text = await extractPdfText(fd);
      setContent(text);
    } catch {
      setExtractError("Failed to extract text from PDF. Try pasting the content manually.");
    } finally {
      setExtracting(false);
    }
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--color-navy-900, #084182)",
    marginBottom: 6,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid var(--color-border, #e2e5e9)",
    borderRadius: "var(--radius-sm, 8px)",
    fontFamily: "'Cabinet Grotesk', sans-serif",
    fontSize: 14,
    boxSizing: "border-box",
    outline: "none",
    color: "var(--color-navy-900, #084182)",
    background: "#fff",
  };

  return (
    <form
      action={action}
      style={{ display: "flex", flexDirection: "column", gap: 24 }}
    >
      {defaultValues._id && (
        <input type="hidden" name="_id" value={defaultValues._id} />
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <label style={labelStyle}>Title *</label>
          <input
            name="title"
            required
            defaultValue={defaultValues.title ?? ""}
            placeholder="e.g. Offline Capability FAQ"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Category *</label>
          <select
            name="category"
            defaultValue={defaultValues.category ?? "General"}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Tags (comma-separated)</label>
        <input
          name="tags"
          defaultValue={defaultValues.tags?.join(", ") ?? ""}
          placeholder="e.g. offline, connectivity, field"
          style={inputStyle}
        />
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <label style={{ ...labelStyle, marginBottom: 0 }}>Content *</label>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 12, color: "#6b7280" }}>Or upload a PDF:</span>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf"
              style={{ fontSize: 12, color: "#6b7280" }}
              onChange={() => setExtractError("")}
            />
            <button
              type="button"
              onClick={handleExtract}
              disabled={extracting}
              style={{
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 600,
                background: extracting ? "#e2e5e9" : "#f0f7fd",
                color: extracting ? "#a8aeb6" : "#084182",
                border: "1.5px solid #bde0f7",
                borderRadius: 6,
                cursor: extracting ? "not-allowed" : "pointer",
                fontFamily: "'Cabinet Grotesk', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {extracting ? "Extracting..." : "Extract Text"}
            </button>
          </div>
        </div>
        {extractError && (
          <p style={{ fontSize: 12, color: "#ef4444", margin: "0 0 6px" }}>{extractError}</p>
        )}
        <textarea
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paste document content here, or use the PDF extractor above..."
          rows={16}
          style={{
            ...inputStyle,
            resize: "vertical",
            lineHeight: 1.6,
          }}
        />
        <p style={{ fontSize: 12, color: "#a8aeb6", margin: "4px 0 0" }}>
          {content.length} characters
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input
          type="checkbox"
          name="active"
          id="active"
          defaultChecked={defaultValues.active !== false}
          style={{ width: 16, height: 16, accentColor: "var(--color-primary, #6bbf54)", cursor: "pointer" }}
        />
        <label
          htmlFor="active"
          style={{ fontSize: 14, fontWeight: 500, color: "#084182", cursor: "pointer" }}
        >
          Active (included in bot knowledge base)
        </label>
      </div>

      <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
        <button
          type="submit"
          style={{
            padding: "11px 28px",
            background: "var(--color-primary, #6bbf54)",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'Cabinet Grotesk', sans-serif",
          }}
        >
          {submitLabel}
        </button>
        <a
          href="/admin/bot"
          style={{
            padding: "11px 20px",
            color: "#6b7280",
            border: "1.5px solid #e2e5e9",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
