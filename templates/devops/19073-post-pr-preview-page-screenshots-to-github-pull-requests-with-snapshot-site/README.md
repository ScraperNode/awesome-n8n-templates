# ⚙️ Post PR preview page screenshots to GitHub pull requests with Snapshot Site

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a webhook from your CI when a pull request preview is deployed, screenshots only the changed preview routes using Snapshot Site, and posts a single GitHub pull request comment containing a summary table, embedded screenshots, and any capture failures.

## How it works
1. Receives a POST webhook from your CI with the GitHub owner, repository, PR number, preview base URL, and a list of changed page routes to capture.
2. Validates the payload, builds full https:// URLs for each route, removes duplicates, and caps the run to a configurable maximum number of pages.
3. Waits 30 seconds to let the preview deployment warm up.
4. Iterates through the selected pages and calls Snapshot Site to capture full-page WebP screenshots at 1280px wide with cookie banners hidden.
5. Records each capture result as success (with an image link) or failure (with an error message) without stopping the run when a page fails.
6. Builds one GitHub-flavoured Markdown comment containing a results table, collapsible screenshot previews, and a “could not be captured” list, then posts it to the pull request as a single comment via GitHub.

## Setup
1. Install the verified community node `n8n-nodes-snapshot-site` and add Snapshot Site API credentials in n8n.
2. Add GitHub credentials with permission to create pull request comments (classic PAT with `repo`, or a fine-grained token with Pull requests: Read and write for the target repository).
3. Activate the workflow, copy the Webhook node’s Production URL, and configure your CI/preview deployment job to POST `owner`, `repository`, `prNumber`, `previewUrl` (including https://), and a `pages[]` array of changed routes (optionally `maxPages` and `commit`).

## 🔗 Nodes Used

GitHub, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
