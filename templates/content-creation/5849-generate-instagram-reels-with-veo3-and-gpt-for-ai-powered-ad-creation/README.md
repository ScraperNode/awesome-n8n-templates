# 🎬 Generate Instagram reels with Veo3 and GPT for AI-powered ad creation

> ⚡ **4,762 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

🎬 Veo3 Instagram Reel Generator – AI-Powered Ad Creation in Minutes

Description:
This no-code workflow transforms your creative brief into an engaging Instagram Reel using OpenAI and Veo3 API (via Wavespeed) — fully automated in n8n. Just type a product, theme, or trend via chat, and get a short-form video plus caption delivered and logged, ready to post.

Perfect for marketers, creators, and content teams looking to scale their ad content output without hiring editors or creative agencies.

Watch step-by-step build video tutorial here:
https://www.youtube.com/@Automatewithmarc

⚙️ How It Works:
💬 Chat Trigger
 Start by sending a message like “Create an ad for a minimalist perfume brand using the ‘quiet luxury’ trend.”

🧠 Prompt Engineer (ChatGPT)
 Generates a 5–8 second descriptive video prompt suitable for Veo3 based on your input — including visual tone, motion, and hook.

📡 API Call to Veo3 via Wavespeed
 Submits the prompt to create a short video (9:16 ratio, ~8 seconds), then polls for the final video URL.

✍️ Caption Generator (GPT)
 Creates an Instagram-friendly caption to pair with the video, using a playful, impactful writing style.

📄 Google Sheets Integration
 Logs each generated video prompt, final video URL, caption, and status into a Google Sheet for easy management and scheduling.

🔌 Tools & Integrations:
OpenAI GPT (Prompt generation & caption copywriting)

Veo3 via Wavespeed API (Video generation)

Google Sheets (Content tracking and publishing queue)

Telegram / Chat UI trigger (Optional – easily swappable)

💡 Use Cases:
Instagram & TikTok ad generation

Creative automation for digital agencies

Short-form UGC testing at scale

Trend-driven campaign ideation

## 🔗 Nodes Used

Google Sheets, HTTP Request, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
