"use server"

import { client } from '@/sanity/lib/client'


export type TestimonialType = {
    _id: string;
    author: string;
    body: string;
    avatarUrl?: string;
};

const testimonialQuery = `*[_type == "testimonials"] | order(_createdAt desc) {
    _id,
    author,
    body,
    "avatarUrl" : Avatar.asset->url
    } `;

export async function getTestimonials() {
    const testimonials =
        await client.fetch<TestimonialType[]>(testimonialQuery);

    if (testimonials.length === 0) {
        return [];
    }

    return testimonials
}