# 📊 Track Google local pack rankings in Google Sheets with Apify

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No rank tracker subscription and no SERP API key. This template checks where your business ranks in Google's local results for the keywords you choose, every week, and appends one row per listing to Google Sheets: position, business, category, rating, review count, and address, with your own listing flagged.

## How it works
1. Runs every Monday morning on a scheduled trigger.
2. Loads a configured list of keywords, the target location, your business name, and Google country/domain settings.
3. Runs an Apify actor (johnvc~google-local-api) once per keyword to fetch the Google local pack results for that query and location.
4. Skips any keyword searches that return no local pack listings.
5. Expands the local pack results so each business listing becomes a separate item.
6. Formats each listing into spreadsheet columns (date, keyword, position, business name, category, rating, reviews, address) and flags rows that match your business name.
7. Appends the formatted rows to a selected Google Sheets document and sheet tab.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential in n8n.
2. Add Google Sheets credentials in n8n and select the target spreadsheet (document ID) and sheet tab name.
3. Update the keyword list, location, your business name, and (optionally) the googleDomain/country values to match your market before activating the workflow.

## Requirements
- An Apify account. The free tier works and a local search costs about 2 cents.
- A Google account for Sheets.
- No rank tracker subscription, no SERP API key, no Google API key.

## Customization
- Add or remove keywords in the config node. Each keyword becomes its own search and its own set of rows.
- Track a different city by changing the location, or another country by changing googleDomain and country together.
- Swap Google Sheets for Slack, email, or Airtable, or add an IF node to alert you only when your position gets worse.

## Additional info
**How do I track my Google local pack rankings?** Put your keywords and city in one Set node and let the weekly schedule run. Each run records the full local pack for every keyword, so you get your own rank and the competitors around you in the same sheet.

That last part is what most rank trackers charge for and then hide behind a dashboard. Here the raw rows are yours, in a spreadsheet you already own, and you can chart position over time however you like.

**Does this need a Google API key?** No. Google's own APIs do not return local pack rankings, and commercial local rank trackers run $20 to $100 a month. This template collects the same public local results through an Apify actor, so a free Apify token is all you need.

**What does it cost?** The template is free. A local search runs about 2 cents, so five keywords checked weekly costs roughly 11 cents a week.

**Why does my business show a different position than in my own browser?** Google personalizes local results by exact location and search history. This workflow searches from the city you specify with no personalization, which is the neutral baseline you want for tracking. Treat it as a consistent benchmark rather than a mirror of any one person's screen.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-google-local-api` on npm.

**About Apify.** [Google Local API](https://apify.com/johnvc/google-local-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
