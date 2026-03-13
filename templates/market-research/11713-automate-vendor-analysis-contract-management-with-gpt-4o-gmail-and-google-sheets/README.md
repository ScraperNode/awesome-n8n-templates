# 📊 Automate vendor analysis & contract management with GPT-4o, Gmail, and Google Sheets

> ⚡ **142 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How It Works
Schedules automated vendor pricing analysis across multiple sources. Fetches delivery reliability and contract data, analyzes vendor performance using Claude AI, then distributes consolidated reports via Gmail and creates Google Sheets summaries. Target audience: procurement teams and business analysts managing multi-vendor relationships. Solves vendor evaluation bottlenecks by automating data collection, AI-driven analysis, and report distribution.

## Workflow Steps
**What:** Trigger → Scrapes vendor data (pricing, reliability, contracts) → Sends to vendor analysis agent → Branches to multiple outputs (Gmail notification, Google Sheets archive, Data parser).  

## Setup Steps
1. Configure Schedule Trigger timing. 2. Add scraper credentials (Vendor Pricing, Delivery Reliability, Contract Data nodes). 3. Connect Claude/OpenAI API key in Vendor Analysis Agent. 4. Authenticate Gmail account for notifications. 5. Link Google Sheets API for data storage.

## Prerequisites
OpenAI/Claude API key, Gmail credentials, Google Sheets API access, Vendor data sources (web scrapers or direct APIs).

## Use Cases
Automate weekly vendor performance reviews, generate compliance reports for procurement teams 

## Customization
Modify trigger schedule, add/remove scraper nodes for new vendors, adjust Claude prompt for different analysis criteria 

## Benefits
Eliminates manual data gathering (hours to minutes), ensures consistent vendor evaluation criteria

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
