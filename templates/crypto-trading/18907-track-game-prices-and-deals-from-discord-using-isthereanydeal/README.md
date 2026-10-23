# 📈 Track game prices and deals from Discord using IsThereAnyDeal

> ⚡ **18 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow connects Discord with the IsThereAnyDeal (ITAD) API, enabling users to manage a game watchlist via Discord commands, get real-time deal and price updates, and receive automated price-drop alerts within Discord channels.

## How it works
1. Receives command messages through a Discord webhook.
2. Parses the command and routes it based on user input (e.g., watch, unwatch, watchlist, price, deal, alerts, clearwatchlist).
3. Uses the IsThereAnyDeal API to search for games, retrieve current prices, top deals, and historical lows according to the user command.
4. Updates or modifies user watchlists and alerts stored in n8n data tables as users add/remove games or clear their lists.
5. Formats and sends interactive response messages, personalized price info, recent alerts, and help messages back to Discord.
6. Runs every 6 hours to check all active watchlists against the latest prices from the ITAD API.
7. Compares new prices with historical and target values, and sends automated Discord alerts to users when their tracked games meet deal or price-drop conditions.
8. Records sent alerts and updates price histories to prevent duplicates and keep the watchlist accurate.

## Setup
1. Add Discord Bot API credentials and configure the Discord webhook for message intake and replies.
2. Set up an IsThereAnyDeal API generic (custom) authentication credential for making ITAD API requests.
3. Configure and create n8n data tables for watchlists, alerts, and price history, updating table IDs in each relevant node.
4. Copy the Discord webhook URL into your desired Discord server or relevant bot integration settings.
5. Optionally, customize command responses and scheduling parameters as needed for your Discord community.

## 🔗 Nodes Used

HTTP Request, Webhook, Discord, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
