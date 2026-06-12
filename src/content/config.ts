import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/project" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
    }),
});

export const collections = {
    project: projectCollection,
};
