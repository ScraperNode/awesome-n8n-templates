# 🎬 Generate and edit images with Havis AI Nano Banana 2

> ⚡ **27 views** · 🎬 [Content Creation & Video](../)

## Description

# Havis AI - Nano Banana 2 n8n Workflow

## Summary

This n8n workflow submits an image generation job to **Havis AI Nano Banana 2**, waits for processing, polls task status, and returns result data when the job completes.

## Who is this for?

- Creators who want a reusable no-code generation form.
- Agencies building client-facing AI automation.
- Developers who want an importable API test workflow.
- n8n users connecting Havis AI output to storage, Slack, Sheets, Airtable, webhooks, or a CMS.

## What this workflow does

1. Opens an n8n Form Trigger for Nano Banana 2 inputs.
2. Builds a clean JSON payload and removes empty optional fields.
3. Sends a POST request to `https://havis.ai/api/nano-banana-2`.
4. Waits 8 seconds, then polls `https://havis.ai/api/task/{task_id}`.
5. Loops while the task is processing.
6. Returns task ID, status, result URLs, credits used, and submitted payload.
7. Returns a clean error object if the task fails.

## Setup

1. Import the JSON workflow into n8n.
2. Open the Form Trigger URL.
3. Enter your Havis API key in `api_key`. Use only the key value; the workflow adds `Bearer` automatically.
4. Fill in the model inputs and submit.

For production, store the API key in n8n credentials or environment variables instead of typing it into a public form.

## Main payload fields

- `prompt` (Required) - string
- `mode` (Optional) - string
- `aspect_ratio` (Optional) - string
- `resolution` (Optional) - string
- `output_format` (Optional) - string
- `images` - collected from form URL fields

## Example request body

```json
{
  "prompt": "A cyberpunk cityscape at night, ultra detailed",
  "mode": "text-to-image",
  "aspect_ratio": "16:9",
  "resolution": "2K",
  "output_format": "png"
}
```

## API documentation

- Model docs: https://havis.ai/document/api-nano-banana-2
- Submit endpoint: `POST https://havis.ai/api/nano-banana-2`
- Task status endpoint: `GET https://havis.ai/api/task/{task_id}`

## Output fields

- `task_id` - The generation task ID returned by Havis AI.
- `status` - Usually `completed`, `processing`, or `failed`.
- `model` - The public model slug.
- `result_urls` - JSON string containing final R2/CDN result URLs.
- `credits_used` - Credits deducted for the submitted task when returned by the API.
- `submitted_payload` - The exact JSON payload sent to Havis AI.

## Customization ideas

- Add a Webhook Response node after `Return Result` to expose this as your own mini API.
- Add Google Sheets or Airtable after `Return Result` to keep a generation log.
- Add Slack, Telegram, or email notification for completed jobs.
- Replace the Form Trigger with another app trigger for batch automation.
- Increase the wait interval for long video or audio jobs.

## Troubleshooting

- `401` or `403`: check your API key.
- `402`: the account does not have enough credits or model pricing is missing.
- `422`: required fields are missing or a field value is invalid.
- No result URLs yet: the task is still processing; let the polling loop continue.
- This template is fixed to `https://havis.ai`; use an API key created for Havis AI.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
