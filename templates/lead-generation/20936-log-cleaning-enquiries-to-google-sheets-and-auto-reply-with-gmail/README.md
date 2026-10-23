# 🎣 Log cleaning enquiries to Google Sheets and auto-reply with Gmail

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives Shopify, Etsy, or Square order webhooks, normalizes them into a single order format, logs new orders to a Google Sheets “Orders” tab, and sends a confirmation email via Gmail (with preview/test modes), then updates the sheet to mark the order as confirmed.

## How it works
1. Receives an order payload via a Webhook endpoint and loads shared settings (sheet IDs, product rules, and email mode) from the configuration.
2. Detects whether the payload is from Shopify, Etsy, or Square, extracts a common set of order fields, and rejects orders missing required data (and holds Square orders until the deposit is paid).
3. Reads existing rows from Google Sheets (or a built-in demo board if the sheet is not enabled) and checks whether the order key already exists to prevent duplicate logging.
4. Validates each line item against the configured product rules and calculates a working-day shipping window from the longest lead time plus buffers, holding orders that contain unknown SKUs when enabled.
5. Builds a single-row “board” record and composes a customer confirmation email that includes the planned shipping window when available.
6. Appends the order row to Google Sheets, optionally sends the confirmation email via Gmail (live or redirected to a test address), and then updates the sheet to set the order stage to Confirmed with a confirmation timestamp.
7. Responds to the original webhook request with a JSON acknowledgement so the storefront stops retrying.

## Setup
1. Create a Google Sheet with an “Orders” tab that matches the column headings expected in the workflow configuration (for example: Order key, Source, Order no., Placed, Email, Items (json), Ship window start/end, Stage, Confirmation sent).
2. In the config node, set your Google Sheets document ID and tab name and switch BOARD_READY to true (otherwise the workflow runs in demo/preview mode).
3. Add Google Sheets credentials for the Google Sheets nodes and Gmail credentials for the Gmail send node.
4. Configure your Shopify, Etsy, and/or Square webhook to POST to this workflow’s production Webhook URL path (order-in).
5. Review and maintain PRODUCT_RULES (SKUs, lead times, manuals/notes) and set TEST_RUN/TEST_EMAIL to control preview, test, or live sending behavior.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
