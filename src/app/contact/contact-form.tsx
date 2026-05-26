"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";
import { CONTACT } from "@/lib/content/contact";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const initial: ContactFormState = { success: false };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initial);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 bg-white/50 backdrop-blur-sm rounded-[1.5rem] border border-[var(--color-green-100)] shadow-inner">
        <div className="w-16 h-16 rounded-full bg-[var(--color-green-50)] flex items-center justify-center mb-6 shadow-sm border border-[var(--color-green-100)]">
          <CheckCircle2 className="h-8 w-8 text-[var(--color-green-500)]" />
        </div>
        <h3 className="text-2xl font-semibold text-[var(--color-navy-900)] mb-3">
          Request Received
        </h3>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-sm">
          Our team is reviewing your details and will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot - visually hidden */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {state.error && (
        <div className="rounded-xl bg-red-50/80 backdrop-blur-sm border border-red-100 px-5 py-3.5 text-sm font-medium text-red-800 shadow-sm flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 animate-pulse"></div>
          {state.error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          required
          errors={state.fieldErrors?.name}
        />
        <Field
          label="Work Email"
          name="email"
          type="email"
          required
          errors={state.fieldErrors?.email}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Company"
          name="company"
          required
          errors={state.fieldErrors?.company}
        />
        <SelectField
          label="Your Role"
          name="role"
          options={CONTACT.fields.roles}
          errors={state.fieldErrors?.role}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Number of Field Crews"
          name="crews"
          type="number"
          placeholder="e.g. 25"
        />
        <SelectField
          label="Operations Type"
          name="opsType"
          options={CONTACT.fields.serviceTypes}
          errors={state.fieldErrors?.opsType}
        />
      </div>

      <SelectField
        label="Biggest Operational Challenge"
        name="challenge"
        options={CONTACT.fields.challenges}
        errors={state.fieldErrors?.challenge}
      />

      <div>
        <label className="mb-2 block text-sm font-semibold text-[var(--color-navy-900)] tracking-wide">
          Anything else? <span className="text-[var(--color-text-muted)] font-normal ml-1">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded-xl border border-[var(--color-gray-200)] bg-white/50 backdrop-blur-sm px-4 py-3.5 text-[15px] text-[var(--color-navy-900)] placeholder:text-[var(--color-gray-400)] shadow-sm transition-all duration-200 hover:border-[var(--color-gray-300)] hover:bg-white focus:border-[var(--color-green-450)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-green-450)]/20 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group relative w-full flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-green-600)] to-[var(--color-green-450)] px-6 py-4 text-[15px] font-bold text-white shadow-lg shadow-[var(--color-green-500)]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-green-500)]/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay" />
        <span className="relative z-10">{pending ? "Sending request…" : "Get Your Revenue Diagnostic"}</span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

/* ─── Field helpers ─── */
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  errors?: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--color-navy-900)] tracking-wide">
        {label}
        {required && <span className="text-[var(--color-green-600)] ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--color-gray-200)] bg-white/50 backdrop-blur-sm px-4 py-3.5 text-[15px] text-[var(--color-navy-900)] placeholder:text-[var(--color-gray-400)] shadow-sm transition-all duration-200 hover:border-[var(--color-gray-300)] hover:bg-white focus:border-[var(--color-green-450)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-green-450)]/20"
      />
      {errors?.map((e) => (
        <p key={e} className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-red-600"></span>{e}
        </p>
      ))}
    </div>
  );
}

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
      <label className="mb-2 block text-sm font-semibold text-[var(--color-navy-900)] tracking-wide">
        {label}
        <span className="text-[var(--color-green-600)] ml-1">*</span>
      </label>
      <div className="relative">
        <select
          name={name}
          required
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-[var(--color-gray-200)] bg-white/50 backdrop-blur-sm px-4 py-3.5 pr-10 text-[15px] text-[var(--color-navy-900)] shadow-sm transition-all duration-200 hover:border-[var(--color-gray-300)] hover:bg-white focus:border-[var(--color-green-450)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-green-450)]/20 cursor-pointer"
        >
          <option value="" disabled className="text-[var(--color-gray-400)]">
            Select an option…
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-[var(--color-navy-900)]">
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--color-gray-500)]">
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {errors?.map((e) => (
        <p key={e} className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-red-600"></span>{e}
        </p>
      ))}
    </div>
  );
}
