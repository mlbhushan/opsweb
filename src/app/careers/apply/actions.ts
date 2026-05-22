"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(6, "Phone number is required"),
  linkedin: z.string().url("Please provide a valid LinkedIn URL").or(z.literal("")).optional(),
  position: z.string().min(1, "Position of interest is required"),
  experience: z.string().min(1, "Please select your experience level"),
  availability: z.string().min(1, "Please select your availability"),
  resumeText: z.string().optional(),
  coverLetter: z.string().optional(),
  // Honeypot field - must be empty
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type CareerFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitCareerForm(
  _prev: CareerFormState,
  formData: FormData
): Promise<CareerFormState> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, phone, linkedin, position, experience, availability, resumeText, coverLetter } =
    parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX_EMAIL ?? "hello@ops-flo.com";

  if (!apiKey) {
    console.warn("[Careers] RESEND_API_KEY not set - logging submission instead.");
    console.log("[Job application]", parsed.data);
    return { success: true };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "OpsFlo Website <onboarding@resend.dev>",
    to: inbox,
    replyTo: email,
    subject: `Job application: ${name} for ${position}`,
    text: [
      `--- JOB APPLICATION ---`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `LinkedIn: ${linkedin || "N/A"}`,
      `Position: ${position}`,
      `Experience: ${experience}`,
      `Availability: ${availability}`,
      ``,
      `--- Resume / Background ---`,
      resumeText || "(not provided)",
      ``,
      `--- Cover Letter ---`,
      coverLetter || "(not provided)",
    ].join("\n"),
  });

  if (error) {
    console.error("[Careers] Resend error:", error);
    return { success: false, error: "Failed to send. Please try again or email us directly." };
  }

  return { success: true };
}
