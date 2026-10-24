# 🎬 Auto-post Amazon India affiliate videos to 6 platforms with FLUX, Shotstack and Buffer

> ⚡ **58 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Turn any Amazon India product URL into a fully-edited 10-second lifestyle video and auto-publish it to Instagram, Facebook, X (Twitter), LinkedIn, YouTube, and Threads — with platform-optimized captions, hashtags, and FTC-compliant affiliate disclosures.

This end-to-end automation removes every manual step from running an Amazon affiliate content business. Drop product URLs into a Google Sheet, and the workflow handles scraping, image generation, video editing, caption writing, and multi-platform posting on an hourly schedule.

──────────────────────────
🔧 What this workflow does
──────────────────────────
1. Pulls pending Amazon India product URLs from Google Sheets
2. Scrapes full product data (title, price, discount, rating, features, description, images) via Apify
3. Generates a high-end lifestyle scene prompt using GPT-4o-mini (Art Director persona)
4. Creates a photorealistic lifestyle image with FAL AI's FLUX Kontext Pro — keeping the original product intact
5. Uploads the image to ImgBB for stable hosting
6. Writes platform-native captions for 6 platforms using Gemini 2.5 Flash via OpenRouter:
   • Facebook — engagement-led, Indian family tone
   • Instagram — aspirational with 20-25 hashtags
   • Threads — 180-char punchy hook
   • Pinterest — SEO-optimized long-tail keywords
   • LinkedIn — professional market commentary
   • X — 240-char with raw affiliate link
7. Combines the image + your background audio into a 1080p 1:1 video using Shotstack (with animated text overlays)
8. Posts the final video to all 6 platforms via Buffer's GraphQL API (2 Buffer accounts supported)
9. Updates Google Sheets with per-platform status + Buffer post IDs
10. Sends a full Telegram summary with cost breakdown, video preview, and posting status

──────────────────────────
💰 Cost per run (approx.)
──────────────────────────
- Apify scraping: ~$0.0014
- FAL AI FLUX Kontext Pro: $0.04
- Gemini 2.5 Flash (OpenRouter): ~$0.002
- Shotstack: included in free tier (50 mins/month)
- Total: ~$0.045 per product → 6 posts across 6 platforms

──────────────────────────
🛠 Required setup
──────────────────────────
- Apify account (Amazon scraper actor)
- OpenRouter API key (Gemini 2.5 Flash + GPT-4o-mini)
- FAL AI account
- ImgBB API key (free)
- Shotstack API key
- Buffer account (2 Buffer workspaces recommended — 6 social channels)
- Google Sheets OAuth2
- Telegram Bot (notifications)
- Amazon Associates affiliate tag

A complete setup guide is included as a sticky note inside the workflow with step-by-step credential instructions and channel ID placeholders.

──────────────────────────
👥 Who this is for
──────────────────────────
- Amazon affiliate marketers running multi-platform content
- Social media managers automating product content
- Solo founders building affiliate income streams
- Agencies managing affiliate accounts at scale
- Content creators who want to skip manual editing and posting

──────────────────────────
✅ Key features
──────────────────────────
- FTC-compliant affiliate disclosures hardcoded into every caption
- Platform-specific character limits enforced (Threads 180, X 240, etc.)
- Indian market tone built into AI prompts
- Buffer GraphQL integration (bypasses deprecated n8n LinkedIn node)
- Cost tracking node — see actual $ spent per run
- Status tracking in Google Sheets per platform
- Resilient JSON parsing with sanitization fallbacks

Built and battle-tested for Amazon India affiliate publishers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
