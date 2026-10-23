# 📊 Send Amazon wishlist price drop alerts with Apify, Google Sheets, and Telegram

> ⚡ **41 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs on a schedule to check Amazon product pages listed in a Google Sheets wishlist using Apify’s Amazon Product Scraper, updates the last seen price in the sheet, and sends a Telegram alert when the price drops to or below your target.

## How it works
1. Runs on a schedule.
2. Reads all product rows from a Google Sheets wishlist that includes the product URL, target price, and last seen price.
3. Uses Apify’s Amazon Product Scraper actor to fetch current product details and price for each URL.
4. Updates the matching Google Sheets row with the latest ASIN, the current timestamp, and the latest price.
5. Checks whether the current price is less than or equal to the target price and different from the last seen price.
6. Sends a Telegram message with the product name, new price, target price, and URL when a qualifying price drop is detected.

## Setup
1. Connect your Google Sheets OAuth2 credentials and set the correct spreadsheet and sheet containing columns like URL, Name, Target price ($), and Last seen price ($).
2. Connect your Apify account (OAuth2) and ensure the Amazon Product Scraper (junglee/Amazon-crawler) actor is available to run.
3. Connect your Telegram bot credentials and set the correct chat destination for the alert message.
4. Ensure your Google Sheet has a reliable matching key (ASIN) or adjust the update matching columns if you want to match rows by a different field.

## Requirements
- Apify and Telegram accounts.

## Customization
- Swap the Amazon Product Scraper for another Apify Actor to track flights, real estate, Steam games, or crypto, and replace Telegram with Slack or email.

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
