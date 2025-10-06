import { defineCollection, z } from "astro:content";

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    services: z.array(z.string()).default([]),
    platform: z.array(z.string()).default([]),
    engine: z.enum(["UE","Unity"]).optional(),
    year: z.string().optional(),
    duration: z.string().optional(),
    team: z.string().optional(),
    source: z.enum(["veinspire","core-team"]),
    nda: z.boolean().default(false),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { cases };
