# 📊 Monitor commercial real estate opportunities from LoopNet with ScrapeGraphAI & Telegram

> ⚡ **707 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# How it works

This workflow automatically scrapes commercial real estate listings from LoopNet and sends opportunity alerts to Telegram while logging data to Google Sheets.

## Key Steps

1. **Scheduled Trigger** - Runs every 24 hours to collect fresh CRE market data
2. **AI-Powered Scraping** - Uses ScrapeGraphAI to extract property information from LoopNet
3. **Market Analysis** - Analyzes listings for opportunities and generates market insights
4. **Smart Notifications** - Sends Telegram alerts only when investment opportunities are found
5. **Data Logging** - Stores daily market metrics in Google Sheets for trend analysis

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping
2. **Set up Telegram connection** - Connect your Telegram bot and specify the target channel
3. **Configure Google Sheets** - Set up Google Sheets integration for data logging
4. **Customize the LoopNet URL** - Update the URL to target specific CRE markets or property types
5. **Adjust schedule** - Modify the trigger timing based on your market monitoring needs

**Keep detailed configuration notes in sticky notes inside your workflow**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
