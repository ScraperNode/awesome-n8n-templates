# 📈 Track Amazon price drops from Google Sheets with Apify and Telegram

> ⚡ **17 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow checks Amazon product prices listed in Google Sheets using the Apify Amazon Product Scraper and sends Telegram alerts when a price drops to or below your target, while updating the sheet with the latest price and check timestamp.

## How it works
1. Runs on a scheduled trigger at the interval you set.
2. Reads all product rows (including URL, ASIN, target price, and last seen price) from Google Sheets.
3. For each product URL, runs the Apify Amazon Product Scraper Actor and returns the current price and ASIN.
4. Compares the current price to the Google Sheets target price and last seen price to detect a real drop at or below the target.
5. Sends a Telegram message with the product name, new price, target price, and link when the drop condition matches.
6. Updates Google Sheets with the latest ASIN, last seen price, and the current “Last checked” timestamp.

## Setup
1. Create or choose a Google Sheet with columns for Name, URL, ASIN, Target price ($), Last seen price ($), and Last checked, and paste its document ID and sheet tab into both Google Sheets nodes.
2. Add a Google Sheets OAuth2 credential in n8n with access to that spreadsheet.
3. Add an Apify OAuth2 credential and ensure the workflow can run the Amazon Product Scraper Actor (BG3WDrGdteHgZgbPK).
4. Create a Telegram bot (BotFather), add a Telegram credential in n8n, and set the Chat ID used to receive alerts.
5. Set your desired schedule interval in the Schedule Trigger before activating the workflow.

## Customization
- Swap the Amazon Product Scraper for a different Apify Actor, such as Google Flights, Zillow, or Booking.com, to track prices on other sites. Replace the Telegram node with Slack, Email, or Discord for a different alert channel.

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
