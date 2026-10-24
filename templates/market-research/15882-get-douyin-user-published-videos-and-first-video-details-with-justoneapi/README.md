# 📊 Get Douyin user published videos and first video details with JustOneAPI

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Fetch videos published by a Douyin (TikTok China) user and return structured video details for creator monitoring, content research, reporting, and downstream automation.

## How it works
1. The workflow starts with configuration for your own JustOneAPI token, a Douyin user SecUID, pagination, and result limits. It requests the user's published-video list, preserves the raw response, extracts unique video identifiers, and limits the selected records. Each identifier is then sent to the video-detail endpoint, and the final output normalizes captions, creator information, media URLs, duration, timestamps, engagement metrics, music, hashtags, sharing data, and raw API responses.

## Setup
1. Import the template and open the configuration node. Enter your own JustOneAPI token, replace the sample SecUID, and review the page, cursor, and maximum-video settings. Keep the limit low for the first test, run the workflow manually, and inspect both list and detail responses. Then connect the normalized results to a spreadsheet, database, dashboard, alert, archive, content-analysis process, or AI workflow.

## Requirements
- Your own JustOneAPI token, a valid Douyin user SecUID, and n8n with HTTP Request and Code nodes.

## Customization
- Add cursor pagination, filter by date or engagement, increase the video limit, or send results to Google Sheets, Airtable, Notion, Slack, a database, or an AI model.

## Additional info
Useful for Douyin and TikTok China creator monitoring, competitor research, content archiving, campaign analysis, and social listening. No Douyin cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
