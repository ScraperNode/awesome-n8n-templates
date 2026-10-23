import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

// Remark plugin to convert local image references to plain text links.
// Template READMEs reference images that don't exist locally
// (they were generated from API data with relative paths).
function remarkRemoveMissingImages() {
  return (tree) => {
    const visit = (node) => {
      if (node.children) {
        node.children = node.children.map(child => {
          if (child.type === 'image' && child.url && !child.url.startsWith('http')) {
            // Convert local image to a text node
            return { type: 'text', value: child.alt || '' };
          }
          visit(child);
          return child;
        });
      }
    };
    visit(tree);
  };
}

// Template descriptions come from third-party authors and may contain raw HTML.
// Astro only parses raw HTML after custom rehype plugins run, so parse it here
// first, then strip anything active (scripts, iframes, event handlers,
// javascript: URLs). The schema is GitHub's default plus the attributes Shiki
// adds to highlighted code blocks and the <video> demos some templates embed.
const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'video'],
  attributes: {
    ...defaultSchema.attributes,
    pre: [...(defaultSchema.attributes.pre ?? []), 'className', 'style', 'tabIndex', 'dataLanguage'],
    span: [...(defaultSchema.attributes.span ?? []), 'className', 'style'],
    video: ['src', 'controls', 'poster', 'width', 'height'],
  },
};

export default defineConfig({
  site: 'https://scrapernode.github.io',
  base: '/awesome-n8n-templates/',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    remarkPlugins: [remarkRemoveMissingImages],
    rehypePlugins: [rehypeRaw, [rehypeSanitize, sanitizeSchema]],
  },
});
