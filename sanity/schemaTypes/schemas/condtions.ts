import { defineField, defineType } from "sanity";

export const conditions = defineType({
    name: "conditions",
    title: "Condition carousel",
    type: "document",
    fields: [
        defineField({
            name: "condition",
            title: "Condition Name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "condition",
                maxLength: 36
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "description",
            title: "Condition Description",
            type: "text"
        }),
        defineField({
            name: "nhs",
            title: "NHS Includes",
            type: "boolean"
        }),
        defineField({
            name: "products",
            title: "Products recommended",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "product" }]
                }
            ]
        })
    ]
})