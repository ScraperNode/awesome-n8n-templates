# ⚙️ Route API requests via webhook with retries and backup endpoints

> ⚡ **30 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow exposes a webhook that forwards a request to a primary API, retries once after a short delay if it fails, and then fails over to a backup API, returning a structured JSON success or error response to the caller.

## How it works
1. Receives a POST request on an n8n webhook with the primary API URL, backup API URL, HTTP method, and optional retry count.
2. Sends the request to the primary API using an HTTP request with a 10-second timeout and captures the full response even on failure.
3. If the primary API responds with HTTP 200, returns a JSON response to the webhook caller indicating the primary provider succeeded.
4. If the primary API fails, waits 5 seconds and retries the same primary API request once.
5. If the retry responds with HTTP 200, returns a JSON response indicating the primary-retry path succeeded.
6. If the retry fails, sends the request to the backup API and returns success if it responds with HTTP 200.
7. If both primary and backup APIs fail, returns a JSON error message with an ISO timestamp to the webhook caller.

## Setup
1. Activate the workflow and copy the production webhook URL from the Webhook trigger to use as your API recovery endpoint.
2. Configure the calling system to POST a JSON body that includes primaryApi, backupApi, and (optionally) method and retryCount values.
3. If your target APIs require authentication or custom headers/body, extend the HTTP requests to include the required headers, query parameters, or payload and adjust the timeout as needed.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
