"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "next-sanity";

async function validateSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!process.env.ADMIN_SECRET || session?.value !== process.env.ADMIN_SECRET) {
    throw new Error("Unauthorized");
  }
}

function getWriteClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2025-05-05",
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
  });
}

export async function createKnowledgeDoc(formData: FormData) {
  await validateSession();
  const title = formData.get("title") as string;
  const category = (formData.get("category") as string) ?? "General";
  const content = formData.get("content") as string;
  const tagsRaw = (formData.get("tags") as string) ?? "";
  const active = formData.get("active") === "on";
  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await getWriteClient().create({
    _type: "knowledgeDoc",
    title,
    category,
    content,
    tags,
    active,
  });
  redirect("/admin/bot");
}

export async function updateKnowledgeDoc(formData: FormData) {
  await validateSession();
  const _id = formData.get("_id") as string;
  const title = formData.get("title") as string;
  const category = (formData.get("category") as string) ?? "General";
  const content = formData.get("content") as string;
  const tagsRaw = (formData.get("tags") as string) ?? "";
  const active = formData.get("active") === "on";
  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await getWriteClient().patch(_id).set({ title, category, content, tags, active }).commit();
  redirect("/admin/bot");
}

export async function deleteKnowledgeDoc(formData: FormData) {
  await validateSession();
  const _id = formData.get("_id") as string;
  await getWriteClient().delete(_id);
  redirect("/admin/bot");
}

export async function extractPdfText(formData: FormData): Promise<string> {
  await validateSession();
  const file = formData.get("pdfFile") as File | null;
  if (!file || file.size === 0) throw new Error("No file provided");

  const buffer = Buffer.from(await file.arrayBuffer());
  const { PDFParse } = await import("pdf-parse");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parser: any = new PDFParse({ data: buffer });
  await parser.load();
  const text: string = await parser.getText();
  return text.trim();
}
