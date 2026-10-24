# 🎬 Create captioned vertical video clips from Google Drive using CNAPS and Google Sheets

> ⚡ **21 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Drop a long video in a Google Drive folder and get back short vertical clips with burned-in captions, filed in Drive and logged in a sheet. Comparable pipelines chain four vendors for transcription, clip selection, reframing and captions. This uses one platform plus your own Gemini key.

## How it works
1. Triggers when a new video file is created in a specific Google Drive folder.
2. Calculates a processing wait time based on the video's Drive-reported duration and prevents using the same folder for both input and output.
3. Opens a CNAPS.ai MCP session, requests a one-time upload URL, downloads the source video from Google Drive, and uploads it to CNAPS Studio.
4. Starts a CNAPS Studio clip-extraction run (including reframing to 9:16 and burning in captions) and waits the computed number of minutes for processing to complete.
5. Fetches the CNAPS Studio output list of final subtitled clips and flattens it into one item per clip with titles and timecodes.
6. For each clip, downloads the MP4, saves it to the configured Google Drive output folder, and appends a row with clip metadata and the Drive link to a Google Sheets tab.
7. Posts a Slack message summarizing the clips created, or posts an error message if no clips are returned.

## Setup
1. Add credentials for Google Drive, Google Sheets, and Slack, and choose a Slack channel to receive the notifications.
2. Create a CNAPS Studio API key and configure the CNAPS.ai MCP client to connect to `https://mcp.cnaps.ai/mcp` using header auth (`x-api-key`), enabling the `create_flow` and `get_flow` tools.
3. In CNAPS Studio, add your Google Gemini API key — the Video Analysis step that picks clip candidates runs on it. Without it the run is rejected before it starts.
4. Add an Anthropic chat model credential (used by the agent steps that call CNAPS.ai MCP tools).
5. In the trigger, select the Google Drive folder to watch, and in the Settings values fill in `output_folder_id`, `sheet_id`, `sheet_name` (optional), and `slack_channel`.
6. Ensure your Google Sheet has columns for Source video, Clip, Title, Span, Duration (s), Camera, and Drive link, and adjust clip settings (target length, tempo, wait scaling) in Settings if needed.

## Requirements
- n8n 1.104.0 or later — the MCP Client Tool node needs the Server Transport parameter, which arrived in that release
- A CNAPS Studio API key (a free tier is available)
- A Google Gemini API key, added in CNAPS Studio — the Video Analysis node that picks the clip candidates runs on Gemini. Get one at https://aistudio.google.com/apikey. External models bill to your own Google account; CNAPS Studio's own models don't.
- An Anthropic or OpenAI API key for the two agent steps. n8n's free trial AI credits cover OpenAI only
- Google Drive and Google Sheets credentials. On n8n Cloud these are one Sign in with Google click — no Google Cloud Console project needed
- A Slack bot token with chat:write, with the bot invited to the target channel
- Two separate Drive folders: one to watch, one for output. Pointing the output at the watched folder would make the trigger fire on its own clips, so the workflow checks for this and stops with an explanation

## Customization
- Change clip_target_len_sec and tempo in the Settings node to get longer clips or a faster cutting rhythm — no node rewiring
- Raise wait_minutes_per_source_minute if your sources are long or the models are busy. The default of 4 was measured on a 3-minute source that took about 10 minutes
- Swap the Drive trigger for a schedule or webhook, or feed video URLs from a Google Sheet to work through a back catalogue
- Replace Slack with Gmail, Discord or Telegram — both the success and failure branches emit a ready-made message body
- Add a publishing step after the loop to push each clip straight to YouTube Shorts, TikTok or Instagram
- Keep Tools to Include on Selected in the MCP node. An agent calls tools based on text it reads, so grant only the two this workflow needs

## Additional info
Verified end to end before submission on a 3.3-minute public-domain NASA video: the Drive trigger fired, CNAPS Studio produced 7 clips, all 7 were saved to Drive and appended to the sheet, and Slack delivered. Total run 15m 22s. The run summary reported clips_made: 7 and notified: true, both read from the nodes' real output rather than assumed.

Two design notes that came out of that testing. First, the wait is computed from the video's actual duration in the Drive metadata rather than fixed, because CNAPS Studio runtime scales with source length — the test run chose 14 minutes and reported "measured from Drive metadata" so you can see why. Second, the one-time upload URL is handled by plain HTTP Request nodes, not by an agent: it is a 64-character secret, and a single mistyped character produces a URL that looks correct and fails with "Upload session not found or expired".

The CNAPS Studio side is a 13-node graph — Video Analysis proposes candidate takes, Whisper transcribes the whole video once, Snap Segments moves each cut to the nearest word boundary, EDL Planner and EDL turn takes into an edit plan bounded by a Constraint Map, Slice Transcript cuts the existing transcript per clip instead of re-transcribing short fragments, then Reframe and Subtitle finish at 1080x1920 with word-synced captions. CNAPS Studio exposes 69 models through this one MCP endpoint, so the same pattern extends to upscaling, restoration, OCR and image editing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
