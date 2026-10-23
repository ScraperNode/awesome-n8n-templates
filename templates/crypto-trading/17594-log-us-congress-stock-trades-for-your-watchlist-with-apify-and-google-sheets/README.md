# 📈 Log US Congress stock trades for your watchlist with Apify and Google Sheets

> ⚡ **16 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
No Firecrawl API key and no OpenAI key. This template checks every week whether any member of Congress disclosed a trade in the stocks you follow, and appends one row per transaction to Google Sheets: member, chamber, ticker, buy or sell, dollar range, and a link to the filing.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Loads your ticker watchlist along with a lookback window and maximum results per ticker.
3. Runs the Apify actor “us-congress-financial-disclosures-and-stock-trading-data” once per ticker to fetch matching trade disclosures for the date range.
4. Filters out results that don’t include both a ticker symbol and a transaction date.
5. Formats each disclosure into spreadsheet-ready fields (member, chamber, transaction type, amount range, and a filing link when available).
6. Appends one row per transaction to a selected Google Sheets tab.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential in n8n.
2. Add Google Sheets OAuth credentials and select the target spreadsheet and sheet tab in the Google Sheets append step.
3. Update the watchlist tickers, lookbackDays, and maxResultsPerTicker values to match what you want to track.

## Requirements
- An Apify account. The free tier works and a disclosure row costs a fifth of a cent.
- A Google account for Sheets.
- No Firecrawl or OpenAI key, and no scraping vendor account. There is no language model anywhere in the workflow.

## Customization
- Add or remove tickers in the config node. Each ticker becomes its own disclosure search and its own set of rows.
- Follow a member instead of a stock by adding `Last_Name` to the search node input, which returns every holding they disclosed rather than one company.
- Widen or narrow `lookbackDays` to control how far back the transaction window reaches.
- Swap Google Sheets for Slack, email, or Airtable, or add an IF node so you are only alerted above a dollar threshold. For compliance and ESG screening, point the output at your own database and keep the `Filing` column as the audit trail.

## Additional info
**How do I track congress stock trades?** Put the tickers you care about in one Set node and let the weekly schedule run. Each run searches both the House and the Senate disclosures for those tickers and appends one row per transaction, so the sheet builds into a history you own rather than a dashboard you rent.

**Does this need a Firecrawl or OpenAI key?** No. The other congressional trading workflow in this library needs both, plus Gmail, and it reads a third-party aggregator page with a language model before emailing you a prose summary. This one calls a congress stock trades api directly and gives you structured rows. Nothing is paraphrased, nothing is hallucinated, and there is no per-token cost.

**What does it cost?** The template is free. A disclosure row runs about a fifth of a cent, so a four-ticker watchlist checked weekly costs roughly 15 cents a week.

**Why does a trade show up months after it happened?** Members have up to 45 days to report a transaction and filings routinely land later than that, so the gap between the trade date and the disclosure date is often three or four months. That is why the template looks back 180 days by default. A 30-day window would quietly miss most of what was just disclosed. Both dates are in the sheet, so you can sort by either.

**Can I use this for compliance and ESG screening?** Yes, and it is the usual reason people want congress stock trading data sitting in a spreadsheet instead of an inbox. An ESG or compliance review has to be re-checkable months later, and a summary email is not. Every row carries a `Filing` link to the original Periodic Transaction Report, so any number in the sheet can be traced back to the document the member actually filed.

**Why do some rows say `P` and others say `Purchase`?** In the raw filings they do, which is a trap. The same event comes back as a code or spelled out, in the same response. This template folds all of it into Purchase, Sale, Partial sale, and Exchange before it reaches your sheet. If you query the underlying data yourself, filtering on `P` alone will quietly drop about a third of the purchases.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-congress-trades-api` on npm.

**About Apify.** [Congress Financial Disclosures & Stock Trades](https://apify.com/johnvc/us-congress-financial-disclosures-and-stock-trading-data?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
