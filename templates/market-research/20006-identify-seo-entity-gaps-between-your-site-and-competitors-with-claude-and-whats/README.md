# 📊 Identify SEO entity gaps between your site and competitors with Claude and WhatsApp

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow tracks SEO topics and compares your pages to competitor pages by extracting named entities with Anthropic Claude, identifying missing or weakly covered entities, and sending WhatsApp alerts and a run digest.

## How it works
1. Runs on a weekly schedule, via a manual run, or when a POST webhook registers a topic with your URLs and competitor URLs.
2. Builds a topic queue either from the webhook payload or by fetching all tracked topics from an external database endpoint.
3. For each topic, crawls your provided URLs, extracts visible text, and sends the combined content to Anthropic Claude to return a JSON list of relevant entities with prominence ratings.
4. Crawls each competitor URL (with a short delay between requests), extracts page text, and uses Anthropic Claude to extract entities and prominence per competitor.
5. Aggregates competitor entities into a consensus table and computes which entities are missing from your pages or are covered less prominently than competitors.
6. Uses Anthropic Claude again to prioritize the entity gaps into ranked recommendations and thematic clusters, then sends a WhatsApp alert when the gap count passes the defined threshold.
7. After all topics are processed (or the per-run topic limit is reached), sends a WhatsApp digest and returns the digest as the webhook response when the run was webhook-triggered.

## Setup
1. Add an Anthropic API credential (HTTP Header Auth) and ensure the workflow can call https://api.anthropic.com/v1/messages.
2. Add WhatsApp Business Cloud credentials, then set your WhatsApp Phone Number ID and recipient phone number in the configuration values.
3. Provide an HTTP Header Auth credential for your tracked-topics database API and update the tracked-topics endpoint URL used to fetch monitored topics.
4. Update the config values as needed (URL/topic limits, competitor-mention threshold, significance threshold, crawl delay, user-agent string, and Anthropic model name).
5. If using ad-hoc runs, copy the webhook URL from the registration trigger into your source system and POST {"topic","yourUrls", "competitorUrls"} to start a comparison immediately.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
