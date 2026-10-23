# 🔬 Review contract clauses against your playbook with Google Drive and Claude

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new contracts, uses Anthropic Claude to extract and assess clauses against your legal playbook and hard limits, then aggregates a verdict, optionally pauses for a human decision, logs the results to Google Sheets, and sends notifications via a webhook.

## How it works
1. Triggers when a new file is created in a specific Google Drive folder (or runs manually with a provided file ID).
2. Downloads the contract from Google Drive, converts it to Base64, and sends it to the Anthropic Messages API to extract a structured list of clauses.
3. Splits the extracted clauses into small batches and uses Anthropic Claude to assess each clause against your playbook, producing severity, explanations, and suggested redlines.
4. Aggregates all clause findings into a single review, deterministically sets a verdict (with hard-limit breaches forcing a “DO_NOT_SIGN”), and decides whether human review is required.
5. If escalation is needed, posts decision links to your webhook endpoint and waits for a reviewer to proceed, request redlining, or reject; otherwise it auto-clears the contract.
6. Builds a severity-ordered report, appends the full review record to a Google Sheets log, and posts a completion notice to the same webhook.

## Setup
1. Connect Google Drive credentials and set the folder to watch in the trigger (or set a test file ID for manual runs).
2. Add Anthropic access for both extraction and assessment: an HTTP Header Auth credential with `x-api-key` for the Anthropic Messages API request, and an Anthropic credential for the Claude assessment model.
3. Update the configuration values for `ourSide`, `playbook`, `hardLimits`, and (optionally) the Anthropic model name and clause batch size.
4. Connect Google Sheets credentials and select the target spreadsheet and sheet tab used as the review log.
5. Set `notifyWebhookUrl` to an endpoint (for example, Slack/Teams incoming webhook) that can receive the reviewer decision message and completion notice.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
