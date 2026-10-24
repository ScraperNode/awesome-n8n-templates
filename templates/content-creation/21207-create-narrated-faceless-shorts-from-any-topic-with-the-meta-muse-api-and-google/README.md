# 🎬 Create narrated faceless Shorts from any topic with the Meta Muse API and Google Drive

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses an n8n Form and the useapi.net Muse API to generate a short multi-scene script from a topic, create one 9:16 narrated (or locked-voice) 10-second video per scene, optionally join them into one MP4, and optionally upload the result to Google Drive.

## How it works
1. Displays an authenticated n8n form where you enter a topic, number of scenes, visual “look”, voice mode, and optional Google Drive saving.
2. Calls the useapi.net Muse API to pick a Muse account with available quota and requests a JSON script with one narration line and one visual description per scene.
3. Shows the script in a second form page so you can edit each scene’s narration and visuals or request a rewritten script.
4. If you choose locked voice, asks Muse to generate per-scene MP3 voice files, then submits one asynchronous Muse video job per scene (9:16, ~10 seconds) using either Muse narration or the provided TTS audio.
5. Polls the Muse API until each clip finishes, then shows a “scenes” review page where you can preview results and optionally redo selected scenes.
6. If more than one scene completed, asks Muse to concatenate the clips into a single MP4, then shows a final results page with streaming and time-limited download links served via a separate webhook.
7. If enabled, downloads the final MP4 from useapi.net and uploads it to a chosen Google Drive folder before displaying the final link.

## Setup
1. Create a useapi.net account, add at least one Muse account in useapi.net, and generate a useapi.net API token with access to the Muse API.
2. In n8n, add an HTTP Header Auth credential for useapi.net (header name `Authorization`, value `Bearer <token>`) and ensure all HTTP Request nodes use it.
3. Configure the form’s Basic Auth credential used to protect the public form URL.
4. (Optional) Add Google Drive OAuth2 credentials and set the target folder ID in the workflow code (the `DRIVE_FOLDER_ID` constant) if you want Drive uploads.

## Requirements
- A useapi.net subscription ($15/month flat). useapi.net is a third-party API, not affiliated with Meta.
- A Muse account (muse.ai) connected in useapi.net. Meta offers Muse in the US and Canada; the free Muse plan works.
- Optional: a Google Drive OAuth2 credential to save the final MP4.

## Customization
- Change the narrator description, the look presets and the number of scenes (1 to 3) on the form.
- Use the locked-voice mode to narrate every scene with one Muse text-to-speech voice.
- Set DRIVE_FOLDER_ID to save Shorts to a specific Google Drive folder.

## Additional info
Each 10-second clip uses about 2 to 3% of a free Muse plan's weekly allowance, so a 3-scene Short is about 6 to 9%, and takes 2 to 3 minutes. Example output: https://youtube.com/shorts/1e8f7dHTkzs . Step-by-step guide: https://useapi.net/docs/articles/muse-images-videos#make-a-30-second-narrated-short-script-three-scenes-one-join . Workflow JSON and screenshots (MIT): https://github.com/useapi/muse-api/tree/main/n8n . Preferred title, if it can be set: "Create narrated faceless Shorts from any topic with the Meta Muse API".

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
