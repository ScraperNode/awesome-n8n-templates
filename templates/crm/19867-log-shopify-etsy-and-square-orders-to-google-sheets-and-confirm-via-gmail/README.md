# 🤝 Log Shopify, Etsy and Square orders to Google Sheets and confirm via Gmail

> ⚡ **19 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives Shopify, Etsy, or Square order webhooks, normalizes them into a single order format, logs new orders to a Google Sheets “Orders” board, and sends a Gmail confirmation email with an estimated ship window based on SKU lead-time rules.

## How it works
1. Receives an incoming order via an HTTP webhook endpoint.
2. Detects whether the payload is from Shopify, Etsy, or Square, normalizes it into a common order structure, and rejects orders missing required details (including Square orders where a deposit hasn’t been captured).
3. Loads existing orders from Google Sheets (or a built-in demo board when the sheet is not configured) and deduplicates by a unique “source|order-no” order key.
4. Validates every line item against configured SKU rules and calculates a working-day ship window from the longest lead time plus buffers, holding orders with unknown SKUs when configured to do so.
5. Writes a single-row order record to the Google Sheets board (or outputs a demo preview instead of writing when the board is not enabled).
6. Sends a confirmation email via Gmail in test/live mode and then updates the Google Sheets row to mark the order as confirmed with a timestamp and “Confirmed” stage.
7. Returns a JSON response to the calling storefront to stop webhook retries, including for held, rejected, duplicate, demo, or preview outcomes.

## Setup
1. Create a Google Sheet with an “Orders” tab and column headings that match the workflow’s configured columns (including “Order key”, “Stage”, and “Confirmation sent”).
2. Add Google Sheets credentials and set the target Spreadsheet ID and tab name in the config (then set BOARD_READY to true).
3. Add Gmail credentials and set your sender details (From name and optional Reply-To) plus TEST_RUN/TEST_EMAIL to control preview, test, or live sending.
4. Update PRODUCT_RULES to include every SKU you sell (and decide whether to hold orders with missing rules).
5. Copy the production webhook URL and configure it as the order webhook endpoint in Shopify, Etsy, and/or Square.

## Customization
- Part 1 of a 2 parts Shopify, Etsy or Square - Order to Ship Engine

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
