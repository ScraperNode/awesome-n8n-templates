# 📈 Send crypto price spike alerts with CoinGecko, OpenAI, and Telegram

> ⚡ **0 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
Crypto holders, traders, and anyone watching the market who wants instant alerts when something moves hard, without staring at charts all day.

## How it works
1. Every 6 hours the workflow pulls the top 30 coins by market cap from the free CoinGecko API (no API key needed) and flags any coin whose 24h price moved beyond your threshold, 5 percent by default. It ranks the movers by size of move, then OpenAI writes a sharp plain-language take on what might be driving the moves. Everything is formatted into a clean Markdown alert, AI take first, then the movers with prices and percentages, and sent to your Telegram chat. If nothing moved beyond your threshold, the workflow ends quietly with no alert.

## Setup
1. 1. Get an OpenAI API key from platform.openai.com and add it as credentials on the AI Market Take node. 2. Create a Telegram bot with @BotFather and copy the API token. 3. Get your chat ID (message @userinfobot on Telegram). 4. In n8n, add your Telegram credentials on the Send Telegram Alert node. 5. Open the Configuration node and paste your chat ID. 6. Press Execute on the manual trigger to test, then activate the workflow.

## Requirements
- An OpenAI API key (used for the AI market take step). A Telegram bot token and your Telegram chat ID. Nothing else: market data comes from a free public API, so no other keys are needed.

## Customization
- Raise or lower the spike threshold, track more or fewer coins, or change the check frequency in the Configuration node. Swap the Telegram node for Slack, Discord, or email to change how alerts are delivered.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
