# 🎬 Generate daily auto-service AI videos and post them with OpenAI, Perplexity, AtlasCloud, and Blotato

> ⚡ **73 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or manually) to research an auto-service topic with Perplexity, generate a caption and text-to-video prompt with OpenAI, render an AI video via AtlasCloud, then publish it to TikTok, YouTube, Instagram, and Facebook through Blotato while sending a Telegram preview.

## How it works
1. Runs every morning on a schedule (or starts via a manual trigger).
2. Loads your business settings (name, topic, language, video format, and CTA) from a central configuration.
3. Uses Perplexity web research plus an OpenAI chat model to produce a structured caption, hashtags, and a cinematic text-to-video prompt.
4. Sends the prompt to AtlasCloud to generate a short vertical video and waits before polling AtlasCloud for the render status.
5. Repeats the wait-and-check loop until AtlasCloud reports the video render as completed.
6. Prepares the final caption and video URL, then publishes the video to TikTok, YouTube, Instagram Reels, and Facebook Reels via **[Blotato](https://blotato.com/?ref=firas)** and sends a Telegram message with the post preview and video link.

## Setup
1. Add credentials for OpenAI, Perplexity, AtlasCloud (HTTP Header Auth), **[Blotato](https://blotato.com/?ref=firas)**, and Telegram.
2. Update the Configuration values (business name, topic, CTA, language, video duration, aspect ratio, and render wait time) and set your Telegram chat ID.
3. Select the correct AtlasCloud credential on both AtlasCloud HTTP requests (generate video and get render status).
4. In each Blotato node, choose the target social accounts (and Facebook Page ID) to publish to, and ensure your n8n instance supports the Blotato community node.

## Additional info
# Generate AI videos for an auto service business and post them to social media

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-AI-videos-for-an-auto-service-business-and-post-them-to-social-media-39b3d6550fd9811696fefa2ff1923c62)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
