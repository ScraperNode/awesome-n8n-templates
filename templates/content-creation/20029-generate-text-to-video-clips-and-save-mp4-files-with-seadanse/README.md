# 🎬 Generate text-to-video clips and save MP4 files with Seadanse

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually to generate a text-to-video clip with the Seadanse API, polls the job status until it succeeds, then downloads the resulting MP4 via a temporary grant URL and saves it to local disk.

## How it works
1. Starts when you run the workflow manually.
2. Builds and validates the Seadanse generation request settings (prompt, model, duration, aspect ratio, resolution, spend limit, and a unique idempotency key).
3. Submits a text-to-video generation to the Seadanse API and stores the returned run ID.
4. Polls the Seadanse API every 10 seconds until the run succeeds, fails, or a 30-minute timeout is reached.
5. For a succeeded run, selects the returned file entries and requests a temporary download grant URL from Seadanse.
6. Downloads the MP4 from the granted URL and writes it to the configured local output directory with a filename that includes the run ID and file ID.

## Setup
1. Create a Seadanse API key with generation read/write permissions and add it to n8n as an HTTP Header Auth credential (Authorization: Bearer <API_KEY>).
2. Select that Header Auth credential in the Seadanse API request steps (create generation, get generation status, and get download grant) and do not attach it to the final MP4 download request.
3. Update the configuration values in the initial settings step, especially prompt, a unique requestId (reuse it for retries), maxCredits, and the local outputDirectory.
4. Ensure your n8n instance has permission to write files to the chosen output directory (for example, mount a writable /files path in self-hosted deployments).

## Requirements
- Self-hosted n8n with a writable, allowlisted /files directory; a paid-eligible Seadanse account with sufficient credits; and an API key with generation read/write scopes. The template is free, but video generation consumes Seadanse credits. This validated export saves locally; an n8n Cloud storage adaptation is not included.

## Customization
- Edit Configure to change the prompt, supported model settings, maxCredits and outputDirectory. Use a new requestId only for a new intended generation. Retain the same requestId and exact request body when retrying an uncertain submission.

## Additional info
Setup and current API pricing: https://seadanse.com/developers/api-guide.md . Create your API key at https://seadanse.com/settings/security . A polling timeout does not cancel the remote job: query its existing run ID before generating again. If download or saving fails, resume that same run’s download/save steps without another generation. Temporary grants expire; request a fresh grant for the same file. Do not publish execution data containing upload or download tokens.

## 🔗 Nodes Used

HTTP Request, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
