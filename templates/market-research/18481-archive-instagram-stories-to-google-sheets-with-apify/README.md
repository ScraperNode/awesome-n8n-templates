# 📊 Archive Instagram stories to Google Sheets with Apify

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 8 hours, uses Apify’s Instagram Stories Scraper to capture current stories from a list of public Instagram profiles, and appends the story metadata and media URLs to Google Sheets while avoiding duplicates across executions.

## How it works
1. Runs every 8 hours on a schedule.
2. Defines the Instagram profile usernames to track and the maximum number of stories to pull per profile.
3. Calls Apify’s Instagram Stories Scraper over HTTP to fetch the latest live stories for the configured profiles.
4. Filters the results to keep only successful story items.
5. Skips stories that were already archived in previous workflow executions by deduplicating on the story ID.
6. Formats each story into a set of Google Sheets columns (timestamps, account, story ID, caption, location, and media links).
7. Appends the formatted rows to the selected Google Sheets spreadsheet and worksheet.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential for the HTTP request.
2. Connect your Google Sheets account and select the target spreadsheet document and sheet tab in the Google Sheets node.
3. Update the profile list and maxStoriesPerProfile value to match the public Instagram accounts you want to archive.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
