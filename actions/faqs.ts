import { client } from "@/sanity/lib/client";

export type faqType = {
    question: string,
    _id: string;
    answer: string
}

const FAQ_QUERY = `*[_type == "faqs"] | order(_createdAt) {
_id,
question,
answer
}`

export async function getFaqs() {

    const data = await client.fetch<faqType[]>(FAQ_QUERY);

    if (data.length === 0) return [];

    return data;
}