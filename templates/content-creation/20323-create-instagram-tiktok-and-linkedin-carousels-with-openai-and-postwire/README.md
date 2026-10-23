# 🎬 Create Instagram, TikTok and LinkedIn carousels with OpenAI and PostWire

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a carousel topic via an n8n form, uses OpenAI to plan slide copy and generate images, uploads the slides to PostWire, and publishes them as Instagram, TikTok, and LinkedIn multi-image posts, logging results to Google Sheets and emailing failures via Gmail.

## How it works
1. Receives a submission from an n8n form with the topic, audience, number of slides, and target networks.
2. Uses OpenAI (gpt-5-mini) to generate a JSON plan containing per-slide headlines, image prompts, alt text, and platform-specific captions.
3. For each planned slide, requests an upload URL from PostWire, generates a square image with OpenAI GPT Image (gpt-image-1-mini), uploads the PNG to PostWire, and finalizes it to get a hosted media URL.
4. Aggregates all slide media URLs, sorts them into the original slide order, and publishes a multi-image post to the selected platforms via PostWire using an idempotency key based on the form submission.
5. If all platforms publish successfully, appends a “posted” record with slide headlines and post links to Google Sheets.
6. If any platform fails, logs the error details to Google Sheets and sends a Gmail message with the platform-specific fixes and any successfully published links.

## Setup
1. Create a PostWire account, connect Instagram/TikTok/LinkedIn, and add an HTTP Header Auth credential in n8n with `Authorization: Bearer <your PostWire API key>` for the PostWire HTTP Request steps.
2. Add an OpenAI credential with access to `gpt-5-mini` and `gpt-image-1-mini`.
3. Connect Google Sheets OAuth credentials and select the target spreadsheet and sheet in both Google Sheets append steps.
4. Connect Gmail credentials and replace `you@example.com` with your recipient address.
5. Use the form URL from the form trigger to submit a test topic and confirm posting permissions for the selected networks.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
