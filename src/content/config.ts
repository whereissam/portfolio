import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const travel = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string(),
    gallery: z.array(z.object({
      url: z.string(),
      caption: z.string().optional()
    })).optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional()
  }),
});

export const collections = {
  blog,
  travel,
};