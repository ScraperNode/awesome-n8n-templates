# 📊 Generate automated content performance reports from YouTube, TikTok and Skool with AI

> ⚡ **417 views** · 📊 [Market Research & Insights](../)

## Description

This n8n template acts as your automated social media data analyst. Instead of manually checking your analytics across different dashboards every week, this workflow scrapes your latest stats, calculates your week-over-week growth, and uses AI to write a strategic performance report delivered straight to your inbox.

**Use cases are many:** Perfect for content creators tracking growth, agencies managing client reporting, or community managers monitoring Skool engagement alongside social channels.

## Good to know
* **First Run Setup:** Since this workflow calculates *growth* (Current vs. Last Week), it needs a baseline to start. You will need to manually add one row to the linked Airtable template with your current stats before the first scheduled run.
* **Cost:** This uses the Apify API for scraping TikTok and OpenRouter for the LLM analysis. Costs are generally very low (pennies per run), but you will need active accounts for both.

## How it works
1. **Data Collection:** Every Sunday, the workflow triggers and pulls your live follower counts from YouTube, TikTok, and Skool. It also grabs the transcripts and stats for every video you posted in the last 7 days.
2. **Growth Calculation:** It searches your Airtable database for the previous week's record and compares it against the live numbers to calculate exactly how many subscribers and followers you gained.
3. **AI Analysis:** The data and video transcripts are fed into an LLM (via OpenRouter). The AI analyzes *why* certain videos performed well based on the content, identifying trends and engagement patterns.
4. **Reporting:** The LLM generates a clean, formatted HTML report.
5. **Delivery & Archiving:** The workflow emails the report to you and saves the new raw data into Airtable to serve as the baseline for next week.

## How to use
* The workflow is set to run weekly (Sundays), but you can change the **Schedule Trigger** to whatever day you prefer to receive reports.
* You will need to configure the **CONFIG** node at the start with your specific profile URLs and Channel IDs so the scrapers know where to look.
* Link to the required Airtable template is included in the workflow sticky notes.

## Requirements
* **n8n** (Self-hosted recommended)
* **Apify** account (for TikTok and Skool scraping)
* **Google Cloud** project (for YouTube Data API)
* **OpenRouter** or OpenAI API key
* **Airtable** account
* **Gmail** account

## Customising this workflow
You can easily swap out the LLM model in the OpenRouter node if you prefer a specific model (like Claude 3.5 Sonnet or GPT-4o) for the analysis. You could also add more platforms like LinkedIn or Instagram if you have the appropriate Apify actors or API credentials.

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, YouTube, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
