"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { submitPartnerForm, type PartnerFormState } from "./actions";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Wrench,
  Network,
  Sparkles,
} from "lucide-react";

const initial: PartnerFormState = { success: false };

const PARTNER_OPTIONS = [
  {
    value: "technology",
    label: "Technology Partner",
    description: "Integrate your product with OpsFlo's APIs",
    icon: Code,
  },
  {
    value: "implementation",
    label: "Implementation Partner",
    description: "Deploy and configure OpsFlo for clients",
    icon: Wrench,
  },
  {
    value: "channel",
    label: "Channel Partner",
    description: "Resell and distribute OpsFlo solutions",
    icon: Network,
  },
];

export function PartnerForm() {
  const [state, formAction, pending] = useActionState(submitPartnerForm, initial);

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
          Application received
        </h3>
        <p className="text-[var(--color-text-muted)] max-w-md">
          Our partnerships team will review your application and get back to you within 3 business days. We are excited to explore this opportunity together.
        </p>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
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

      {/* Partnership Type Selection */}
      <fieldset>
        <legend className="text-sm font-bold text-[var(--color-navy-900)] uppercase tracking-wider mb-4">
          Partnership Type <span className="text-red-500">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {PARTNER_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            return (
              <label
                key={opt.value}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl border-2 border-[var(--color-gray-200)] bg-white cursor-pointer transition-all duration-200 hover:border-[var(--color-green-450)] hover:shadow-sm has-[:checked]:border-[var(--color-green-500)] has-[:checked]:bg-[var(--color-green-50)] has-[:checked]:shadow-md"
              >
                <input
                  type="radio"
                  name="partnerType"
                  value={opt.value}
                  required
                  className="sr-only"
                />
                <div className="h-10 w-10 rounded-xl bg-[var(--color-gray-100)] group-has-[:checked]:bg-[var(--color-green-500)] flex items-center justify-center mb-3 transition-colors">
                  <Icon className="h-5 w-5 text-[var(--color-navy-900)] group-has-[:checked]:text-white transition-colors" />
                </div>
                <span className="text-sm font-bold text-[var(--color-navy-950)]">
                  {opt.label}
                </span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 leading-tight">
                  {opt.description}
                </span>
              </label>
            );
          })}
        </div>
        {state.fieldErrors?.partnerType?.map((e) => (
          <p key={e} className="mt-2 text-xs text-red-600">{e}</p>
        ))}
      </fieldset>

      {/* Contact Info */}
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Full Name"
          name="name"
          required
          placeholder="Your name"
          errors={state.fieldErrors?.name}
        />
        <InputField
          label="Work Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          errors={state.fieldErrors?.email}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Company Name"
          name="company"
          required
          placeholder="Your company"
          errors={state.fieldErrors?.company}
        />
        <InputField
          label="Company Website"
          name="website"
          type="url"
          placeholder="https://yourcompany.com"
          errors={state.fieldErrors?.website}
        />
      </div>

      {/* About your company */}
      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--color-navy-900)]">
          About Your Company <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          required
          rows={3}
          placeholder="Brief overview of your company and how it relates to the oilfield services sector..."
          className="w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none transition-colors resize-none"
        />
        {state.fieldErrors?.description?.map((e) => (
          <p key={e} className="mt-1 text-xs text-red-600">{e}</p>
        ))}
      </div>

      {/* Integration interest */}
      <InputField
        label="Integration or Product of Interest"
        name="integration"
        placeholder="e.g., Accounting sync, IoT telemetry, scheduling APIs"
        errors={state.fieldErrors?.integration}
      />

      {/* Additional notes */}
      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--color-navy-900)]">
          Additional Notes <span className="text-[var(--color-text-muted)] font-normal">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Anything else you'd like us to know..."
          className="w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-pill-lime w-full justify-center disabled:opacity-50 group"
      >
        <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
        {pending ? "Submitting..." : "Submit Partner Application"}
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
      <label className="mb-2 block text-sm font-bold text-[var(--color-navy-900)]">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-green-450)] focus:outline-none transition-colors"
      />
      {errors?.map((e) => (
        <p key={e} className="mt-1 text-xs text-red-600">{e}</p>
      ))}
    </div>
  );
}
