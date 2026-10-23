# 🎫 Triage legal conflict checks from Slack with GPT-4o-mini and Google Sheets

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow listens for new Slack messages, runs an OpenAI-powered conflict-intake agent that queries a Google Sheets–backed MCP tools endpoint, replies in the original Slack thread with a preliminary conflict summary, and appends an audit record to a Google Sheets log.

## How it works
1. Triggers when a new message is posted in the configured Slack channel.
2. Ignores bot or empty messages, then extracts the message text and key Slack metadata (user, channel, timestamp).
3. Builds a unique event key from the Slack channel and timestamp and checks a Google Sheets “ConflictAuditLog” tab to prevent processing the same message twice.
4. Sends the message text to an OpenAI agent, which extracts the prospective client and opposing party and calls a conflict-search MCP endpoint that queries Google Sheets records.
5. Parses the agent’s structured output to determine whether it indicates a potential conflict and routes the message accordingly.
6. Posts a “potential conflict” or “no potential conflict found in searched records” reply back to the original Slack thread.
7. Appends the request and key fields from the Slack reply to the Google Sheets ConflictAuditLog for auditing.

## Setup
1. Connect Slack credentials, add the Slack app/bot to your target channel, and select the channel in the Slack trigger and thread-reply steps.
2. Connect Google Sheets credentials and ensure the spreadsheet contains the required tabs (ConflictAuditLog, Clients, Matters, Parties, RelatedEntities) with the expected lookup columns (for example, event_key and name/entity_name).
3. Create or update the ConflictAuditLog sheet columns used for deduplication and logging (at minimum event_key, created_at, channel_id, message_ts, request_text, and status).
4. Connect an OpenAI credential and confirm the chat model selection used by the agent.
5. Activate the MCP server workflow (the MCP trigger path is /conflict-tools) and set the MCP Client endpoint URL to your own n8n MCP endpoint.

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, OpenAI Chat Model, Slack Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
