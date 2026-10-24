# 📁 Check video upload sizes for Discord, WhatsApp, Gmail and more with VidSmaller

> ⚡ **0 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts a list of video URLs (via webhook or manual run), checks each file’s size using an HTTP HEAD request, and calls VidSmaller’s estimate API to determine whether the video fits Discord, WhatsApp, or email upload limits, then returns a consolidated plain-text report.

## How it works
1. Runs either when you manually execute the workflow (using built-in sample videos) or when a POST request is received on the webhook with a `videos` array.
2. Splits the input into individual video items and sends an HTTP HEAD request to each URL to read the `Content-Length` header without downloading the file.
3. Normalizes the result by recording the file size in MB when available, or marking the video as “size unknown” when the server response is missing `Content-Length` or returns an error status.
4. For videos with a readable size, calls the VidSmaller `/api/v1/estimate` endpoint to get the platform’s safe upload target and a verdict on whether compression is recommended.
5. Categorizes each video as ready to upload, needs compression (including suggested target size and settings), or size unknown, and then appends all categories into a single results list.
6. Builds a summary with counts and a plain-text per-video report, and returns it to the webhook caller as the response payload.

## Setup
1. If you use the webhook entry point, copy the webhook URL from n8n and configure your client/app to POST JSON in the format `{ "videos": [{ "label": "…", "url": "…", "platform": "discord|whatsapp|email|…", "durationSeconds": 10 }] }`.
2. Ensure the provided video URLs are publicly reachable and support HEAD requests with a `Content-Length` header, otherwise the workflow reports those items as size unknown.
3. No credentials are required because the workflow uses VidSmaller’s key-less public estimate endpoint.

## Additional info
Checks a list of video URLs against Discord, Gmail, WhatsApp, Telegram, Slack, Instagram, TikTok and X upload limits — without downloading the files. A HEAD request reads each file's size, then VidSmaller's free API (no key) returns the platform's real limit, whether the file clears it, and the exact target size to compress to. Upload limits move and they lie: Discord's free cap went from 10 MB to 20 MB in August 2026, and Gmail's "25 MB" is really ~18 MB of file because attachments are measured after base64 encoding. Every limit comes back with a verification date and a link to the platform's own docs. API docs: https://vidsmaller.com/api-docs

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
