import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    details: z.boolean().optional(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing:  z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const publicationSchema = z.object({
    title: z.string(),
    author: z.array(z.string()),
    booktitle: z.string(),
    volume: z.string().optional(),
    number: z.string().optional(),
    pages: z.string().optional(),
    year: z.string().optional(),
    pdf: z.string().optional(),
    doi: z.string().optional(),
    movie: z.string().optional(),
    website: z.string().optional(),
    code: z.string().optional(),
    slide: z.string().optional(),
    poster: z.string().optional(),
    award: z.string().optional(),
    desc: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PublicationSchema = z.infer<typeof publicationSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection
}