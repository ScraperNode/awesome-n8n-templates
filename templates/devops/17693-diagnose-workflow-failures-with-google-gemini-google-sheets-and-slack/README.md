# ⚙️ Diagnose workflow failures with Google Gemini, Google Sheets and Slack

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This error-handling workflow captures failures from other n8n workflows, uses Google Gemini to diagnose the cause in plain language, logs each incident to Google Sheets, and sends a detailed alert to a Slack channel with a link to the failed execution.

## How it works
1. Triggers whenever a connected n8n workflow execution fails via the workflow error trigger.
2. Extracts key failure context such as workflow name/ID, last executed node, execution URL, and the error message/description.
3. Sends the error context to Google Gemini and asks for a structured diagnosis including category, severity, plain-language explanation, likely cause, and an n8n-specific suggested fix.
4. Normalizes the AI output and falls back to the raw error details if the AI response is missing or incomplete.
5. Appends the failure and diagnosis details to a Google Sheets “Errors” tab for ongoing tracking.
6. Posts a formatted Slack message with the diagnosis and execution link to your selected channel.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, and Slack OAuth2.
2. Select your target Google Sheets document and ensure it has an “Errors” sheet/tab for appending new rows.
3. Choose the Slack channel to receive alerts and confirm the message permissions for your Slack connection.
4. In each workflow you want monitored, set Settings → Error Workflow to point to this workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
