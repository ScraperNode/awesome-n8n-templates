# 🔬 Unpublish NSFW ImageKit uploads with GPT-4o Vision via OpenRouter

> ⚡ **43 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow triggers on new ImageKit uploads, downloads the image, uses OpenRouter (OpenAI GPT-4o) vision to run an NSFW check, and automatically unpublishes flagged assets in ImageKit so they are not served via your CDN.

## How it works
1. Triggers when ImageKit emits a `file.created` event for a newly uploaded asset.
2. Downloads the uploaded image from the ImageKit URL as binary data.
3. Sends the image to OpenRouter using the OpenAI GPT-4o model to return a structured JSON verdict (`is_nsfw`, `confidence`, and `reason`).
4. Checks the model verdict and, when `is_nsfw` is true, updates the ImageKit file to set it as unpublished.
5. Ends without taking action when the image is not flagged.

## Setup
1. Add ImageKit credentials for both the ImageKit trigger (webhook) and the ImageKit API operation used to unpublish files.
2. Create an OpenRouter credential with access to the `openai/gpt-4o` model.
3. In ImageKit, register the n8n webhook URL for `file.created` events and ensure new uploads default to published if you want this workflow to act as the gatekeeper.

## 🔗 Nodes Used

HTTP Request, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
