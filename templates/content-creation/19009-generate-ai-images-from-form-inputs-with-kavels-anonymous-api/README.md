# 🎬 Generate AI images from form inputs with Kavel’s anonymous API

> ⚡ **166 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects an image prompt and aspect ratio via an n8n form, then uses Kavel’s anonymous text-to-image API to generate and download the resulting image, with handling for free-tier quota limits and generation failures.

## How it works
1. Receives a submission from an n8n form with a prompt and aspect ratio.
2. Creates a unique anonymous client ID and formats the request payload for Kavel.
3. Sends a POST request to Kavel to start an image generation task.
4. Stops with an “out of free quota” message if Kavel reports the anonymous daily quota is exhausted.
5. Waits 20 seconds and then polls Kavel for the task status until it succeeds or fails.
6. Downloads the generated image file from the returned URL when the status is success, or returns a failure message with the provided reason.

## Setup
1. Execute the workflow once to get the form URL and share it with users who should submit prompts.
2. Ensure the n8n instance can reach [Kavel](https://www.kavel.ai/?ref=n8n) — no API key or credentials are required for the anonymous tier.
3. Optionally connect the final downloaded image output to a destination node (for example, Google Drive, Slack, S3, or WordPress) to store or publish the file.

## Requirements
- Swap the `model` field in the *Start generation* node to use a different engine — the full list is on the [Kavel models page](https://www.kavel.ai/models?ref=n8n).

## Customization
- Swap the `model` field in the *Start generation* node to use a different engine — the full list is on the [Kavel models page](https://www.kavel.ai/models?ref=n8n).

## Additional info
**Free image generation, no API key** — this template runs on the anonymous tier of
[Kavel AI Image Generator](https://www.kavel.ai/?ref=n8n). Free output is 1K and watermarked;
signing in removes the watermark and unlocks [larger image models](https://www.kavel.ai/image?ref=n8n)
and [AI video generation](https://www.kavel.ai/video?ref=n8n).
**Want a different model?** Swap the `model` field in the *Start generation* node —
the full list is on the [models page](https://www.kavel.ai/models?ref=n8n).

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
