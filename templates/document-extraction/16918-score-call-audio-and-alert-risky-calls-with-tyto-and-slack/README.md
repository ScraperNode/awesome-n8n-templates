# 🔬 Score call audio and alert risky calls with Tyto and Slack

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a webhook when a call recording is ready, sends the audio URL to a self-hosted ai-coustics Tyto scoring API, and posts a Slack alert for risky calls before returning the scored JSON response.

## How it works
1. Receives a POST webhook containing an audio_url and call_id for a completed call.
2. Sends the audio URL and call ID to a self-hosted Tyto scoring endpoint via HTTP to retrieve a risk_score, band, and main degradation cause.
3. Checks whether the returned band indicates a risky call (band equals "bad").
4. Posts a formatted alert to a selected Slack channel with the call ID, risk score, band, cause, and duration when the call is risky.
5. Labels non-risky calls as OK.
6. Returns the resulting JSON payload (including the Tyto scoring fields) as the webhook response for downstream storage or chaining.

## Setup
1. Deploy and run a Tyto HTTP wrapper on a machine that has the ai-coustics Tyto SDK and a valid ai-coustics license key.
2. Update the api_base_url value to point to your Tyto wrapper (for example, http://localhost:8000) and ensure the wrapper exposes a POST /score endpoint.
3. Add a Slack credential in n8n and select the target channel for the alert message.
4. Copy the n8n webhook URL (path: /tyto-score) and configure your calling/recording system to POST audio_url and call_id to it.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
