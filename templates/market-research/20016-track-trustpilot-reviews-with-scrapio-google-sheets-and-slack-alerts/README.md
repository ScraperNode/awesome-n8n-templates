# 📊 Track Trustpilot reviews with Scrapio, Google Sheets and Slack alerts

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow checks Trustpilot reviews daily via Scrapio, logs new reviews to Google Sheets, and posts Slack alerts based on star ratings, then sends a weekly Slack digest summarizing the last 7 days of review activity.

## How it works
1. Runs every day on a schedule and loads the list of business domains to monitor.
2. Reads the existing review log from Google Sheets and attaches it to each business for comparison.
3. For each domain, uses Scrapio to fetch the latest Trustpilot reviews and keeps only reviews not already logged in Google Sheets.
4. Appends each new review (including rating, title, text, reviewer details, and timestamps) to Google Sheets.
5. Routes each new review by star rating and posts it to the appropriate Slack channel (low ratings, great reviews, or neutral).
6. Runs weekly on a separate schedule, reads the Google Sheets log, calculates a 7-day summary (total, average rating, high/low counts, worst review), and posts the digest to Slack.

## Setup
1. Add a Scrapio API credential and ensure Trustpilot review scraping is enabled for your account.
2. Connect Google Sheets credentials, set the spreadsheet and sheet in both read steps and the append step, and ensure the sheet has the expected header columns (for example: domain, review_id, business_name, business_website, trust_score, rating, title, text, consumer_name, consumer_country, is_verified, published_date, logged_at).
3. Connect Slack credentials and select the channel IDs for the low-rating alert, great-review alert, neutral log message, and weekly digest messages.
4. Update the business domains in the workflow’s business list to match the companies you want to track.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
