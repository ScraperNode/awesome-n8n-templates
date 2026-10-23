# 📊 Build an Airbnb guest feedback review queue with Apify and Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Help hosts and property managers review recent guest feedback in Google Sheets. Highlight low ratings without an observed public host response, and preserve context. No AI account or automatic reply posting is involved.

## How it works
1. Validate one public Airbnb listing URL, the Sheet destination and an Actor charge cap before paid work.
2. Start one Apify run and poll that same run until completion, without automatic paid retries.
3. Verify coverage, reconcile billing and read up to 25 recent reviews, including ratings and public host responses.
4. Label low ratings without responses, missing ratings and observed responses using explicit rules. Missing ratings are never treated as negative.
5. Upsert one row per listing and stable review ID. Repeated observations update existing rows without duplicate keys.
6. Preserve observation timestamps and CAPPED labels. The recent window is not full review history, and absent reviews are never assumed deleted.

## Setup
1. Create an Apify Header Auth credential with header Authorization and value Bearer followed by your token. Select it on all four HTTP nodes.
2. Connect Google Sheets OAuth2. Create an Airbnb Feedback tab and import the companion header CSV into its first row, preserving all 15 column names.
3. Enter your spreadsheet ID and listing URL in Review settings, run manually, and filter reviewPriority for LOW_RATING_NO_RESPONSE. Repeat sequentially.

## Requirements
- Apify usage credits and Google Sheets access are required. Delivered reviews are billable on each run. The default $0.15 charge cap is a limit, not a quoted price.

## Customization
- Change the listing URL or filter priority labels in Sheets. Read each review before deciding whether to respond on Airbnb.

## Additional info
![Airbnb feedback workflow](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/airbnb-reviews-scraper-private-v1/n8n-feedback/workflow.png)

[Setup guide and header CSV](https://github.com/bulatovicluka1989-rgb/luminar-apify-examples/tree/main/actors/airbnb-reviews-scraper-private-v1/n8n-feedback)

[Open the Actor](https://apify.com/luminar/airbnb-reviews-scraper-private-v1)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
