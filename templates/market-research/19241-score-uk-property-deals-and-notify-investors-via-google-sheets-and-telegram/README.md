# 📊 Score UK property deals and notify investors via Google Sheets and Telegram

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow ingests UK property listings from Rightmove, Zoopla, and Realtor webhooks or a scheduled/manual run, normalizes and deduplicates them, runs a deterministic underwriting and scoring model, appends each deal to Google Sheets, and alerts investors via email and Telegram when a deal is tiered Hot.

## How it works
1. Runs manually, every day at 6am, or when a Rightmove, Zoopla, or Realtor webhook receives a POST from your scraper.
2. Loads runtime configuration and pulls any queued listings from a scraper feed URL over HTTP.
3. Normalizes listings from all sources into a common structure, removes empty placeholder items, and deduplicates by a normalized address key.
4. Calculates ARV from provided comps (or falls back to provided ARV/price), then computes discount, yield, repairs, max offer prices, cashflow, ROI, and an investment strategy classification.
5. Scores each deal on a 10-point matrix and assigns a tier (Hot, Warm, or Cold).
6. Appends the flattened deal record to a Google Sheets tab.
7. Sends Hot deals to investors via SMTP email and a Telegram bot message, while Warm and Cold deals are logged for audit.

## Setup
1. Set up your scraper to POST listings to the Rightmove/Zoopla/Realtor webhook URLs (or provide a SCRAPER_PULL_URL endpoint for the HTTP pull).
2. Configure the workflow’s Config values, including SCRAPER_PULL_URL, GSHEET_ID, GSHEET_TAB, INVESTOR_EMAILS, and TELEGRAM_CHAT_ID.
3. Add Google Sheets credentials and ensure the target sheet tab has a header row that matches the columns appended by the workflow.
4. Add SMTP credentials for sending investor emails and a Telegram bot credential for Telegram alerts.
5. Review the 6am cron expression in the schedule trigger and adjust the Hot score threshold in the scoring logic if needed.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
