# 🎣 Turn LinkedIn job posts into sales signals with Apify, OpenAI, and Notion

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday, scrapes recent LinkedIn job posts via Apify, uses OpenAI to infer hiring-based buying signals and relevance, and saves each signal as a new page in a Notion database.

## How it works
1. Runs on a schedule every Monday at 08:00.
2. Defines the target job search queries, locations, what you sell, and the maximum number of posts to analyze.
3. Uses Apify’s LinkedIn Jobs Scraper actor to collect job posts from the past week based on the configured searches.
4. Filters out job posts that don’t include a company and enough text (title or description) to analyze.
5. Skips job posts that were already processed in previous executions using the job ID or URL.
6. Sends each remaining post to an OpenAI chat model to return JSON describing what the company is building, the implied need, timing, and a 1–5 relevance score.
7. Creates a Notion database page for each post, storing the company, role, inferred signal fields, relevance, and the job link.

## Setup
1. Add credentials for Apify (API token), OpenAI (API key), and Notion.
2. Select or paste your Notion database ID in the Notion node and ensure it has matching properties (Role, Building, Implied need, Timing, Relevance, Link).
3. Update the search queries, locations, what you sell, and maxItems values to match your ideal buyer signals.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
