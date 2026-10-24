# 📊 Monitor Google rankings and search intent with SerpAPI, OpenAI, Notion, and Slack

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or manually) to pull Google SERP results via SerpAPI for keywords stored in Notion, uses OpenAI to classify search intent, saves a daily snapshot back to Notion, and posts a Slack alert when rankings move significantly compared to yesterday.

## How it works
1. Runs on a daily 6AM schedule (or via manual trigger) and loads your brand and competitor configuration.
2. Reads all keywords marked for tracking from a Notion database.
3. For each keyword, fetches the top Google search results from SerpAPI and parses your current position, SERP features, People Also Ask questions, and featured snippet ownership.
4. Sends the parsed SERP context to OpenAI (GPT-4o-mini) to classify the keyword’s search intent and related attributes.
5. Looks up yesterday’s snapshot for the same keyword in Notion and computes rank movement and newly appearing SERP features.
6. Creates a new Notion database entry to store today’s snapshot metrics for historical tracking.
7. If the rank changes by 3+ positions, posts a formatted alert message to a configured Slack channel.

## Setup
1. Add credentials for Notion, SerpAPI (HTTP Query Auth with the `api_key` parameter), OpenAI, and Slack.
2. Update the Configuration code values for your brand name, website URL, and competitor domains.
3. Create/select a Notion “Tracked Keywords” database, set its database ID in the keyword loader, and ensure it has at least a Keyword title field and a TrackSERP checkbox.
4. Create/select a Notion “SERP Snapshots” database, set its database ID in both snapshot nodes, and ensure it has properties matching Date, Keyword, Position, Movement, Features, PAA Count, and Client.
5. Set the target Slack channel ID in the Slack message step and run the workflow once manually to verify results before activating the daily schedule.

## 🔗 Nodes Used

HTTP Request, Slack, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
