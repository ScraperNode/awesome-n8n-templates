# 🎬 Automated YouTube shorts creator with yt-dlp & FFmpeg

> ⚡ **6,522 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated YouTube Shorts Creator with yt-dlp & FFmpeg

## Description
### How It Works
• Downloads videos/music from YouTube using yt-dlp
• Merges assets with dynamic text overlays
• Automatically uploads to YouTube as Shorts (9:16 format)
• Tracks everything in Google Sheets

### Set Up Steps (~10 minutes)

- Install yt-dlp and FFmpeg in your n8n environment
- Connect Google Sheets (for video/music pools)
- Set up YouTube OAuth credentials
- Configure text overlay font (NotoSerif included)


### Key Features
#### Dual Pipeline System
- Video Downloader (MP4) + Music Downloader (MP3 with thumbnails)
- Random pairing for endless combinations

#### Professional Text Overlays
- Dynamic line wrapping for perfect 9:16 formatting
- Customizable fonts/colors

#### YouTube API Integration
- Automatic upload with metadata (titles/descriptions)
- Privacy/license controls

#### Google Sheets Tracking
- Logs download paths, YouTube URLs, timestamps
- Prevents duplicate processing

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
