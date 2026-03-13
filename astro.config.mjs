import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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

export default defineConfig({
  site: 'https://scrapernode.github.io',
  base: '/awesome-n8n-templates',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    remarkPlugins: [remarkRemoveMissingImages],
  },
});
