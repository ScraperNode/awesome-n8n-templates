# ⚒️ Proxy OpenAI-style chat completions to Gemini with async webhooks

> ⚡ **10 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow exposes an OpenAI-compatible /v1/chat/completions endpoint in n8n that forwards requests (including optional file attachments) to a configurable LLM HTTP provider, supporting both synchronous replies and asynchronous processing via a callback URL.

## How it works
1. Receives a POST request on /v1/chat/completions via a webhook, accepting JSON or multipart form-data with optional binary file uploads.
2. Converts any uploaded files into OpenAI-style message content (images as image_url data URLs and other files as text entries) and merges them into the last user message.
3. Prepares a job ID, extracts optional callback and provider override settings (URL and headers), and keeps the original request body for later use.
4. If a callback URL is provided, immediately returns HTTP 202 with the job ID, then sends the request (without callback/provider fields) to the configured LLM provider endpoint.
5. Formats the provider response (or error) into a completion payload with a status code and posts the result to the callback URL with job metadata.
6. If no callback URL is provided, sends the request to the LLM provider synchronously and returns the provider response (or error) to the original caller with the same HTTP status code.

## Setup
1. Deploy this workflow and copy the production webhook URL for /v1/chat/completions to use as your OpenAI-compatible endpoint in your client or application.
2. Configure the upstream LLM provider URL and any required authorization headers (either by sending them in the request body under provider.url/provider.headers or by using the default Google Generative Language OpenAI-compatible endpoint and supplying its auth header).
3. If you want asynchronous mode, provide a reachable callback.url (and optional callback.method and callback.headers) that can accept the completion payload posted by this workflow.
4. If you plan to send attachments, ensure your client can send multipart form-data with a JSON body field plus additional file fields so the workflow can convert them into message content.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
