# 🎣 Scrape Google Maps leads by keyword to Google Sheets with GMaps Lead Finder

> ⚡ **19 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually to start a Google Maps Lead Finder Agent API job for a single Google Maps keyword, polls until the job completes, then fetches up to 100 lead results and appends them as new rows in a Google Sheets worksheet.

## How it works
1. Runs when you click Test workflow.
2. Sets the search keyword, API base URL, and polling interval.
3. Calls the GMaps Lead Finder API to check account/credit status and then creates a leads scraping job for the keyword.
4. Waits and repeatedly polls the GMaps Lead Finder job status until it returns completed, partial, or failed.
5. When the job finishes, requests the job results (limit 100) from the GMaps Lead Finder API.
6. Splits the returned results into individual lead items and appends them to Google Sheets as new rows.

## Setup
1. Create an HTTP Header Auth credential for the GMaps Lead Finder API using `Authorization: Bearer <your_api_key>` (Growth+ plan required).
2. Connect a Google Sheets OAuth credential.
3. Select the target spreadsheet and worksheet in the Google Sheets append step.
4. Update the keyword (and optionally the base URL and poll interval) in the configuration step before running.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
