# 📈 Switch Gainium DCA bot risk mode with the fear and greed index and Telegram

> ⚡ **13 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily, fetches the Crypto Fear & Greed Index from alternative.me, and uses it to start or stop a Gainium Crypto Trading DCA bot as a simple risk-on/risk-off switch, sending the current regime and any errors to Telegram.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Loads your bot settings, Fear/Greed thresholds, and Telegram chat ID from a single configuration step.
3. Fetches the latest Crypto Fear & Greed Index value from the public alternative.me API.
4. Classifies the 0–100 index value into risk-off, risk-on, or neutral based on your thresholds.
5. Stops the Gainium bot when the value is at or below the fear threshold, starts the Gainium bot when it is at or above the greed threshold, and makes no change in the neutral band.
6. Sends a Telegram message describing the index value, regime, and action taken, and posts Telegram alerts if the index fetch, bot action, or any workflow step fails.

## Setup
1. Install the n8n-nodes-gainium community node and add a Gainium API credential with permission to start/stop the target bot.
2. Add Telegram credentials (bot token) and set your Telegram chat ID in the Config step, and also update the chat ID in the three alert steps that use a hardcoded value.
3. In the Config step, set your Gainium trading bot ID, bot type (for example, dca), paper_trading mode, and your fear_threshold and greed_threshold values.
4. Adjust the daily schedule time if needed and keep paper_trading enabled until you are ready to run the workflow against live trading.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
