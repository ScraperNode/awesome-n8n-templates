# 📊 Track lowest Google Shopping prices with Bright Data, Claude, and Google Sheets

> ⚡ **55 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily and checks Google Shopping prices for product keywords stored in Google Sheets using Bright Data snapshots, then uses Anthropic Claude to exclude accessories and identify the lowest valid price and retailer before writing the results back to the same sheet.

## How it works
1. Runs every day at 8 AM on a schedule.
2. Reads product keywords (and their row numbers) from a Google Sheets spreadsheet.
3. For each keyword, creates a Bright Data Google Shopping dataset snapshot and polls Bright Data until the snapshot status is ready.
4. Fetches the snapshot’s Google Shopping results from Bright Data and aggregates them into a single payload.
5. Sends the results to Anthropic Claude, which filters out accessory listings and returns the lowest valid product price and retailer as JSON.
6. Updates the corresponding row in Google Sheets with the lowest price, retailer, and last-checked date.

## Setup
1. Add credentials for Google Sheets OAuth2, Bright Data, and the Anthropic API (Claude).
2. Replace `YOUR_GOOGLE_SHEET_ID` and select the correct sheet/tab in both Google Sheets nodes.
3. Ensure your Google Sheet contains columns for `Product Keyword`, `Lowest Price`, `Retailer`, and `Last Checked`, and that each row includes the `row_number` used for updates.
4. Confirm the Bright Data dataset selection (Google Shopping products search US) matches your desired country/market, then activate the workflow.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
