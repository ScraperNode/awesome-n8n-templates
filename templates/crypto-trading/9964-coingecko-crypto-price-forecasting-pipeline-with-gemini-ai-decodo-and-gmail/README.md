# 📈 CoinGecko crypto price forecasting pipeline with Gemini AI, Decodo, and Gmail

> ⚡ **188 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Sign Up for Decodo [HERE](https://visit.decodo.com/discount) for discount

This template scrapes CoinGecko pages for selected coins, converts metrics into clean JSON, stores them in an n8n Data Table, generates 24-hour direction forecasts with Gemini, and emails a concise report.

## How it works
1. A 30-minute schedule loops through configured coins, scrapes live metrics from CoinGecko via Decodo, parses the data, and upserts each record to the n8n Data Table.
2. A separate 18:00 daily schedule loads the last 48 hours of stored coin data from the Data Table for analysis.
3. Gemini AI processes the historical data and estimates directional price movement windows for the next 24 hours per coin.
4. A formatted email containing both HTML and plain text versions is rendered and sent automatically to the configured recipient.

## Setup
1. Add your Decodo, Gmail, and Gemini credentials in the n8n Credential Manager before activating either schedule trigger.
2. Open the Configure Coins node and edit the ticker list to match the coins you want to track and analyze.
3. Set your target Data Table ID in the relevant node so scraped metrics are upserted to the correct table.
4. Replace the placeholder recipient email address with your actual email in the send node.
5. If self-hosting, install the Decodo community node manually via npm: @decodo/n8n-nodes-decodo before activating the workflow.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
