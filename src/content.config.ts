import { defineCollection } from 'astro:content';
import { glob } from "astro/loaders";
import { z } from 'astro/zod';
import { docsSchema} from "@astrojs/starlight/schema";
import { LOCALES } from "./i18n/locales.ts";

const docs = defineCollection({
    schema: docsSchema(),
});

const components = defineCollection({
    loader: glob({ base: './src/content/components', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        framework: z.string(),
        status: z.string().optional(),
        lang: z.enum(LOCALES),
    }),
});

export const collections = { docs, components };