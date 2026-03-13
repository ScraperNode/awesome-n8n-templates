# 📊 Monitor competitor prices with Firecrawl, GPT-4.1, Sheets & Gmail alerts

> ⚡ **258 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Introduction
Automate price monitoring for e-commerce competitors—ideal for retailers, analysts, and pricing teams.
**⚠️ Self-Hosted Only:** Requires self-hosted n8n instance.
## How It Works
Scrapes competitor URLs, extracts data via AI, detects price/stock changes, logs to Google Sheets with email alerts.
## Workflow Template
Trigger → Scrape → AI Extract → Parse → Compare → Detect Changes → Update Sheets + Alert
## Workflow Steps
1. **Scraping:** Firecrawl fetches Nike, Adidas, Sneaker data
2. **AI Extraction:** Processes product details
3. **Parsing:** Structures response
4. **Historical Check:** Reads Sheets data
5. **Change Detection:** Identifies price/stock updates
6. **Dual Output:** Updates Sheets + sends alerts
## Setup Instructions
**1. Firecrawl API**
Get key from dashboard → Add to n8n
**2. OpenAI API**
Get key from platform → Add to n8n
**3. Google Sheets OAuth2**
Create OAuth2 in Google Cloud Console → Authorize in n8n → Enable API
**4. Gmail OAuth2**
Use same project → Authorize in n8n → Enable API
**5. Spreadsheet Setup**
Create Sheet with required columns → Copy ID from URL → Paste in workflow
## Prerequisites
Self-hosted n8n, Firecrawl account, OpenAI key, Google account (Sheets + Gmail OAuth2)
## Customization
Add URLs, adjust thresholds, integrate Slack
## Benefits
Saves 2+ hours daily, real-time tracking, automated alerts
## Google Sheets Structure
**Required Columns:**
- **Product Name** (Column A)
- **Current Price** (Column B)
- **Previous Price** (Column C)
- **Stock Status** (Column D)
- **Last Updated** (Column E)
- **URL** (Column F)
- **Change Detected** (Column G)

## 🔗 Nodes Used

Google Sheets, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
