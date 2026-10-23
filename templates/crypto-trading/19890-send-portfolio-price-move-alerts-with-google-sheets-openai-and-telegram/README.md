# 📈 Send portfolio price move alerts with Google Sheets, OpenAI and Telegram

> ⚡ **4 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow checks your Google Sheets portfolio for large daily price moves using Yahoo Finance data, enriches movers with SEC EDGAR filings and Google News results via SerpAPI, has OpenAI generate an explanation, then sends a Telegram alert and logs a summary back to Google Sheets.

## How it works
1. Runs on a weekday schedule at 10:00, 14:00, and 18:00 (Europe/Berlin), and can also be invoked on demand via an Execute Workflow trigger.
2. Loads alert settings (chat ID and move threshold) and reads your holdings from a Google Sheets “portfolio” tab, resolving each holding to a Yahoo Finance symbol.
3. Fetches recent quotes from Yahoo Finance in batches and pulls EUR FX rates from Frankfurter, then computes each holding’s 1-day move versus the previous close and de-duplicates repeat alerts within the same day.
4. For holdings that breach the configured percentage threshold, looks up recent SEC EDGAR submission data (when a US CIK can be resolved) and fetches recent related news with SerpAPI Google News search.
5. Combines the price move, SEC filings, and news context, then asks OpenAI (GPT-5) to produce a Telegram-ready HTML explanation grounded in the evidence.
6. Sends the formatted alert to your Telegram chat and appends a log entry (timestamp, movers, and preview) to a Google Sheets “finance_alert” tab.

## Setup
1. Create a Telegram bot, add Telegram credentials in n8n, and set your Telegram chat ID in the ⚙️ Config node.
2. Create a Google Sheet with a “portfolio” tab (at minimum: ticker, name, market, and an optional yahoo column for exact Yahoo symbols) and a “finance_alert” tab for logging, then connect Google Sheets OAuth and set the spreadsheet URL/ID in both Google Sheets nodes.
3. Add a SerpAPI credential (used for Google News results) and an OpenAI API credential (used by the GPT-5 chat model).
4. Adjust the move thresholds and schedule times as needed in the ⚙️ Config node and the Schedule Trigger.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
