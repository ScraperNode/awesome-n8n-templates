# 📱 Generate and publish social posts with Gemini, Kie.ai, and Zernio API

> ⚡ **3,403 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Generate & publish social media content with Gemini, Kie.ai, and Zernio API

## How it works
1. Google Gemini (gemini-2.5-flash) generates platform-optimized copy for Facebook, Instagram, LinkedIn, and TikTok, returned as structured JSON with hashtags and a suggested posting time.
2. Kie.ai Seedream v4 creates a branded 1080x1080 image; the workflow polls the task until the CDN image URL is ready.
3. The image is uploaded to Zernio: direct multipart upload for files up to 4MB, presigned upload (init + PUT) for larger files up to 5GB.
4. A post is created on each enabled platform through the Zernio posts endpoint, with the correct platform and accountId mapping, and published immediately.
5. All platform responses are merged into one success report with ready-to-send messages for Slack, Discord, email, and webhook notifications.

## Setup
1. Google Gemini (gemini-2.5-flash) generates platform-optimized copy for Facebook, Instagram, LinkedIn, and TikTok, returned as structured JSON with hashtags and a suggested posting time.
2. Kie.ai Seedream v4 creates a branded 1080x1080 image; the workflow polls the task until the CDN image URL is ready.
3. The image is uploaded to Zernio: direct multipart upload for files up to 4MB, presigned upload (init + PUT) for larger files up to 5GB.
4. A post is created on each enabled platform through the Zernio posts endpoint, with the correct platform and accountId mapping, and published immediately.
5. All platform responses are merged into one success report with ready-to-send messages for Slack, Discord, email, and webhook notifications.

## Requirements
- Google Gemini (gemini-2.5-flash) generates platform-optimized copy for Facebook, Instagram, LinkedIn, and TikTok, returned as structured JSON with hashtags and a suggested posting time.
- Kie.ai Seedream v4 creates a branded 1080x1080 image; the workflow polls the task until the CDN image URL is ready.
- The image is uploaded to Zernio: direct multipart upload for files up to 4MB, presigned upload (init + PUT) for larger files up to 5GB.
- A post is created on each enabled platform through the Zernio posts endpoint, with the correct platform and accountId mapping, and published immediately.
- All platform responses are merged into one success report with ready-to-send messages for Slack, Discord, email, and webhook notifications.

## Customization
- Edit the Gemini prompt to change tone, language, platform mix, or content structure
- Swap the image model or prompt in the Kie.ai node
- Replace publishNow with scheduledFor (ISO 8601 UTC) to schedule posts instead of publishing instantly
- Wire the prepared notification payload into your own Slack, Discord, or email nodes
- Swap the manual trigger for a Schedule or Webhook trigger for full autopilot

## Additional info
Sticky notes inside the workflow document every section: overview, credentials, content generation, image generation, media upload, publishing logic, notifications, and error handling. Fallback content is included in case Gemini returns unparseable JSON. Estimated cost per run: about $0.02 for one Seedream image, a fraction of a cent for Gemini text, and no per-post cost from Zernio (usage-based pricing). Built by Adrian (RoboMarketing) for the n8n Arena Challenge, September 2025; updated for the Late to Zernio rebrand with the new presigned upload flow.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
