# 📱 Repurpose YouTube Shorts to TikTok and Instagram using Blotato

> ⚡ **304 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically mirrors your YouTube to TikTok and Instagram, so you don’t have to manually download and re-upload your content across platforms.

It fetches new videos from your YouTube channel, checks whether they have already been processed, downloads them locally using yt-dlp, and then uploads or schedules them via Blotato. Once successfully published, the workflow logs everything into Google Sheets and removes the local file to keep your storage clean.

This template is designed for creators, agencies, and social media managers who want a simple and reliable way to repurpose short-form content across multiple platforms.

### ⚙️ How It Works
1. The workflow runs on a schedule (e.g., every 8 hours).
2. It retrieves the latest videos from your YouTube channel.
3. It checks Google Sheets to avoid duplicate uploads by Video ID.
4. New Shorts are downloaded using yt-dlp.
5. The video is uploaded (or scheduled) via Blotato to TikTok and Instagram.
6. The workflow logs the upload results.
7. The local file is deleted after a successful upload.

### 🛠 Requirements
- A YouTube Data API key
- A Google Sheets connection
- Blotato API credentials
- Self-hosted n8n instance (required for yt-dlp execution)
- yt-dlp installed on your server
- Make 'youtube' directory for Download location

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
