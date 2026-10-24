# 📊 Monitor competitor web page changes with HTTP and Slack or Discord

> ⚡ **37 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks a list of competitor web pages every six hours, detects content changes by hashing cleaned page text, and posts a diff-style alert to a Discord or Slack channel via an incoming webhook.

## How it works
1. Runs every 6 hours on a schedule.
2. Loads a configured list of target competitor page URLs and the destination Discord/Slack webhook URL.
3. Fetches each target page over HTTP with browser-like headers and continues even if a request fails.
4. Converts the fetched HTML into cleaned plain text, stores a baseline on first run, and compares the latest hash against the previously saved version.
5. When a change (or fetch error) is detected, generates a message including the URL and a small list of added/removed lines.
6. Sends the alert message to your Discord or Slack webhook endpoint.

## Setup
1. Create an incoming webhook in Discord or Slack and paste its URL into the workflow configuration.
2. Update the target list with the competitor page names and URLs you want to monitor.
3. Ensure n8n can persist workflow static data between runs (so change history is retained) and that your instance can reach the target sites over HTTP.

## Requirements
- n8n version 1.60+. A Discord or Slack incoming webhook URL.

## Customization
- Want AI-written summaries instead of raw diffs, plus CSS selector targeting to filter out false alerts? Check out the Pro version: https://rubenfabioux.vercel.app/#top

## Additional info
Fetch errors are reported as alerts too, so you always know if a target becomes unreachable.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
