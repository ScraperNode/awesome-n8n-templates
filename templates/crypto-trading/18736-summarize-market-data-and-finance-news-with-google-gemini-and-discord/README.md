# 📈 Summarize market data and finance news with Google Gemini and Discord

> ⚡ **64 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow posts scheduled market and finance-news summaries to Discord using RSS sources, Yahoo Finance, FX and gold price APIs, and Google Gemini, while also exposing a webhook command interface for on-demand market, stock, gold, USD/INR, and recent-news lookups backed by n8n Data Tables.

## How it works
1. Runs every 6 hours, loads the latest stored market snapshot from an n8n Data Table, and fetches fresh USD/INR, gold price, and major index data from public APIs (including Yahoo Finance).
2. Normalizes the market responses into a single metrics object and alerts a Discord admin channel if all market sources fail.
3. Reads multiple RSS feeds (RBI, Economic Times Markets, Livemint Markets, CNBC Markets, and US Federal Reserve press releases) and merges them into one stream.
4. Loads previously sent finance news from an n8n Data Table, filters to recent items, and deduplicates headlines so only new links remain.
5. Builds a prompt that includes the market figures and shortlisted headlines, summarizes them via Google Gemini (JSON output), and formats a Discord-ready finance update message.
6. Posts the summary to a Discord channel, upserts the market snapshot into an n8n Data Table, and records the sent news items into a “sent news” Data Table for future deduplication and command queries.
7. Accepts POST requests on a webhook endpoint, parses a chat-style command, fetches the required data (market/stock/compare/beststock/gold/usd/news/help), and posts the reply back to Discord.

## Setup
1. Add Discord Bot credentials and set the target server and channels for the scheduled posts, admin error notifications, and command replies.
2. Ensure outbound HTTP access to the workflow’s data sources (open.er-api.com for USD rates, gold-api.com and/or goldprice.dev for gold prices, and query1.finance.yahoo.com for indices and stocks).
3. Add Google Gemini (PaLM) API credentials and select an available Gemini model in the summarization step.
4. Create and select the required n8n Data Tables for market snapshots and sent finance news, and ensure their column mappings match the fields being written.
5. Copy the webhook URL for the command endpoint (/finance-bot) and configure your command source (for example, a Discord interaction relay) to POST messages in the expected payload format (a text/content field and optional channel_id).

## 🔗 Nodes Used

HTTP Request, RSS Read, Webhook, Discord, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
