# 📊 Send daily AutoTrader.ca used car alerts to Telegram and Google Sheets via Apify

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning to scrape newly listed AutoTrader.ca used cars via Apify, logs each new listing to Google Sheets, and sends qualifying below-market deals to a Telegram chat.

## How it works
1. Runs every day at 7:00 on a schedule.
2. Builds the AutoTrader.ca search parameters (make/model, price, mileage, year, location, and deal threshold) from configured values.
3. Uses Apify (AutoTrader Canada Car Scraper actor) to fetch listings posted within the last N days and returns listing details including market median price.
4. Removes listings already seen in previous executions using each listing’s URL to avoid repeat alerts.
5. Formats each new listing into a consistent row and appends it to a Google Sheets worksheet.
6. Filters the new listings to keep only deals at or below the configured percentage under AutoTrader’s market median (or keeps all if deals-only mode is disabled).
7. Aggregates the remaining listings into a single message and sends the deal summary to Telegram.

## Setup
1. Create a free Apify account (https://apify.com/?fpr=youssef) and connect it in the Apify node with OAuth or an API token. The workflow runs the AutoTrader Canada Car Scraper actor (ID: bBoEDhBBfWHh82dce).
2. Connect Google Sheets credentials and paste your target spreadsheet URL into the workflow’s Google Sheet URL setting.
3. Create a Telegram bot, add Telegram credentials in n8n, and set your target chat ID in the workflow’s Telegram chat ID setting.
4. Review and adjust the search parameters (makes/models, location, listed-within days, max cars, and deal threshold) before activating the schedule.

## Requirements
- An Apify account (https://apify.com/?fpr=youssef), the free plan works. Google Sheets and a Telegram bot connected in n8n.

## Customization
- Set dealsOnly to false to receive every new car instead of only below-market deals; leave postalCode empty to search all of Canada; switch the Schedule Trigger to hourly if you flip cars; swap the Telegram node for Slack, Discord or Gmail.

## Additional info
Skip cars already sent is n8n’s Remove Duplicates node keyed on the listing URL, so a daily or hourly schedule never sends the same car twice. The market comparison uses AutoTrader’s own median price for comparable vehicles. Actor page and full input docs: https://apify.com/fayoussef/autotrader-canada?fpr=youssef

Need a custom version or another data source? See https://automationbyexperts.com

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
