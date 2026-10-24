# 💬 Answer Telegram data questions with DeepSeek, Open-Meteo, Frankfurter, CoinGecko, and StudioAPI

> ⚡ **3 views** · 💬 [Support Chatbots](../)

## Description

Your Telegram bot, now with live data. Ask it about weather, exchange rates, crypto, gold, earthquakes, Bank Indonesia rates, holidays, or Jakarta power supply, and it answers with real numbers while logging every query to Google Sheets.

*Last updated: September 2026.*

## Quick Overview
This workflow turns a Telegram bot into an AI data assistant. Users ask questions in plain language and the agent answers with live data: weather (Open-Meteo), foreign exchange rates (Frankfurter), crypto prices (CoinGecko), gold price, Indonesian earthquakes, Bank Indonesia rates, Indonesian holidays, and Jakarta power supply (StudioAPI). Every query is logged to Google Sheets, and a weekly market briefing is sent to the owner every Monday.

## How it works
1. Triggers when a new message arrives at your Telegram bot.
2. Normalizes the incoming message (text, chat ID, user name, and timestamp).
3. A DeepSeek agent (deepseek-v4-flash) keeps a short conversation memory and picks the right data tool for the question.
4. Weather tool: current conditions from Open-Meteo (temperature, humidity, wind, and weather code) by latitude and longitude.
5. FX Rates tool: reference exchange rates from Frankfurter. Gold Price tool: the current international gold price in USD per troy ounce.
6. Crypto Prices tool: USD prices and 24-hour change for ten major coins from CoinGecko.
7. Indonesian data from StudioAPI: latest earthquakes (BMKG), Bank Indonesia reference rates, national holidays, and Jakarta power supply status.
8. /help and /start return a short menu of supported topics without calling a tool.
9. The question and answer are logged to Google Sheets and the answer is sent back to the user in Telegram as a short, mobile-friendly reply.
10. Every Monday at 07:00 a scheduled branch fetches crypto prices and writes a short market briefing (crypto highlights, gold price, and FX note) for the owner.
11. If a node fails, the Error Trigger path replies in Telegram that the data service is temporarily unavailable, so failed lookups are not silently dropped.

## Setup
1. Create a Telegram bot with BotFather and add your Telegram credentials in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) for the trigger and reply nodes.
2. Connect your OpenAI-compatible API credentials on the model nodes (deepseek-v4-flash by default).
3. Create a StudioAPI key and add an HTTP Header Auth credential (x-api-key). The earthquakes, BI rates, holidays, and power tools require it.
4. Connect your Google Sheets credentials and set the spreadsheet and sheet used to log queries.
5. Send a message to your bot to test, then adjust the system prompt if you want to change what the assistant can answer.

### Quick Answers
**Which data sources does it use?**
Open-Meteo for weather, Frankfurter for FX rates, and CoinGecko for crypto, plus StudioAPI for the international gold price, BMKG earthquakes, Bank Indonesia rates, Indonesian holidays, and Jakarta power supply status.

**Where are my questions stored?**
Every question and answer is logged to Google Sheets, so you keep a history of what was asked.

**Is there a weekly update?**
Yes. Every Monday at 07:00 the workflow writes a short market briefing covering crypto highlights, the gold price, and an FX note for the owner.

**What happens if a data service is down?**
An Error Trigger path replies in Telegram that the service is temporarily unavailable, so failed lookups are never silently dropped.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
