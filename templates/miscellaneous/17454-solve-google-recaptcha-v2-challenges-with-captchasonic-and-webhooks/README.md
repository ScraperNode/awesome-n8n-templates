# 🔧 Solve Google reCAPTCHA v2 challenges with CaptchaSonic and webhooks

> ⚡ **8 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow solves Google reCAPTCHA v2 challenges using CaptchaSonic, supporting webhook-based requests, scheduled monitoring against the reCAPTCHA demo page, and a manual test mode that classifies an image challenge and formats the result for downstream steps.

## How it works
1. Receives a POST request on a webhook endpoint with the reCAPTCHA v2 site key, website URL, and optional proxy/user-agent settings.
2. Sends the request to CaptchaSonic to generate a reCAPTCHA v2 solution token.
3. Returns the CaptchaSonic solution data back to the caller as a JSON webhook response.
4. Runs on an hourly schedule, sends the Google reCAPTCHA site key and URL to CaptchaSonic to generate a token, and submits the token to the Google reCAPTCHA demo page for validation.
5. Checks the validation response content and outputs a “passed” or “failed” monitoring status with a timestamp.
6. Optionally runs manually with a sample base64 image and question, sends them to CaptchaSonic for reCAPTCHA v2 image classification, and formats the solved result.

## Setup
1. Install the `n8n-nodes-captchasonic` community node (requires a self-hosted n8n instance).
2. Create and select a CaptchaSonic API key credential for the CaptchaSonic nodes.
3. If using the webhook path, copy the webhook URL and send a POST body that includes at least `websiteKey` and `websiteURL` (and optionally `proxy`, `userAgent`, and other fields used by the workflow).
4. If using scheduled monitoring, update the target `websiteURL` and `websiteKey` values (currently set to Google’s reCAPTCHA demo) and adjust the schedule interval as needed.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
