"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email is required"),
  company: z.string().min(1, "Company name is required"),
  website: z.string().url("Valid URL is required").or(z.literal("")),
  partnerType: z.enum(["technology", "implementation", "channel"], {
    errorMap: () => ({ message: "Please select a partnership type" }),
  }),
  description: z.string().min(10, "Please describe your company briefly"),
  integration: z.string().optional(),
  message: z.string().optional(),
  // Honeypot field - must be empty
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type PartnerFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitPartnerForm(
  _prev: PartnerFormState,
  formData: FormData
): Promise<PartnerFormState> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, company, website, partnerType, description, integration, message } =
    parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX_EMAIL ?? "hello@ops-flo.com";

  if (!apiKey) {
    console.warn("[Partners] RESEND_API_KEY not set - logging submission instead.");
    console.log("[Partner application]", parsed.data);
    return { success: true };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "OpsFlo Website <onboarding@resend.dev>",
    to: inbox,
    replyTo: email,
    subject: `New partner application: ${company} (${partnerType})`,
    text: [
      `--- PARTNER APPLICATION ---`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Website: ${website || "N/A"}`,
      `Partnership Type: ${partnerType}`,
      `Company Description: ${description}`,
      `Integration Interest: ${integration || "N/A"}`,
      `Additional Notes: ${message || "-"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[Partners] Resend error:", error);
    return { success: false, error: "Failed to send. Please try again or email us directly." };
  }

  return { success: true };
}
