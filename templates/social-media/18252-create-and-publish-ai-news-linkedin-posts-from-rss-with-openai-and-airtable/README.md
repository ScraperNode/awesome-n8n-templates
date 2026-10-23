# 📱 Create and publish AI news LinkedIn posts from RSS with OpenAI and Airtable

> ⚡ **26 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a daily schedule, reads AI-related articles from multiple RSS feeds, uses OpenAI to select and draft a LinkedIn company-page post, stores the editorial pack in Airtable, generates and QA-checks an image, and then publishes the image post to LinkedIn in production mode.

## How it works
1. Runs each day on a scheduled trigger and applies a posting-day cadence plus a safety gate that blocks publishing during manual/test executions.
2. Loads recent publishing history from Airtable and pulls fresh articles from TechCrunch AI, The Verge AI, and the OpenAI Blog RSS feeds.
3. Cleans, deduplicates, and balances the RSS articles, then sends the candidates plus recent history to OpenAI to select one publishable editorial signal.
4. If the selected signal meets the quality threshold, OpenAI drafts the LinkedIn post, a second OpenAI pass tightens it, and the workflow appends 2–3 relevant hashtags.
5. Creates an editorial record in Airtable with the final copy, source URL, and metadata.
6. Generates a square editorial image using either an optional HTML screenshot service or OpenAI image generation, then uses OpenAI to QA the image and retries generation if it fails.
7. In production mode, registers and uploads the image to LinkedIn and publishes the post to a LinkedIn organization page, then writes the posting result back to Airtable.

## Setup
1. Add OpenAI credentials (for chat completions and image generation) and update any model choices if needed.
2. Add Airtable credentials (Airtable Personal Access Token) and set your Airtable base ID and table ID in the publishing configuration.
3. Add LinkedIn Community Management OAuth2 credentials and set your LinkedIn organization ID in the publishing configuration.
4. Review and adjust the timezone, posting days, and history limit in the publishing configuration, then run once manually to confirm it stops at the test-preview stage.
5. Optional: configure an HTML screenshot service URL/token for deterministic rendering and enable the Gmail credential if you want the disabled email execution log.

## 🔗 Nodes Used

Airtable, HTTP Request, RSS Read, Gmail, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
