# 📊 Search Douyin users by keyword and fetch profile details with JustOneAPI

> ⚡ **50 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Search Douyin (TikTok China) users by keyword and return structured profile data for creator discovery, influencer research, competitor monitoring, outreach, and reporting.

## How it works
1. The workflow starts with one configuration node for your own JustOneAPI token, search keyword, page, and maximum user count. It calls the Douyin user-search endpoint, preserves the raw response, extracts unique SecUID identifiers, and limits the selected accounts. Each identifier is then sent to the profile-detail endpoint, where the workflow normalizes identity, biography, location, follower, following, video, engagement, verification, avatar, cover, and sharing fields while retaining raw responses.

## Setup
1. Import the template and open the Set API and Search Parameters node. Enter your own JustOneAPI token, replace the sample keyword, and review the page and maxUsers settings. Keep maxUsers at 1 for a quick first test, run the workflow manually, and inspect the structured profile output and raw responses. Then connect the results to a creator database, spreadsheet, CRM, dashboard, outreach workflow, alert, or AI analysis step.

## Requirements
- Your own JustOneAPI token and an n8n environment with HTTP Request and Code nodes.

## Customization
- Increase maxUsers, add pagination or profile filters, and send selected creators to Google Sheets, Airtable, Notion, a CRM, Slack, a database, or an AI scoring workflow.

## Additional info
Useful for Douyin and TikTok China creator discovery, influencer research, brand monitoring, competitor analysis, audience research, and campaign planning. No Douyin cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
