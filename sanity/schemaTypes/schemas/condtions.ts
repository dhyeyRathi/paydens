import { defineField, defineType } from "sanity";
import { metaObject } from "./metadata";

export const conditions = defineType({
    name: "conditions",
    title: "Condition carousel",
    type: "document",
    groups: [
        {
            name: "all",
            title: "All Fields",
            default: true
        },
        {
            name: "details",
            title: "Details"
        },
        {
            name: "seo",
            title: "Seo"
        }
    ],
    fields: [
        defineField({
            name: "condition",
            title: "Condition Name",
            type: "string",
            validation: (Rule) => Rule.required(),
            group: "details"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "condition",
                maxLength: 36
            },
            validation: (Rule) => Rule.required(),
            group: "details"
        }),
        defineField({
            name: "description",
            title: "Condition Description",
            type: "text"
        }),
        defineField({
            name: "nhs",
            title: "NHS Includes",
            type: "boolean",
            group: "details"
        }),
        defineField({
            name: "bannerImg",
            title: "Add banner image",
            type: "image",
            options: {
                hotspot: true
            },
            group: "details"
        }),
        defineField({
            name: "seo",
            title: "Seo",
            type: "meta-object",
            group: "seo"
        })
    ],
})

