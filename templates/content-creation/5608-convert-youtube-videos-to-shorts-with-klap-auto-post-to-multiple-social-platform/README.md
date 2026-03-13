# 🎬 Convert YouTube videos to shorts with Klap & auto-post to multiple social platforms

> ⚡ **20,322 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Workflow Screenshot](https://www.dr-firas.com/youtube_shortsii.png)

# Convert YouTube videos to viral Shorts with Klap and auto-post with Blotato

&gt; ⚠️ **Disclaimer:** This workflow uses Community Nodes and requires a self-hosted n8n instance.

### Who is this for?

This workflow is perfect for content creators, YouTubers, marketing teams and entrepreneurs who want to effortlessly convert long YouTube videos into short, viral-ready clips and publish them automatically on TikTok, Instagram, YouTube Shorts and other platforms.

### What problem is this workflow solving?

Manually creating short, engaging clips from YouTube videos takes hours:
- Selecting highlights
- Adding subtitles and effects
- Downloading and editing
- Posting individually on each platform

This workflow eliminates all of that:
- AI-powered Shorts generation with Klap
- Smart scheduling based on your posting calendar
- Full automation of uploads to multiple platforms

### What this workflow does

From a simple YouTube link sent via Telegram, the workflow:
1. Extracts the YouTube URL and number of Shorts requested
2. Sends the video to Klap for AI-powered Shorts generation
3. Checks when the Shorts are ready
4. Schedules publication times based on your custom settings
5. Uploads the Shorts to Blotato
6. Auto-posts on TikTok, YouTube Shorts, Instagram and more
7. Sends a confirmation recap to Telegram

### Setup

1. Connect your **Telegram bot** to the trigger node
2. Add your **Klap API key** for video processing
3. Link your **Google Sheets** with your scheduling preferences
4. Add your **Blotato API key** and social platform IDs
5. Adjust the number of Shorts generated if needed
6. Modify the scheduling logic or time windows in the Google Sheets

### How to customize this workflow to your needs

- Change AI video settings in the Klap API request  
- Adjust time windows and frequency in the scheduling nodes  
- Limit the workflow to specific platforms (e.g., TikTok only)  
- Add a manual approval step before publishing  
- Modify the Telegram recap message content  



📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Youtube-2223d6550fd980d1b270c84fca22110d?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
