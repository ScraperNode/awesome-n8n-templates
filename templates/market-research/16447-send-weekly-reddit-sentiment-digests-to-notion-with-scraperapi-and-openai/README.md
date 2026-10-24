# 📊 Send weekly Reddit sentiment digests to Notion with ScraperAPI and OpenAI

> ⚡ **12 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every Monday, scrapes weekly top posts from selected Reddit pages via ScraperAPI, analyzes sentiment and themes with OpenAI GPT-5 Mini, compiles a single weekly digest, and creates a formatted page in a Notion database.

## How it works
1. Runs every Monday at 9:00 AM on a schedule.
2. Defines a list of Reddit source URLs to analyze and the target Notion database ID.
3. Scrapes each Reddit page via ScraperAPI and converts the returned HTML into plain text for analysis.
4. Sends the cleaned text to OpenAI GPT-5 Mini to extract per-source sentiment counts, top themes, representative quotes, and a short tone note in JSON.
5. Normalizes and aggregates all source results into a single weekly digest with totals, theme rollups, per-source breakdown, and selected quotes.
6. Creates a new Notion database page containing the digest sections (overview, counts, themes, per-source breakdown, and quotes).

## Setup
1. Add a ScraperAPI credential and ensure it can access the Reddit URLs you want to scrape.
2. Add an OpenAI API key credential for the OpenAI Chat Model configured as GPT-5 Mini.
3. Add a Notion credential (API token), share your target Notion database with the integration, and replace the placeholder Notion database ID in the configuration step.
4. Update the Reddit source URLs/labels (and optional country code) to match the subreddits and views you want to track.
5. Adjust the schedule cron expression if you want the digest to run at a different time.

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
