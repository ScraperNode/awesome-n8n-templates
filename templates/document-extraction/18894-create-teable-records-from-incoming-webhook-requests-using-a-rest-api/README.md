# 🔬 Create Teable records from incoming webhook requests using a REST API

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a POST webhook request and creates one or more records in a [Teable](https://teable.ai) table via the Teable REST API, then returns the API response to the caller.

## How it works
1. Receives a POST request on the webhook endpoint containing a Teable tableId and record data.
2. Validates that tableId is present and normalizes the payload into a records array with fields, applying defaults like fieldKeyType and typecast.
3. Sends an authenticated HTTP POST request to Teable’s Create Records API for the specified table.
4. Returns Teable’s creation result as a JSON response with HTTP status 201.

## Setup
1. Set the `TEABLE_TOKEN` environment variable in your n8n runtime (Teable Personal Access Token) so the workflow can authenticate to the Teable API.
2. (Optional) Set `TEABLE_BASE_URL` to your Teable instance URL if you are self-hosting; otherwise it defaults to `https://app.teable.ai`.
3. Copy the n8n webhook URL (`/webhook-test/teable/records` for testing and `/webhook/teable/records` after activation) into the system that will send record-creation requests, and include `tableId` in the request body, query string, or `x-teable-table-id` header.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
