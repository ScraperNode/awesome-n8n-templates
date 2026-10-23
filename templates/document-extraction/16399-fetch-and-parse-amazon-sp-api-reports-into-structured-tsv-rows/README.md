# 🔬 Fetch and parse Amazon SP-API reports into structured TSV rows

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow manually requests an Amazon Selling Partner (SP-API) report, polls until it is ready, downloads the report document, optionally decompresses it if it is GZIP, and parses the TSV contents into one n8n item per row.

## How it works
1. Starts when you run the workflow manually.
2. Uses Login with Amazon (LWA) to exchange your refresh token, client ID, and client secret for an access token.
3. Calls the Amazon SP-API Reports API to create a report for the configured report type and marketplace.
4. Polls the Amazon SP-API until the report processing status is DONE (or errors if it fails or times out).
5. Fetches the report document metadata and downloads the report file from the provided URL.
6. If the document is GZIP-compressed, decompresses the file and then parses the TSV into structured JSON items, outputting one item per row.

## Setup
1. Create and authorize Amazon SP-API (Login with Amazon) credentials, then fill in the refresh_token, client_id, and client_secret values in the Config step.
2. Set the correct SP-API endpoint region (EU/NA/FE), report_type, and marketplace_ids values in the Config step.
3. If you want to store or route results, add downstream nodes after the parsed rows output to send the items to your database, spreadsheet, or other destination.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
