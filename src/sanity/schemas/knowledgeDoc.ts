import { defineType, defineField, defineArrayMember } from "sanity";
import { BookIcon } from "@sanity/icons";

export const knowledgeDoc = defineType({
  name: "knowledgeDoc",
  title: "Bot Knowledge Doc",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "General" },
          { title: "Product", value: "Product" },
          { title: "Features", value: "Features" },
          { title: "Pricing", value: "Pricing" },
          { title: "Technical", value: "Technical" },
          { title: "FAQ", value: "FAQ" },
          { title: "Case Study", value: "Case Study" },
          { title: "Industry", value: "Industry" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      rows: 15,
      description: "Paste text content here. This is what the bot will use to answer questions.",
      validation: (rule) => rule.required().min(10),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Optional keywords to help categorize this document.",
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
      description: "When enabled, this document is included in the bot's knowledge base.",
    }),
    defineField({
      name: "sourceFile",
      title: "Source PDF (optional)",
      type: "file",
      options: { accept: ".pdf" },
      description: "Attach the original PDF for reference. Extract text in the admin panel.",
    }),
  ],
  orderings: [
    {
      title: "Created (Newest First)",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
