import { getCollection } from 'astro:content';

// Hub READMEs open with "# {emoji} {title}" and "> **{count} templates** — {description}"
const HEADING = /^#\s+(\S+)\s+(.+)$/m;
const SUMMARY = /^> \*\*([\d,]+) templates\*\*(?: — (.+))?$/m;
const LEADING_EMOJI = /^\p{Extended_Pictographic}\uFE0F?\s*/u;

export interface Hub {
  slug: string;
  emoji: string;
  title: string;
  description: string;
  count: number;
}

function parseHub(slug: string, body = ''): Hub {
  const heading = body.match(HEADING);
  const summary = body.match(SUMMARY);
  return {
    slug,
    emoji: heading?.[1] ?? '',
    title: heading?.[2] ?? slug,
    description: (summary?.[2] ?? '').replace(LEADING_EMOJI, ''),
    count: Number(summary?.[1]?.replaceAll(',', '') ?? 0),
  };
}

const byCount = (a: Hub, b: Hub) => b.count - a.count || a.title.localeCompare(b.title);

/** Category hubs (templates/{category}/README.md), largest first. */
export async function getCategories(): Promise<Hub[]> {
  const entries = await getCollection('templates');
  const templateCounts = new Map<string, number>();
  for (const { id } of entries) {
    const [category, template] = id.split('/');
    if (template) {
      templateCounts.set(category, (templateCounts.get(category) ?? 0) + 1);
    }
  }
  return entries
    .filter(({ id }) => !id.includes('/'))
    .map(({ id, body }) => ({ ...parseHub(id, body), count: templateCounts.get(id) ?? 0 }))
    .sort(byCount);
}

/** Headline numbers for the category index. */
export async function getTotals() {
  const [templates, categories] = await Promise.all([getCollection('templates'), getCategories()]);
  return {
    templates: templates.filter(({ id }) => id.includes('/')).length,
    categories: categories.length,
  };
}

export const formatCount = (n: number) => n.toLocaleString('en-US');
