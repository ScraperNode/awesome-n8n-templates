# 📊 Track Google keyword rankings with ScraperAPI, Google Sheets, and Gmail

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to read keywords from Google Sheets, scrape Google Search results via ScraperAPI, store ranking history back in Google Sheets, and email a Gmail digest when notable keyword ranking movements are detected.

## How it works
1. Runs every day at 8:00 AM on a schedule.
2. Reads the keyword list (including target domain and optional locale fields) from Google Sheets.
3. For each keyword, uses ScraperAPI’s Google Search endpoint to fetch SERP results and extracts the target domain’s rank, top competitor, and SERP features.
4. Appends the parsed ranking snapshot (timestamp, keyword, rank, URLs, and features) to a Google Sheets history tab for tracking over time.
5. Reads the ranking history from Google Sheets and compares the two most recent snapshots per keyword/domain to calculate movements and flag notable changes.
6. If any notable movements are found, builds an HTML digest and sends it via Gmail.

## Setup
1. Connect Google Sheets credentials and fill in the document ID and sheet names for both the keyword source sheet and the ranking history sheet.
2. Add a ScraperAPI credential and ensure your plan/access supports the Google Search structured data endpoint used by the workflow.
3. Connect Gmail credentials and set the recipient email address in the Gmail send step.
4. Ensure your keyword sheet includes fields the workflow expects (at minimum `keyword` and `target_domain`, optionally `tld` and `country_code`).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
