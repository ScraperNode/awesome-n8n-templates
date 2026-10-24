# 📊 Transcribe Facebook Ad Library video hooks to Google Sheets using Apify

> ⚡ **29 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs manually to scrape video ads from the Facebook Ad Library using Apify, transcribes each ad to extract the first-3-seconds hook, CTA, and full speech transcript, then appends the results as one row per ad in Google Sheets.

## How it works
1. Starts when you manually run the workflow.
2. Reads a Facebook Ad Library search URL and a maximum ad count to process.
3. Calls Apify’s Facebook Ads Library Scraper to fetch matching video ads from the search results.
4. Sends the scraped ad data to Apify’s Facebook Ads Transcript Scraper to download each video and extract the hook, CTA text, duration, transcript, and charge status.
5. Normalizes the returned fields into a consistent set of columns.
6. Appends one row per ad to a selected Google Sheets worksheet.

## Setup
1. Create an Apify account, generate an API token, and add an HTTP Header Auth credential with `Authorization: Bearer <YOUR_APIFY_TOKEN>` for both Apify HTTP requests.
2. Connect your Google Sheets account and select the target spreadsheet and worksheet for the append step.
3. Update the Facebook Ad Library search URL (ensure `media_type=video`) and the `maxAds` value to control what gets scraped and transcribed.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
