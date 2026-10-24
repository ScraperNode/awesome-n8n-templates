# 🎬 Generate calming directions from short reflections with ImageHealAI webhooks

> ⚡ **17 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives a short reflection through a webhook, validates it, and uses the public calming-direction API from [website](https://www.imagehealthy.com/) to return an everyday emotional state, two visual goals, and a structured JSON response with clear validation and upstream-error handling.

## How it works
1. Receives a POST webhook request containing `reflection` or `emotion` in the JSON body.
2. Trims and validates the input to ensure it is a 1–500 character string.
3. Sends the validated text to the ImageHealAI recommendation endpoint.
4. If the API returns success, formats a stable JSON response with `currentState`, `recommendedGoals`, and a human-readable message.
5. If the input is invalid, returns an `INVALID_INPUT` error response describing the expected request body.
6. If the API returns an error, returns an error response that preserves the upstream error message and error code.

## Setup
1. Publish the workflow and copy the Production URL from the “Receive reflection” Webhook node, then configure your app or client to POST JSON to it.
2. Ensure the request body includes `reflection` (or `emotion`) as a string between 1 and 500 characters.
3. If you batch requests, add throttling so you send no more than one request every 500 ms to avoid rate-limit issues.

## Requirements
- n8n with the built-in Webhook, Code, If, HTTP Request, and Respond to Webhook nodes.
A client or application that can send POST requests with a JSON body.
No ImageHealAI API key or paid credential is required.

## Customization
- Replace the final webhook response with Slack, Notion, Google Sheets, email, or another destination.
Edit the state and goal labels in the “Build successful response” Code node.
For batch processing, add a Wait node of at least 500 ms between requests.

## Additional info
Send only short, de-identified reflection text. Depending on the execution settings, n8n may retain request data. This workflow is intended for creative reflection only and does not provide medical, diagnostic, crisis, or mental health services. Unsafe or crisis-related input may be rejected by the upstream API.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
