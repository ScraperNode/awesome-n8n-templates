# 🎬 Create AI videos from Google Sheets with Veo3, Drive, OpenAI and YouTube

> ⚡ **50 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads video prompts from Google Sheets, generates an AI video using Google Veo3 via fal.run, saves the file to Google Drive, creates an SEO-friendly title with OpenAI, uploads the video to YouTube via upload-post.com, and writes the video and YouTube links back to the sheet.

## How it works
1. Starts manually and fetches rows from Google Sheets where the VIDEO column is empty.
2. Builds a generation prompt from the sheet data and submits it to fal.run (Google Veo3) to create a video.
3. Waits and polls fal.run for the video request status until it returns COMPLETED.
4. Retrieves the completed video URL from fal.run and uses OpenAI (gpt-4o-mini) to generate a YouTube-optimized title from the original prompt.
5. Downloads the video file, uploads it to Google Drive, and updates the originating Google Sheets row with the fal.run video URL.
6. Sends the video file and generated title to upload-post.com to upload it to YouTube, then updates the same Google Sheets row with the resulting YouTube URL.

## Setup
1. Add Google Sheets OAuth2 credentials and set the target spreadsheet/document and sheet tab used for reading and updating rows.
2. Create a fal.ai account, add an HTTP Header Auth credential with `Authorization: Key <YOUR_FAL_API_KEY>`, and ensure it is selected on the Veo3 HTTP requests.
3. Add OpenAI credentials for the title-generation step and select the model you want to use.
4. Create an upload-post.com API key, add an HTTP Header Auth credential with `Authorization: Apikey <YOUR_UPLOAD_POST_KEY>`, and replace `YOUR_USERNAME` in the upload request with your upload-post profile username.
5. Set the Google Drive OAuth2 credential and choose the destination folder where uploaded videos should be stored.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
