import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const guide = defineType({
  name: "guide",
  title: "Whitepaper / Guide",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Whitepaper", value: "Whitepaper" },
          { title: "Playbook", value: "Playbook" },
          { title: "Guide", value: "Guide" },
          { title: "Template", value: "Template" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pageCount",
      title: "Page Count",
      type: "number",
    }),
    defineField({
      name: "file",
      title: "PDF File",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "type" },
  },
});
