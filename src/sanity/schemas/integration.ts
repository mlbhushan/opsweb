import { defineType, defineField } from "sanity";
import { PlugIcon } from "@sanity/icons";

export const integration = defineType({
  name: "integration",
  title: "Integration",
  type: "document",
  icon: PlugIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Accounting", value: "Accounting" },
          { title: "ERP", value: "ERP" },
          { title: "Ticketing", value: "Ticketing" },
          { title: "Communication", value: "Communication" },
          { title: "IoT & Sensors", value: "IoT & Sensors" },
        ],
      },
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
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "url",
      title: "Website URL",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "logo" },
  },
});
