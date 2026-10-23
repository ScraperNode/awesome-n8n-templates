# 🎫 Detect and route customer escalations with Claude, Slack and Linear

> ⚡ **33 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives support messages via a webhook, normalizes payloads from Gmail, Zendesk, Intercom, and HelpScout, and uses Anthropic Claude to detect escalation signals and severity, then posts alerts to Slack and creates Linear tickets for actionable cases.

## How it works
1. Receives an inbound support message via a POST webhook.
2. Normalizes the incoming payload (Gmail, Zendesk, Intercom, HelpScout, or a raw test payload) into a consistent schema with customer details, subject, body text, and a source URL.
3. Sends the normalized message to Anthropic Claude and parses the response into structured JSON containing escalation flags, severity, trigger phrases, a summary, and a suggested reply opening.
4. Stops processing silently when the message is not an escalation (severity is none).
5. Builds a formatted Slack alert and Linear issue payload, including SLA guidance, detected signals, and links back to the original conversation.
6. Posts the escalation alert to a configured Slack channel.
7. Creates a Linear ticket for critical, high, and medium severity escalations and sends a Slack DM to a manager for critical and high cases.

## Setup
1. Add an Anthropic API credential for the Anthropic Chat Model node.
2. Add a Slack OAuth2 credential, set the target channel (for example, #escalations), and set the manager’s Slack user ID for direct messages.
3. Add a Linear OAuth2 credential and replace the placeholder Linear team ID used when creating tickets.
4. Copy the webhook URL from the webhook trigger and configure Gmail/Zendesk/Intercom/HelpScout (or your custom source) to POST message payloads to it in one of the supported formats.

## 🔗 Nodes Used

Slack, Webhook, Linear, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
