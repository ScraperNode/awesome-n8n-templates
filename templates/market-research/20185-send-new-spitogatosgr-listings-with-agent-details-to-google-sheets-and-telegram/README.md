# 📊 Send new Spitogatos.gr listings with agent details to Google Sheets and Telegram via Apify

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning to scrape new Spitogatos.gr property listings via Apify, logs each new listing (including agent phone details and key property metrics) to Google Sheets, and sends a single Telegram message summarizing the listings that match your price-per-m² or price-cut criteria.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Builds the Spitogatos.gr search parameters (locations, listing type, property type, price/size filters, and time window) from the configured values.
3. Uses Apify (Spitogatos.gr Scraper actor) to fetch listings first published within the selected period.
4. Skips listings that were already sent in previous executions by deduplicating on the listing ID.
5. Formats each new listing into a structured record with price, area, €/m², rooms, floor, year built, neighbourhood/region, agent/agency details, phone, and the listing link.
6. Appends every formatted listing as a new row in Google Sheets.
7. Filters the listings to keep only deals that match your max €/m² threshold or have a price cut (when enabled), then aggregates them into a single payload.
8. Sends one Telegram message (up to 20 listings) with clickable links and key details, noting if more results are available in Google Sheets.

## Setup
1. Create a free Apify account (https://apify.com/?fpr=youssef) and connect it in the Apify node with OAuth or an API token. The workflow runs the Spitogatos.gr Scraper actor (ID: aAohRNwnunh3U1L6d).
2. Connect Google Sheets credentials and paste your target Google Sheet URL into the workflow configuration (the value used for the Google Sheets document).
3. Create a Telegram bot with @BotFather, connect Telegram credentials in n8n, and set your target Telegram chat ID in the workflow configuration.
4. Update the search filters (locations, listingType, propertyType, priceMax, areaMin, roomsMin, postedWithin, and maxPages) and optionally set maxPricePerM2 and alertOnPriceCuts before activating the workflow.

## Requirements
- An Apify account (https://apify.com/?fpr=youssef), the free plan works. Google Sheets and a Telegram bot connected in n8n.

## Customization
- Set maxPricePerM2 (for example 2500) to be alerted only about listings under that price per square metre; use rent in listingType to track rentals instead of sales; add more areas in English or Greek, separated by commas; swap the Telegram node for Slack, Discord or Gmail.

## Additional info
Area names work in English or Greek (Kolonaki, Kolonaki (Thiva), Glyfada), and the results carry the agency name, contact name and phone number, so you can call the agent directly. Skip listings already sent is n8n’s Remove Duplicates node keyed on the listing id, so a daily schedule never repeats a home. Actor page and full input docs: https://apify.com/fayoussef/spitogatos-scraper?fpr=youssef

Need a custom version or another data source? See https://automationbyexperts.com

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
