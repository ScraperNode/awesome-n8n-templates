# 🎬 Turn long videos into social shorts with RenderIO and OpenAI

> ⚡ **214 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

Content creators, YouTubers, and social media managers who want to repurpose long form videos into short clips without doing it manually. Works on self hosted n8n instances.

## What it does

Monitors a Google Drive folder for new videos. When a video appears, the workflow downloads it, extracts the audio, transcribes it using Whisper, and sends the transcript to OpenAI to identify the best highlight moments. Each selected clip is then rendered in three aspect ratios (9:16 for TikTok, 9:16 for Reels, 1:1 for Square) using cloud based FFmpeg through RenderIO. The finished clips are uploaded back to Google Drive and every run is logged to a Google Sheet.

## How it works

1. **Watch Drive Folder** polls your source folder every minute and triggers when a new video file is detected.
2. **Set Config** holds all tunable settings in one place: clip count, folder IDs, sheet IDs, and LLM model.
3. The video is downloaded from Google Drive and uploaded to RenderIO for processing.
4. **Extract Audio** runs an FFmpeg command to pull the audio track from the video.
5. The audio is sent to Whisper for transcription. Both TXT and SRT transcript files are saved to Google Drive.
6. **Pick Clips** sends the transcript to OpenAI, which returns timestamped highlight suggestions.
7. **Validate Clips** checks that all timestamps and durations are valid before rendering.
8. Each clip is rendered in three formats through [RenderIO](https://renderio.dev) with separate FFmpeg commands for each aspect ratio.
9. All rendered clips are downloaded and uploaded to a dedicated output folder in Google Drive.
10. **Append Clip Row** logs each clip to a Google Sheet and **Append Run Summary** records the overall processing stats.

## Requirements

- A self hosted or **cloud** n8n instance (uses a community node)
- The `n8n-nodes-renderio` community node installed via Settings &gt; Community Nodes
- A free RenderIO account and API key from [renderio.dev](https://renderio.dev)
- Google Drive and Google Sheets OAuth credentials
- An OpenAI API key

## How to set up

1. Install the `n8n-nodes-renderio` community node from **Settings &gt; Community Nodes**.
2. Create credentials for Google Drive (OAuth2), Google Sheets (OAuth2), OpenAI, and RenderIO API.
3. Import the workflow and open the **Set Config** node.
4. Update the `outputParentFolderId` with the Google Drive folder ID where output folders should be created.
5. Update the `sheetId` with your Google Sheet document ID.
6. Set `sheetTab` and `sheetRunsTab` to the correct sheet tab IDs for clip logging and run summaries.
7. Configure the **Watch Drive Folder** trigger node to point at your source video folder.
8. Activate the workflow and drop a test video into the folder.

## How to customize

- Change `clipCount` in Set Config to generate more or fewer clips per video.
- Swap `llmModel` from `gpt-4o-mini` to `gpt-4o` or another model for different clip selection quality.
- Modify the FFmpeg commands in **Build Commands for Clip** to adjust resolution, bitrate, add watermarks, or change output formats.
- Replace Google Drive with S3 or another storage provider if that fits your stack.
- Add a Slack or Telegram notification node after the summary step to get alerted when processing finishes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
