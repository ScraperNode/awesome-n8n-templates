# 📊 Auto-send Zillow real estate listings to Telegram using ScrapeGraphAI

> ⚡ **1,711 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## How it works

This workflow automatically scrapes real estate listings from Zillow and sends them to a Telegram channel.

## Key Steps

1. **Scheduled Trigger** - Runs the workflow at specified intervals to find new listings.
2. **AI-Powered Scraping** - Uses ScrapeGraphAI to extract property information from Zillow.
3. **Data Formatting** - Processes and structures the scraped data for Telegram messages.
4. **Telegram Integration** - Sends formatted listing details to your specified Telegram channel.

## Set up steps

**Setup time: 5-10 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key.
2. **Set up Telegram connection** - Connect your Telegram account and specify the target channel.
3. **Customize the Zillow URL** - Update the URL to target specific locations or search criteria.
4. **Adjust schedule** - Modify the trigger timing based on how frequently you want to check for new listings.

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
