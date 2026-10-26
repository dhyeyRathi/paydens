import { defineField, defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product Carousel",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "description",
            title: "Product description",
            type: "text"
        }),
        defineField({
            name: "price",
            title: "Product price",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Product image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "conditions",
            title: "Relevant Conditions",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "conditions" }]
                }
            ],

        })
    ]
})