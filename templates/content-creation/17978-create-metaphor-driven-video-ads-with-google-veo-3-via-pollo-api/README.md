# 🎬 Create metaphor-driven video ads with Google Veo 3 via Pollo API

> ⚡ **23 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a video-ad prompt via an n8n form and submits it to Pollo API’s Google Veo 3 generation endpoint (optionally with an image reference), then polls Pollo for completion and returns the final task status and video URL.

## How it works
1. Receives a submission from an n8n form containing a prompt, optional image URL, Veo 3 model path, and a Pollo API key.
2. Sends a POST request to Pollo API’s generation endpoint for the specified model (for example, `google/veo3`), passing the prompt and optional image reference.
3. Waits 10 seconds to give Pollo time to start processing the generation task.
4. Requests the generation status from Pollo API using the returned task ID.
5. Repeats the wait-and-check cycle until Pollo reports the generation as succeeded or failed.
6. Outputs the task ID, final status, generated video URL, media type, and credit usage information.

## Setup
1. Create a Pollo API account and generate an API key with access to the Veo 3 endpoint.
2. Publish the n8n form and use its URL to submit the required fields (`prompt`, `model_path` like `google/veo3`, and `api_key`) and optional `image_url`.
3. If you use `image_url`, ensure the image link is publicly accessible (no login or expiring URL) so Pollo can fetch it.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
