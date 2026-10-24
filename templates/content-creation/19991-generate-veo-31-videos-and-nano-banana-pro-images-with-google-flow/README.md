# 🎬 Generate Veo 3.1 videos and Nano Banana Pro images with Google Flow

> ⚡ **101 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a prompt via an n8n form and uses the useapi.net Google Flow API to generate either Nano Banana Pro images or Veo 3.1 videos, returning the results as downloadable binary files for use in downstream steps.

## How it works
1. Receives a submission from an n8n Form with a prompt, output type (Image or Video), and orientation.
2. Maps the form inputs to workflow settings, including the Google Flow model names, aspect ratio/orientation, and number of outputs.
3. If Image is selected, sends a request to the useapi.net Google Flow Images endpoint to generate the image(s).
4. Downloads each returned image (from a signed URL or inline base64) and outputs it as binary file data.
5. If Video is selected, starts an asynchronous video generation job via the useapi.net Google Flow Videos endpoint.
6. Waits and polls the useapi.net job status endpoint until the job completes or fails.
7. On completion, downloads the signed video URL(s) and outputs MP4(s) as binary file data, or stops with an error if the job fails.

## Setup
1. Create a useapi.net account and API token (https://useapi.net/docs/start-here/setup-useapi), then connect your Google account with the automated browser setup (https://useapi.net/docs/start-here/setup-google-flow). Images work on any Google AI plan. Video needs a paid plan and spends its Flow credits.
2. Create an n8n HTTP Header Auth credential for useapi.net (for example, header `Authorization: Bearer <API token>`) and select it on all HTTP Request steps.
3. (Optional) Set the `email`, `count`, and desired model IDs in the workflow settings if you want to target a specific connected Google account or generate multiple outputs per run.

## Requirements
- A useapi.net subscription ($15/month flat, covers 3 Google Flow accounts)

## Customization
- Change the models in the Settings node: nano-banana-2, nano-banana-2-lite, veo-3.1-lite, veo-3.1-quality, or omni-flash (Omni 1.1 Flash: audio-native video with voices, available only in Google Flow)

## Additional info
Generation runs on your own Google Flow account, so it spends your Google AI plan instead of metered Gemini API billing. There is no Google Cloud project or Gemini API key. Full API docs and pricing: https://useapi.net/docs/api-google-flow-v1. Runnable Node.js and Python examples: https://github.com/useapi/google-flow-api. Disclosure: this template is published by useapi.net.

## 🔗 Nodes Used

HTTP Request, Stop and Error, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
