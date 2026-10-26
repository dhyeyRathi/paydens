import { title } from "process";
import { defineField, defineType } from "sanity";

export const faqs = defineType({
    name: "faqs",
    title: "Frequently asked questions",
    type: "document",
    fields: [
        defineField({
            name: "question",
            title: "Question",
            type: "text",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "answer",
            title: "Answer",
            type: "text",
            validation: (Rule) => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: "question"
        }
    }
})