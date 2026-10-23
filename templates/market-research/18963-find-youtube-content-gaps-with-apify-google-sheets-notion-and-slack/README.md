# 📊 Find YouTube content gaps with Apify, Google Sheets, Notion, and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This weekly workflow uses Apify to run two YouTube searches (your topics and competitor topics), compares the resulting video titles to find high-performing subjects competitors cover that you don’t, and appends the best gaps to Google Sheets.

## How it works
1. Runs every Monday at 7:00 via a scheduled trigger.
2. Defines your search queries, competitor search queries, and filtering thresholds (maximum items and minimum view count).
3. Uses Apify’s YouTube Scraper actor to collect video results for your queries and for competitor queries.
4. Compares both result sets by reducing titles to meaningful keywords, filters out low-view videos, and keeps only competitor subjects that don’t closely match your existing coverage.
5. Sorts the remaining gaps by view count and appends the top results to a Google Sheets spreadsheet.

## Setup
1. Add an Apify credential (API token) and ensure you can run the `dami_studio~youtube-scraper` actor in your Apify account.
2. Add a Google Sheets OAuth credential and select the target spreadsheet and sheet tab in the append step.
3. Update `yourQueries`, `rivalQueries`, `maxItems`, and `minViews` to match your niche and desired sensitivity.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
