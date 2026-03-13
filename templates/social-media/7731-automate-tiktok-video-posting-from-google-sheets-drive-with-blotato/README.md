# 📱 Automate TikTok video posting from Google Sheets & Drive with Blotato

> ⚡ **1,152 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

**Automate TikTok video posting from Google Sheets & Drive with Blotato. Perfect for content creators and social media managers.**

### ⚠️ IMPORTANT
**Self-hosted n8n only** - requires community nodes not available in cloud version.

## Google Sheets Structure
Required columns: **ID**, **Media URL**, **Caption**, **Status**
- Videos must be in Google Drive
- Status must be "pending" for processing
- Captions can include hashtags (5 max recommended)

## How it works
1. **Schedule Trigger** → Runs every hour
2. **Fetch Data** → Gets pending videos from Google Sheets
3. **Process Video** → Extracts Drive ID and shares file
4. **Upload** → Transfers to Blotato platform
5. **Post** → Automatically posts to TikTok
6. **Update Status** → Marks as "posted" in spreadsheet

## Requirements
- Self-hosted n8n instance
- Blotato API account
- Google Drive & Sheets OAuth2 credentials
- Community node: @blotato/n8n-nodes-blotato.blotato

## Use cases
- Automated TikTok content posting
- Batch video processing
- Content management workflows
- Scheduled social media distribution

The workflow processes one video per hour to avoid rate limits and maintains a clear audit trail through Google Sheets integration.

## 🔗 Nodes Used

Google Sheets, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
