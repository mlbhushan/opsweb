import { createClient } from "next-sanity";
import Link from "next/link";
import { DeleteButton } from "./delete-button";

type DocRow = {
  _id: string;
  title: string;
  category: string;
  active: boolean;
  _createdAt: string;
};

async function getAllDocs(): Promise<DocRow[]> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2025-05-05",
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
  });
  return client.fetch(
    `*[_type == "knowledgeDoc"] | order(_createdAt desc) { _id, title, category, active, _createdAt }`
  );
}

const categoryColors: Record<string, { bg: string; color: string }> = {
  General: { bg: "#e2e5e9", color: "#515860" },
  Product: { bg: "#e0f0fb", color: "#084182" },
  Features: { bg: "#bde0f7", color: "#0c5298" },
  Pricing: { bg: "#d4eeca", color: "#3d8a2a" },
  Technical: { bg: "#e8f5e2", color: "#4fa33a" },
  FAQ: { bg: "#f0f7fd", color: "#1266b0" },
  "Case Study": { bg: "#f3faf0", color: "#3d8a2a" },
  Industry: { bg: "#e0f0fb", color: "#1a7ac8" },
};

export default async function AdminBotPage() {
  const docs = await getAllDocs();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 32,
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "var(--color-navy-900, #084182)",
              margin: 0,
              marginBottom: 6,
            }}
          >
            Knowledge Documents
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
            {docs.length} document{docs.length !== 1 ? "s" : ""} in the knowledge base.
            Active documents are included in FloAssist's responses.
          </p>
        </div>
        <Link
          href="/admin/bot/new"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 20px",
            background: "var(--color-primary, #6bbf54)",
            color: "white",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          + Add Document
        </Link>
      </div>

      {docs.length === 0 ? (
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1.5px dashed #e2e5e9",
            padding: "60px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#6b7280", fontSize: 15, margin: 0 }}>
            No documents yet. Add your first knowledge document to get started.
          </p>
          <Link
            href="/admin/bot/new"
            style={{
              display: "inline-block",
              marginTop: 16,
              padding: "10px 20px",
              background: "var(--color-primary, #6bbf54)",
              color: "white",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Add First Document
          </Link>
        </div>
      ) : (
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 4px rgba(8,65,130,0.06)",
            overflow: "hidden",
            border: "1px solid rgba(8,65,130,0.06)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e2e5e9" }}>
                {["Title", "Category", "Status", "Created", "Actions"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 20px",
                      textAlign: "left",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      background: "#f7f7f5",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {docs.map((doc, i) => {
                const cat = categoryColors[doc.category] ?? categoryColors.General;
                const date = new Date(doc._createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
                return (
                  <tr
                    key={doc._id}
                    style={{
                      borderBottom: i < docs.length - 1 ? "1px solid #f0f1f3" : "none",
                    }}
                  >
                    <td style={{ padding: "14px 20px" }}>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#084182",
                          display: "block",
                          maxWidth: 340,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {doc.title}
                      </span>
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 10px",
                          borderRadius: 9999,
                          fontSize: 11,
                          fontWeight: 700,
                          background: cat.bg,
                          color: cat.color,
                        }}
                      >
                        {doc.category}
                      </span>
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 12,
                          fontWeight: 600,
                          color: doc.active ? "#3d8a2a" : "#6b7280",
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: doc.active ? "#6bbf54" : "#a8aeb6",
                            display: "inline-block",
                          }}
                        />
                        {doc.active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 20px", color: "#6b7280", fontSize: 13 }}>
                      {date}
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      <div style={{ display: "flex", gap: 8 }}>
                        <Link
                          href={`/admin/bot/${doc._id}`}
                          style={{
                            padding: "5px 12px",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#084182",
                            border: "1.5px solid #bde0f7",
                            borderRadius: 6,
                            textDecoration: "none",
                            background: "#f0f7fd",
                          }}
                        >
                          Edit
                        </Link>
                        <DeleteButton id={doc._id} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
