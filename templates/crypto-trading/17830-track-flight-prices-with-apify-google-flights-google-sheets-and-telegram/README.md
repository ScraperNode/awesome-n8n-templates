# 📈 Track flight prices with Apify Google Flights, Google Sheets, and Telegram

> ⚡ **152 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs daily to search flight prices via the Apify Google Flights actor, logs each check to Google Sheets, and sends a Telegram alert when the lowest price drops below your threshold and is meaningfully lower than the last notified price.

## How it works
1. Runs every day at 7am and loads the flight search inputs (route, dates, passengers, cabin class, currency, and alert thresholds).
2. Calls the Apify Google Flights API to fetch matching flight offers for the configured search.
3. Parses the returned offers to find the lowest price, extract key flight details, and build a Google Flights booking link.
4. If at least one offer is found and the lowest price is at or below the configured price threshold, it reads the previous notification data from Google Sheets.
5. Compares the current lowest price to the last notified price and only proceeds if the price is lower by at least the configured re-alert buffer.
6. Generates an encoded Google Flights URL, sends a detailed Telegram message with the best deal and link, and upserts the latest notified price and timestamps into Google Sheets.

## Setup
1. Create an Apify account, subscribe to the Google Flights actor used by this template, and add an HTTP Header Auth credential in n8n with your Apify API token.
2. Add a Google Sheets Service Account credential, share the target spreadsheet with the service account email, and update the spreadsheet ID and sheet name if you don’t use the included “Price Log / Sheet1” setup.
3. Create a Telegram bot, add a Telegram API credential in n8n, and set the target chat ID in the Telegram message step.
4. Update the search parameters (origin/destination IATA codes, dates, passengers, cabin class, currency) plus `priceThreshold` and `reAlertBufferAmount` to match your trip and alert preferences.
5. Ensure your Google Sheet has columns matching the workflow’s upsert fields (for example RouteKey, LastNotifiedPrice, LastNotifiedAt, LastCheckedAt, and status) so the alert-suppression logic works correctly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
