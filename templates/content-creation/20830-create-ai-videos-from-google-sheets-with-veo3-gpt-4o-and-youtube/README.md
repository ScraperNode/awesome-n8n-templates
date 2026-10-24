# 🎬 Create AI videos from Google Sheets with Veo3, GPT-4o, and YouTube

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads video prompts from Google Sheets, generates a video with Google Veo3 via fal.run, saves the finished file to Google Drive, uses OpenAI to generate a YouTube-ready title, uploads the video to YouTube via Upload-Post, and writes the resulting links back to the sheet.

## How it works
1. Starts manually when you click “Test workflow” (or can be run on a schedule) and reads rows from Google Sheets where the VIDEO column is empty.
2. Builds a Veo3 prompt from the sheet’s PROMPT and DURATION fields and submits a video generation request to fal.run.
3. Polls fal.run at 60-second intervals until the video generation status is COMPLETED.
4. Fetches the completed video URL from fal.run and generates an SEO-optimized YouTube title with OpenAI based on the original prompt.
5. Downloads the generated video file and uploads a copy to a specified Google Drive folder, then updates the VIDEO link in Google Sheets.
6. Uploads the video to YouTube through the Upload-Post API using the generated title and writes the YouTube URL back to the same Google Sheets row.

## Setup
1. Connect Google Sheets OAuth credentials and set the target spreadsheet and sheet (with PROMPT, DURATION, VIDEO, and YOUTUBE_URL columns).
2. Add an HTTP Header Auth credential for fal.run and set the Authorization header to `Key YOURAPIKEY`.
3. Connect OpenAI credentials and choose the model you want to use for title generation.
4. Connect Google Drive OAuth credentials and set the destination folder ID for saving generated videos.
5. Add an Upload-Post HTTP Header Auth credential (Authorization: `Apikey YOUR_API_KEY_HERE`) and replace `YOUR_USERNAME` in the upload request with your Upload-Post profile username.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
