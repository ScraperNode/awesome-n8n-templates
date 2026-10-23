# ⚙️ Diagnose failed n8n workflows with Claude and Gmail alerts

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow acts as a global n8n error handler: when any other workflow fails, it suppresses repeat alerts, sends the failure details to Anthropic Claude for a plain-English diagnosis and fix steps, and emails the formatted result via Gmail with a link to the failed execution.

## How it works
1. Triggers whenever an execution fails in a workflow that is configured to use this workflow as its n8n Error Workflow.
2. Extracts the workflow name/ID, failing node, error message, and a trimmed stack trace, then checks workflow static data to suppress duplicate alerts within a configurable cooldown window.
3. For new (non-suppressed) failures, builds a structured prompt and JSON schema and calls the Anthropic Messages API to get severity, whether the issue is transient, a summary, a likely cause, and up to four fix steps.
4. Formats a readable plain-text alert email, falling back to the raw error details if the AI response cannot be parsed.
5. Sends the diagnosis email to the configured recipient using Gmail, including repeat counts and a link to the failed execution when available.

## Setup
1. Configure this workflow as the “Error Workflow” in the settings of each workflow you want to monitor.
2. Set the recipient email address, cooldown duration, and other config values in the workflow’s configuration fields (for example, notifyTo and cooldownMinutes).
3. Provide an Anthropic API key (used as ANTHROPIC_API_KEY) and ensure the Anthropic Messages API is accessible from your n8n environment.
4. Connect a Gmail account in n8n for sending the alert emails.
5. (Optional) Enable and configure the Slack node with Slack credentials and a target channel if you also want critical failures posted to Slack.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
