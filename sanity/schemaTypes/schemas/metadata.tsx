import { defineField, defineType } from "sanity";

export const metaObject = defineType({
  name: "meta-object",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "page",
      title: "Page Name",
      type: "string",
      readOnly: ({ document }) => document?._type === "conditions",
    }),
    defineField({
      name: "priority",
      title: "Priority (Sitemap)",
      type: "number",
      description: "Priority in sitemap (e.g. 1.0 for homepage, 0.8, etc.)",
    }),
    defineField({
      name: "seo",
      title: "Seo Fields",
      type: "seoFields"
    })
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


