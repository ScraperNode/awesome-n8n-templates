# 🎬 Generate Kling 3.0 commercial videos from form prompts with Pollo API

> ⚡ **31 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a video prompt and optional image URL via an n8n form, starts a Kling 3.0 generation job through the Pollo API, repeatedly polls for completion, and returns the final task status and generated video URL.

## How it works
1. Receives a submission from an n8n form containing a prompt, optional image URL, model path, and Pollo API key.
2. Sends a POST request to the Pollo API generation endpoint for the provided model (for example, `kling-ai/kling-v3-0`) to start a video generation task.
3. Waits 10 seconds and then requests the task status from the Pollo API using the returned task ID.
4. Repeats the wait-and-status-check loop until the generation status is either `succeed` or `failed`.
5. Outputs the task ID, final status, video URL, media type, and remaining credits (with credits set to 0 if the response indicates they were refunded).

## Setup
1. Create a Pollo API account and have an API key available to use in the form submission.
2. Set the `model_path` value you want to call (for Kling 3.0, use `kling-ai/kling-v3-0`).
3. If you use `image_url`, ensure it is a publicly accessible direct link to the image.
4. Run the workflow once to get the form URL, then share or embed it wherever you want users to submit prompts.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
