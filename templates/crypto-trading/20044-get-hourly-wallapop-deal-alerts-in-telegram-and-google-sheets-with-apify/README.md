# 📈 Get hourly Wallapop deal alerts in Telegram and Google Sheets with Apify

> ⚡ **15 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs hourly to scrape new Wallapop listings via Apify, logs all new items to Google Sheets, and sends a Telegram alert for listings at or below your configured price cap.

## How it works
1. Runs every hour on a schedule.
2. Builds a Wallapop search from your keywords, price range, country settings (or uses a provided Wallapop search URL).
3. Uses Apify to run the Wallapop Scraper actor and return the latest listings posted today.
4. Deduplicates results across executions so previously seen listing URLs are skipped.
5. Formats each new listing into a structured row and appends it to Google Sheets.
6. Filters listings that are at or under your alert maximum price, aggregates them into a single payload, and sends one formatted Telegram message with up to 20 items.

## Setup
1. Create a free Apify account (https://apify.com/?fpr=youssef) and connect it in the Apify node with OAuth or an API token. The workflow runs the Wallapop Scraper actor (ID: zxeaZX6wkeQ2UPiYp).
2. Create a Google Sheet, then paste its URL into the workflow and connect your Google Sheets OAuth credentials.
3. Create a Telegram bot with @BotFather, add Telegram credentials in n8n, and set your target chat ID in the workflow.
4. Update the search inputs (keywords, min/max price, country code/country, max items, and alertMaxPrice) and activate the workflow.

## Requirements
- An Apify account (https://apify.com/?fpr=youssef): the free plan returns 5 items per run. Google Sheets and a Telegram bot connected in n8n.

## Customization
- Paste a ready-made Wallapop search URL into searchUrl to use any filter the site offers (category, distance, seller type); change countryCode to it, fr, pt, de or en and country to match; set alertMaxPrice to 0 to be alerted about every new listing; swap the Telegram node for Slack, Discord or Gmail.

## Additional info
Skip items already sent is n8n’s Remove Duplicates node keyed on the listing URL, so an hourly schedule never sends the same item twice. The search is limited to listings posted today and sorted newest first, which keeps each run small. Actor page and full input docs: https://apify.com/fayoussef/wallapop-scraper?fpr=youssef

Need a custom version or another data source? See https://automationbyexperts.com

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
