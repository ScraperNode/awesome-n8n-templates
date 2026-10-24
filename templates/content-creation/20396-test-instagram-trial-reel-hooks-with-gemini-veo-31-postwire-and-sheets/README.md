# 🎬 Test Instagram trial reel hooks with Gemini, Veo 3.1, PostWire, and Sheets

> ⚡ **17 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a video idea via an n8n form, uses Google Gemini to generate multiple opening-hook variants and Veo 3.1 to render a short vertical video for each, then uploads and publishes them to Instagram as trial reels via PostWire while logging results to Google Sheets and emailing failures via Gmail.

## How it works
1. Receives a submission from an n8n form with a video idea, target audience, and the number of variants to test.
2. Uses Google Gemini to return JSON containing multiple variants with a hook, angle, Veo prompt, and Instagram caption.
3. Splits the variants into individual items and, for each one, requests a PostWire upload URL, generates an 8-second 9:16 clip with Veo 3.1, uploads the video to PostWire, and finalizes it to get a hosted media URL.
4. Creates an Instagram Reel via the PostWire API with trial-reel enabled, using an idempotency key to avoid duplicate posts for the same test and variant.
5. Checks whether PostWire reports a successful publish and appends a row to Google Sheets with the idea, variant, hook, status, and link.
6. If publishing fails, appends a “needs fix” row to Google Sheets and sends a Gmail message containing the error and suggested fix details.

## Setup
1. Create a PostWire account, connect your Instagram professional account, and add an n8n HTTP Header Auth credential with `Authorization: Bearer <your PostWire API key>` for the PostWire HTTP Request steps.
2. Add Google Gemini credentials with access to `gemini-2.5-flash` and the Veo model used for video generation.
3. Select or create a Google Sheets spreadsheet and worksheet, then map it to both Google Sheets append steps with columns for date, idea, variant, hook, status, link, and note.
4. Connect your Gmail account and replace `you@example.com` with your email address for failure notifications.
5. Open the form URL from the form trigger and submit a test idea to validate posting, logging, and email behavior.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
