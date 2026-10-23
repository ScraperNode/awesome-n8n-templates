# 📊 Resolve Xiaohongshu share links to final URLs with JustOneAPI

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Resolve RedNote (Xiaohongshu) share links into canonical destination URLs and structured identifiers for link cleanup, routing, tracking, research, and downstream automation.

## How it works
1. The workflow accepts a Xiaohongshu share link and your own JustOneAPI token, sends the URL to the share-link resolution endpoint, and preserves the raw response for troubleshooting. It then extracts the resolved destination, note or user identifiers, content type, and other useful metadata into a consistent structure. The normalized result can feed scraping, monitoring, databases, routing logic, dashboards, or later API calls.

## Setup
1. Import the template and open the configuration node. Enter your own JustOneAPI token and replace the sample share link with a RedNote or Xiaohongshu link. Run the workflow manually, inspect the raw resolution response, and verify the canonical URL and identifiers. Then connect the output to the relevant note, user, comment, database, spreadsheet, dashboard, or monitoring workflow according to the resolved content type.

## Requirements
- Your own JustOneAPI token, a valid Xiaohongshu share link, and n8n with HTTP Request and Code nodes.

## Customization
- Process multiple links, branch by content type, deduplicate destinations, or send resolved URLs to Google Sheets, Airtable, Notion, a database, or another API workflow.

## Additional info
Useful for cleaning shortened Xiaohongshu links, resolving shared content, building ingestion pipelines, and automating research. No RedNote cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
