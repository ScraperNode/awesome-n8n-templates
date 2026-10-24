# 🎬 Queue rights-verified video watermark removal jobs with HTTP API polling

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow validates rights-confirmed watermark-removal jobs, submits them to a configured watermark-cleanup API (or uses offline demo fixtures), polls job status with a capped number of attempts, and outputs an audit manifest with provider job IDs, final states, and result URLs.

## How it works
1. Starts manually and loads a configuration that includes the provider base URL, a paid-processing safeguard, and up to five jobs with video URLs, rights references, and removal regions.
2. Validates that each job has confirmed rights, a meaningful rights reference, HTTPS video URLs, and time-bounded regions defined as 0–1 frame ratios within bounds.
3. Builds one provider request per job with an idempotency key and normalized payload including regions, audio preference, and rights metadata.
4. If running in demo mode, simulates a completed provider response for each job without making network calls.
5. If running in live mode, submits each job once to the provider’s POST /jobs endpoint and classifies the response as queued, rejected, error, or invalid.
6. For queued jobs, waits briefly and polls the provider’s GET /jobs/{jobId} endpoint up to a fixed maximum number of attempts, ending as completed, failed, or manual follow-up.
7. Outputs an audit manifest per job containing the rights reference, provider job ID, terminal status, poll attempts, and any result URL.

## Setup
1. Choose demo mode for offline testing, or set mode to live and set allowPaidProcessing=true after reviewing the provider’s billing and duplicate-charge policy.
2. Update providerBaseUrl to your authorized HTTPS watermark-removal API that supports POST /jobs (returning jobId) and GET /jobs/{jobId} (returning status and optional resultUrl).
3. Configure HTTP Header Auth credentials in n8n for the submit and status-check requests, and keep any API secrets in n8n credentials.
4. Populate the jobs list with your own HTTPS video URLs, set rightsConfirmed=true, add a clear rightsReference for each job, and define 1–8 in-bounds removal regions per job.

## Additional info
Created by Shisan Hua, who works on Video Watermark Remover: https://videowatermarkremover.org/. This workflow uses a generic authorized processing-provider contract and does not claim a public product API. It is intended only for footage the operator owns or has permission to edit.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
