# 🔬 Transcribe YouTube playlists with SerpApi and Gmail into a JSON report

> ⚡ **12 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically fetches all videos from a specific YouTube playlist, extracts their transcripts using SerpApi, aggregates the text into a single JSON report, and emails the final file via Gmail. It's perfect for content creators, researchers, or SEO teams who need to archive or analyze video content in bulk.

Prerequisites:

Google Cloud Console: Enable the YouTube Data API v3 and get an API Key.

SerpApi Account: An API key to access the youtube_video_transcript engine.

Gmail Credentials: Set up the Gmail node with OAuth2 to send the final report.

Setup Instructions:

Fetch Playlist Node: Replace REPLACE_WITH_PLAYLIST_ID in the URL with your target Playlist ID and add your YouTube API Key.

SerpApi Node: Replace REPLACE_WITH_SERPAPI_KEY in the URL.

Send Email Node: Connect your Gmail account and update the recipient email address.

## 🔗 Nodes Used

HTTP Request, Gmail, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
