# 📊 Send weekly multi-platform review reports from Apify to Gmail

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Friday at 8am to scrape the past week’s reviews from Google Maps, Yelp, and TripAdvisor using an Apify Actor, aggregates results by business, and sends a branded HTML reputation report to a client via Gmail.

## How it works
1. Runs every Friday at 8am on a schedule.
2. Starts the Apify Multi-Platform Review Scraper Actor with your configured business profile URLs and waits for the run to finish.
3. Fetches the scraped review items from the Apify dataset for the last 7 days.
4. Groups reviews by business, calculates weekly totals, average rating, positive/negative counts, and formats each business into an HTML report card with recent review snippets.
5. Combines all business cards into a single weekly HTML report with a summary header.
6. Sends the HTML report email to the configured recipient using Gmail.

## Setup
1. Add your Apify API token and replace YOUR_APIFY_API_TOKEN in both Apify HTTP requests.
2. Replace the profileUrls list with the actual Google Maps, Yelp, and TripAdvisor business page URLs for each client you want to track.
3. Connect a Gmail OAuth2 credential and set the recipient email address in the Gmail send step (or extend the workflow to loop through multiple clients).

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
