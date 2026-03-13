# 🎬 Generate VEED AI talking head videos from sheet rows with OpenAI or ElevenLabs

> ⚡ **2,426 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

A production-ready n8n workflow that generates AI avatar videos from images and text using **VEED Fabric 1.0**, with flexible multi-platform publishing capabilities.

## Key Capabilities

### Unlimited Scale
- **Process any number of videos**: Sequential processing ensures each video is fully generated and published before moving to the next
- **Batch processing**: Add multiple video requests to Google Sheet and let the workflow process them automatically
- **No context mixing**: Each video maintains its own configuration throughout the entire pipeline

### Flexible Publishing
- **Per-video platform selection**: Each video can target different platforms (e.g., Video 1 → Instagram+YouTube, Video 2 → Telegram only)
- **Optional publishing**: Leave PLATFORMS column empty to generate videos without publishing (videos saved to Drive)
- **Supported platforms**: Instagram Reels, YouTube/Shorts, Facebook, Telegram, Threads
- **Platform-specific formatting**: Automatic optimization for each platform's requirements

### Smart Processing
- **Two TTS providers**: Choose OpenAI or ElevenLabs per video
- **Configurable quality**: Select resolution (480p/720p) and aspect ratio (9:16, 16:9, 1:1) per video
- **Approval workflow**: Review videos before publishing with email approve/reject buttons
- **Error handling**: Automatic error detection with detailed email notifications

### Status Tracking
- **Real-time status updates**: Google Sheet updates as workflow progresses (new → processing → published)
- **Detailed results**: Per-platform success/failure tracking with post URLs
- **Email reports**: Comprehensive publishing reports with links to all posted content

## How It Works
1. **Input**: Add rows to Google Sheet with video details
2. **TTS**: Generate speech using OpenAI or ElevenLabs
3. **Video**: VEED Fabric 1.0 creates talking head video
4. **Approval**: Email with video preview and approve/reject buttons
5. **Publish**: Sequential publishing to selected platforms
6. **Report**: Status update in sheet + email with results

## Requirements
- Fal.ai API Key (for VEED)
- Google OAuth (Sheets, Drive, Gmail)
- TTS: OpenAI or ElevenLabs API Key
- Social Media credentials (optional, only for platforms you use)
- Telegram Bot Token (optional, only for Telegram)

**Node:** n8n-nodes-veed
**Author:** VEED.io

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Facebook Graph API, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
