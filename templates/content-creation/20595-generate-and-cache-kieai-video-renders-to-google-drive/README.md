# 🎬 Generate and cache Kie.ai video renders to Google Drive

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This sub-workflow replaces a broken Sora video-generation step by submitting text-to-video jobs to Kie.ai, caching identical requests in an n8n Data Table, and saving successful renders to Google Drive before returning a single result payload to the calling workflow.

## How it works
1. Receives input from a calling workflow (or a manual test run) with a prompt and optional render settings.
2. Normalizes and clamps the request parameters, generates a deterministic job key, and prepares a model fallback chain.
3. Checks an n8n Data Table for a matching job key and immediately returns the previously stored video details if a cache hit exists.
4. Submits the job to Kie.ai for each model in sequence, polling Kie.ai every 20 seconds for up to 5 minutes per model and moving on when a model fails or times out.
5. Aggregates all attempts to pick the first successful render and compiles an attempt trail with total credits consumed.
6. Downloads the winning video, uploads it to Google Drive, and upserts the job key, video URL, Drive file ID, model, and credit usage into the n8n Data Table.
7. Returns a flat response containing either the delivered video details or a failure payload with the models tried and reasons.

## Setup
1. Create an HTTP Header Auth credential for Kie.ai and add your API key so the HTTP requests to api.kie.ai can authenticate.
2. Connect Google Drive credentials and set the target Drive and folder ID where rendered videos should be saved.
3. Create an n8n Data Table to act as a render ledger (jobKey, videoUrl, driveFileId, model, creditsConsumed, renderedAtMs) and replace YOUR_RENDER_LEDGER_TABLE_ID in both Data Table steps.
4. In the calling workflow, add an Execute Sub-workflow node pointing to this workflow and pass at least prompt (optionally durationSeconds, aspectRatio, resolution, firstFrameUrl, callbackUrl, and modelChain).

## 🔗 Nodes Used

HTTP Request, Google Drive, Execute Workflow Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
