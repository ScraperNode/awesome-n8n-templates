# 📊 Track Wayfair product price drops with Apify, Google Sheets, and Gmail

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every 6 hours to scrape a Wayfair product’s current price with Apify, logs each snapshot to Google Sheets, and sends a Gmail alert when the latest price matches the lowest recorded price.

## How it works
1. Runs every 6 hours on a schedule.
2. Uses Apify (Wayfair Scraper Actor) to scrape the configured Wayfair product URL and return the current price and product metadata.
3. Appends the latest price, regular price, and scrape timestamp to a Google Sheets worksheet as a new row.
4. Reads the full price history from Google Sheets and calculates the latest price, the lowest historical price, and whether the latest is a new low.
5. Sends a Gmail email alert to the configured recipient when the latest price equals the lowest recorded price.

## Setup
1. Add an Apify API token credential and replace `<<YOUR_WAYFAIR_PRODUCT_URL>>` in the Apify request body with the Wayfair product URL(s) you want to monitor.
2. Add a Google Sheets OAuth credential, then select your spreadsheet document and target sheet in both Google Sheets steps and ensure the sheet has columns for `price`, `regular_price`, and `scraped_at`.
3. Add a Gmail OAuth credential and set the recipient email address in the Gmail step (and adjust the email content if you want different fields).
4. Optionally change the schedule interval if you want to scrape more or less frequently.

## Requirements
- Apify account and Google Account

## Customization
- Swap Gmail for Slack, Discord, or a webhook to change the alert channel. Track extra signals, such as review count or rating, by mapping more Actor fields into the sheet, or fan the workflow out across Amazon, Target, and other retail Actors to compare prices across sites

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
