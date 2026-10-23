# 📊 Get Douyin video comments and replies with JustOneAPI

> ⚡ **69 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Extract Douyin (TikTok China) video comments and reply threads as structured data for sentiment analysis, community research, moderation, reporting, and competitor monitoring.

## How it works
1. The workflow starts with configuration for your own JustOneAPI token, Douyin video ID, and comment and reply pagination. It requests top-level video comments, keeps the raw response for troubleshooting, and normalizes commenter, text, engagement, time, and reply-count fields. It then identifies the first comment with replies, fetches that reply thread, and returns a structured result containing comments, selected-comment metadata, replies, pagination, and raw API responses.

## Setup
1. Import the template and open the Prepare API and Comment Data node. Enter your own JustOneAPI token and replace the sample awemeId with a Douyin video ID. Review the comment and reply page values, run the workflow manually, and inspect the final structured output. Connect the result to a spreadsheet, database, dashboard, moderation queue, alert, or AI sentiment-analysis step as needed.

## Requirements
- Your own JustOneAPI token, a valid Douyin video or aweme ID, and n8n with HTTP Request and Code nodes.

## Customization
- Change the comment selection logic, add pagination, process every reply thread, or send results to Google Sheets, Airtable, Notion, Slack, or an AI model.

## Additional info
Useful for Douyin and TikTok China social listening, audience research, creator analysis, campaign reporting, moderation, and competitor monitoring. No Douyin cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
