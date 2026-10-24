# 🎬 Generate TikTok and Instagram reel clips from YouTube videos with Vizard AI

> ⚡ **472 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What This Workflow Does

Automatically extract viral moments from YouTube videos and publish to social media platforms.

## Quick Start Guide

### 1. Configure Settings

Open the **Configuration** node and fill in:
- **Vizard AI API Key** (required)
- **Scheduled Publish Time** (optional, Unix timestamp format e.g., 1767605047792)
- **Viral Score Threshold** (0-10, filters clips by viral potential)
- **Export Mode** settings (auto_publish or download)

### 2. Execute & Submit

Click **Execute Workflow**, enter the YouTube video URL in the form, and submit to start the automation.

## How It Works

The workflow follows these steps:

1. **Form Submission** - You provide a YouTube video URL
2. **AI Processing** - Vizard AI analyzes the video and extracts potential viral clips
3. **Viral Scoring** - Each clip receives a viral potential score (0-10)
4. **Filtering** - Only clips above your threshold score proceed
5. **Publishing Decision** - Based on your settings, clips are either:
   - Scheduled for future posting at your specified time
   - Posted immediately to social media
   - Downloaded for manual review

## Prerequisites

Before using this workflow:

- Vizard AI account with API key (get from vizard.ai)
- Social media account credentials (if using auto_publish mode)
- Active n8n instance

## Configuration Parameters

**vizard_api_key** (required)
Your Vizard AI API key for video processing

**viral_score_threshold** (default: 5)
Minimum score for clips to be published (range: 0-10). Lower values allow more clips through, higher values are more selective.

**export_mode** (required)
Choose `auto_publish` or `download`

**schedule_time** (optional)
Unix timestamp for scheduled publishing (e.g., 1767605047792). Leave empty for instant posting. You can convert dates to timestamps at epochconverter.com

## Tips for Best Results

💡 Default threshold of 5 is moderate - increase to 7-8 for only top-quality clips, or lower to 3-4 for more volume

💡 Test with download mode first before enabling auto_publish

💡 Use scheduled publishing during peak engagement hours

💡 Longer videos (10+ minutes) typically generate more clip options

💡 To get Unix timestamp: visit epochconverter.com or use `new Date('2025-01-15 14:00').getTime()` in browser console

## Troubleshooting

**Workflow stuck at "Wait" node?**
Check your Vizard API key is valid and has available credits

**No clips generated?**
Try lowering the viral_score_threshold to 3-4 or use a different video with more dynamic content

**Publishing failed?**
Verify social media credentials are properly configured in the workflow

**Wrong publish time?**
Double-check your Unix timestamp is in milliseconds (13 digits), not seconds (10 digits)

## Use Cases

- Extract podcast highlights for social promotion
- Create short-form content from tutorials and webinars
- Generate product demo snippets from full videos
- Repurpose long-form content for TikTok, Instagram Reels, YouTube Shorts

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
