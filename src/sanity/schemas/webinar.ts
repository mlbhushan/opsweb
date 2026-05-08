import { defineType, defineField } from "sanity";
import { PlayIcon } from "@sanity/icons";

export const webinar = defineType({
  name: "webinar",
  title: "Webinar",
  type: "document",
  icon: PlayIcon,
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
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g. '45 min'",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "On-Demand", value: "On-Demand" },
          { title: "Upcoming", value: "Upcoming" },
          { title: "Live", value: "Live" },
        ],
        layout: "radio",
      },
      initialValue: "On-Demand",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Date (New First)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "tag", media: "thumbnail" },
  },
});
