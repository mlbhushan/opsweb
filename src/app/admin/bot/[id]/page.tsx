import { createClient } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import { updateKnowledgeDoc } from "../actions";
import { DocForm } from "../doc-form";

type KnowledgeDoc = {
  _id: string;
  title: string;
  category: string;
  content: string;
  tags: string[] | null;
  active: boolean;
};

async function getDoc(id: string): Promise<KnowledgeDoc | null> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2025-05-05",
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
  });
  return client.fetch(
    `*[_type == "knowledgeDoc" && _id == $id][0] { _id, title, category, content, tags, active }`,
    { id }
  );
}

export default async function EditDocPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doc = await getDoc(id);

  if (!doc) notFound();

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
          Edit Document
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
          Update the content or settings for this knowledge document.
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
        <DocForm
          action={updateKnowledgeDoc}
          defaultValues={{
            _id: doc._id,
            title: doc.title,
            category: doc.category,
            content: doc.content,
            tags: doc.tags ?? [],
            active: doc.active,
          }}
          submitLabel="Update Document"
        />
      </div>
    </div>
  );
}
