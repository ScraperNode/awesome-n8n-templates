# 🔬 Extract YouTube transcripts via Google Sheets or API webhook

> ⚡ **1,306 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# YouTube Transcript Extractor

This n8n template demonstrates how to extract transcripts from YouTube videos using two different approaches: automated Google Sheets monitoring and direct webhook API calls.

**Use cases:** Content creation, research, accessibility, meeting notes, content repurposing, SEO analysis, or building transcript databases for analysis.

## How it works
- **Google Sheets Integration:** Monitor a sheet for new YouTube URLs and automatically extract transcripts
- **Direct API Access:** Send YouTube URLs via webhook and get instant transcript responses
- **Smart Parsing:** Extracts video ID from various YouTube URL formats (youtube.com, youtu.be, embed)
- **Rich Metadata:** Returns video title, channel, publish date, duration, and category alongside transcript
- **Fallback Handling:** Gracefully handles videos without available transcripts

## Two Workflow Paths
1. **Automated Sheet Processing:** Add URLs to Google Sheet → Auto-extract → Save results to sheet
2. **Webhook API:** Send POST request with video URL → Get instant transcript response

## How to set up
1. Replace "Dummy YouTube Transcript API" credentials with your YouTube Transcript API key
2. Create your own Google Sheet with columns: "url" (input sheet) and "video title", "transcript" (results sheet)
3. Update Google Sheets credentials to connect your sheets
4. Test each workflow path separately
5. Customize the webhook path and authentication as needed

## Requirements
- YouTube Transcript API access (youtube-transcript.io or similar)
- Google Sheets API credentials (for automated workflow)
- n8n instance (cloud or self-hosted)
- YouTube videos 

## How to customize
- Modify transcript processing in the Code nodes
- Add additional metadata extraction
- Connect to other storage solutions (databases, CMS)
- Add text analysis or summarization steps
- Set up notifications for new transcripts

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
