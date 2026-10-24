# 🎬 Add burned-in video captions with forms and the Video Subtitle API

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn any video into an MP4 with captions burned in. A form takes a video URL, one of 12 caption styles (including karaoke fill and word pop) and a language, and the workflow returns download links for the captioned video and its SRT.

## How it works
1. An n8n Form asks for a video URL, a caption style (12 presets), a language (or auto-detect) and optional keywords. Leave the URL empty to try an 8-second demo clip; the presenter in it is AI-generated with Veo.
2. A Settings node turns the answers into the request, so you can later replace the form with Google Drive, a webhook or a schedule without touching the rest of the workflow.
3. One HTTP request to the Video Subtitle & Transcript API on RapidAPI transcribes the audio with word timestamps, breaks lines at natural phrase boundaries instead of mid-phrase, and burns the captions into the video.
4. The workflow waits 15 seconds and checks the job, looping until the status is completed or failed. A one-minute clip is usually ready in 30 to 60 seconds.
5. A completion page shows download links for the captioned MP4 and the SRT. If the job fails, the page shows the error code and the reason instead; failed jobs are not billed.

## Setup
1. Subscribe to the Video Subtitle & Transcript API on RapidAPI. The free BASIC plan includes 30 minutes of video per month (10 minutes per file, with a small watermark), enough to try every style.
2. In n8n, create a Header Auth credential named X-RapidAPI-Key with your RapidAPI key as the value, then select it in the two HTTP Request nodes: Create captioning job and Get job.
3. Click Test workflow, open the form, pick a caption style and submit. Leave the video URL empty to use the demo clip, or paste a direct link to your own MP4, MOV, WebM or M4A file.

## Requirements
- A RapidAPI account subscribed to the Video Subtitle & Transcript API (free BASIC plan available). The video URL must be a publicly reachable direct link to the file; YouTube pages and Drive share links are not supported.

## Customization
- Try styles in the browser first with Caption Studio (https://yosuga.dev/app/caption/), then paste the tuned caption_style into the Create captioning job body. You can also change position (top or center), the highlight color or size (font_size_scale 0.8 to 1.3). Names and product terms entered in the Keywords field improve recognition, and the keyword_color style colors them.

## Additional info
Burn-in supports English, Japanese, Spanish, Portuguese, French, German, Turkish, Indonesian and Hindi; jobs in other languages fail with unsupported_language and are not billed. The API is built for speech; songs and singing are not supported. Enable the Download video node and connect Google Drive, Dropbox or S3 to keep the file. The preview GIF and the style gallery image use font_size_scale 1.3 so they read at small sizes.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
