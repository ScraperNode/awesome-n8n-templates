# 📊 Refresh Webflow directory listings from Google Maps with Bright Data and OpenAI

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to sync a Webflow CMS directory with current Google Maps listing data fetched via Bright Data, rewrites updated one-line blurbs with OpenAI (GPT-5.6), posts a digest to Slack, and optionally writes approved changes back to Webflow.

## How it works
1. Runs on a weekly schedule and loads configuration values such as Webflow IDs, field slugs, change thresholds, and dry-run/publish settings.
2. Retrieves items from a Webflow CMS collection and builds a batch of Google Maps URLs to refresh (up to the configured maximum).
3. Triggers a Bright Data Google Maps dataset fetch for the URL batch, polls until the snapshot is ready, and downloads the fresh listing results.
4. Compares the fresh Google Maps rating/review counts (and closed status) against the stored Webflow values and keeps only listings that exceed the defined change thresholds.
5. Uses OpenAI (GPT-5.6) to generate an updated single-sentence directory blurb for each changed listing using only the provided category and numbers.
6. Posts a formatted refresh digest to a Slack channel and updates the matching Webflow CMS items with the new rating, review count, and blurb when dry_run is disabled and the listing is not flagged as permanently closed.

## Setup
1. Add a Webflow credential, then set your Webflow site ID and collection ID in the Settings values.
2. Update the Webflow field slugs in Settings (google maps URL, rating, review count, and blurb) to match your collection’s fieldData keys.
3. Add a Bright Data Web Scraper/Datasets API key as an HTTP Header Auth credential and confirm the dataset endpoint/ID used in the Bright Data requests.
4. Add an OpenAI credential and ensure the selected GPT-5.6 model is available in your account.
5. Add a Slack credential and set the target channel for the digest message.
6. Keep dry_run enabled for initial testing, then disable it to allow writes, and set publish_live to control whether updates are pushed to the live Webflow site.

## Requirements
- A Webflow site with a CMS directory collection, a Bright Data account with the Google Maps dataset, plus OpenAI and Slack credentials.

## Customization
- Three optional add-ons ship unwired beside the main chain, so you can plug in whichever fits your site: Mirror Directory To Sheets keeps a spreadsheet copy, Email The Refresh Report replaces the Slack post, and Flag Permanently Closed archives venues Google Maps still lists after they have shut.
- dry_run ships on and publish_live ships off, so the first run reports what it would change and writes nothing. Tune min_rating_change, min_review_change and max_listings in Settings.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Webflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
