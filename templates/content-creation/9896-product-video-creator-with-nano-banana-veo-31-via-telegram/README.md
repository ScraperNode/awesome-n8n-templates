# 🎬 Product video creator with Nano Banana & Veo 3.1 via Telegram

> ⚡ **3,453 views** · 🎬 [Content Creation & Video](../)

## Description

# Product Video Creator with Nano Banana & Veo 3.1 via Telegram

## Who's it for

This workflow is perfect for:
- E-commerce sellers needing quick product videos
- Social media marketers creating content at scale
- Small business owners without video editing skills
- Product photographers enhancing their offerings
- Anyone selling on Instagram, TikTok, or mobile-first platforms

## What it does

Transform basic product photos into professional marketing videos in under 2 minutes:

1. Send a product photo to your Telegram bot
2. **Nano Banana** analyzes and enhances your image with studio-quality lighting
3. **Veo 3.1** generates an 8-second vertical video with motion and audio
4. Receive your scroll-stopping marketing video automatically

Perfect for creating engaging vertical content without expensive tools or editing expertise.

## How it works

**Input** → User sends product photo via Telegram with optional caption

**AI Analysis** → Nano Banana analyzes product and generates detailed enhancement prompt

**Image Enhancement** → Nano Banana creates commercial-grade photo (9:16, studio lighting)

**Video Generation** → Veo 3.1 creates 8-second 1080p video with motion and audio

**Delivery** → Auto-polls status every 30s, delivers final video to Telegram

## Requirements

### Google Cloud Platform
- **Vertex AI API** enabled for Veo 3.1
- **Generative Language API** enabled for Nano Banana
- OAuth2 credentials
- Get credentials from [Google Cloud Console](https://console.cloud.google.com)

### Telegram
- Bot token from [@BotFather](https://t.me/botfather)

### n8n
- Self-hosted or cloud instance

## Setup

1. Import workflow JSON into n8n
2. Add credentials:
   - Telegram API (bot token)
   - Google OAuth2 API (client id and secret)
   - Google PaLM API (API key)
3. Update your Project ID in both Veo 3.1 nodes
4. Activate workflow and test with a product photo

## How to customize

**Aspect Ratio:** Choose 9:16 (vertical), 16:9 (horizontal) in "Generate Enhanced Image" and "Initiate veo 3.1" nodes

**Duration:** Set 2 to 8 seconds by adjusting `durationSeconds` in "Initiate veo 3.1 Video Generation"

**Quality:** Select 720p or 1080p by changing `resolution` in "Initiate veo 3.1 Video Generation"

**Audio:** Enable or disable background music by toggling `generateAudio` in "Initiate veo 3.1 Video Generation"

**Enhancement Style:** Match your brand aesthetic by editing the prompt in "AI Design Analysis" node

**Polling Time:** Adjust retry interval by changing wait time in "Processing Delay (30s)" node

## Key Features

🔐 **Direct Google APIs** – No third-party services. Uses **Nano Banana** and **Veo 3.1** directly via Google Cloud for maximum reliability and privacy

⚡ **Fully Automated** – Send photo, receive video. Zero manual work required

🎨 **Studio Quality** – **Nano Banana** delivers professional lighting, composition, and AI-powered color grading

📱 **Mobile-First** – Default 9:16 vertical format optimized for Instagram Reels, TikTok, and Stories

🔄 **Smart Retry Logic** – Automatically polls **Veo 3.1** status every 30 seconds until video generation completes

🎵 **Audio Included** – **Veo 3.1** generates background music automatically (can be disabled)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Convert to File, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
