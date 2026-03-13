# 🎬 Clone viral TikTok & Instagram reels with Apify and Gemini 2.5 Pro

> ⚡ **4,409 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

# Reverse engineer short-form videos from Instagram and TikTok using Gemini AI

## Who's it for

Content creators, AI video enthusiasts, and digital marketers who want to analyze successful short-form videos and understand their production techniques. Perfect for anyone looking to reverse-engineer viral content or create detailed prompts for AI video generation tools like Google Veo or Sora.

## How it works

This automation takes any Instagram Reel or TikTok URL and performs a forensic analysis of the video content. The workflow downloads the video, converts it to base64, and uses Google's Gemini 2.5 Pro vision API to generate an extremely detailed "Generative Manifest" - a comprehensive prompt that could be used to recreate the video with AI tools.

The analysis includes:
- Visual medium identification (film stock, camera sensor, lens characteristics)
- Color grading and lighting breakdown
- Shot-by-shot deconstruction with precise timing
- Camera movement and framing details
- Subject description and action choreography
- Environmental and atmospheric details

## How to set up

1. **Configure API credentials:**
   - Add your Apify API key for video scraping
   - Set up Google Gemini API authentication

2. **Set up Slack integration (optional):**
   - Configure Slack OAuth for result sharing
   - Update the channel ID where results should be posted

3. **Access the form:**
   - The workflow creates a web form where you can input video URLs
   - Form accepts both Instagram Reel and TikTok URLs

## Requirements

- **Apify account** with API access for video scraping
- **Google Cloud account** with Gemini API enabled
- **Slack workspace** (optional, for sharing results)
- Videos must be publicly accessible (no private accounts)

## How to customize the workflow

- **Modify the analysis prompt:** Edit the "set_base_prompt" node to adjust the depth and focus of the video analysis
- **Add different platforms:** Extend the switch node to handle other video platforms
- **Integrate with other tools:** Replace Slack with email, Discord, or other notification systems

## 🔗 Nodes Used

HTTP Request, Slack, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
