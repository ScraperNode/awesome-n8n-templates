# 🎬 Create and publish UGC social videos from Telegram with OpenAI, VEO3, and Blotato

> ⚡ **13 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a Telegram image and caption into an AI-generated social video, stores assets and metadata in Google Drive and Google Sheets, generates prompts and captions with OpenAI, renders media via FAL NanoBanana and KIE VEO3, then publishes the final video to multiple platforms through Blotato.

## How it works
1. Triggers when a Telegram message arrives containing a photo and caption.
2. Downloads the Telegram image, uploads it to Google Drive, and logs the idea (image URL, caption, and status) to Google Sheets.
3. Uses OpenAI to analyze the reference image, saves the YAML description to Google Sheets, and generates a UGC-style image prompt.
4. Sends the prompt and reference image to FAL NanoBanana to create an edited image, waits for completion, and fetches the generated image URL.
5. Reads video settings from Google Sheets, uses OpenAI to generate a structured video prompt, and calls the KIE VEO3 API to render a video from the prompt and edited image.
6. Uses OpenAI to generate a short social caption, saves the final video URL/title/caption to Google Sheets, and sends the video URL and preview back to Telegram.
7. Uploads the video to Blotato and publishes it to the enabled platforms (TikTok, LinkedIn, Facebook, Instagram, X, YouTube, Threads, Bluesky, Pinterest), then updates Google Sheets to Published and notifies Telegram.

## Setup
1. Create and connect a Telegram bot credential, then paste your bot token into the configuration field used to resolve Telegram file URLs.
2. Connect Google Drive and select the target drive and folder where the reference image is stored.
3. Connect Google Sheets, select your spreadsheet and sheet, and ensure it includes the required columns (IMAGE NAME, IMAGE URL, IMAGE DESCRIPTION, CAPTION, URL VIDEO FINAL, TITRE VIDEO, CAPTION VIDEO, STATUS) plus a configuration sheet for the video model/aspect ratio.
4. Add an OpenAI API credential for image analysis, prompt generation, and caption writing.
5. Add HTTP Header Auth credentials for the FAL NanoBanana API and the KIE VEO3 API endpoints.
6. Install the Blotato community node, add your Blotato credential, and select the correct account IDs (and Facebook Page / Pinterest board where applicable) for each platform you want to publish to.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
