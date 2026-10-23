# 🎬 Create TikTok, Reels and Shorts product videos from Shopify with Gemini and Veo

> ⚡ **10 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow triggers when a new Shopify product is created, uses Google Gemini (including Veo 3.1) to turn the product image into an 8-second vertical video, publishes it to TikTok, Instagram Reels, and YouTube Shorts via PostWire, and logs results to Google Sheets with Gmail failure alerts.

## How it works
1. Triggers when a new product is created in Shopify.
2. Filters to active products that have a product image and skips products already processed in previous executions.
3. Sends the product image and details to Google Gemini to generate a Veo-ready video prompt and a concise selling point.
4. Uses Veo 3.1 (via Google Gemini) to generate an 8-second 9:16 product video from the prompt.
5. Publishes the video to TikTok, Instagram, and YouTube through PostWire, generating platform-appropriate captions and using an idempotency key per product.
6. Appends a “published” row per platform to Google Sheets, or logs failures to Google Sheets and emails a consolidated fix report via Gmail.

## Setup
1. Create Shopify access token credentials for the Shopify Trigger and ensure your products include an image.
2. Add Google Gemini credentials and enable billing/access for Veo 3.1 in Google AI Studio.
3. Install and configure PostWire (postwire.io), connect your social accounts, and add a PostWire API credential.
4. Create a Google Sheets spreadsheet with columns date, product, network, status, link, and note, then select the document and sheet in both Google Sheets nodes.
5. Add Gmail credentials and update the store URL, notification email address, and preferred visual style in the Store settings step.

## 🔗 Nodes Used

Google Sheets, Shopify Trigger, Gmail, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
