# 📊 Search Douyin videos by keyword and get the first video detail with JustOneAPI

> ⚡ **36 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Search Douyin (TikTok China) videos by keyword and retrieve structured video details for trend research, content discovery, competitor monitoring, reporting, and automation.

## How it works
1. The workflow configures your own JustOneAPI token, keyword, pagination, filters, and result limit. It searches Douyin videos, preserves the raw response, extracts unique video identifiers, and limits the selected results. Each identifier is sent to the video-detail endpoint, and the final output normalizes captions, creators, media, timestamps, engagement metrics, music, hashtags, URLs, and raw API responses for reliable downstream processing.

## Setup
1. Import the template and open the configuration node. Enter your own JustOneAPI token, replace the sample keyword, and review the page, sorting, time, and maximum-video settings. Keep the limit low for a first test, run the workflow manually, and inspect search and detail responses. Connect the normalized output to a spreadsheet, database, dashboard, alert, trend report, archive, or AI analysis workflow.

## Requirements
- Your own JustOneAPI token and n8n with HTTP Request and Code nodes.

## Customization
- Change keywords and filters, add pagination, increase the video limit, or send results to Google Sheets, Airtable, Notion, Slack, a database, or an AI model.

## Additional info
Useful for Douyin and TikTok China trend monitoring, creator discovery, competitor research, content analysis, and campaign intelligence. No Douyin cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
