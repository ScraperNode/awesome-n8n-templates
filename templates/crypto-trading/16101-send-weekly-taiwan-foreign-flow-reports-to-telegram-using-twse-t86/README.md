# 📈 Send weekly Taiwan foreign flow reports to Telegram using TWSE T86

> ⚡ **14 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every Monday morning and pulls last week’s TWSE T86 institutional trading data, aggregates foreign investor net flows into weekly leaders and streaks, and sends a plain-text report to a Telegram chat.

## How it works
1. Runs every Monday at 08:00 Asia/Taipei on a schedule.
2. Loads configuration values such as the target Telegram chat ID, list sizes (Top N), streak threshold, and a holiday skip list.
3. Calculates last Monday to last Friday dates and removes any days listed as market holidays.
4. Requests the TWSE public T86 institutional trading report for each remaining trading date and ignores days where TWSE returns no data.
5. Aggregates the week’s data to compute foreign investor weekly net-buy and net-sell leaders plus consecutive buy/sell streak lists based on the configured threshold.
6. Formats the results into a plain-text Telegram message with data source notes and a risk disclaimer, then sends it via your Telegram bot.

## Setup
1. Create a Telegram bot with BotFather and add the bot token to an n8n Telegram credential.
2. Set your target `telegramChatId` (and optionally `topN`, `consecutiveThreshold`, and `holidaySkipList`) in the configuration step.
3. Confirm the schedule time zone (Asia/Taipei) and weekly cron timing, run it once with Execute to confirm the Telegram message arrives, then activate the workflow.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
