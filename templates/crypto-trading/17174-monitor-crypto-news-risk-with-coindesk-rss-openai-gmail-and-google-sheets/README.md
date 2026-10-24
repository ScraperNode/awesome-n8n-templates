# 📈 Monitor crypto news risk with CoinDesk RSS, OpenAI, Gmail, and Google Sheets

> ⚡ **50 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow polls the CoinDesk RSS feed every 10 minutes, filters for crypto-related stories, checks Google Sheets to avoid duplicates, uses OpenAI to score and summarize risk, logs results to Google Sheets, and sends Gmail alerts when the risk priority is HIGH or MEDIUM.

## How it works
1. Polls the CoinDesk RSS feed every 10 minutes and retrieves the latest articles.
2. Extracts each article’s title, description, link, and publish date, generates an article ID, and filters to only crypto-relevant items using a keyword match.
3. Checks a Google Sheets “Seen Articles” tab to skip any article IDs that have already been processed.
4. Sends the article text to the OpenAI Chat Completions API to return a JSON risk assessment including summary, coins, risk level, score, and recommended action.
5. Parses the OpenAI response, normalizes the risk level into a HIGH/MEDIUM/LOW priority, and appends the article ID to the “Seen Articles” tab and the full analysis to a “Risk Log” tab in Google Sheets.
6. Sends a formatted Gmail alert email for articles marked HIGH or MEDIUM priority.

## Setup
1. Add an OpenAI API credential (OpenAI API) for the HTTP request to the Chat Completions endpoint.
2. Create a Google Sheet with two tabs named “Seen Articles” and “Risk Log” and the exact column headers shown in the workflow notes, then connect a Google Sheets credential and replace YOUR_CRYPTO_MONITOR_SHEET_ID.
3. Connect a Gmail credential and replace YOUR_ALERT_EMAIL with the recipient address for alerts.
4. Optionally adjust the RSS poll cron schedule and the keyword list used to determine crypto relevance before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
