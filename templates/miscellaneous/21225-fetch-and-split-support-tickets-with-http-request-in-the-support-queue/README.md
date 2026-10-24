# 🔧 Fetch and split support tickets with HTTP Request in the support queue

> ⚡ **1 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This starter workflow fetches a ticket dataset from an n8n-hosted HTTP endpoint using your challenge credentials, then splits the response into individual ticket items so you can build two counting branches for open tickets and urgent open tickets.

## How it works
1. Runs manually when you execute the workflow.
2. Reads your participant username and key and uses them to build the base URL for the challenge API.
3. Sends an HTTP GET request to the challenge endpoint to retrieve the tickets dataset as JSON.
4. Splits the returned `rows` array into one item per ticket for downstream processing.

## Setup
1. Enter your Challenge 06 `username` and `key` values in the Settings step and keep the provided base URL unchanged.
2. Ensure the HTTP request uses no HTTP authentication and sends the `x-participant-key` header plus the `file=tickets` and `username` query parameters as configured.
3. Add your own filtering and counting steps after the split to calculate the two totals and map them into the output fields required by the challenge submission form.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
