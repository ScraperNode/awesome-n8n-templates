import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Strip README.md from generated IDs so pages render at
// /templates/ai-chatbots/ instead of /templates/ai-chatbots/readme/
const stripReadme = ({ entry }: { entry: string }) =>
  entry.replace(/\/README\.md$/i, '').replace(/^README\.md$/i, 'index');

const templates = defineCollection({
  loader: glob({ pattern: '**/README.md', base: './templates', generateId: stripReadme }),
});

const integrations = defineCollection({
  loader: glob({ pattern: '**/README.md', base: './integrations', generateId: stripReadme }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/README.md', base: './use-cases', generateId: stripReadme }),
});

const docs = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './docs',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
});

export const collections = { templates, integrations, useCases, docs };
