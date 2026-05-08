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
      <div className="surface-card flex flex-col items-center text-center">
        <CheckCircle2 className="h-12 w-12 text-[var(--color-green-450)]" />
        <h3 className="mt-4 text-lg font-semibold text-[var(--color-navy-900)]">
          We&apos;ve received your request
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Our team will reach out within 24 hours to schedule your diagnostic.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot - visually hidden */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {state.error && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
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

      <div className="grid gap-4 sm:grid-cols-2">
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

      <div className="grid gap-4 sm:grid-cols-2">
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
        <label className="mb-1.5 block text-sm font-medium text-[var(--color-navy-900)]">
          Anything else? (optional)
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded-lg border border-[var(--color-gray-200)] bg-white px-4 py-2.5 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-450)]"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-pill-lime w-full justify-center disabled:opacity-50"
      >
        {pending ? "Sending…" : "Get Your Revenue Diagnostic"}
        <ArrowRight className="h-4 w-4" />
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
      <label className="mb-1.5 block text-sm font-medium text-[var(--color-navy-900)]">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--color-gray-200)] bg-white px-4 py-2.5 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-450)]"
      />
      {errors?.map((e) => (
        <p key={e} className="mt-1 text-xs text-red-600">
          {e}
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
      <label className="mb-1.5 block text-sm font-medium text-[var(--color-navy-900)]">
        {label}
        <span className="text-red-500"> *</span>
      </label>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full rounded-lg border border-[var(--color-gray-200)] bg-white px-4 py-2.5 text-sm text-[var(--color-navy-900)] focus:border-[var(--color-green-450)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-450)]"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors?.map((e) => (
        <p key={e} className="mt-1 text-xs text-red-600">
          {e}
        </p>
      ))}
    </div>
  );
}
