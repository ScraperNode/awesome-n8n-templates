# 📊 Find underpriced Vinted deals with Apify, Google Sheets, OpenAI, and Discord

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Watches multiple Vinted searches, tracks each search's 14-day median price, scores new or cheaper listings against it, skips anything an AI check flags as fake, damaged or mis-sized, and sends real deals to Discord: the best instantly, the rest in a daily digest.

## How it works
1. You keep a Google Sheet of searches — one row per search, each with its own Discord channel webhook, so different searches can alert different channels or people.
2. Every 15 minutes the workflow reads your active rows, builds the actor's watchlist input from each row's columns, and calls `vinted-listing-lookup` once per search in delta mode — so a listing you've already seen is never billed or alerted on twice.
3. Every listing found is logged to a `History` tab first. A Code node then reads back the last 14 days of that exact search's history and computes the median price, so “underpriced" is measured against real recent prices, not a guess.
4. A deal score is built from how far below that median the listing is, a weight for its condition, and (if you turn on the actor's `includeDetails` option) a weight for the seller's rating.
5. An OpenAI step reads the title and description and is asked to flag anything that looks fake, replica, damaged, "for parts" or missing its size — flagged listings are dropped before anyone sees them. The step ships wired but with an empty credential, so it does nothing until you add your own key.
6. A routing step sends the genuinely hot ones (30%+ below median) straight to Discord with a photo and the numbers; the merely good ones (10–29% below median) are queued for one 8am digest message instead of a constant drip of pings; everything else is already logged to `History` with no further alert.
7. If a search fails, or comes back with nothing, three runs in a row, you get a one-off Discord warning and the Sheet row is marked `needs attention`, so a dead search or a target that's started blocking requests doesn't just go silently quiet.

## Setup
1. Apify token. Get one at Apify Console → Settings → API & Integrations. Create a Header Auth credential named `Apify token` (`Authorization` / `Bearer YOUR_TOKEN`) and select it on the "Search Vinted (delta mode)" node.
2. Build your Google Sheet, with 3 tabs `Searches` needs the columns `searchInput, country, maxPrice, conditions, brands, discordWebhook, active, failCount, status` — one row per search you want watched, `active` set to `yes` or `no`. `History` and `Digest` start empty with their own column headers (listed under Requirements) — the workflow fills them in as it runs. Add a Google Sheets credential and pick this document on all 5 Google Sheets nodes in the workflow.
3. Add a Discord webhook per search row. No Discord app or bot is needed: open your channel's Integrations → Webhooks → New Webhook, copy the URL, and paste it into that row's `discordWebhook` column. Different rows can point at different channels.
4. Optional: turn on the AI check by adding your own OpenAI credential to the “OpenAI Chat Model" node. Left empty, the red-flag check is skipped safely rather than breaking the run — a missing or malformed AI reply is always treated as "not flagged".
5. Activate the workflow. Both schedules start running: every 15 minutes for searches, and once a day at 8am for the digest.

## Requirements
- An Apify account and API token (free tier works for testing).
- A Google account, a Google Sheet with 3 tabs, and the Google Sheets node's OAuth2 credential set up in n8n.
- Searches` tab columns: `searchInput, country, maxPrice, conditions, brands, discordWebhook, active, failCount, status`.
- `History` tab columns: `searchLabel, listingId, title, price, priceEur, currency, condition, country, url, imageUrl, discordWebhook, checkedAt`.
- `Digest` tab columns: `searchLabel, title, priceEur, dealScorePct, medianPriceEur, url, imageUrl, discordWebhook, checkedAt`.
- A Discord webhook URL per search row (no bot token, no Discord app).
- Optional: an OpenAI API key, only if you want the red-flag check to actually run.

## Customization
- Change the HOT (default 30%) and GOOD (default 10%) deal-score thresholds in the "Route by deal score" Switch node.
- Turn on `includeDetails` in the "Build Apify input" Code node to get seller ratings factored into the score, and the listing description for a sharper AI red-flag check (costs a per-listing details fetch on the actor).
- Edit the system prompt on "AI red-flag check" to flag other things you personally care about (e.g. a brand you don't trust, a size you can never return).
- Add more columns to "Queue for daily digest" / "Build digest message" if you want the digest  to include a photo link or the seller's country.
- Change the 15-minute and 8am schedules on either Schedule Trigger node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
