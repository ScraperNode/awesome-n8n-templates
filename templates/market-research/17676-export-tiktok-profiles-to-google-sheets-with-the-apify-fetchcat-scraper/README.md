# 📊 Export TikTok profiles to Google Sheets with the Apify FetchCat scraper

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually or daily at 09:00, scrapes public TikTok profile data via the Apify FetchCat TikTok Profile Scraper actor, and writes a clean, deduplicated table of metrics and account signals to Google Sheets, updating existing rows by handle.

## How it works
1. Runs on a manual trigger or every day at 09:00 on a schedule.
2. Reads a list of TikTok handles or profile URLs and a maximum batch size, then validates, deduplicates, and builds the Apify actor input.
3. Starts an Apify Actor run using [FetchCat TikTok Profile Scraper](https://apify.com/fetch_cat/tiktok-profile-scraper) and waits for it to finish.
4. Downloads the resulting dataset items from Apify for the requested number of profiles.
5. Normalizes the profile data into human-readable Google Sheets fields (dates, numeric metrics, and clickable profile/bio links).
6. Appends or updates rows in Google Sheets, matching on “TikTok handle” to refresh existing creators instead of creating duplicates.

## Setup
1. Add [FetchCat TikTok Profile Scraper](https://apify.com/fetch_cat/tiktok-profile-scraper) to your Apify account and create an API token. In n8n, create an HTTP Header Auth credential with header Authorization and value Bearer YOUR_APIFY_TOKEN, then select it in both Apify HTTP Request steps.
2. Open the [TikTok Profiles spreadsheet template](https://docs.google.com/spreadsheets/d/11sXzrv9g7rECryFt6HkWcXQxh7hpyHteuRT-cxcQZrE/edit?usp=drive_link). In Google Sheets, choose File > Make a copy and save your own copy in Google Drive. Do not request edit access to the public template.
3. Connect your Google Sheets account in n8n, then select your copied spreadsheet and its “TikTok Profiles” tab in the final Google Sheets step. The copied sheet already contains the required columns and formatting.
4. Edit the profile list and Maximum Profiles Per Run value in the input step. Run the workflow manually first, confirm rows appear in your copied sheet, then publish it to enable the daily schedule.

## Requirements
- An Apify account with [FetchCat TikTok Profile Scraper](https://apify.com/fetch_cat/tiktok-profile-scraper); an Apify API token; a Google account; and n8n Cloud or self-hosted n8n with Google Sheets access.

## Customization
- Change the TikTok handles or profile URLs, Maximum Profiles Per Run limit (1–500), daily run time, destination spreadsheet, or mapped output columns.

## Additional info
Make your own copy of the [TikTok Profiles spreadsheet template](https://docs.google.com/spreadsheets/d/11sXzrv9g7rECryFt6HkWcXQxh7hpyHteuRT-cxcQZrE/edit?usp=drive_link) before running the workflow. Connect n8n to your copied spreadsheet; the public template is a read-only starting point and should not be used as the workflow destination.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
