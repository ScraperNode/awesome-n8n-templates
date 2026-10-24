# 🎬 Burn in captions for video URLs or files with CaptionPipe

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Drop in a video URL or a binary file and get back the same video with the captions burned in, plus SRT, VTT, ASS and word timings. No FFmpeg node, no self-hosted render, no monthly plan.

## How it works
1. A manual trigger or a webhook starts the run. The Settings node holds videoUrl, the preset look, the sendTheFile switch and the maxPolls budget.
2. Sending a file? reads sendTheFile and picks one of two paths. Leave it off when the video is reachable on the public internet, and turn it on when only your n8n can reach the file.
3. Off: one POST to /v1/caption_video with the URL. CaptionPipe fetches the video itself, so n8n never moves the bytes.
4. On: POST /v1/create_upload to claim a slot, confirm it was accepted, fetch your own video, PUT the raw bytes to the presigned URL that came back, then POST /v1/caption_video. CaptionPipe never needs access to your storage.
5. Both paths meet at the poll loop, which GETs /v1/jobs/{id} every 5 seconds up to maxPolls times, then gives up cleanly rather than spinning forever.
6. On completed you get five links plus the seconds charged. Every API refusal and every failed job routes to the same error branch, sorted into out of minutes, worth retrying, and nothing to retry.

## Setup
1. Create an API key in the CaptionPipe dashboard at app.captionpipe.com. A new account includes 5 free minutes, enough to run this template end to end before paying.
2. In n8n, add a Header Auth credential with name Authorization and value Bearer YOUR_API_KEY. Select it on the four HTTP Request nodes that call the API: Create the upload, Caption the upload, Caption the URL and Check the job.
3. Put a direct link to a video in the Settings node under videoUrl, then run it manually.
4. To drive it from elsewhere, add authentication to the webhook node first, then activate the workflow and POST videoUrl, preset, sendTheFile and maxPolls in the body.

## Requirements
- A CaptionPipe API key. No FFmpeg, no Execute Command node and no self-hosted n8n, so this runs on n8n Cloud unchanged.
- A source video reachable over HTTPS, or sent to the webhook as binary from n8n.

## Customization
- preset picks the caption look: clean, highlight or boxed.
- maxPolls sets how long the workflow waits. The Wait node is 5 seconds, so the default 60 gives a 5 minute budget. Raise it for long videos.
- The three outputs of What went wrong? are where to hook your own alerting. Out of minutes is the one worth a notification, since the other two resolve themselves.
- Replace The five files with a Google Drive, S3 or Slack node to deliver the captioned MP4 wherever you want it.

## Additional info
CaptionPipe is hosted and prepaid: $10 buys 250 minutes, they never expire, and a failed job is not charged. New accounts get 5 free minutes, so the template runs end to end before you pay anything. Full docs at https://captionpipe.com/docs?client=n8n

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
