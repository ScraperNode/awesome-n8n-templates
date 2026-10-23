# 📊 Extract Facebook ad hooks, CTAs and transcripts to Google Sheets with Apify

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on demand to scrape a competitor’s active Facebook video ads via Apify, transcribe each ad, extract the first-3-seconds hook and CTA, and append a one-row-per-ad teardown table to Google Sheets.

## How it works
1. Starts when you manually test the workflow.
2. Reads the competitor Facebook Ad Library search URL (or Facebook Page URL) and the maximum number of ads to process.
3. Launches an Apify Facebook Ads Library scraper run for the competitor and polls Apify until the run finishes.
4. Sends the scraper run’s dataset ID to an Apify Facebook Ads Transcript Scraper to return transcript, hook, CTA, and ad metadata.
5. Calculates transcript word/character counts, sorts ads (prioritizing transcribed and longer videos), and formats a clean row per ad.
6. Appends the resulting rows to the selected Google Sheets spreadsheet and sheet.

## Setup
1. Create an Apify API token and add an HTTP Header Auth credential using `Authorization: Bearer <YOUR_APIFY_TOKEN>`, then select it on all Apify HTTP requests.
2. Connect your Google Sheets account and select the target spreadsheet and sheet for the append step.
3. Update the competitor URL and `maxAds` values in the configuration step before running the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
