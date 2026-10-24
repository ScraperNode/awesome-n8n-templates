# 🎬 Generate image-to-video clips with audio using Grok Imagine Video 1.5 via Pollo API

> ⚡ **25 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a prompt and source image URL via an n8n form, submits an image-to-video generation request to the Pollo API (Grok Imagine Video 1.5), then repeatedly checks the task status until it completes and returns the generated video URL and metadata.

## How it works
1. Receives a submission from an n8n form containing a prompt, image URL, model path, and Pollo API key.
2. Sends a POST request to the Pollo API generation endpoint for the specified model (for example, `grok/grok-imagine-video-1-5`) with the prompt and optional source image.
3. Waits 5 seconds, then calls the Pollo API status endpoint using the returned task ID.
4. Loops the wait-and-check cycle until the Pollo task status is either `succeed` or `failed`.
5. Outputs the final task ID, status, generated media URL, media type, and remaining credit value.

## Setup
1. Create a Pollo API account and generate an API key.
2. Keep the form trigger enabled and share its form URL with anyone who should submit generation requests.
3. In the form submission, provide a valid `model_path` (for example, `grok/grok-imagine-video-1-5`) and ensure `image_url` is a publicly accessible URL if you want image-to-video generation.

## Additional info
please change the headline, Generate image-to-video clips with audio using Pollo API and Grok Imagine
into Generate image-to-video clips with audio using Grok Imagine Video 1.5 via Pollo API

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
