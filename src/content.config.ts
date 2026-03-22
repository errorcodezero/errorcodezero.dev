import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./blog" }),
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      categories: z.array(z.string()),
      draft: z.boolean().optional(),
    }),
});

export const collections = { blog };
