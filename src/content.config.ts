import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts. Content lives as markdown in src/content/blog/ (also where Sveltia
// CMS writes). Sveltia's config.yml fields must stay in sync with this schema.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // excerpt + SEO meta description
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('waai'),
    category: z
      .enum(['Guides', 'Product', 'Comparisons', 'Integrations', 'Industry', 'News'])
      .default('Guides'),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
