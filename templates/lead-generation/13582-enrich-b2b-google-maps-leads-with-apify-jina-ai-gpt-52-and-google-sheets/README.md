# 🎣 Enrich B2B Google Maps leads with Apify, Jina AI, GPT-5.2 and Google Sheets

> ⚡ **81 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stop wasting hours manually hunting for business leads. This workflow automates the entire process from scraping Google Maps to extracting contact emails all triggered from your phone via Telegram.

## What It Does

Send a single message to your Telegram bot (`Sector; Limit; MapsURL`) and the system takes over. It scrapes business data from Google Maps using Apify, generates AI-powered company summaries via OpenAI, hunts for contact emails from business websites using Jina AI, then stores everything neatly in Google Sheets.

## Who It's For

Sales reps building cold outreach lists, marketing agencies prospecting new clients, or anyone who needs targeted local business data fast — without paying for overpriced lead databases.

## Why It's Worth It

Manual research that takes 4 hours gets done in under 5 minutes for 50 leads. Pay only for what you use (Apify + OpenAI) instead of fixed monthly subscriptions. AI deduplication keeps your CRM clean and consistent.

## What You'll Need

| Tool | Purpose |
|------|---------|
| [n8n](https://n8n.partnerlinks.io/khmuhtadin) | Workflow engine |
| [Apify](https://apify.com?fpr=khmuhtadin) | Google Maps scraper |
| OpenAI API | Summaries & email extraction |
| Google Sheets | Lead storage |
| Telegram Bot | Mobile trigger interface |
| Jina AI | Website-to-text conversion |

## Quick Setup

1. Import the JSON workflow into your n8n instance
2. Connect credentials: Telegram bot token, Apify API key, OpenAI key, Google account
3. Set up your Sheet with the matching column headers
4. Test with: `Coffee Shops; 5; https://www.google.com/maps/search/coffee+shops+london`

## How the Logic Works

The workflow runs a two-stage loop per business. First it saves core data (name, phone, address). If a website exists, it then attempts email enrichment. This way, you never lose basic lead data even if a website crawl fails.

## Extend It Further

Swap Google Sheets for HubSpot or Pipedrive, push results to a Slack sales channel, or chain a Gmail node to auto-send intro emails the moment a lead is found.

---

**Created by:** [Khaisa Studio](https://khaisa.studio)
**Category:** Marketing | **Tags:** Lead Gen, AI, Google Maps, Telegram
**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, OpenAI, Jina AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
