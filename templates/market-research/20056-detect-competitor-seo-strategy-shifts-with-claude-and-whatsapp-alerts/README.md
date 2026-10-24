# 📊 Detect competitor SEO strategy shifts with Claude and WhatsApp alerts

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule or via webhook to crawl competitor websites, store full site snapshots in a custom database, diff each crawl against the previous snapshot, and use Anthropic Claude to explain the likely strategy behind the changes, sending WhatsApp alerts and a final digest.

## How it works
1. Runs on a schedule, via a POST webhook to register a competitor, or manually for testing.
2. Builds a queue of competitors from the webhook payload or by fetching the tracked competitor list from your historical database API.
3. Crawls each competitor site up to the configured page and depth limits, fetching HTML pages and extracting titles, canonicals, H1s, JSON-LD schema types, internal link counts, word count, and a content hash.
4. Retrieves the previous site snapshot from the historical database API and computes changes such as new content clusters, deleted pages, URL migrations, title changes, schema changes, internal link changes, and content updates.
5. Saves the current site snapshot back to the historical database API for use in the next crawl.
6. Sends the detected changes to Anthropic Claude to generate a strategic narrative, confidence score, and recommended counter-actions, then flags significant shifts based on change-volume and confidence thresholds.
7. Sends a WhatsApp alert for significant strategy changes and, after all competitors are processed (or the run limit is hit), sends a WhatsApp digest and returns the digest as the webhook response.

## Setup
1. Create an HTTP Header Auth credential for your historical database API and set the fetch, save, and tracked-competitors endpoint URLs in the workflow configuration.
2. Create an HTTP Header Auth credential for the Anthropic API (https://api.anthropic.com/v1/messages) and set the model name you want to use.
3. Add WhatsApp Business Cloud credentials in n8n and set your WhatsApp phone number ID and recipient phone number in the workflow configuration.
4. Adjust crawl and detection settings (crawl delay, max pages/depth, competitor cap per run, and change/confidence thresholds) to match your environment and alerting needs.
5. If using the webhook, copy the production webhook URL from n8n and POST {competitorDomain, startUrl, maxPages, maxDepth} from your source system to register and crawl a competitor immediately.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
