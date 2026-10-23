# 📈 Send daily AI market briefings to Telegram, Discord and Postgres with OpenAI, Twelve Data, CoinGecko, FRED, QuantGist and Marketaux

> ⚡ **7 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every weekday morning, pulls market prices, crypto quotes, US 10Y yields, macro calendar events, and top market news from Twelve Data, CoinGecko, FRED, QuantGist, and Marketaux, then uses OpenAI to generate a market briefing, posts it to Telegram, and stores it in Postgres.

## How it works
1. Runs on a weekday schedule at 07:45 (Europe/Berlin).
2. Fetches daily market ETF/FX time series from Twelve Data, crypto prices from CoinGecko, the US 10-year yield series from FRED, a near-term macro events calendar from QuantGist, and recent market news from Marketaux.
3. Normalizes each provider’s response into a consistent structure and captures errors or missing/invalid payloads without guessing.
4. Combines all sources and sends the normalized dataset plus source health to OpenAI to produce a strictly JSON-formatted market briefing  with a single market regime label.
5. Validates and reshapes the AI output (including enforcing allowed market_regime values and array fields) and attaches the raw source data for traceability.
6. Formats the briefing into an HTML Telegram message and sends it to the configured Telegram chat.
7. Inserts the full briefing (headline, summary, assets, events, news, drivers, opportunities, and raw sources) into a Postgres table.

## Setup
1. Add credentials for Twelve Data, CoinGecko, FRED, QuantGist, and Marketaux and ensure each API key is passed via the configured HTTP header/query authentication.
2. Add an OpenAI API credential and select/allow access to the configured model (gpt-5.6-luna) in your n8n environment.
3. Create a Telegram bot, connect Telegram credentials, and replace the chat ID with your target recipient/channel.
4. Add Postgres credentials and create the public.briefings table with columns matching the INSERT statement (including jsonb fields for assets/events/news/drivers/opportunities/watch_next/raw_sources).
5. Review and adjust the tracked symbols, countries/language filters, and the timezone/schedule if you want different coverage or delivery time.

## 🔗 Nodes Used

HTTP Request, Postgres, Telegram, Discord, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
