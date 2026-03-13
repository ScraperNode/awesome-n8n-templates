# 🎣 Score Upwork jobs and generate proposals with Apify, GPT-4o, Google Sheets and Telegram

> ⚡ **192 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## How it works
1. **Schedule Trigger** runs every 6 hours (customizable)
2. **Apify Scraper** fetches Upwork jobs matching your criteria
3. **Deduplication** filters out jobs you've already seen
4. **AI Scoring** (GPT-4) evaluates fit, client quality, budget (0-100 score)
5. **Filter** keeps only jobs scoring 60+
6. **Proposal Generator** creates personalized proposals
7. **Google Sheets** logs all results
8. **Telegram** sends summary notification

## Setup steps
**Time:** ~15 minutes

1. Create Google Sheet with "Job ID" column
2. Get Apify account + Upwork scraper actor
3. Get OpenAI API key
4. Set environment variables:
   - `GOOGLE_SHEETS_DOC_ID`
   - `APIFY_ACTOR_ID`
   - `TELEGRAM_CHAT_ID`
5. Create credentials: Google Sheets, Apify (Header Auth), OpenAI, Telegram
6. Connect credentials to workflow nodes

## Who is this for?
- Freelancers actively applying to Upwork jobs
- Agencies monitoring multiple job categories
- Consultants prioritizing high-quality leads

## Estimated costs
- **Per run:** $0.50-3.00 (Apify + OpenAI)
- **Monthly (4x/day):** $50-200

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
