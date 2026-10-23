# 🔬 Scrape URLs from Google Sheets and save as Markdown to Google Drive

> ⚡ **2,507 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://youtu.be/x3PDYon4qKk**

⚠️ **Self-hosted only** — This template uses a community node (Firecrawl) and cannot run on n8n Cloud.

## Who it's for

This workflow is for content teams, SEO specialists, and developers who need to batch-scrape web pages and store their content as clean Markdown files — without manually copying and reformatting text from each URL.

## How it works

1. A chat message triggers the workflow. The URL in the chat input points to a Google Sheet containing the list of URLs to scrape.
2. All rows are read from the sheet, then filtered to keep only rows with a non-empty URL and no existing scraping status.
3. Valid URLs are processed in configurable batches using a loop node.
4. Each URL is scraped with Firecrawl, which extracts the full web page content.
5. A code node cleans the raw Markdown: it removes links, standalone URLs, navigation labels, and excess whitespace.
6. The cleaned Markdown file is saved to a specified Google Drive folder.
7. The corresponding row in Google Sheets is updated with an "OK" status to prevent re-scraping on future runs.

## How to set up

- [ ] Connect your **Google Sheets** OAuth2 credential and configure the sheet containing the URLs
- [ ] Connect your **Firecrawl** API credential for web scraping
- [ ] Connect your **Google Drive** OAuth2 credential and set the destination folder ID
- [ ] Ensure the Google Sheet has a `URL` column and a `Scraped` column
- [ ] (Optional) Adjust the batch size in the loop node to control throughput

## Requirements

- Google Sheets account
- Google Drive account
- Firecrawl API key (community node — self-hosted n8n only)

## How to customize

- Replace the chat trigger with a **Schedule Trigger** for fully automated periodic scraping.
- Modify the **Transform Scraped Content** code node to enrich the Markdown (e.g. add metadata headers, extract specific sections).
- Add a **Slack or email notification** step after the loop completes to report how many URLs were successfully scraped.

## 🔗 Nodes Used

Google Sheets, Google Drive, Filter, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
