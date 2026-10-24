# 📊 Search game prices and deals with Discord and IsThereAnyDeal

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives Discord messages via a webhook, looks up game prices or current deals using the IsThereAnyDeal (ITAD) API, optionally checks stored price history in an n8n Data Table, and posts a formatted reply back to a Discord channel using a bot.

## How it works
1. Receives a POST webhook containing the Discord message text and channel ID from an external Discord relay.
2. Parses the message content to determine the requested command and extract the game name when provided.
3. If a game lookup is requested, searches IsThereAnyDeal for the best matching game and fetches current prices for that game in the specified country.
4. Retrieves any previously stored price history for the matched game from an n8n Data Table and builds a reply that includes current store prices and historical-low information when available.
5. If a deals request is routed, pulls the current top deals from IsThereAnyDeal and formats a short list for Discord.
6. If the message is unrecognized, returns a help message listing supported commands.
7. Sends the formatted reply to Discord using a Discord bot.

## Setup
1. Create a Discord bot, add it to your server with permission to send messages, and connect it in n8n using Discord Bot credentials.
2. Set up an external Discord relay (gateway listener or interaction/webhook handler) that forwards messages to this workflow’s webhook URL as JSON containing at least `content` and `channel_id`.
3. Add IsThereAnyDeal API credentials in the HTTP Request nodes (custom auth) and confirm the country code and query parameters match your needs.
4. Select your target Discord guild and channel in the Discord message node (or adjust it to use the incoming `channel_id` if you want dynamic replies).
5. Create or select an n8n Data Table for stored game history and ensure it includes a `game_id` field used to look up records.

## 🔗 Nodes Used

HTTP Request, Webhook, Discord, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
