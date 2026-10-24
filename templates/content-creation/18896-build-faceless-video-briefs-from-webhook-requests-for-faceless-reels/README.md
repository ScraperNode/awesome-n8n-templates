# 🎬 Build faceless video briefs from webhook requests for Faceless Reels

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives a webhook POST request with a video topic and optional creative parameters, validates and normalizes the inputs, and returns a structured faceless-video production brief plus a copy-ready prompt and links for continuing production on faceless-reels.io.

## How it works
1. Receives a POST webhook request containing a required `topic` and optional fields like audience, platform, duration, tone, language, objective, and call to action.
2. Normalizes the incoming payload by applying defaults for any missing fields and setting configuration values like the maximum topic length and Faceless Reels URLs.
3. Validates that the topic is present and within the maximum length, and standardizes the requested duration to either 30 or 60 seconds.
4. Builds a production brief with a recommended beat structure, scene-count guidance, creative constraints, and a copy-ready prompt for generating a faceless vertical video.
5. Responds with HTTP 200 and the completed brief for valid requests, or HTTP 400 with readable validation errors and an example request for invalid payloads.

## Setup
1. Activate the workflow and copy the generated webhook URL for the `faceless-video-brief-builder` endpoint.
2. Configure your source system (or a tool like curl/Postman) to send a JSON POST request to the webhook URL with at least a `topic` field.
3. Optionally adjust the default values (platform, tone, call to action, max topic length, and Faceless Reels URLs) before using it in production.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
