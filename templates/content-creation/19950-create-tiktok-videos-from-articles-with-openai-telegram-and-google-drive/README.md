# 🎬 Create TikTok videos from articles with OpenAI, Telegram, and Google Drive

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns an article URL sent via Telegram into a rendered vertical video with AI-generated voiceover and karaoke-style subtitles, uploads it to Google Drive, and optionally publishes it to TikTok via the pm3k API.

## How it works
1. Triggers when a specified Telegram user sends a message containing an article URL and replies to confirm processing has started.
2. Downloads the article content as Markdown (with image summaries) using the Jina AI reader endpoint.
3. Uses OpenAI to extract the main article, generate a TikTok video plan (title, caption, script, scenes, motions, and article image URLs), and then generates a voiceover audio file.
4. Sends the voiceover to OpenAI Whisper to get word-level timestamps and prepares scene timing plus subtitle chunks aligned to the script.
5. Runs a local Node.js/FFmpeg render that downloads the scene images, applies pan/zoom motion, burns in karaoke subtitles, and outputs a final MP4.
6. Uploads the rendered video to Google Drive, shares it publicly, and prompts the user in Telegram to publish, re-render, or cancel.
7. If publishing is approved, fetches TikTok accounts from pm3k, lets the user pick an account in Telegram, creates a TikTok post batch via pm3k, and polls until it succeeds or fails before notifying the user.

## Setup
1. Connect a Telegram Bot API credential, set the allowed Telegram user ID, and start the workflow so you can send article URLs to the trigger.
2. Add an OpenAI API credential with access to chat models, TTS (tts-1-hd), and Whisper (whisper-1) for planning, voiceover generation, and transcription.
3. Ensure the n8n host can run `node` and `ffmpeg` and can write to `/home/node/.n8n-files/work` (or update the paths in the command and file nodes).
4. Connect a Google Drive OAuth2 credential and set the target Drive/folder ID where rendered videos should be uploaded.
5. Add an HTTP Bearer Auth credential for the pm3k API (pm3k.org) so the workflow can list TikTok accounts and publish videos.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Read/Write Files from Disk, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
