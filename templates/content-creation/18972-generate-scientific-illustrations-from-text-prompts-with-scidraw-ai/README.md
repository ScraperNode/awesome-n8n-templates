# 🎬 Generate scientific illustrations from text prompts with SciDraw AI

> ⚡ **35 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow generates a scientific illustration from a text prompt using the SciDraw AI REST API, waits and polls until the generation job finishes, and then downloads the resulting image into n8n as binary data.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sets the illustration prompt, aspect ratio, resolution, image count, and a unique idempotency request ID.
3. Sends a POST request to SciDraw AI to create an image-generation job and waits up to 30 seconds for an immediate result.
4. Checks the returned SciDraw job status and, if still queued or processing, waits five seconds and polls the job status endpoint until it reaches a terminal state.
5. Stops the workflow with an error message if SciDraw reports the job as failed or canceled.
6. Downloads the first generated illustration file from SciDraw when the job succeeds.

## Setup
1. Create a SciDraw AI API key and store it as an n8n HTTP Header Auth credential (Authorization: Bearer <key>).
2. Select the same SciDraw HTTP Header Auth credential in both SciDraw HTTP requests (job creation and job status polling).
3. Update the prompt, aspect ratio, resolution, and count values to match your illustration requirements before running the workflow.

## Requirements
- A SciDraw AI account with sufficient credits, plus an API key scoped to images:generate and jobs:read. An n8n instance with the HTTP Request, Wait, If, Edit Fields, and Stop And Error nodes is also required.

## Customization
- Change the illustration prompt, aspect ratio, resolution, and image count in the configuration node. You can also adjust the five-second polling interval, request timeout, and the final download step to process or store additional generated files.

## Additional info
This template contains no API key or reusable secret. Each user must create and select their own SciDraw credential. API calls consume SciDraw credits. Product: https://sci-draw.com/ — API documentation: https://sci-draw.com/docs/api

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
