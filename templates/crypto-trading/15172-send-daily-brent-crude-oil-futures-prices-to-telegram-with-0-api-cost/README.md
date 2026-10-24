# 📈 Send daily Brent crude oil futures prices to Telegram with 0 API cost

> ⚡ **55 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

Oil traders, energy analysts, commodity research desks, shipping operations teams, refinery planners, equity investors in oil stocks, macro researchers, and anyone whose day starts with "where is Brent trading?" If you track the international oil benchmark and want hands-free price updates delivered to Telegram multiple times a day without paying for a Bloomberg terminal or a commodity data API, this workflow is built for you.

## What problem does this solve?

Most professional oil price data sources charge steep monthly fees. Bloomberg terminals run into thousands per month. Refinitiv, CQG, and similar platforms are priced for institutions. Free alternatives exist but require manually checking websites throughout the day, which breaks focus and wastes time. This workflow silently scrapes the public Brent Crude futures page on oilprice.com, extracts the 10-month forward curve, formats the data into a clean tabular Telegram message, and delivers it on a configurable schedule. You get institutional-grade visibility into the Brent forward curve without spending a rupee on data feeds.

## Zero ongoing cost to run

This workflow has no API keys, no subscriptions, and no metered usage. It relies entirely on:

- Your own n8n instance (self-hosted = free, Cloud = your existing plan)
- A free Telegram bot (created via BotFather in under 3 minutes)
- Public HTML scraping of oilprice.com (no authentication, no rate limit you will realistically hit)

Compare this to competing data sources: premium oil data APIs routinely cost 50 to 500 dollars per month. This workflow costs exactly 0 dollars per month to run indefinitely. The only time investment is the 8-minute initial setup.

## How it works

1. A schedule trigger fires 6 times on weekdays at 10 AM, 12 PM, 2 PM, 4 PM, 6:19 PM and 7:20 PM (IST)
2. An HTTP request fetches the Brent Crude futures page from oilprice.com
3. A JavaScript parser extracts the 10 forward month contracts (CBH26 through CBZ26, mapping to March through December)
4. For each contract it captures last price, price change, and the website update timestamp
5. An aggregate node bundles all contracts into a single array
6. A builder formats the data into an HTML-formatted Telegram message with a pre-formatted price table, total range, and average change
7. The Telegram node delivers the update to your chat

## Setup steps

Setup takes around 8 to 10 minutes. You will need:

- A Telegram bot (free, created via @BotFather)
- Your numeric Telegram chat ID (captured via @userinfobot)

Complete step-by-step setup instructions, schedule customization guidance, and timezone adjustment tips are included as sticky notes inside the workflow canvas. Import the workflow, read the yellow setup sticky note, and follow along. No guesswork required.

## Customization ideas

- **Different schedule:** Edit the Schedule Trigger to match your trading hours. Pre-market, market open, mid-day, market close, and after-hours is a common six-slot cadence.
- **Different timezone:** Update the workflow settings timezone from Asia/Kolkata to your own. The schedule will recalibrate automatically.
- **Track different contracts:** The symbol list is defined in the parser code. Add or remove months, or extend to longer-dated contracts available on the page.
- **Add price alerts:** Insert an IF node between the parser and Telegram to only send a message when price moves more than a threshold percentage. Perfect for traders who only want to be notified on meaningful moves.
- **Dual delivery:** Add a second branch after the Message Builder to also send the same data to email, Slack, Discord, or WhatsApp.
- **Log to Sheets:** Add a Google Sheets node to append every scrape to a spreadsheet for historical price tracking.

## Why oilprice.com?

The source page renders all futures data server-side in the HTML, which means reliable parsing without needing a headless browser or JavaScript execution. The page structure has been stable for years, making the parser robust against minor site changes. If the site structure does change, the parser code is commented and easy to adapt.

## Important notes

This workflow scrapes publicly available data from oilprice.com. Please be respectful in how frequently you run it. The default schedule of 6 runs per weekday is well within reasonable use. Avoid increasing this to minute-level frequency, as it is both unnecessary for most use cases and unfair to the source.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
