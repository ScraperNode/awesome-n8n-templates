# 📈 Send the cheapest nearby fuel prices with Apify to Telegram

> ⚡ **27 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs every morning to fetch the cheapest nearby fuel prices from the Apify EU Fuel Prices dataset for France, Spain, or Italy, then formats the top results and sends them to a Telegram chat.

## How it works
1. Runs daily at 07:00 using a scheduled trigger.
2. Sets your country, coordinates, search radius, and target fuel type.
3. Calls the Apify EU Fuel Prices Actor API to return up to five stations within the radius, sorted by the cheapest price for the selected fuel.
4. Formats a Telegram-ready message listing each station’s price, address details, and distance, or a fallback message if no stations match.
5. Sends the formatted fuel price summary to your Telegram chat.

## Setup
1. Create an Apify account and add an HTTP Header Auth credential in n8n with `Authorization: Bearer <YOUR_APIFY_TOKEN>`.
2. Update the workflow settings values for `country`, `latitude`, `longitude`, `radiusKm`, and `fuel` to match your location and fuel type.
3. Create a Telegram bot with @BotFather, add the Telegram credentials in n8n, and set the target Telegram `chatId` in the Telegram send step.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
