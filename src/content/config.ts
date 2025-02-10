import { z, defineCollection } from "astro:content";

const bookCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        type: z.enum(["book", "paper"]),
        status: z.enum(["current", "next", "queue", "completed"]),
        coverImage: z.string(),
        url: z.string(),
        color: z.object({
            primary: z.string(),
            secondary: z.string(),
        }),
        order: z.number(),
    }),
});

export const collections = {
    books: bookCollection,
    // ... other collections
};