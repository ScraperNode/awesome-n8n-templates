# 🔬 Create project execution briefs from meeting transcripts with Claude

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a meeting transcript via webhook, sends it to Anthropic Claude to generate a structured project execution brief (quality check, executive summary, action items, risks, and follow-up draft), and returns the brief as plain text in the webhook response.

## How it works
1. Receives a POST webhook request containing a `transcript` field in the request body.
2. Validates that the transcript exists and is long enough to analyze, and stops with a 400 error if it is empty or too short.
3. Sends the transcript to the Anthropic Messages API (Claude) with instructions to avoid inventing owners, deadlines, decisions, or risks and to label uncertainty.
4. Extracts the generated brief text from Claude’s response content.
5. Returns the execution brief as plain text to the original webhook caller.

## Setup
1. Create an Anthropic API key and add it to n8n as an HTTP Header Auth credential using header name `x-api-key`.
2. Activate the workflow and copy the Production webhook URL for the `/execution-brief` endpoint.
3. Configure your calling app or script to POST JSON to the webhook with a `transcript` field (at least ~50 characters) in the request body.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
