import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Template READMEs link to `workflow.json` next to them; publish each file at
// that URL so the download link (and n8n's "Import from URL") works on the site.
export async function getStaticPaths() {
  const entries = await getCollection('templates');
  return entries
    .filter(({ id }) => id.split('/').length === 2)
    .map(({ id }) => {
      const [category, template] = id.split('/');
      return { params: { category, template } };
    });
}

// Fields that only make sense in the author's n8n instance. Left in, they make
// `n8n import:workflow` and the public API fail (tags and project shares point
// at records that don't exist) or overwrite each other (shared ids).
const INSTANCE_FIELDS = [
  'id',
  'versionId',
  'active',
  'tags',
  'shared',
  'triggerCount',
  'createdAt',
  'updatedAt',
  'isArchived',
  'staticData',
  'scopes',
];
const README_TITLE = /^#\s+\S+\s+(.+)$/m;

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Converts formats older n8n versions exported but current n8n can't import:
 * credentials referenced by bare name (`"slackApi": "My Slack"`) instead of
 * `{ id, name }`, and string-valued `settings` / `credentials` fields.
 */
function normalizeLegacyFields(workflow: Record<string, unknown>) {
  if ('settings' in workflow && !isObject(workflow.settings)) {
    delete workflow.settings;
  }
  for (const node of Array.isArray(workflow.nodes) ? workflow.nodes : []) {
    if (!isObject(node) || node.credentials === undefined) {
      continue;
    }
    if (!isObject(node.credentials)) {
      delete node.credentials;
      continue;
    }
    for (const [type, value] of Object.entries(node.credentials)) {
      if (typeof value === 'string') {
        node.credentials[type] = { id: null, name: value };
      }
    }
  }
}

export const GET: APIRoute = async ({ params }) => {
  // Builds run from the project root; import.meta.url points into the bundle
  const dir = join(process.cwd(), 'templates', params.category ?? '', params.template ?? '');
  const [raw, readme] = await Promise.all([
    readFile(join(dir, 'workflow.json'), 'utf8'),
    readFile(join(dir, 'README.md'), 'utf8'),
  ]);

  const { name: originalName, ...workflow } = JSON.parse(raw);
  for (const field of INSTANCE_FIELDS) {
    delete workflow[field];
  }
  normalizeLegacyFields(workflow);
  // Templates from n8n.io's API often have no (or an empty) name, which n8n requires on import
  const name = originalName || readme.match(README_TITLE)?.[1] || params.template;

  return new Response(JSON.stringify({ name, ...workflow }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
