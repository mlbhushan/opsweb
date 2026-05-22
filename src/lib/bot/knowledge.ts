import { createClient } from "next-sanity";

export type KnowledgeDoc = {
  _id: string;
  title: string;
  category: string;
  content: string;
  tags: string[] | null;
  active: boolean;
  _createdAt: string;
  _updatedAt: string;
};

function getFreshClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2025-05-05",
    useCdn: false,
  });
}

export async function fetchActiveKnowledgeDocs(): Promise<KnowledgeDoc[]> {
  try {
    const client = getFreshClient();
    return await client.fetch(
      `*[_type == "knowledgeDoc" && active == true] | order(_createdAt desc) {
        _id, title, category, content, tags, active, _createdAt, _updatedAt
      }`
    );
  } catch {
    return [];
  }
}

export function buildKnowledgeContext(docs: KnowledgeDoc[]): string {
  if (docs.length === 0) return "";

  const sections = docs.map((doc) => {
    const tagLine = doc.tags?.length ? `Tags: ${doc.tags.join(", ")}\n` : "";
    return `--- ${doc.category.toUpperCase()}: ${doc.title} ---\n${tagLine}${doc.content}`;
  });

  return "\n\nKNOWLEDGE BASE (admin-uploaded documents):\n" + sections.join("\n\n");
}
