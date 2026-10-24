# 📊 Generate a hierarchical sitemap from a URL into Google Sheets using Firecrawl

> ⚡ **1,080 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://youtu.be/yjeKYfZP0kU**

&gt; ⚠️ **Self-hosted only** — This template uses a community node (`@mendable/n8n-nodes-firecrawl`) and cannot run on n8n Cloud.

## Who it's for

This workflow is for SEO consultants, web agencies, and technical teams who need to quickly audit or document a website's URL structure and export it into a clean, hierarchical spreadsheet.

## How it works

1. A chat message is received containing the target website URL.
2. Firecrawl maps the website via its sitemap and retrieves all available URLs.
3. An IF node checks whether the Firecrawl response was successful; if not, the workflow stops with an error.
4. On success, a Google Drive template file is copied to serve as the destination spreadsheet.
5. A custom JavaScript node parses the crawled URLs, groups them by domain/subdomain, and structures them into a hierarchical table (up to 6 depth levels: Niv 0 to Niv 5) with HYPERLINK formulas.
6. The structured rows are appended to the copied Google Sheet.

## How to set up

- [ ] Connect your **Firecrawl** credentials with a valid API key
- [ ] Set the **Google Drive** template file ID to copy for each run
- [ ] Connect your **Google Sheets** credentials and verify the target sheet name (`FR`)
- [ ] Review the **Organize URLs into Table Format** code node if you need to adjust the depth logic or output columns

## Requirements

- Self-hosted n8n instance
- Firecrawl account and API key
- Google Drive and Google Sheets OAuth2 credentials

## How to customize

- Modify the JavaScript code node to add URL filtering, deduplication, or category tagging before writing to the sheet.
- Extend the sheet schema beyond 5 depth levels if your website has a deeper URL hierarchy.
- Replace the chat trigger with a form or webhook to allow non-technical users to submit URLs for crawling.

## 🔗 Nodes Used

Google Sheets, Google Drive, Stop and Error, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
