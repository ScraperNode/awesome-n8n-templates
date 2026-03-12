# 🎬 Create AI product review videos with Gemini, Veo 3, Blotato and Google Sheets

> ⚡ **254 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview

This workflow automatically creates AI product review videos from a product image and short description using n8n and Veo 3.

It connects content generation, image creation, video rendering, video merging, and publishing into a single automated flow. Once configured, the workflow runs end to end with minimal manual input.

The workflow is designed for creators, marketers, and affiliate builders who want a reliable and repeatable way to produce short-form product review videos without manual editing.

---

## What can this workflow do?

- Automatically generate AI product review videos from product images
- Create review scripts and structured prompts using an AI model
- Generate product images and video scenes with AI services
- Merge multiple video scenes into a single final video
- Publish videos automatically to social platforms
- Track publishing results and errors in Google Sheets

This workflow helps reduce manual work while keeping the video production process structured and scalable.

---

## How it works

You start by submitting a product image and basic product information through a form. The workflow analyzes the image to understand visual context and key product features. An AI Agent then generates a review script along with structured image and video prompts.

Next, image generation APIs create product visuals, and video generation APIs such as Veo 3 render short video scenes. All generated scenes are automatically merged into one final product review video. The finished video is then uploaded and published to platforms like TikTok, Facebook Reels, and YouTube Shorts. Publishing results are logged to Google Sheets for monitoring.

---

## Setup steps

1. Connect an AI model (Gemini or OpenRouter) for script and prompt generation.
2. Add image and video generation API keys (Veo 3 or compatible providers).
3. Configure the video merge step (custom request or ffmpeg-based API).
4. Add Blotato API credentials for automated publishing.
5. Connect Google Sheets to log publishing results.

Once set up, the workflow runs automatically without manual intervention.

---

## Documentation

For a full walkthrough and advanced customization ideas, watch the detailed tutorial on [YouTube](https://youtu.be/PUSJzRSE8Lc?si=QntpHZ0QL32gkl43).

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
