# 🎬 Create real estate listing video ads with OpenAI and Videotok

> ⚡ **97 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow takes a real estate listing, uses OpenAI to generate ad copy and a video generation prompt, then sends it to the Videotok API to create a 9:16 vertical listing video ad with a caption and compliance notes.

## How it works
1. Starts manually to test the workflow with a sample property listing.
2. Builds a listing record containing the address, listing details, and image URLs (replace this with your real listing source).
3. Sends the listing data to OpenAI to generate structured JSON for a video ad, including a script, generation prompt, caption, and compliance notes.
4. Parses the OpenAI output and maps it into a Videotok generation payload with brand kit, reference images, quality, duration, and an idempotency key.
5. Calls the Videotok Generations API to create the vertical video ad using the generated prompt and listing images.

## Setup
1. Add environment variables for OPENAI_API_KEY, VIDEOTOK_API_KEY, and VIDEOTOK_BRAND_KIT_ID.
2. Replace the sample listing step with your own source (CRM, Airtable, Google Sheets, MLS export, or scraper) and ensure it outputs address, listing_details, and listing_image_urls.
3. Confirm the Videotok template slug (viral-video-ads) and adjust the video settings (duration, quality tier, aspect ratio) to match your requirements.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
