# 🎬 Automated news video generation with HeyGen AI, Apify, and GPT-4.1 Mini

> ⚡ **873 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This n8n workflow automates the creation of AI-generated news recap videos using HeyGen's avatar technology. The template scrapes daily newsletter content, uses AI to generate engaging scripts, and produces professional video summaries with synthetic avatars and voices—all without manual intervention.

## Use Cases
1. **Daily News Digests**: Automatically convert Morning Brew or similar newsletters into short-form video content for social media platforms like TikTok, Instagram Reels, or YouTube Shorts.
2. **Content Repurposing**: Transform written blog posts, articles, or reports into engaging video summaries for broader audience reach.
3. **Automated Social Media Content**: Schedule daily video updates for your audience without recording equipment or on-camera presence.

## How It Works
The workflow operates in three main stages:

**Stage 1 - Content Acquisition**: The Apify Web Scraper node fetches the latest newsletter content from Morning Brew, extracting markdown-formatted text for processing.

**Stage 2 - Script Generation**: An AI agent powered by GPT-4 analyzes the content and creates a concise 40-60 word script highlighting the top 2-4 stories in an engaging, conversational tone perfect for short-form video.

**Stage 3 - Video Production**: The script is sent to HeyGen's API, which generates a video featuring your custom AI avatar delivering the content. The workflow includes intelligent polling to check video completion status before proceeding.

## Customization Options
- **Avatar & Voice Selection**: Use the "Get Avatars" and "Get Voices" nodes to browse available options and customize your video presenter
- **Content Source**: Modify the News Scraper node URL to pull from any website or RSS feed
- **Script Style**: Adjust the AI prompt in the Script Writer node to change tone, length, or focus areas
- **Video Dimensions**: Configure aspect ratios (landscape, portrait, square) for different platforms

## Prerequisites
- HeyGen API key (for video generation)
- OpenRouter API key (for AI script writing)
- Apify token (for web scraping)

---

# 🛠️ Setup Guide  
## **Author: [Jadai Kongolo](https://www.youtube.com/@jadaikongolo)**

Follow these steps to configure your HeyGen + n8n automation workflow:

1. Go to [HeyGen](https://app.heygen.com/), create your AI avatar and voice.  
   - You can import your [ElevenLabs](https://www.elevenlabs.io/) voice clone, or let HeyGen clone your voice automatically.

2. Connect your **HeyGen API key** to the following nodes:
   - `Generate Video`
   - `Get Video`
   - `Get Avatars`
   - `Get Voices`

3. If you want to test out the **"Create video with polling"** flow:
   - Connect your [OpenRouter](https://openrouter.ai/) API key.
   - Connect your **Apify token** in the node called `News`.

Make sure all credentials are properly stored and referenced in your environment or credentials store for best security and reuse.

---

## Recommended Node Renaming for Clarity

To improve workflow readability, consider renaming these nodes:

| Current Name | Suggested Name | Purpose |
|--------------|----------------|---------|
| `News` | `Scrape Morning Brew Newsletter` | Fetches newsletter content |
| `Script Writer` | `AI Script Generator` | Creates video script from content |
| `Generate Video1` | `HeyGen Video Creation` | Initiates video generation |
| `Get Video1` | `Check Video Status` | Polls for video completion |
| `30 Seconds` | `Wait for Video Processing` | Initial wait period |
| `If` | `Check if Video Complete` | Validates completion status |
| `Wait` | `Retry Video Status Check` | Waits before re-polling |

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
