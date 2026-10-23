# 🎬 Generate UGC product videos from Google Sheets with DALL·E, GPT-4 and Sora

> ⚡ **118 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## This n8n template demonstrates how to fully automate the creation of UGC-style product videos using AI, starting from a simple Google Sheet.

It transforms product data into AI-generated images, cinematic video scripts, and final videos, then uploads everything to Google Drive and updates your sheet automatically. 

## 💡 Use cases
- Generate UGC ads at scale for e-commerce products
- Create TikTok / Reels content automatically
- Build content pipelines for agencies or creators
- Rapidly test different product angles, audiences, and messaging
- Automate creative production from structured data (Google Sheets)


## Good to know

1. This workflow uses multiple AI services (image + video), so cost depends on usage:
- Image generation (DALL·E)
- Video generation (Sora)

2. Video generation is asynchronous and may take several minutes per item
3. Some AI models (like Sora) may be region-restricted or limited access
4. Generated image URLs may expire, so storing them (as done here) is important

## How it works
1. Reads product data from Google Sheets and selects rows marked "Pending".
2. Creates a prompt and generates a product image.
3. Analyzes the image and turns it into a video script.
4. Sends the script to Sora and waits until the video is ready.
5. Uploads the video to Google Drive and updates the sheet.
6. Logs errors and marks the row as "Error".

## How to use

1. Add products to Google Sheets with name, description, audience, and set status to "Pending".
2. Run the workflow or let the schedule trigger process items automatically.
3. The system generates image → script → video, uploads them, and updates your sheet.

## Requirements

1. Requires OpenAI, Google Sheets, and Google Drive accounts.
2. Requires an n8n instance with credentials configured.


## Customizing this workflow

1. Replace the schedule trigger with a webhook or form for real-time use.
2. Generate multiple videos per product.
3. Send outputs to platforms like TikTok, Meta Ads, or CMS tools.
4. Add voiceovers, captions, or permanent asset storage.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
