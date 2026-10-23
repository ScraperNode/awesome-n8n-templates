# 🎬 Generate Google Veo 3.1 AI videos from form prompts using Pollo API

> ⚡ **75 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a video prompt (and optional reference image URL) via an n8n form, sends a generation request to the Pollo API for Google Veo 3.1, polls the task status until it succeeds, and returns the finished video URL and related metadata.

## How it works
1. Receives a form submission containing a prompt, optional image_url, model_path, and Pollo API key from https://api.pollo.ai/api-keys.
2. Sends a POST request to the Pollo API generation endpoint for the selected model (for example, google/veo3-1) with the prompt and optional reference image.
3. Waits 10 seconds and then queries the Pollo API task status endpoint using the returned taskId.
4. Repeats the wait-and-check loop until the generation status is reported as succeed.
5. Outputs a simplified result containing the task ID, status, generated video URL, media type, and credit usage.

## Setup
1. Create a Pollo API account and provide a valid API key (x-api-key) in the form submission.
2. Configure the form fields (prompt, image_url, model_path, api_key) and set model_path to the Pollo model route you want to use (for example, google/veo3-1).
3. If using image_url, ensure the referenced image URL is publicly accessible so Pollo can fetch it during generation.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
