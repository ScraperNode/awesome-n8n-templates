# 🔬 Transform uploaded documents into structured data with Unstructured MCP

> ⚡ **53 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects an uploaded document via an n8n form and uses Unstructured’s hosted Transform MCP server to convert it into structured, LLM-ready text output, then returns the extracted content and basic stats (elements, characters) while handling size limits and transform job polling.

## How it works
1. Receives a document upload through an n8n form trigger.
2. Checks whether the uploaded file is within the 50 MB limit and shows a “File too large” completion page if it exceeds the cap.
3. Requests a pre-signed upload URL from Unstructured Transform MCP and uploads the file bytes to that URL via HTTP PUT.
4. Starts a transform job in Unstructured Transform MCP, then polls the job status every 5 seconds until it completes or fails.
5. When the job completes, fetches the transform results metadata from Unstructured and verifies a download URL is available.
6. Downloads the extracted output from the signed download URL and returns a formatted response containing the status, source filename, output stats, and extracted content (or a “No content could be extracted” message).

## Setup
1. Create an Unstructured Transform account and generate an API key, then add it to n8n as an HTTP Bearer Auth credential.
2. Attach the Bearer Auth credential to the Unstructured MCP Client nodes (request upload URL, start transform, check status, and get results).
3. Ensure the n8n form trigger is enabled and keep the 50 MB upload limit in mind when submitting documents.

## 🔗 Nodes Used

HTTP Request, Stop and Error, n8n Form Trigger, n8n Form, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
