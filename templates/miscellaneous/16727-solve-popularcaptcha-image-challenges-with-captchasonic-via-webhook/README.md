# 🔧 Solve PopularCaptcha image challenges with CaptchaSonic via webhook

> ⚡ **6 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow receives a PopularCaptcha image challenge via webhook or manual test input, sends it to CaptchaSonic for recognition/classification, and returns the solved result as JSON to the caller or as formatted output for testing.

## How it works
1. Receives a POST webhook request containing a base64 image, question, websiteURL, and optional extra fields.
2. Sends the challenge details to CaptchaSonic using the PopularCaptcha image recognition/classification operation.
3. Returns CaptchaSonic’s solution data as a JSON webhook response.
4. Optionally, runs a manual test path that loads sample image/question data and submits it to CaptchaSonic.
5. Formats the manual test output by stringifying the solution data and adding a status and timestamp.

## Setup
1. Install the `n8n-nodes-captchasonic` community node in your n8n instance.
2. Create and select a CaptchaSonic credential with your CaptchaSonic API key.
3. If using the webhook path, copy the production webhook URL for `/solve-popularcaptcha` and configure your client to POST `image`, `question`, `websiteURL`, and optionally `extraFields` in the request body.
4. If needed, replace the hardcoded sample data in the manual test input to match your PopularCaptcha payload format.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
