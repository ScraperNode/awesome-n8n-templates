# 🎬 Text-to-video generator & social media publisher with Fal.ai and Telegram approval

> ⚡ **215 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## AI Video Generator & Social Media Publisher (Telegram Bot)

Turn a single text message into a fully produced video and publish it across 5 social media platforms automatically. This workflow combines AI video generation (Fal.ai) with a "Human-in-the-loop" approval system via Telegram, ensuring you never post content without checking it first.

## Who is this for?
- Social Media Managers who want to automate Short/Reel creation.
- Content Creators looking to scale their output on Instagram, TikTok, and YouTube.
- Brands that need consistent, on-brand video content generated from simple text prompts.

## How it works
1. **Trigger:** Send a text message to your Telegram bot (e.g., "A futuristic city with neon lights").
2. **AI Drafting:** An AI Agent (GPT-4o) converts your message into a detailed cinematic video prompt based on your brand guidelines.
3. **Generation:** Fal.ai (Veo3 model) generates a high-quality 9:16 video.
4. **Approval Loop:** The bot sends you the video preview. 
   - Reply **"Great"**: The workflow proceeds to publishing.
   - Reply with **feedback** (e.g., "Too dark, make it brighter"): The AI refines the prompt and regenerates the video.
5. **Publishing:** Once approved, the workflow generates platform-specific captions and hashtags, logs the post to Google Sheets, and uploads the video to Blotato to publish on Instagram, Facebook, LinkedIn, TikTok, and YouTube Shorts.

## Requirements
- **OpenAI API Key**
- **Fal.ai API Key** (for video generation)
- **Telegram Bot Token**
- **Google Sheets** (for logging posts)
- **Blotato Account** (for multi-channel publishing)

## How to set up
1. **Credentials:** configure your credentials for OpenAI, Fal.ai, Telegram, Google Sheets, and Blotato.
2. **Fal.ai Setup:** Create a **Header Auth** credential named `Authorization` with value `Key &lt;YOUR_FAL_KEY&gt;`.
3. **Google Sheets:** In the "Log to Google Sheets" node, select the specific Sheet you want to use for tracking.
4. **Blotato:** In the 5 publishing nodes (Instagram, Facebook, etc.), select your specific Account IDs from the dropdowns.
5. **Brand Customization:** Open the "Draft Video Prompt" and "Generate Caption" nodes to edit the System Prompt with your specific brand voice and aesthetic guidelines.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
