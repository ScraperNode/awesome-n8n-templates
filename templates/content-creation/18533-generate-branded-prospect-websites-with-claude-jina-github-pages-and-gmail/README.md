# 🎬 Generate branded prospect websites with Claude, Jina, GitHub Pages, and Gmail

> ⚡ **57 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a company name, website URL, and recipient email via an n8n form, scrapes the company website with Jina AI Reader, uses Anthropic Claude to extract brand content and generate a single-page HTML site, publishes it to GitHub Pages, and emails the live link via Gmail.

## How it works
1. Triggers on an n8n form submission that provides the company name, company website URL, and an email address.
2. Fetches the homepage via Jina AI Reader, discovers up to 20 relevant internal links, and scrapes those pages to compile a combined content snapshot.
3. Sends the full scraped content to Anthropic Claude Haiku to extract only the site’s real brand elements (colors, headlines, links, and section content) as structured JSON.
4. Sends the extracted JSON to Anthropic Claude Sonnet to generate a complete single-file animated HTML website and then cleans the response to keep only valid HTML.
5. Base64-encodes the HTML and uploads it to a GitHub repository under a company-specific folder for GitHub Pages hosting.
6. If the target file already exists in GitHub, updates the existing file instead of failing, then builds the final GitHub Pages URL.
7. Waits briefly for deployment and sends the generated site URL to the provided email address using Gmail.

## Setup
1. Create an Anthropic credential in n8n and attach it to both Claude HTTP Request steps.
2. Set the JINA_API_KEY as an n8n environment variable so the workflow can scrape additional internal pages with Jina AI Reader.
3. Provide GitHub credentials with write access to the target repository and ensure GitHub Pages is enabled for the repo/path used in the published URL.
4. Add a Gmail OAuth2 credential and confirm the workflow’s email fields (recipient and message content) match your form inputs.
5. Update the GitHub owner/repo name and the GitHub Pages base URL if you are not using izu737/job-sites and https://izu737.github.io/job-sites/.

## 🔗 Nodes Used

GitHub, HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
