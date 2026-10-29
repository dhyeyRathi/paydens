import { defineField, defineType } from "sanity";


export const meta = defineType({
  name: 'meta',
  title: 'Metadata',
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page Name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),

    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
    }),

    defineField({
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "ogUrl",
      title: "Open Graph URL",
      type: "url",
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
    }),
    defineField({
      name: "twitterTitle",
      title: "Twitter Title",
      type: "string",
    }),
    defineField({
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "twitterImage",
      title: "Twitter Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "twitterSite",
      title: "X/Twitter Username",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: 'page'
    }
  }
})