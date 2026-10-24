# 📊 Log weekly Glassdoor reviews to Google Sheets using Apify

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No Glassdoor API key and no scraping account required. This review monitoring template checks your companies every week and appends their newest Glassdoor reviews to Google Sheets, one row per review with star rating, pros, cons, and the per-category ratings breakdown.

## How it works
1. Runs every Monday morning on a schedule.
2. Sends your list of Glassdoor company review page URLs to Apify’s Glassdoor Reviews API actor and fetches up to 25 reviews per company from the last 7 days.
3. Filters the returned dataset to keep only items that are actual review records.
4. Extracts and formats key fields such as company name, publish date, overall rating, review summary, pros, cons, category ratings, and the review URL.
5. Appends the prepared review rows to the selected Google Sheets tab.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential in n8n.
2. Add Google Sheets credentials and select the target spreadsheet document and sheet tab in the Google Sheets append step.
3. Replace the example Glassdoor review page URLs with the companies you want to monitor, and adjust the “days” and “maxReviewsPerCompany” values if needed.

## Requirements
- An Apify account. The free tier works and collection costs about $0.004 per review.
- A Google account for Sheets.
- No Glassdoor API key, no scraping-vendor subscription.

## Customization
- Point it at any companies by swapping the URLs in the Set node, your own company plus the competitors you benchmark against.
- Widen the lookback window with the days value if you run it monthly instead of weekly.
- Swap Google Sheets for Slack, email, or Airtable to get new reviews where your team already looks.

## Additional info
**Does Glassdoor have an API?** Not one you can sign up for. The official Glassdoor API was closed to new partners years ago, and most workarounds want a paid scraping subscription before you see a single review. This template needs neither, so a free Apify token is the only thing between you and the data.

Each row carries the review title, pros, cons, reviewer type, and the **per-category ratings breakdown**: culture and values, compensation, work-life balance, and senior leadership. That breakdown is what turns raw workplace reviews into employee sentiment you can actually chart for employer reputation tracking.

The `days` window means each weekly run appends only the reviews published since roughly the last run, so the sheet stays a clean running log instead of filling up with duplicates.

**Cost:** about $0.004 per review. A weekly check of three companies usually stays under $0.30.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-glassdoor-reviews-api` on npm.

**About Apify.** [Glassdoor Reviews API](https://apify.com/johnvc/glassdoor-reviews-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
