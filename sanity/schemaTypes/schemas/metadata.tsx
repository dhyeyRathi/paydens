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
  ],
  preview: {
    select: {
      title: 'page'
    }
  }
})