# 📈 Send new token listing alerts from 10+ crypto exchanges to Telegram, Discord and Sheets

> ⚡ **1 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview

Every five minutes this workflow pulls newly announced token listings from a free public feed covering ten crypto exchanges, keeps only the ones you care about, and posts them to Telegram, Discord and Google Sheets.

## How it works

1. A schedule trigger starts the run every five minutes.
2. A single Settings node holds everything you may want to change: the Telegram chat, an exchange list, spot or futures, a keyword filter, how many days to look back, and the message language.
3. An HTTP Request node calls a free, public, read-only JSON feed of listing announcements. It needs no account, no API key and no token, so the workflow runs the moment you import it.
4. A guard node reads the count field and ends the run quietly when the feed is unreachable or returns nothing.
5. Split Out turns the response into one item per listing, then Remove Duplicates stores each listing permalink across executions so restarts and overlapping windows never announce the same listing twice.
6. Two filter branches narrow the stream to your exchanges and your keyword, matching all three language titles at once. Anything filtered out goes to its own branch so you can see it in the execution log.
7. A Set node picks the headline in your language, joins the token symbols, works out how old the announcement is, and composes the message once for every channel.
8. Spot and futures listings take separate Telegram branches so each reads differently, while Discord and Google Sheets stay off until you switch them on.

## Setup

1. Add a Telegram credential using a bot token from BotFather, then open the Settings node and put your chat, group or channel ID into telegram_chat_id.
2. Leave every other Settings field at its default to receive all listings from all more than ten exchanges, or narrow it down: exchanges takes comma separated ids such as binance,okx, listing_type takes spot or futures, and keyword alerts you only when the headline contains that word.
3. Set language to en, zh or ko to choose which headline the message uses. Raise lookback_days up to thirty on the first run if you want a backfill.
4. To post to Discord as well, set send_to_discord to true and paste a Discord channel webhook URL into discord_webhook_url. A webhook URL needs no n8n credential.
5. To keep a spreadsheet log, set log_to_sheet to true, select a Google Sheets credential, set the spreadsheet id, and create a sheet named Listings.
6. Save the workflow and activate it.

## Requirements

- A Telegram bot token from BotFather. Nothing else is required, because the listings feed is public and unauthenticated.
- Optional: a Discord channel webhook URL, and a Google Sheets credential with a spreadsheet you can write to.

## Customization

- Change the schedule interval to poll more or less often. The feed is cached for five minutes, so five minutes is a sensible floor.
- Swap either Telegram node for Slack, Gmail, or any other channel. Everything upstream stays the same.
- The feed also publishes the monitored exchanges and an RSS version of the same listings, so you can build a digest instead of per listing alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
