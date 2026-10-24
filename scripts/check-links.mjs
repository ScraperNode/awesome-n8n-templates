#!/usr/bin/env node
// Checks every internal link and asset reference in the built site (dist/)
// resolves to a generated file. Exits non-zero if any are broken.
//
//   npm run build && npm run check-links [-- path/to/dist]
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, posix, resolve } from 'node:path';

const DIST = `${resolve(process.argv[2] ?? new URL('../dist/', import.meta.url).pathname)}/`;
const BASE = '/awesome-n8n-templates/';
const SITE = `https://scrapernode.github.io${BASE}`;
const ATTRS = /\s(?:href|src)="([^"]*)"/g;
// Code samples often contain markup like <iframe src="YOUR_URL">; skip them
const CODE_BLOCKS = /<pre[\s>][\s\S]*?<\/pre>/g;
const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const MAX_REPORTED = 50;

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      yield* htmlFiles(path);
    } else if (name.endsWith('.html')) {
      yield path;
    }
  }
}

/** Maps a site path (with base) to the file that serves it, or null. */
function servedBy(path) {
  if (!path.startsWith(BASE)) {
    return null;
  }
  const local = join(DIST, decodeURIComponent(path.slice(BASE.length)));
  if (path.endsWith('/')) {
    return existsSync(join(local, 'index.html')) ? local : null;
  }
  if (existsSync(local) && statSync(local).isFile()) {
    return local;
  }
  return existsSync(join(local, 'index.html')) ? local : null;
}

const broken = new Map();
let checked = 0;
let pages = 0;
for (const file of htmlFiles(DIST)) {
  pages++;
  const pagePath = `${BASE}${posix.relative(DIST, dirname(file))}/`.replace(/\/\.\/$|\/+$/, '/');
  const html = readFileSync(file, 'utf8').replace(CODE_BLOCKS, '');
  for (const [, raw] of html.matchAll(ATTRS)) {
    const ref = raw.replaceAll('&amp;', '&').split('#')[0].split('?')[0];
    if (!ref) {
      continue;
    }
    let path;
    if (ref.startsWith(SITE)) {
      path = BASE + ref.slice(SITE.length);
    } else if (EXTERNAL.test(ref)) {
      continue;
    } else {
      path = ref.startsWith('/') ? ref : posix.join(pagePath, ref);
      if (ref.endsWith('/') && !path.endsWith('/')) {
        path += '/';
      }
    }
    checked++;
    if (!servedBy(path)) {
      const sources = broken.get(path) ?? [];
      sources.push(posix.relative(DIST, file));
      broken.set(path, sources);
    }
  }
}

console.log(`Checked ${checked} internal references across ${pages} pages.`);
if (broken.size > 0) {
  console.error(`\n${broken.size} broken target(s):`);
  for (const [path, sources] of [...broken].slice(0, MAX_REPORTED)) {
    console.error(`  ${path}  (from ${sources.length} page(s), e.g. ${sources[0]})`);
  }
  process.exit(1);
}
console.log('No broken internal links.');
