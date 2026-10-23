# 🎬 Generate realistic short-form videos with Veo 3.1 via Pollo API

> ⚡ **17 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a prompt and optional image URL via an n8n form, submits a Veo 3.1 generation request to the Pollo API, then polls Pollo until the video task succeeds or fails and returns the final video URL and metadata.

## How it works
1. Receives a submission from an n8n form containing a prompt, optional image URL(s), the Pollo model path, and an API key.
2. Sends a POST request to the Pollo API (Veo 3.1 endpoint) to start a video generation task using the prompt and optional image guidance.
3. Waits 10 seconds and then requests the current task status from the Pollo API using the returned task ID.
4. Repeats the wait-and-check loop until Pollo reports the generation as succeed or failed.
5. Outputs the task ID, final status, generated video URL, media type, and the reported credit value.

## Setup
1. Create a Pollo API account and generate an API key with access to the Veo 3.1 model.
2. In the form trigger, enter the correct model path (for example, `google/veo3-1`) and decide whether users will provide an `image_url` for image-guided generation.
3. Ensure any image URLs you submit are publicly accessible so Pollo can fetch them during generation.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
