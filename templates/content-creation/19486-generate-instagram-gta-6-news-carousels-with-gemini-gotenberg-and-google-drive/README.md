# 🎬 Generate Instagram GTA 6 news carousels with Gemini, Gotenberg and Google Drive

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow scrapes today’s GTA 6 news links, extracts article text and images, uses Google Gemini to select and write carousel copy, renders branded slides to JPEGs with Gotenberg, uploads them to Google Drive, and publishes the images as an Instagram carousel via the Meta Graph API.

## How it works
1. Runs when you manually execute the workflow.
2. Fetches the gta6.channel news page, extracts today’s external article links, limits the list, and downloads each article’s HTML.
3. Extracts readable text plus a set of unique, non-boilerplate images from each article and aggregates the stories into a single payload.
4. Sends the aggregated stories to Google Gemini, which selects 3–5 distinct items and returns a hook headline, per-slide headlines/captions with highlight phrases, and a final Instagram caption in strict JSON.
5. Builds styled HTML for a hook slide, one slide per selected story (with unique images), and an end card, then renders each HTML slide into a 1080×1350 JPEG using Gotenberg.
6. Uploads each rendered slide image to Google Drive, makes the files public, creates Instagram carousel item containers from the public image URLs, bundles them into a carousel, and publishes the post via the Meta Graph API.

## Setup
1. Add credentials for Google Gemini (Google PaLM/Gemini API) and Meta Facebook Graph API with permissions to publish to a linked Instagram Business account.
2. Add Google Drive OAuth2 credentials, choose the target Drive and folder, and ensure link sharing is allowed for uploaded images.
3. Replace YOUR_IG_ACCOUNT_ID in the three Meta Graph API request URLs (create media item, bundle carousel, publish) with your Instagram account ID.
4. Provide a reachable Gotenberg endpoint (the template uses http://gotenberg:3000) in your environment so n8n can render HTML to images.
5. Update the branding variables and content defaults in the slide builder code (for example CHANNEL_HANDLE, accent colors, hashtags, and any placeholder/fallback images).

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
