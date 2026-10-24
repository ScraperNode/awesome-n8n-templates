# 📊 Create daily AI news briefings from Google Sheets with Claude, Notion, and Slack

> ⚡ **12 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This scheduled workflow pulls article URLs from Google Sheets, scrapes each page, uses Anthropic Claude to generate a structured news briefing, saves results to Notion, posts a compiled digest to Slack, and appends a processing log back to Google Sheets.

## How it works
1. Runs on a weekday morning cron schedule.
2. Loads configuration values (sheet IDs, Notion database ID, Slack channel, and prompt settings) and reads article URLs from Google Sheets.
3. Limits the run to the first 10 URLs, fetches each article’s HTML via HTTP, and extracts a cleaned text version.
4. Sends the article text to Anthropic Claude to produce a JSON briefing with headline, summary, why it matters, and a relevance score.
5. Creates a new page in Notion for each generated briefing.
6. Appends each briefing record to a Google Sheets log and aggregates all briefings into a single daily message.
7. Posts the aggregated daily digest to a Slack channel.

## Setup
1. Add credentials for Google Sheets, Notion, Slack, and Anthropic (Claude) in n8n.
2. Create a Google Sheet (tab name: urls) with a url column, and set the Google Sheet ID in the configuration.
3. Create a second Google Sheet (tab name: log) for logging, and set the log sheet ID used by the append step.
4. Create a Notion database for briefings and set the database/page target ID used by the Notion step.
5. Set your Slack channel and review the cron expression and maxArticles limit to match your schedule and desired volume.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Notion, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
