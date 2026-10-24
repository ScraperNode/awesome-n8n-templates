# 📊 Monitor product prices and stock with Google Sheets, OpenAI, and Slack

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every 6 hours to monitor product URLs from Google Sheets by capturing rendered HTML with Snapshot Site, extracting price and availability with OpenAI, posting change alerts to Slack, and updating the watchlist rows with the latest values.

## How it works
1. Runs every 6 hours on a schedule.
2. Reads the product watchlist (URLs and last known values) from a Google Sheets tab and processes the items one by one.
3. Uses Snapshot Site to fetch each product page as fully rendered HTML, and posts a failure message to Slack if the capture returns an API error.
4. Cleans the HTML and uses OpenAI (LangChain Information Extractor) to extract the current price, currency, availability, title, and SKU.
5. Compares the extracted price and stock status with the last recorded values in Google Sheets to classify the result as a price/availability change, unchanged, or an initial baseline.
6. Sends a Slack message only when a real price or stock change is detected.
7. Appends or updates the matching watchlist row in Google Sheets (matched by URL) with the latest price, availability, currency, check timestamp, and change type.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add a Snapshot Site API credential.
2. Add Google Sheets OAuth credentials and replace the placeholder Google Spreadsheet URL/ID used by the watchlist read and update steps.
3. Add an OpenAI API credential for the Information Extractor model and adjust the model name if needed.
4. Add Slack credentials and set the target channels for change alerts and capture-failure alerts.
5. Create a Google Sheets tab named `Watchlist` with a header row including at least `url`, `productName`, `lastPrice`, `lastAvailability`, `currency`, `lastCheckedAt`, and `lastChangeType`, and ensure URLs are full `https://` links.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
