# 📈 Track weekend flight prices with Google Flights, SerpAPI, OpenAI and Telegram

> ⚡ **30 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow lets you create, list, cancel, and check weekend flight price alerts via Telegram (text or voice) and runs a daily schedule to price active routes using Google Flights results from SerpAPI, storing alert state in n8n Data Tables and sending deal digests back to Telegram.

## How it works
1. Triggers either when a Telegram message/voice note is received or every day at 08:00 (server timezone).
2. For Telegram voice messages, downloads the audio from Telegram and transcribes it with OpenAI, then normalizes all inputs into a single request format.
3. Uses OpenAI to parse the user’s intent (create/list/cancel/status) and route preferences (airports, budget, window, weekend pattern, cadence) and converts them into concrete search dates and airport lists.
4. For new alerts, fetches a sample Google Flights result via SerpAPI to validate the budget, generates an alert card, saves the alert to an n8n Data Table, and confirms creation in Telegram.
5. For list/cancel/status requests, reads the alerts or run log from n8n Data Tables, applies the requested action (including marking an alert cancelled), and replies in Telegram.
6. On scheduled runs, loads active alerts from the Data Table, queries Google Flights via SerpAPI for the relevant weekend date pairs, aggregates the cheapest option per weekend, and formats a ranked digest with booking links.
7. Sends the digest to Telegram when results meet the notification rules, then logs the run and updates each alert’s last checked and last seen price in the Data Table.

## Setup
1. Create a Telegram bot with @BotFather, add a Telegram credential in n8n, and enable the Telegram Trigger so it can receive updates.
2. Add an OpenAI credential for both intent parsing and voice transcription.
3. Add a SerpAPI credential with Google Flights access and ensure your plan/quota can cover the number of searches your alerts generate.
4. Create two n8n Data Tables (for alerts and for the run log) with the required columns, then select their table IDs in all Data Table nodes used by the workflow.
5. Update the Config values (home airport, max searches per run, and the admin_chat_id for error notifications) before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
