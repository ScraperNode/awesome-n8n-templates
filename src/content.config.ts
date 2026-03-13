import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const templates = defineCollection({
  loader: glob({ pattern: '**/README.md', base: './templates' }),
});

const integrations = defineCollection({
  loader: glob({ pattern: '**/README.md', base: './integrations' }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/README.md', base: './use-cases' }),
});

const docs = defineCollection({
  loader: glob({ pattern: '*.md', base: './docs' }),
});

export const collections = { templates, integrations, useCases, docs };
