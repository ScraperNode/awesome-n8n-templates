# ⚒️ Handle Shopify Admin GraphQL requests with error handling and retries

> ⚡ **28 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This sub-workflow is called by another n8n workflow to execute Shopify Admin GraphQL queries and mutations via HTTP, adding input validation, detailed error detection (including rate limits), and automatic retries with exponential backoff before returning the final Shopify response.

## How it works
1. Receives input from a parent workflow execution, including a Shopify GraphQL query, shop API endpoint, and Admin API access token.
2. Validates required inputs, normalizes the shop endpoint, and builds the Shopify Admin GraphQL request payload with variables and API version defaults.
3. Sends the POST request to the Shopify Admin GraphQL endpoint with the X-Shopify-Access-Token header and captures the full HTTP response.
4. Parses the response to detect HTTP/network failures, GraphQL errors, Shopify userErrors, bulk/job failures, and throttle status from Shopify cost extensions.
5. If throttled or encountering retryable server/network errors, waits for the calculated backoff interval and retries the same Shopify GraphQL request up to the configured maximum.
6. If non-retryable errors remain, stops the execution and returns a formatted error object; otherwise returns the Shopify data, rate-limit details, HTTP status, and retries used.

## Setup
1. In your parent workflow, add an Execute Workflow step that calls this sub-workflow and pass in `query`, `api_endpoint` (your shop URL), and `access_token`.
2. Ensure your Shopify Admin API access token has the required scopes for the specific GraphQL operations you run.
3. Optionally pass `variables`, `api_version`, `max_retries`, and `retry_on_server_error` to control request parameters and retry behavior.

## 🔗 Nodes Used

HTTP Request, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
