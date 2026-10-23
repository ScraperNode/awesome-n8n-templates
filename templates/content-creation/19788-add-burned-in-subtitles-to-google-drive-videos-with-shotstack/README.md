# 🎬 Add burned-in subtitles to Google Drive videos with Shotstack

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Watches a Google Drive folder for new videos, then uses Shotstack to transcribe the speech and burn subtitles into the video. The captioned MP4 is saved back to Drive. No separate transcription service and no manual subtitle editing.

## How it works
1. A new file in the watched Google Drive folder starts the workflow. The folder is checked every minute.
2. The file's sharing is set to "anyone with the link can view", so Shotstack can read it over the internet.
3. Shotstack transcribes the speech and renders an HD MP4 with open captions burned into the picture.
4. The workflow asks Shotstack for the render status every 10 seconds.
5. Once the status is done, the finished video is downloaded.
6. The captioned copy is uploaded back to Google Drive with "(captioned)" added to the filename.
7. If the render fails, the workflow stops and reports Shotstack's own reason.

## Setup
1. Connect your Google Drive credentials and pick the folder to watch for new videos.
2. Connect your Shotstack credentials. A free Sandbox key is enough to test, and Sandbox renders carry a watermark.
3. Choose a different Google Drive folder for the output. If the output folder is the watched folder, the workflow triggers on its own result and never stops.
4. Run it once on a short clip to check the subtitles before pointing it at a real folder.

## Requirements
- A Google account with Drive access
- A Shotstack account and API key, free Sandbox tier is enough to start
- Videos with clear, audible speech, since the subtitles come from the audio

## Customization
- Change the subtitle font, size, colour and position in the Shotstack edit
- Send the captioned MP4 to Dropbox, S3 or YouTube instead of Google Drive
- Translate the transcript before it is burned in, for subtitles in another language
- Run it on a schedule over an existing folder instead of on each new upload

## Additional info
The subtitles are burned in, also called open captions. They are part of the picture and cannot be switched off by the viewer, which is what makes the video readable on autoplay feeds. If you need a separate .srt file instead, this template is not the one.

## 🔗 Nodes Used

HTTP Request, Google Drive, Stop and Error, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
