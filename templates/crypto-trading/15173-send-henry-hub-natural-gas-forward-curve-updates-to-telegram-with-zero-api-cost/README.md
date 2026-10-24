# 📈 Send Henry Hub natural gas forward curve updates to Telegram with zero API cost

> ⚡ **27 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

Natural gas traders, energy analysts, LNG desk professionals, utility planners, industrial gas buyers, power generation schedulers, pipeline operations teams, commodity research desks, and macro researchers tracking the NYMEX Henry Hub benchmark. If you start your trading day asking "where is Henry Hub spot and what does the forward curve look like?", this workflow was built for you. Anyone who wants a hands-free, multi-timeframe view of the U.S. natural gas market delivered to Telegram without paying for a data subscription will find immediate value here.

## What problem does this solve?

Henry Hub is the pricing reference for virtually every natural gas contract traded in North America and a key driver of LNG export pricing globally. Keeping track of both the live spot price and the 12-month forward curve throughout the trading day normally requires a professional terminal or a paid commodity data API — neither of which is cheap. Bloomberg costs thousands per month. Refinitiv, CME DataMine, and similar platforms are priced for institutional desks. This workflow eliminates that cost entirely. It silently scrapes the public Henry Hub futures page on oilprice.com, extracts the live spot price plus the next 12 monthly forward contracts along with multi-timeframe price change data (5-day, 30-day, 90-day, 1-year, and YTD), formats everything into a clean tabular Telegram message, and delivers it on a configurable weekday schedule. You get institutional-grade forward curve visibility without spending a single rupee on a data feed.

## Zero ongoing cost to run

This workflow has no API keys, no subscriptions, no metered usage, and zero ongoing maintenance requirements. It relies entirely on:

- Your own n8n instance (self-hosted = free, Cloud = your existing plan)
- A free Telegram bot (created via BotFather in under 3 minutes)
- Public HTML scraping of oilprice.com (no authentication, no rate limits you will realistically hit in normal use)

Compare this to competing data sources: premium natural gas data APIs and terminal subscriptions routinely run from 50 to several thousand dollars per month. This workflow costs exactly 0 dollars per month to run indefinitely. The only investment is the 8-minute one-time setup.

## How it works

1. A schedule trigger fires 6 times on weekdays at 10 AM, 12 PM, 2 PM, 4 PM, 6:19 PM, and 7:20 PM (IST)
2. An HTTP request fetches the Henry Hub natural gas futures page from oilprice.com
3. A JavaScript extractor pulls two datasets in a single pass: the live spot price with intraday change, and all available forward futures contracts
4. For each contract it captures last price, price change, change direction, open, high, low, date, and historical reference prices across 5-day, 30-day, 90-day, 1-year, and YTD windows — computing percentage changes for each timeframe
5. A message builder separates the spot price from the futures array, formats the first 12 monthly contracts into a clean HTML-formatted Telegram table, and calculates strip range and average
6. The Telegram node delivers the full update to your chat with source attribution and an IST timestamp

## Setup steps

Setup takes around 8 to 10 minutes. You will need:

- A Telegram bot (free, created via @BotFather)
- Your numeric Telegram chat ID (captured via @userinfobot)

Complete step-by-step setup instructions, schedule customization guidance, and timezone adjustment tips are included as sticky notes directly on the workflow canvas. Import the workflow, read the yellow setup sticky note, and follow along. No guesswork required.

## Customization ideas

- **Different schedule:** Edit the Schedule Trigger to match your trading hours. Pre-market, market open, mid-session, market close, and after-hours is a common six-slot cadence.
- **Different timezone:** Update the workflow settings timezone from Asia/Kolkata to your own. The schedule recalibrates automatically and the IST timestamp in the Telegram message updates accordingly.
- **Track more or fewer contracts:** The parser extracts all available forward months from the page. The message builder uses the first 12. Change `slice(0, 12)` in the Message Builder node to include more or fewer contracts.
- **Add price alerts:** Insert an IF node between the extractor and message builder to send a Telegram message only when spot price moves more than a defined threshold intraday. Ideal for traders who want to be notified only on significant moves, not routine updates.
- **Multi-timeframe drill-down:** The extractor already captures 5-day, 30-day, 90-day, 1-year, and YTD price references for every contract. Customize the message builder to display whichever timeframe combination is most relevant to your analysis style.
- **Dual delivery:** Add a second branch after the message builder to simultaneously push the same data to email, Slack, Discord, or WhatsApp.
- **Log to Sheets:** Add a Google Sheets node to append every scrape to a spreadsheet for building your own historical Henry Hub forward curve dataset.

## Why oilprice.com?

The natural gas futures page on oilprice.com renders all spot and futures data server-side in the HTML, which means reliable parsing without needing a headless browser or JavaScript execution environment. The data structure includes historical price references embedded directly in the HTML as data attributes, making it possible to calculate multi-timeframe percentage changes without any external API calls. The page structure has been stable for years. If the site structure does change, the parser code inside the Data Extraction node is thoroughly commented and straightforward to adapt.

## Important notes

This workflow scrapes publicly available data from oilprice.com. Please be respectful in how frequently you run it. The default schedule of 6 runs per weekday is well within reasonable use. Avoid increasing this to minute-level frequency, as it is both unnecessary for most trading and analysis use cases and unfair to the source website.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
