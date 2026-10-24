# 🎬 Generate Seedance 2.5 AI videos from a form with the emaki API

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Type a prompt into an n8n form and get back a finished MP4 from [Seedance 2.5](https://emaki.ai/seedance-2-5?utm_source=n8n&utm_medium=template) through emaki, the Japanese-language AI video generator. Pick the model, length and aspect ratio, optionally add a first frame, and the workflow waits for the clip and downloads it.

## How it works
1. 1. **Video request form** collects the prompt, model (seedance_2_5, seedance_2, seedance_2_fast or seedance_2_mini), duration, aspect ratio and an optional first-frame image URL.
2. **Build request** turns the form answers into the emaki request body at 480p.
3. **Start video** posts it to `https://emaki.ai/api/video/ai` with your API key and gets a video id back.
4. **Accepted?** sends refusals to **Explain refusal**, which tells you what the error means (bad key, no credits, a video already running, or a blocked prompt).
5. **Wait 30s** and **Check status** poll `/api/video/status`; **Route by status** downloads the MP4 when it is `completed`, reports the failure code when it is `failed`, and loops back otherwise.

## Setup
1. 1. Sign in to emaki and create an API key at [emaki.ai/settings/apikeys](https://emaki.ai/settings/apikeys).
2. In n8n add a **Header Auth** credential: name `Authorization`, value `Bearer sk-...` (your key).
3. Select that credential in **Start video** and **Check status**.
4. Activate or execute the workflow and open the form URL.
5. To turn a still into a clip, paste a public https image URL into the first-frame field; this is the same [image to video](https://emaki.ai/image-to-video?utm_source=n8n&utm_medium=template) mode as on the website.

## Requirements
- - An emaki account and API key. Each video costs credits on your emaki account, the same price as on the website.
- n8n with the Form Trigger node (n8n cloud or self-hosted).
- If you are new to the model, the [Seedance 2.0](https://emaki.ai/seedance-2?utm_source=n8n&utm_medium=template) page shows what the earlier model is good at, and [Seedance 2.0 Mini](https://emaki.ai/seedance-2-mini?utm_source=n8n&utm_medium=template) is the lower-cost video option.

## Customization
- - Swap the form for a Schedule, RSS, Google Sheets or Airtable trigger to produce clips in bulk.
- Change `resolution` in **Build request** to 720p or 1080p.
- Send the downloaded MP4 on to Google Drive, YouTube, Slack or S3.
- Run finished clips through the [AI video upscaler](https://emaki.ai/video-upscaler?utm_source=n8n&utm_medium=template) on the website when you need a sharper master.

## Additional info
- An emaki account generates one video at a time; a second submit while one is running returns 409, so keep batches sequential.
- Videos can wait in a queue for several minutes; the loop keeps polling until the run is completed or failed.
- Writing prompts in Japanese works as well as English. 日本語での使い方は [シーダンス](https://emaki.ai/?utm_source=n8n&utm_medium=template) へ。

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
