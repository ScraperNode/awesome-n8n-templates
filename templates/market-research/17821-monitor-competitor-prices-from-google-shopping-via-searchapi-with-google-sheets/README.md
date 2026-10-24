# 📊 Monitor competitor prices from Google Shopping via SearchApi with Google Sheets and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to check Google Shopping prices for a list of products using SearchApi.io, compares results to the last run stored in Google Sheets, and posts a threshold-based summary to Slack while logging each run to History and maintaining a Latest dashboard.

## How it works
1. Runs every day on a schedule.
2. Loads the product list, location, and alert thresholds, then reads the previous run’s prices and undercut state from the Google Sheets “Latest” tab.
3. Searches Google Shopping for each product via SearchApi.io (new items only).
4. Calculates a typical (median) market price and the lowest “legit” offer per product, compares the typical price to the previous run, and flags when the lowest offer undercuts your specified price.
5. Builds a Slack Block Kit message that includes only notable items (large price moves, newly undercut items, or first-seen products) and skips posting on quiet days.
6. Appends priced results to the Google Sheets “History” tab and upserts one row per product into the “Latest” tab.

## Setup
1. Add your SearchApi.io API credential to the SearchApi node.
2. Connect a Google Sheets credential, set the Spreadsheet ID, and create “Latest” and “History” tabs with headers matching the columns written by the workflow.
3. Connect a Slack OAuth2 credential and select the destination channel for alerts (or remove the Slack step if you only want the Google Sheets output).
4. Update the Settings values for products (optionally as product=YOUR_PRICE), location, and alert_pct/alert_abs thresholds.
5. Run once to create a baseline in “Latest”, then activate the workflow to start tracking changes.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
