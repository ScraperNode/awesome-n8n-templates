# 🎬 Convert Instagram carousels into TikTok and Reels videos with ffmpeg and SocialRobot

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects 2–10 uploaded carousel images via an n8n form, renders a 1080x1920 pan-and-zoom slideshow video with ffmpeg, validates the output, and uses SocialRobot to send the MP4 to TikTok as an inbox draft, with optional posting to Instagram, Facebook, or Threads.

## How it works
1. Receives slide images, a caption, seconds-per-slide, an optional music URL, and a photo-slideshow choice from an n8n Form trigger.
2. Verifies ffmpeg is installed and validates that 2–10 image files were uploaded.
3. Creates a temporary execution folder, saves the uploaded images to disk in order, and builds an ffmpeg filter graph for blur background, pan/zoom motion, and crossfades (and loops/mixes music when a valid http(s) URL is provided).
4. Runs ffmpeg to render a vertical MP4 and reads the file back from disk.
5. Checks the MP4’s file size and real duration against configured limits before continuing.
6. Uploads the video to TikTok via SocialRobot as an inbox draft and optionally also uploads the original images as a TikTok photo slideshow draft.
7. Optionally uploads the same video via SocialRobot to Instagram Reels, Facebook Reels, and Threads (these paths are disabled by default), then deletes the temporary files.

## Setup
1. Use a self-hosted n8n instance with the Execute Command node enabled and ffmpeg installed on the server.
2. Ensure n8n file access allows read/write to the temp folder path and update the `temp_dir` setting if needed.
3. Install the SocialRobot community node and add your SocialRobot API key credentials in n8n.
4. Connect your TikTok account (and optionally Instagram/Facebook/Threads) in SocialRobot and select the correct account IDs in the SocialRobot nodes.
5. If you plan to add music, provide a publicly accessible http(s) MP3 URL you have rights to use when submitting the form.

## 🔗 Nodes Used

Stop and Error, n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
