# 🎬 Create talking avatar videos with Google Vids and Gemini Omni 1.1 Flash

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects presenter and script details via an n8n form, then uses the useapi.net Google Vids API (Gemini Omni 1.1 Flash) to draw or reuse an avatar, generate a talking video with optional extra segments and 1080p upscale, and serves preview/download links via a secure media webhook.

## How it works
1. Receives form submissions in n8n to capture the presenter description (or saved presenter selection), voice, script, scene, aspect ratio, length, and optional additional segments.
2. If requested, lists saved Google Vids avatars from useapi.net for selection, or submits an avatar creation request to draw a new presenter.
3. Shows a review page to confirm the portrait and voice, optionally re-drawing the avatar by deleting the previous one and generating a new portrait.
4. Submits a video generation job to the useapi.net Google Vids API to create a 720p talking-avatar clip with Gemini Omni 1.1 Flash, then polls job status until the clip is ready.
5. For multi-segment videos, extends the clip segment-by-segment with additional prompts and offers a checkpoint page after each segment to continue or stop early.
6. Optionally upscales the finished clip to 1080p (only when the total duration is 20 seconds or less) and then displays a results page with an embedded player and MP4 download link.
7. Streams avatar images and video files through an n8n webhook that fetches media from useapi.net by mediaId so the API token never reaches the browser, and optionally deletes the generated presenter if the user chooses to remove it.

## Setup
1. Create a useapi.net account and connect a Google account on a paid Google AI plan (Pro or Ultra) through the Google Vids setup page, so it has a monthly Vids allowance for drawing presenters and making videos.
2. Add a Header Auth credential in n8n for useapi.net (header name `Authorization`, value `Bearer <token>`) and select it for the HTTP Request nodes.
3. Activate the workflow and open the n8n form at `/form/google-vids-avatar` to start submissions.
4. If you plan to reuse saved presenters, ensure your Google account already has saved Google Vids avatars available (or capture an Avatar ID from a previous run).
5. If needed, edit the pricing/allowance assumptions in the result-page code (plan price/seconds and per-second estimates) to match your own Google AI plan.

## Requirements
- A useapi.net API token and subscription ($15/month flat, covers every useapi.net API): https://useapi.net/docs/start-here/setup-useapi
- A Google account on a paid Google AI plan (Pro or Ultra), connected once via https://useapi.net/docs/start-here/setup-google-vids. Videos and images use that account's monthly Google Vids allowance; a free Google account can only make avatars.
- Self-hosted or cloud n8n with the core nodes only, and one Header Auth credential (Authorization: Bearer <your useapi.net token>).

## Customization
- Change the default voice, framing, format or length on the first form, or trim the list of 30 voices to the ones your brand uses.
- Edit the two rate constants at the top of the "Result page" Code node so the cost estimate matches your Google AI plan (they default to Ultra $199: 10,000 s a month).
- Send the finished MP4 somewhere else instead of only the result page: add a Google Drive, S3, Slack or social-media node after the download step.
- Remove the extend section or the 1080p upscale option if you only ever need single short clips.

## Additional info
Disclosure: this template is published by useapi.net, the third-party API it calls. useapi.net drives your own Google Vids account; generation uses your Google AI plan's Vids allowance and there is no per-video charge from useapi.net. Every Vids clip carries Google's visible Gemini mark and an invisible SynthID watermark.

Google Vids API docs: https://useapi.net/docs/api-google-vids-v1
Tutorial (AI influencer videos with avatars): https://useapi.net/docs/articles/google-vids-influencer-avatars
Code examples and an agent skill: https://github.com/useapi/google-vids-api

## 🔗 Nodes Used

HTTP Request, Webhook, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
