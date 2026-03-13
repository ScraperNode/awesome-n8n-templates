# 📊 E-commerce price monitor with Firecrawl, Claude-Sonnet AI & Telegram alerts

> ⚡ **342 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Introduction
Automate price monitoring for e-commerce competitors—ideal for retailers, analysts, and pricing teams. Scrapes competitor sites, 
extracts pricing/stock data via AI, detects changes, and sends instant alerts for dynamic pricing strategies.
## How It Works
Scrapes competitor URLs via Firecrawl and Apify, extracts data with AI, detects price/stock changes, logs to Google Sheets, and sends Telegram alerts.
## Workflow Template
Trigger → Scrape URL → AI Extract → Parse → Merge Historical → Detect Changes → Update Sheets + Send Telegram Alert
## Workflow Steps
1. **Trigger & Scrape** → Manual/scheduled trigger → Firecrawl + Apify fetch competitor data
2. **AI Processing** → Claude extracts product details → Parses and structures data
3. **Change Detection** → Reads historical prices → Merges with current data → Identifies updates
4. **Output** → Logs alerts to Sheets → Updates historical data → Sends Telegram notification
## Setup Instructions
**1. Firecrawl API**
Get key from dashboard → Add to n8n
**2. Apify API**
Get key from console → Add to n8n → Configure actors
**3. AI Model (Claude/OpenAI)**
Get API key → Add to n8n
**4. Google Sheets OAuth2**
Create OAuth2 in Google Cloud Console → Authorize in n8n → Enable API
**5. Telegram Bot**
Create via BotFather → Get token & chat ID → Add to n8n
**6. Spreadsheet Setup**
Create Sheet with required columns → Copy ID → Paste in workflow
## Prerequisites
Self-hosted n8n, Firecrawl account, Apify account, Claude/OpenAI API key,
Google account (Sheets OAuth2),Telegram bot
## Customization
Add more URLs, adjust scraping intervals, change detection thresholds, switch to Slack/email alerts,
integrate databases
## Benefits
Saves 2+ hours daily, real-time tracking, automated alerts, historical analysis, multi-source scraping

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Perplexity, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
