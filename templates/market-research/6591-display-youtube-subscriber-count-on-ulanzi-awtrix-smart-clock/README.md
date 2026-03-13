# 📊 Display YouTube subscriber count on Ulanzi AWTRIX Smart Clock

> ⚡ **309 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview:
This n8n workflow fetches the subscriber count of a specific YouTube channel using the YouTube Data API and displays the compacted count on an AWTRIX 3 / Ulanzi Smart Clock via its local HTTP API.

💡 You can run this every hour (or adjust the schedule), and it pushes a custom notification with a YouTube-style icon to your AWTRIX screen.

## 🔧 Setup Instructions:
### 1. 🧩 Requirements
- A working AWTRIX 3 (e.g., Ulanzi Smart Clock) on the same local network.
- A valid YouTube Data API v3 key.
- A channel ID for the YouTube channel you want to track.
- Upload a YouTube-style icon to your AWTRIX before running this flow:
- Go to AWTRIX Icon Gallery
- Search for a YouTube icon or upload your own
- Get the corresponding icon ID (e.g., 26963)

### 2. 🧠 How It Works
- Triggers every hour
- Makes a GET request to YouTube API to fetch subscriberCount
- Formats the number using compact notation (e.g., 1.2M)
- Sends a POST request to AWTRIX at your specified local IP with the count and icon

### 3. 🔧 Required Replacements:
Replace the following placeholder values in the HTTP Request nodes:

**Placeholder**  - Replace With
**YOUR_YOUTUBE_CHANNEL_ID**	- Your YouTube channel ID
**YOUR_YOUTUBE_API_KEY**	- Your API key from Google Developer Console
**YOUR_AWTRIX_IP**	- Your AWTRIX local IP address (e.g., 192.168.1.108)
**YOUR_ICON_ID**	- Icon ID from AWTRIX Icon Gallery (e.g., 26963)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
