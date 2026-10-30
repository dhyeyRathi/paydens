import { defineField, defineType } from "sanity";

export const metaObject = defineType({
  name: "meta-object",
  title: "SEO",
  type: "object",
  groups: [
    {
      name: "all",
      title: "All fields",
      default: true
    },
    {
      name: "general",
      title: "General",
    },
    {
      name: "twitter",
      title: "Twitter",
    },
    {
      name: "open-graph",
      title: "Open Graph",
    },
    {
      name: "settings",
      title: "Settings"
    }
  ],
  fields: [
    defineField({
      name: "page",
      title: "Page Name",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?._type === "conditions") {
            return true;
          }

          return value ? true : "Page Name is required";
        }),
      group: "general",
      readOnly: ({ document }) => document?._type === "conditions"
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "general"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?._type === "conditions") {
            return true;
          }

          return value ? true : "Page Name is required";
        }),
      group: "general"

    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      group: "general"
    }),
    defineField({
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
      group: "open-graph"
    }),

    defineField({
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      rows: 3,
      group: "open-graph"
    }),

    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
      group: "open-graph"
    }),

    defineField({
      name: "ogUrl",
      title: "Open Graph URL",
      type: "url",
      group: "open-graph"
    }),

    defineField({
      name: "ogType",
      title: "Open Graph Type",
      type: "string",
      initialValue: "website",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Article", value: "article" },
        ],
      },
      group: "open-graph"
    }),
    defineField({
      name: "twitterCard",
      title: "Twitter Card Type",
      type: "string",
      initialValue: "summary_large_image",
      options: {
        list: [
          { title: "Large Image", value: "summary_large_image" },
          { title: "Summary", value: "summary" },
        ],
      },
      group: "twitter"
    }),
    defineField({
      name: "twitterTitle",
      title: "Twitter Title",
      type: "string",
      group: "twitter"
    }),
    defineField({
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
      rows: 3,
      group: "twitter"
    }),
    defineField({
      name: "twitterImage",
      title: "Twitter Image",
      type: "image",
      options: { hotspot: true },
      group: "twitter"
    }),
    defineField({
      name: "twitterSite",
      title: "X/Twitter Username",
      type: "string",
      group: "twitter"
    }),
    defineField({
      name: "canonurl",
      title: "Canonical Url",
      type: "string",
      group: "settings"
    }),
    defineField({
      name: "noindex",
      title: "NoIndex",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),
    defineField({
      name: "nofollow",
      title: "NoFollow",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),

  ],
})

export const meta = defineType({
  name: 'meta',
  title: 'Metadata',
  type: "document",
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "meta-object",
    }),
  ],
  preview: {
    select: {
      title: "seo.page"
    }
  }
})


