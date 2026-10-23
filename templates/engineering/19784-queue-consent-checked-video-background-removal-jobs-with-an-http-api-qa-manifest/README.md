# ⚒️ Queue consent-checked video background-removal jobs with an HTTP API QA manifest

> ⚡ **14 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow queues up to five consent-checked video background-removal jobs to a provider API (or runs an offline demo), polls for completion with a bounded retry loop, and produces a QA manifest that flags whether alpha and audio metadata look ready for human review.

## How it works
1. Runs manually to load a configuration that defines the provider base URL, processing mode, and a list of background-removal jobs.
2. Validates each job’s rights confirmation, video URL, duration, background settings (transparent/blur/color), and edge mode before any submission.
3. Builds per-job provider payloads with a stable idempotency key and the requested output options.
4. In demo mode, generates a simulated “completed” result with alpha metadata; in live mode, submits each job once to the provider’s POST /jobs endpoint using header-based authentication.
5. Classifies the submit response, then polls the provider’s GET /jobs/{jobId} endpoint every 15 seconds up to a capped number of attempts when the job is queued.
6. Evaluates the provider response metadata to flag transparency/alpha readiness and whether audio appears preserved, then outputs a per-job QA manifest including result URL, attempts, and review notes.

## Setup
1. Decide whether to run in demo mode (no external calls) or live mode (paid processing), and set mode plus allowPaidProcessing accordingly in the configuration.
2. For live mode, replace providerBaseUrl with your HTTPS background-removal API that supports POST /jobs and GET /jobs/{jobId} returning jobId, status, resultUrl, and optional output metadata.
3. Create an n8n HTTP Header Auth credential for your provider and select it on both HTTP requests.
4. Update the jobs list with your HTTPS videoUrl values and ensure each entry includes rightsConfirmed=true and a rightsReference you can audit later.

## Additional info
Created by Shisan Hua, who works on Video Background Remover: https://www.videobgremover.org/. This workflow uses a generic authorized processing-provider contract and does not claim a public product API. It is intended only for footage the operator owns or has permission to edit.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
