# 🔧 Generate AI images and videos with forms, webhooks and imgmov API

> ⚡ **6 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow accepts a prompt, model ID, and aspect ratio via an n8n form or webhook, starts an AI image/video generation task on imgmov.com, polls the task status until completion, and returns the final result URLs (or an error) as a JSON response.

## How it works
1. Receives a prompt, model ID, and aspect ratio from an n8n form submission or an incoming webhook request.
2. Normalizes missing inputs by applying defaults for the prompt, model ID, and aspect ratio.
3. Calls the imgmov API (POST /generate) to start an AI image or video generation task and capture the returned task ID.
4. Waits 10 seconds and polls the imgmov task endpoint (GET /tasks/:taskId) to check the current status.
5. Repeats the wait-and-poll loop until the task is marked completed, or stops with an error if the task status is failed.
6. Formats the completed task details (including result URLs and credits cost) and returns them as a JSON webhook response.

## Setup
1. Create an imgmov API key in the imgmov Developer Console and add an n8n HTTP Header Auth credential with `Authorization: Bearer <YOUR_API_KEY>`.
2. Choose how you want to trigger the workflow (n8n Form trigger or Webhook) and, if using the webhook, copy the webhook URL and configure your calling app to send `prompt`, `modelId`, and `aspectRatio`.
3. Optionally update the default prompt, model ID, and aspect ratio values to match your preferred imgmov models and output format.

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
