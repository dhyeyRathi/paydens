import { defineField, defineType } from "sanity";

export const testimonials = defineType({
    name: "testimonials",
    title: "Testimonials ",
    type: "document",

    fields: [
        defineField({
            name: "author",
            title: "Author Name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "Avatar",
            title: " Author Avatar",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: "body",
            title: "Testimonial",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),

    ],
    preview: {
        select: {
            title: "author",
            media: "Avatar",
            subtitle: "body",
        },
    },
})