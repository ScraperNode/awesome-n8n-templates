# 🎬 Make UGC ads from app screen recordings with Gemini, Sora 2, and VideoBGRemover

> ⚡ **1,281 views** · 🎬 [Content Creation & Video](../)

## Description

## Who's it for

This workflow is perfect for app developers, SaaS founders, and mobile growth teams who need constant UGC-style video ads without hiring creators or agencies. If you're spending $500+ per creator and waiting weeks for videos, this automates the entire process for $2-5 per video in 8 minutes.

## How it works

Upload an app screen recording, and this n8n workflow handles everything: Gemini AI analyzes the recording and generates a UGC ad structure (hook, problem, solution, CTA with word limits). It describes the ideal actor, emotional journey, and visual style. Sora 2 then generates a hyper-realistic AI actor delivering the script naturally. VideoBGRemover removes the actor's background and composites them picture-in-picture over your screen recording with audio mixing. The result is a scroll-stopping UGC ad ready for TikTok, Instagram, and Facebook.

## Set up steps

Setup takes ~10 minutes and requires 3 API keys:

1. Get your **Gemini API key** from Google AI Studio
2. Get your **FAL AI key** for Sora 2 access
3. Get your **VideoBGRemover API key** at https://videobgremover.com/n8n
4. Add all three keys to n8n environment variables
5. Connect Google Drive for output storage
6. Test with the included sample screen recording

The workflow includes 7 detailed sticky notes explaining each section (Gemini analysis, Sora generation, VideoBGRemover composition, output handling).

## Requirements

- Google Gemini API key (for video analysis)
- FAL AI API key (for Sora 2 access)
- VideoBGRemover API key
- Google Drive account (for final video storage)
- App screen recordings in vertical format (9:16 recommended, 4-12 seconds)

## How to customize

Modify the Gemini prompt to adjust ad tone, script word limits, or actor descriptions. Change composition settings in the VideoBGRemover node (position, size, audio mix). Add your own post-processing nodes for branding, captions, or multi-platform exports.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
