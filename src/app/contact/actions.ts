"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  crews: z.string().optional(),
  opsType: z.string().min(1, "Operations type is required"),
  challenge: z.string().min(1, "Primary challenge is required"),
  message: z.string().optional(),
  // Honeypot field - must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, company, role, crews, opsType, challenge, message } =
    parsed.data;

  // Send email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX_EMAIL ?? "hello@ops-flo.com";

  if (!apiKey) {
    console.warn("[Contact] RESEND_API_KEY not set - logging submission instead.");
    console.log("[Contact submission]", parsed.data);
    return { success: true };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    // In dev mode Resend only allows sending from onboarding@resend.dev.
    // For production, verify your domain in Resend dashboard and update this.
    from: "OpsFlo Website <onboarding@resend.dev>",
    to: inbox,
    replyTo: email,
    subject: `New demo request from ${name} at ${company}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Field crews: ${crews || "N/A"}`,
      `Operations type: ${opsType}`,
      `Primary challenge: ${challenge}`,
      `Message: ${message || "-"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[Contact] Resend error:", error);
    return { success: false, error: "Failed to send. Please try again or email us directly." };
  }

  return { success: true };
}
