# 🔬 Summarize Slack threads into Jira tickets with OpenRouter and Slack approval

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow turns a Slack slash-command request into an AI-drafted Jira ticket preview, then creates the Jira issue only after a user approves it in Slack using interactive buttons.

## How it works
1. Receives a Slack slash command via a webhook and immediately responds with an ephemeral acknowledgement message.
2. Reads configuration values (message count, Jira project key/type, and Slack context) and fetches recent messages from the Slack channel using the Slack conversations.history API.
3. Cleans and formats the Slack messages into a chronological transcript, returning an error payload if no usable messages are found.
4. Sends the transcript to an OpenRouter chat model (via an n8n AI agent) to generate a structured Jira ticket draft JSON.
5. Parses the draft JSON and posts an ephemeral Slack preview containing the proposed title, type, priority, description, acceptance criteria, and Approve/Cancel buttons.
6. Receives the Slack button interaction via a second webhook, parses the interaction payload, and either creates a Jira issue or cancels the request.
7. Updates the Slack preview message to confirm ticket creation or show a cancellation notice.

## Setup
1. Create a Slack app and configure the slash command request URL to point to the workflow’s slash-command webhook, and configure Interactivity to point to the workflow’s interaction webhook.
2. Add Slack API credentials in n8n and ensure the bot has permission to read conversation history and post messages.
3. Add an OpenRouter API credential and select the model you want to use for drafting the ticket.
4. Add Jira Software Cloud credentials and set the target Jira project and issue type (and/or update the project key/type values in the workflow configuration).

## 🔗 Nodes Used

HTTP Request, Webhook, Jira Software, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
