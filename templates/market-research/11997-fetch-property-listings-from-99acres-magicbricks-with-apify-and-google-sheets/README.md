# 📊 Fetch property listings from 99Acres & MagicBricks with Apify and Google Sheets

> ⚡ **147 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Fetch Property Listings from 99Acres & MagicBricks with Apify and Google Sheets

## Who’s it for
Users who want to automatically fetch and organize property listings from 99Acres and MagicBricks into Google Sheets without manual copying.

## How it works / What it does
1. Users submit search URLs via a form.
2. The workflow uses Apify scrapers to fetch listings from 99Acres & MagicBricks.
3. Data is cleaned, standardized (ID, Title, Price, Price per Sqft, URL), and deduplicated.
4. Listings are automatically appended to their respective Google Sheets tabs.

## How to set up
1. Connect your Google Sheets account in all Google Sheets nodes.
2. Open the form trigger and submit valid search URLs.
3. Run the workflow or submit the form live.
4. A new spreadsheet is created and populated automatically.

## Requirements
1. Google Sheets account
2. Apify API key for 99Acres & MagicBricks scrapers
3. Valid property search URLs

## How to customize the workflow
1. Change sheet names or spreadsheet title in the “Create Master Spreadsheet” node.
2. Adjust API parameters in the HTTP Request nodes (like max retries or proxy settings).
3. Modify the Code nodes to include additional fields or filters.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
