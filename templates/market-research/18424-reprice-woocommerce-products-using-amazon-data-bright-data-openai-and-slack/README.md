# 📊 Reprice WooCommerce products using Amazon data, Bright Data, OpenAI and Slack

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to compare WooCommerce product prices against Amazon buy-box prices scraped via Bright Data, uses OpenAI (GPT-5.6) to confirm each Amazon URL matches the same product, then (optionally) updates WooCommerce sale prices, logs results to Google Sheets, and posts a digest to Slack.

## How it works
1. Runs every day on a schedule and loads repricing rules (limits, margin/undercut settings, dry-run flag, and target Slack channel).
2. Fetches up to the configured number of products from WooCommerce and reads a Google Sheets mapping of `sku` to `amazon_url` (plus `cost`) to build a list of comparable product pairs.
3. Triggers Bright Data’s Amazon product dataset for all competitor URLs, then polls the snapshot progress until the scrape is ready.
4. Downloads the scraped results, joins them back to the WooCommerce products by URL, and extracts buy-box price, availability, and title data.
5. Uses OpenAI (GPT-5.6) to verify the WooCommerce and Amazon listings refer to the same product, then calculates a new sale price using guardrails like margin floor, regular-price ceiling, max change per run, and a sanity band.
6. If `dry_run` is off, updates the WooCommerce sale price for each approved change; otherwise, skips writes while keeping the same reporting.
7. Appends each proposed/applied change to a Google Sheets “Reprice Log” tab and posts a summary (including held-back items and reasons) to Slack.

## Setup
1. Add credentials for Bright Data (HTTP Header Auth with `Authorization: Bearer <API_KEY>`), WooCommerce, Google Sheets, OpenAI, and Slack.
2. Create or update a Google Sheet with a mapping tab (for example, `Sheet1`) containing `sku`, `amazon_url`, and `cost` columns, plus a “Reprice Log” tab for appended results.
3. In the workflow settings, set your competitor sheet ID in the repricing rules and update the Google Sheets document ID used for logging.
4. Set the Slack channel name in the repricing rules (for example, `#pricing`) and leave `dry_run` enabled until you validate the digest output.

## Requirements
- A WooCommerce store, a Bright Data account with access to the Amazon products dataset, plus OpenAI, Google Sheets and Slack credentials.

## Customization
- Three optional add-ons ship unwired beside the main chain, so you can plug in whichever fits your shop: Clear Today's Sale Prices rolls a whole run back, Email The Reprice Digest replaces the Slack post, and Hold Back Promo Products keeps named SKUs out of the repricing.
- Tune undercut_percent, min_margin_percent, max_change_percent and the sanity band in Set Repricing Rules. dry_run ships on, so the first run reports what it would change and writes nothing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, WooCommerce, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
