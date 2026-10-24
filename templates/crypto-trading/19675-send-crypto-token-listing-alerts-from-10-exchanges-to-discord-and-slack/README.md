# 📈 Send crypto token listing alerts from 10+ exchanges to Discord and Slack

> ⚡ **6 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview

Every five minutes this workflow pulls newly announced token listings from a free public feed covering 10+ crypto exchanges, keeps only the ones you care about, and posts each as a color-coded Discord embed, with an optional Slack copy.

## How it works

1. A schedule trigger starts the run every five minutes.
2. A single Settings node holds everything you may want to change: the Discord webhook URL, an exchange list, spot or futures, a keyword filter, how many days to look back, the headline language, and a Slack switch.
3. An HTTP Request node calls a free, public, read-only JSON feed of listing announcements. It needs no account, no API key and no token, so the workflow runs the moment you import it. Binance and Gate.io entries arrive over the exchanges' own WebSocket streams; the other exchanges are polled at high frequency.
4. A guard node reads the count field and ends the run quietly when the feed is unreachable or returns nothing.
5. Split Out turns the response into one item per listing, then Remove Duplicates stores each listing permalink across executions so restarts and overlapping windows never announce the same listing twice.
6. Two filter branches narrow the stream to your exchanges and your keyword, matching all three language titles at once. Anything filtered out goes to its own branch so you can see it in the execution log.
7. A Set node picks the headline in your language, joins the token symbols, works out how old the announcement is, and keeps the link to the original announcement.
8. Spot listings post to Discord as a green embed and futures listings as an orange embed, each with exchange, symbols and age fields. When Slack is switched on, the same listing also goes to a Slack incoming webhook as mrkdwn text with a spot or futures prefix.

## Setup

1. In Discord open the channel settings, choose Integrations, then Webhooks, create a webhook and copy its URL.
2. Open the Settings node and paste that URL into discord_webhook_url. A webhook URL needs no n8n credential, so nothing else has to be configured.
3. Leave every other Settings field at its default to receive all listings from all 10+ exchanges, or narrow it down: exchanges takes comma separated ids such as binance,okx, listing_type takes spot or futures, and keyword alerts you only when the headline contains that word.
4. Set language to en, zh or ko to choose which headline the embed uses. Raise lookback_days up to thirty on the first run if you want a backfill.
5. To post to Slack as well, set send_to_slack to true and paste a Slack incoming webhook URL into slack_webhook_url.
6. Save the workflow and activate it.

## Requirements

- A Discord channel webhook URL. Nothing else is required, because the listings feed is public and unauthenticated.
- Optional: a Slack incoming webhook URL.

## Customization

- Change the schedule interval to poll more or less often. The feed is cached for five minutes, so five minutes is a sensible floor.
- Edit the color numbers in the two Discord nodes, or add more embed fields, to restyle the message. Everything upstream stays the same.
- Swap either Discord node for Telegram, Gmail, or any other channel, or add a Google Sheets append for a log.
- The feed also publishes the monitored exchanges and an RSS version of the same listings, so you can build a digest instead of per listing alerts.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
