# 📊 Track Walmart price drops and marketplace offers with Apify and Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No price tracker subscription and no retailer API approval. Every week this searches Walmart for your products, then routes the rows three ways in Google Sheets: a deals tab for advertised price cuts, a marketplace tab for third party offers, and a full price history.

## How it works
1. Runs every Monday morning on a scheduled trigger.
2. Takes a list of search terms and performs one Walmart search per term using the Apify Walmart API actor.
3. Filters the Apify dataset to keep only rows that represent real products.
4. Normalizes fields (including price and was price), stamps each row with the run date, and calculates sale flags and discount percentages.
5. Appends every product row to a Google Sheets tab to build a weekly price-history log.
6. Routes discounted items and items not sold by Walmart to separate Google Sheets tabs for deals and marketplace offers.

## Setup
1. Create an Apify account, add an Apify API token credential in n8n, and ensure the workflow can run the `johnvc~walmart-api` actor.
2. Connect Google Sheets credentials and select the target spreadsheet and three sheet tabs for price history, deals, and marketplace offers.
3. Update the search terms and results-per-search values in the workflow input to match the products you want to track.
4. (Optional) Connect Slack credentials and set a channel, or set the HTTP endpoint URL, if you wire up the optional alerting steps from the discounted-items output.

## Requirements
- An Apify account. The free tier works.
- A Google account for Sheets, with three tabs in one spreadsheet.
- Search terms for the products you track. No Walmart account or API approval is needed.

## Customization
- Add more searches in the config node. Each becomes its own Walmart search and its own rows.
- Wire the unconnected Filter node to the Price cut output to ignore anything under a twenty percent drop.
- Wire the unconnected Slack or HTTP Request node to the Price cut output to be told about a deal instead of reading the tab.
- Change the second Switch rule to route on Sponsored instead of seller, if ad placements are what you are studying.

## Additional info
**How do I track Walmart prices automatically?** Put your search terms in one Set node and let the weekly schedule run. Every run appends a dated snapshot keyed by Walmart's own item ID, so the same item at two prices in two different weeks is a price change you can read straight off the sheet without writing a formula.

**Why does it write to three tabs?** Because the three things you do with this data are different. The history is what you chart. The deals tab is the short list worth acting on this week. The marketplace tab holds offers that are not sold by Walmart itself, where the price is not comparable and returns work differently. One row can land on more than one tab: an item that is discounted and third party appears on both.

**How does it know something is on sale?** Walmart publishes a struck-through was price on discounted listings. When that is present and higher than the current price, the row is flagged and the cut is worked out as a percentage. Measured across 60 rows from four different searches, 29 carried a was price, so the flag fires often enough to be useful.

**Why is there no stock column?** Because it would always be empty. Across those same 60 rows the out of stock, free shipping and two day shipping fields came back false every single time, so they are deliberately not mapped. A column that can never change is worse than no column.

**Can I trust the Rank column as a ranking?** Only after you filter. 35 of those 60 rows were sponsored placements, whose position is paid rather than earned, and the same item can appear twice, once sponsored and once organic. The Sponsored column is there so you can exclude them before reading rank.

**What does it cost?** The template is free, and you pay Apify only for the searches you actually run.

**About Apify.** [Walmart API](https://apify.com/johnvc/walmart-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
