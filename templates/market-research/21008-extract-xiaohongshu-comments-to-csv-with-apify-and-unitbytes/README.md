# 📊 Extract Xiaohongshu comments to CSV with Apify and UnitBytes

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to scrape Xiaohongshu (RedNote) note comments using the UnitBytes actor on Apify, normalizes key fields from the returned dataset items, and exports the results as a CSV file that you can download or forward to tools like Google Sheets.

## How it works
1. Runs every 24 hours on a schedule.
2. Sets the Apify API token and the UnitBytes Xiaohongshu comments scraper input (start URLs, comment limits, and proxy settings).
3. Calls the UnitBytes `xiaohongshu-rednote-comments-scraper` actor on Apify via the run-sync-get-dataset-items API to retrieve extracted comments as JSON.
4. Normalizes each record to a flat structure with fields like id, noteId, noteUrl, content, likeCount, and subCommentCount.
5. Converts the normalized results into a CSV file named `xiaohongshu-comments-scraper-dataset-export.csv`.

## Setup
1. Create an Apify account, generate an Apify API token, and replace `YOUR_APIFY_API_TOKEN` in the Set step.
2. Update the actor input JSON to include your target Xiaohongshu note URLs and desired limits (for example `maxCommentsPerNote` and proxy country/group).
3. If you want to store results elsewhere, add and configure a destination node (for example Google Sheets append row) after the normalization step and provide the required credentials.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
