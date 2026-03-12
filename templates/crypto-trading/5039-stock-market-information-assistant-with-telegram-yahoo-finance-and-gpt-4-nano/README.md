# 📈 Stock market information assistant with Telegram, Yahoo Finance, and GPT-4 Nano

> ⚡ **1,339 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**How it works**

1. Listens to Telegram messages to detect stock-related queries.
2. Extracts company name and identifies its exact stock ticker symbol.
3. Searches Yahoo Finance for stock info using the ticker.
4. Fetches and formats the latest stock data like price and key stats.
5. Sends a clean, simplified reply back to the user on Telegram.

**Set up steps**
- Requires Telegram Bot Token and Apify API credentials.
- Import workflow to n8n and link both Apify actors (Google Search + Yahoo Finance).
- Link OpenRouter for AI and enable Telegram trigger.
- Takes ~10–15 min to connect services and test.
- Includes sticky notes with setup links and tutorial videos.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Execute Workflow Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
