import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    published: z.boolean(),
    tags: z.array(z.string()).optional(),
    pinned: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubYear: z.number(),
      tags: z.array(z.string()),
      image: image(),
      published: z.boolean(),
      external: z.boolean().optional(),
      url: z.string().optional(),
    }),
});

export const collections = {
  posts,
  projects,
};
