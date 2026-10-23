# 🎬 Repurpose long-form content into social posts via webhook with GPT-4.1 mini

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow exposes a webhook that accepts long-form text and uses OpenAI (via an n8n AI Agent) to repurpose it into a summary, key points, a Twitter thread, a LinkedIn post, and an Instagram caption, returning the results as JSON in the webhook response.

## How it works
1. Receives a POST request on a webhook endpoint containing a `content` field in the request body.
2. Sends the incoming content to an OpenAI chat model with instructions to generate multiple social-ready formats as a single JSON object.
3. Parses the model’s response into structured JSON and returns an error payload if the response is not valid JSON.
4. Responds to the original webhook request with the generated JSON payload.

## Setup
1. Add an OpenAI credential to the OpenAI Chat Model used by the AI Agent and select the model you want to run.
2. Copy the webhook’s Production URL and configure your source app to POST JSON with a `content` field to that endpoint.
3. If using the included internal test call, paste the Production URL into the HTTP Request step’s `YOUR_PRODUCTION_WEBHOOK_URL` value before executing the test flow.

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
