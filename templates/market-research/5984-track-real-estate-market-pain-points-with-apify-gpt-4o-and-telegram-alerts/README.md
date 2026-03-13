# 📊 Track real estate market pain points with Apify, GPT-4o and Telegram alerts

> ⚡ **848 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
This workflow runs on a daily schedule. It starts by scraping real estate-related queries from Google using Apify. The organic search results are parsed and summarized into a single text block. That text is then sent to an AI model (GPT-4o) which extracts the top 3 pain points faced by real estate agents based on current online sentiment. The workflow compares today's insights with yesterday's data stored in Airtable to detect recurring or new pain points. Finally, it sends a summary notification via Telegram and stores the current day's insights into Airtable for trend tracking.

## How to set up

1. Clone or import the workflow into your n8n instance.
2. Get an Apify API token and insert it into the HTTP Request node.
3. Create an Airtable base with a table containing two fields: "Date" (text) and "Summary" (long text). Copy the Base ID and Table ID into the Airtable nodes.
4. Connect your Telegram bot and replace the chat ID in the Telegram node.
5. Set up OpenAI credentials with GPT-4o or GPT-4o-mini for the LLM node.
6. Run once manually to test, then activate the schedule trigger to run daily.
7. (Optional) Extend the flow to generate cold outreach emails based on pain points, or sync to Notion/CRM.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
