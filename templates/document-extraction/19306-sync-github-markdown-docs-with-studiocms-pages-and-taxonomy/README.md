# 🔬 Sync GitHub Markdown docs with StudioCMS pages and taxonomy

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually syncs a GitHub directory of Markdown/MDX files to StudioCMS by parsing frontmatter, creating missing folders/categories/tags, and then creating, updating, skipping, or drafting pages based on slug comparisons.

## How it works
1. Starts when you manually trigger a deployment.
2. Lists files from the configured GitHub repository directory and continues only if Markdown/MDX files are found.
3. Downloads each Markdown/MDX file from GitHub, decodes it, and parses YAML-style frontmatter to derive page fields like title, slug, folder, categories, tags, and draft status.
4. Validates the collection (including duplicate slug detection) and loads the current StudioCMS folders, categories, tags, and pages.
5. Creates any missing StudioCMS folders, categories, and tags needed by the valid Markdown documents, then refreshes the StudioCMS taxonomy lists.
6. Compares each document to existing StudioCMS pages by slug to plan and apply creates/updates/skips, and optionally marks missing managed pages as drafts when configured.
7. Produces a deployment report summarizing created, updated, drafted, skipped, and errored items.

## Setup
1. Add GitHub API credentials and select them in the GitHub nodes that list and fetch repository files.
2. Add StudioCMS API credentials and select them in all StudioCMS nodes that read and write folders, categories, tags, and pages.
3. In the GitHub source configuration, set the repository owner, repository name, and source directory path containing your flat Markdown/MDX collection.
4. Ensure each Markdown/MDX file has unique slugs (via frontmatter `slug` or its filename) and optional frontmatter fields you want synced (for example `folder`, `categories`, `tags`, `draft`, and `showOnNav`).
5. If you enable orphan drafting, set `draftMissingPages` to true and provide a non-empty `managedSlugPrefix` so only pages with that prefix are considered for drafting.

## 🔗 Nodes Used

GitHub

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
