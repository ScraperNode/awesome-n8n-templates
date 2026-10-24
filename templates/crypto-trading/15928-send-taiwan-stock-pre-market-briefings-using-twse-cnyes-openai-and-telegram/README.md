# 📈 Send Taiwan stock pre-market briefings using TWSE, CNYES, OpenAI and Telegram

> ⚡ **45 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every weekday morning, fetches the latest available TWSE institutional trading and market data plus CNYES headlines, summarizes it with OpenAI into a short briefing, and sends the result as plain text to a Telegram chat.

## How it works
1. Runs on a cron schedule at 08:00 Monday to Friday in Asia/Taipei.
2. Determines the most recent trading day by checking TWSE availability for prior weekdays.
3. Pulls TWSE institutional net buy/sell data (T86), TWSE market close data (MI_INDEX) to derive index and limit up/down counts, and the latest CNYES headline news.
4. Normalizes and validates the fetched datasets, falls back to “no data” messages when sources are unavailable, and prepares prompt variables including an optional watchlist.
5. Sends the prepared data to OpenAI (gpt-4o-mini) to generate a structured JSON briefing with a required risk disclaimer.
6. Formats the AI JSON into a plain-text message and sends it to the configured Telegram chat via a Telegram bot.

## Setup
1. Create and select an OpenAI API credential (API key) for the OpenAI node.
2. Create and select a Telegram Bot credential (BotFather token) for the Telegram node.
3. Message your bot, retrieve the target chat ID via `https://api.telegram.org/bot<TOKEN>/getUpdates`, and paste it into `telegramChatId` in the Config step.
4. Optionally adjust `topN`, `promptStyle`, and `watchlist`, then run a manual execution to verify output before activating the schedule.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
