"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { submitCareerForm, type CareerFormState } from "./actions";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";

const initial: CareerFormState = { success: false };

const EXPERIENCE_LEVELS = [
  "0-2 years",
  "2-5 years",
  "5-8 years",
  "8+ years",
];

const AVAILABILITY_OPTIONS = [
  "Immediately",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2 months",
  "Flexible",
];

export function CareerForm({ preselectedRole }: { preselectedRole?: string }) {
  const [state, formAction, pending] = useActionState(submitCareerForm, initial);

  if (state.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-16 px-8"
      >
        <div className="h-20 w-20 rounded-full bg-[var(--color-green-100)] flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-[var(--color-green-600)]" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-navy-950)] mb-3">
          Application submitted
        </h3>
        <p className="text-[var(--color-text-muted)] max-w-md">
          Thank you for your interest in joining OpsFlo. Our hiring team will review your application and reach out within 5 business days if there is a match.
        </p>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="space-y-7">
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        autoComplete="off"
        tabIndex={-1}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {state.error && (
        <div className="rounded-xl bg-red-50 border border-red-100 px-5 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      {/* Position */}
      <InputField
        label="Position Applying For"
        name="position"
        required
        defaultValue={preselectedRole}
        placeholder="e.g., Senior Full-Stack Engineer"
        errors={state.fieldErrors?.position}
      />

      {/* Name & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Full Name"
          name="name"
          required
          placeholder="Your full name"
          errors={state.fieldErrors?.name}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          errors={state.fieldErrors?.email}
        />
      </div>

      {/* Phone & LinkedIn */}
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          errors={state.fieldErrors?.phone}
        />
        <InputField
          label="LinkedIn Profile"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          errors={state.fieldErrors?.linkedin}
        />
      </div>

      {/* Experience & Availability */}
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Experience Level"
          name="experience"
          options={EXPERIENCE_LEVELS}
          errors={state.fieldErrors?.experience}
        />
        <SelectField
          label="Availability"
          name="availability"
          options={AVAILABILITY_OPTIONS}
          errors={state.fieldErrors?.availability}
        />
      </div>

      {/* Resume text */}
      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--color-navy-900)]">
          Resume / Background Summary
        </label>
        <textarea
          name="resumeText"
          rows={4}
          placeholder="Paste your resume text or provide a summary of your experience, key skills, and relevant projects..."
          className="w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Cover letter */}
      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--color-navy-900)]">
          Why OpsFlo? <span className="text-[var(--color-text-muted)] font-normal">(optional)</span>
        </label>
        <textarea
          name="coverLetter"
          rows={3}
          placeholder="Tell us why you're excited about this role and what you'd bring to the team..."
          className="w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-pill-lime w-full justify-center disabled:opacity-50 group"
      >
        <Rocket className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
        {pending ? "Submitting..." : "Submit Application"}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}

/* ─── Reusable Input Field ─── */
function InputField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  errors?: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[var(--color-navy-900)]">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none transition-colors"
      />
      {errors?.map((e) => (
        <p key={e} className="mt-1 text-xs text-red-600">{e}</p>
      ))}
    </div>
  );
}

/* ─── Reusable Select Field ─── */
function SelectField({
  label,
  name,
  options,
  errors,
}: {
  label: string;
  name: string;
  options: string[];
  errors?: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[var(--color-navy-900)]">
        {label}
        <span className="text-red-500"> *</span>
      </label>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-navy-900)] focus:border-[var(--color-green-450)] focus:outline-none transition-colors"
      >
        <option value="" disabled>Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {errors?.map((e) => (
        <p key={e} className="mt-1 text-xs text-red-600">{e}</p>
      ))}
    </div>
  );
}
