# 🎬 Generate new video audio and merge the final result with Fal.run and Google Drive

> ⚡ **104 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a video URL via an n8n form, uses Fal.run APIs to generate music from the video and merge it back into a new video, then downloads the final file and uploads it to Google Drive.

## How it works
1. Receives a video URL from an n8n form submission.
2. Sends the video URL to Fal.run (sonilo/video-to-music) to generate an audio track and waits before polling the job status until it is completed.
3. Fetches the generated audio details from Fal.run using the request ID.
4. Sends the original video URL and generated audio URL to Fal.run (ffmpeg-api/merge-audio-video) to create a new video with the new soundtrack.
5. Waits and polls the Fal.run merge job status until it is completed, then retrieves the final video URL.
6. Downloads the final video file and uploads it to Google Drive.

## Setup
1. Create and configure an n8n Form Trigger (or keep the included one) and ensure the submitted field is named "Video Url" and contains a publicly accessible video URL.
2. Add a Fal.run API credential as HTTP Header Auth and ensure the required authorization header is included for the Fal.run queue endpoints used in the workflow.
3. Connect a Google Drive OAuth2 account and select the target Drive and folder for uploaded videos in the Google Drive upload step.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I'll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
