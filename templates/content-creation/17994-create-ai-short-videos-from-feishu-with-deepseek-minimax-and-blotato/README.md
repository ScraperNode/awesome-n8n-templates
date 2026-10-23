# 🎬 Create AI short videos from Feishu with DeepSeek, MiniMax and Blotato

> ⚡ **33 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow triggers from a Feishu bot message containing an image and topic, uses DeepSeek to generate trends, a script, captions, and a quality check, clones voice with MiniMax, creates a lip-sync video via FAL.ai/VEED, logs results to Google Sheets, and publishes to multiple platforms through Blotato.

## How it works
1. Receives a Feishu webhook event when a user sends an image with a topic caption and returns the required URL-verification challenge during setup.
2. Extracts the image key, topic, chat ID, and sender details, then requests a Feishu tenant access token and downloads the original image file.
3. Uploads the image to tmpfiles.org to get a public URL, then uses DeepSeek to generate three trend directions and a 30-second voiceover script for the topic.
4. Sends the script to MiniMax TTS with your cloned voice settings to generate an MP3 narration, fixes the audio MIME type if needed, and uploads the audio to tmpfiles.org for a public URL.
5. Calls FAL.ai (VEED Fabric 1.0) to combine the image and audio into a lip-sync video, waits for rendering, and retrieves the final MP4 URL.
6. Uses DeepSeek to generate a short social caption with hashtags, appends a record to Google Sheets, and sends a Feishu interactive card with the video preview link.
7. Runs a DeepSeek quality check, and if the score meets the threshold it notifies Feishu, uploads the video to Blotato, publishes to TikTok, Instagram, YouTube Shorts, and Twitter/X, then updates the Google Sheets row status to DONE.

## Setup
1. Create a Feishu self-built app with bot + event subscription permissions, copy the workflow webhook URL into Feishu “Event Subscriptions,” and provide the Feishu App ID and App Secret in the workflow configuration.
2. Add API keys for DeepSeek, MiniMax (API Key + Group ID + voice_id), and FAL.ai (with access to the VEED Fabric 1.0 model) and paste them into the workflow configuration.
3. Install the Blotato community node (@blotato/n8n-nodes-blotato), add your Blotato API credential in n8n, connect your social accounts in Blotato, and set each platform accountId value.
4. Connect Google Sheets OAuth credentials, create a sheet with columns like IDEA, URL IMAGE, URL AUDIO, URL VIDEO, CAPTION, STATUS, and update the workflow with your Google Sheets document ID and sheet name.
5. Review and adjust environment values such as the qualityThreshold (pass/fail gate) and the fixed rendering wait time to match your content standards and FAL.ai generation speed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
