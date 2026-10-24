# 🎫 Moderate WhatsApp groups, block link spam, and auto-welcome members with Wafly

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives WhatsApp group events via a Wafly webhook to auto-approve join requests, send welcome messages to new members, and detect and remove link spam from non-admins based on an allowed-domain list.

## How it works
1. Receives WhatsApp group event payloads via an incoming webhook from Wafly.
2. Loads the configured admin phone list and allowed domains to use for moderation decisions.
3. When a membership approval request arrives, it approves the participant in the WhatsApp group via Wafly.
4. When a new participant invite event arrives, it sends a welcome message to the new member via Wafly.
5. When a group message arrives, it scans the message text for URLs and checks whether the sender is an admin and whether each link’s domain is on the allowlist.
6. If a non-admin posts disallowed links, it deletes the message via Wafly and posts a short explanation to the group.

## Setup
1. Self-host n8n and install the community node `n8n-nodes-wafly`. Create a [Wafly account](https://wafly.com.br/signup?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_19206_group_moderation&utm_content=setup_signup), connect your number by QR code, then create a Wafly API credential (Client-Token, instance, token) for a number that is a group admin.
2. Activate the workflow, copy the webhook Production URL, and register it in Wafly using the provided update-webhook-received API call. Use the [Wafly API documentation](https://wafly.com.br/api-docs?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_19206_group_moderation&utm_content=setup_docs) for API and webhook configuration details.
3. Update the admin phone numbers and allowed domains in the configuration values so the moderation rules match your group.

## Additional info
Wafly uses a non-official WhatsApp connection via QR code, not the Meta WhatsApp Cloud API. This workflow requires self-hosted n8n, the community node `n8n-nodes-wafly` and a connected number with group-admin permissions; it does not run on n8n Cloud. Validate the admin list and allowed domains in a test group before enabling moderation, and leave repeat-offender removal disabled until you have checked the workflow executions.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
