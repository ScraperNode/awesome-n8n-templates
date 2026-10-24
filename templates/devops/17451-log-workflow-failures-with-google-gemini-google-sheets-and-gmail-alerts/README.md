# ⚙️ Log workflow failures with Google Gemini, Google Sheets, and Gmail alerts

> ⚡ **110 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This error workflow captures n8n workflow failures, classifies them, generates a short Google Gemini diagnosis, logs each incident to Google Sheets, and emails an on-call address via Gmail only for critical errors.

## How it works
1. Triggers when a linked n8n workflow fails in a production execution.
2. Extracts failure details and classifies the error message into a category and severity (for example authentication, rate limit, transient network, data shape, or configuration).
3. Sends the workflow context and raw error to Google Gemini to produce a plain-English, three-sentence diagnosis.
4. Combines the classification and AI diagnosis into a single incident record.
5. Appends the incident record as a new row in Google Sheets.
6. Sends a formatted Gmail alert to the on-call address only when the incident severity is marked as Critical.

## Setup
1. Add a Google Gemini (PaLM) API credential and select it for the chat model used to generate the diagnosis.
2. Add a Google Sheets OAuth2 credential and select the target spreadsheet and sheet tab, ensuring the columns exist for failed_at, workflow_name, workflow_id, execution_id, execution_url, failed_node, error_message, error_type, severity, and ai_diagnosis.
3. Add a Gmail OAuth2 credential and replace oncall@example.com with your real on-call email recipient.
4. In each workflow you want monitored, set this workflow as its Error Workflow in the workflow settings so failures route here.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
