# 🔬 Detect bulk phone status with ZelNum via webhook

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a webhook containing at least 2,000 phone numbers, submits them to the ZelNum Detect API for bulk phone detection, polls the asynchronous task until completion or failure, and returns the ZelNum result download URL in the webhook response.

## How it works
1. Receives a POST webhook request with a product slug, country code, and an array of phone numbers.
2. Validates the request payload and rejects it if phones is not an array or contains fewer than 2,000 numbers.
3. Sends the numbers to the ZelNum Detect API to start an asynchronous detection task.
4. Polls the ZelNum Tasks API every 5 seconds (up to 100 attempts) to check the task status.
5. If ZelNum reports the task as failed, the workflow stops with an error message from the API.
6. When the task completes, the workflow calls ZelNum to retrieve and return the result download URL as the webhook response.

## Setup
1. Create a ZelNum account, generate an API key in the ZelNum Console, and add it to n8n as an HTTP Header Auth credential using header name X-API-Key.
2. Attach the same ZelNum Header Auth credential to all ZelNum HTTP requests in the workflow.
3. Copy the production webhook URL from n8n and configure your client to POST a JSON body with product, country, and a phones array containing at least 2,000 E.164-formatted numbers.
4. Learn more about [ZelNum](https://zelnum.com) and read the [API documentation](https://app.zelnum.com/docs/en).

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
