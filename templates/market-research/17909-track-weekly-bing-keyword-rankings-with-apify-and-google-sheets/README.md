# 📊 Track weekly Bing keyword rankings with Apify and Google Sheets

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Most rank trackers charge per keyword per month. This one runs on your schedule and writes to your sheet. Before each search it reads the history back, so every row carries where the result sat last week, how far it moved, and whether that is up or down.

## How it works
1. Runs every Monday morning on a scheduled trigger.
2. Loads your keyword list plus tracking settings (your domain, market, and device).
3. Searches Bing once per keyword using the Apify Bing Search API actor.
4. Filters the returned dataset to keep only organic search results.
5. Formats each organic result into a single Google Sheets row, flags results that match your domain, and adds the current “Week of” date.
6. Appends this week's rows to the same Google Sheets tab, which becomes the history that the next run reads.

## Setup
1. Create an Apify account, add your Apify API token as an Apify credential in n8n, and ensure the workflow can run the `johnvc~bing-search-api` actor.
2. Connect Google Sheets credentials and select the target spreadsheet document and sheet tab in the Google Sheets append step.
3. Replace the example keywords and set your `yourDomain`, `market` (for example `en-US`), and `device` (for example `desktop`) values.
4. On the very first run there is no history yet, so every row comes back as New and the movement columns stay empty. That is expected, and the second run starts reporting movement.

## Requirements
- An Apify account. The free tier works, and a keyword costs about 1.5 cents per page.
- A Google account for Sheets.
- The keywords you want to track and the domain you want flagged.

## Customization
- Add or remove keywords in the config node. Each one becomes its own search and its own rows.
- Change market and device together. Desktop en-US and mobile en-GB are different rank histories.
- Wire the unconnected Filter node to keep only the rows whose Status is Down, the Slack node to be told about those movers, or the Summarize node to collapse the run into an average position per keyword.

## Additional info
**How do I track Bing rankings automatically?** Put your keywords and your domain in one Set node and let the weekly schedule run. Each run appends one row per organic result, stamped with the run date, and the sheet becomes a rank history you own rather than a dashboard you rent.

**What makes this different from exporting a rank list?** The comparison. Before it searches, the workflow reads the existing rows back out of your sheet, finds the most recent snapshot for each keyword and URL, and fills in three columns: where that result sat last week, how many places it moved, and whether that is Up, Down, Flat or New. A rank list tells you where you are. This tells you what changed.

**Which way does the Movement number run?** Rank counts upward but a better position is a smaller number, so Movement is last week's rank minus this week's. **Positive means it climbed.** New means the URL was not in the last snapshot at all, which is either a genuine arrival or a result that dropped out and came back.

**What happens on the very first run?** There is no history yet, so every row comes back as New and the movement columns stay empty. That is expected. The read node is configured to carry on if the tab does not exist, so the first run cannot fail there: it creates the tab, and the second run starts reporting movement.

**Why did I get so few organic rows?** Commercial queries return far fewer organic results because Bing gives the ads more of the page. A thin result set on a high intent keyword is the search engine, not the workflow.

**What does it cost?** The template is free. A keyword costs a fraction of a cent per run, so a 20 keyword weekly check is a few cents a month.

**About Apify.** [Bing Search API](https://apify.com/johnvc/bing-search-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
