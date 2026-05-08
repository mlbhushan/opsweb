import { defineType, defineField, defineArrayMember } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "company", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "Oilfield Services", value: "Oilfield Services" },
          { title: "Equipment Rental", value: "Equipment Rental" },
          { title: "Pipeline & Infrastructure", value: "Pipeline & Infrastructure" },
          { title: "Fluid Hauling", value: "Fluid Hauling" },
          { title: "Well Services", value: "Well Services" },
        ],
      },
    }),
    defineField({
      name: "companySize",
      title: "Company Size",
      type: "string",
      description: "e.g. '50-200 employees'",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    defineField({
      name: "metrics",
      title: "Key Metrics",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        }),
      ],
      validation: (rule) => rule.min(1).max(4),
    }),
    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      title: "The Solution",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "results",
      title: "The Results",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Customer Quote",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Quote Text", type: "text", rows: 3 }),
        defineField({ name: "author", title: "Author Name", type: "string" }),
        defineField({ name: "role", title: "Author Role", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "company", subtitle: "headline", media: "mainImage" },
  },
});
