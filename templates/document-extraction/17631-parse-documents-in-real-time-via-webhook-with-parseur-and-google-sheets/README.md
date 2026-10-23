# 🔬 Parse documents in real time via webhook with Parseur and Google Sheets

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a document via a secure webhook, uploads it to Parseur for parsing, polls Parseur until the parsing completes or times out, and returns either the extracted JSON result or a structured error response to the calling client.

## How it works
1. Receives an authenticated POST webhook request containing a document file in binary form.
2. Uploads the document to Parseur using a specified parser and captures the returned DocumentID.
3. Waits briefly, then calls the Parseur Document API to check the document’s parsing status.
4. If parsing is not complete and the retry limit is not reached, waits and retries the status check while incrementing a retry counter.
5. When Parseur reports a successful parse, returns the parsed fields as a JSON response to the webhook caller.
6. If uploading fails, Parseur’s API cannot be reached, or the retries are exhausted, returns an appropriate JSON error response (400, 503, or 408).

## Setup
1. Configure the webhook header authentication and share the webhook URL with the system that will POST the document to `/parse-document`.
2. Add Parseur credentials for the upload step and set the correct Parseur parser ID.
3. Add HTTP header authentication credentials for the Parseur Document API status polling request.
4. Adjust the polling wait times and maximum retry count to match your Parseur rate limits and desired timeout behavior.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
