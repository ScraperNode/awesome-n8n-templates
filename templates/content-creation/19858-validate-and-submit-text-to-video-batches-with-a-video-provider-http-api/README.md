# 🎬 Validate and submit text-to-video batches with a video provider HTTP API

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually to validate 1–5 text-to-video briefs, optionally submits them to a video-generation provider API with idempotency keys, and outputs a review-ready manifest with job status and result URLs.

## How it works
1. Starts when you manually run the workflow to process a configured batch of video briefs.
2. Validates each brief (job ID format/uniqueness, prompt length, allowed duration, aspect ratio, and seed) and stops if any input is invalid.
3. Expands the batch into per-brief requests that include a deterministic Idempotency-Key and the provider API base URL.
4. If running in demo mode, generates offline fixture results with example video URLs and marks each job as completed.
5. If running in live mode, sends one POST request per brief to the provider API using HTTP Header Auth and captures the full HTTP response.
6. Classifies each live response (accepted, rejected, provider error, or ambiguous) and compiles a review manifest with job metadata, provider job IDs, and any result URLs.

## Setup
1. Decide whether to run in demo mode (no credentials, no network calls) or live mode (real provider requests).
2. For live mode, set `providerBaseUrl` to your HTTPS video-generation endpoint and set `allowPaidProcessing=true` after reviewing provider pricing.
3. Create an n8n HTTP Header Auth credential with your provider API key/token and select it on the HTTP Request step.
4. Update the configured `briefs` array to include 1–5 jobs with supported `durationSeconds` (5/6/8/10) and `aspectRatio` (16:9/9:16/1:1).

## Requirements
- An authorized video-generation API and an n8n HTTP Header Auth credential are required only for live mode.

## Customization
- Adapt the generic request and response fields to the provider contract; adjust supported durations, aspect ratios, and the batch limit after validating provider rules.

## Additional info
Created by Shisan Hua, who works on Dola AI Video: https://www.dolai.video/. This workflow uses a generic authorized provider contract and does not claim that Dola AI Video exposes a public API. Demo mode is offline and makes no paid requests.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
