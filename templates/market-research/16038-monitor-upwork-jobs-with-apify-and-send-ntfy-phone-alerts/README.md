# 📊 Monitor Upwork jobs with Apify and send ntfy phone alerts

> ⚡ **39 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs hourly on weekdays (8AM–5PM), uses the Apify API to scrape recent Upwork job listings that match your keywords, and sends each job as a Markdown push notification to your phone via ntfy.

## How it works
1. Runs every hour on weekdays between 8AM and 5PM.
2. Sets the ntfy topic name and keyword search terms used for scraping.
3. Calls an Apify actor (cheapest Upwork jobs scraper) to fetch Upwork jobs posted within the last 60 minutes that match the configured keywords.
4. Sends each returned job to ntfy.sh as a clickable Markdown link notification.

## Setup
1. Create an Apify account, generate an API token, and add it in n8n as an HTTP Bearer Auth credential for the Apify request.
2. Set your ntfy topic and keywords in the Config step (for example, `ntfy_topic` and space-separated `keywords`).
3. Subscribe to the same topic in the ntfy mobile or desktop app so you receive the notifications.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
