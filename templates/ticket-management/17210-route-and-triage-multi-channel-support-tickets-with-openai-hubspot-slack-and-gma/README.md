# 🎫 Route and triage multi-channel support tickets with OpenAI, HubSpot, Slack and Gmail

> ⚡ **18 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives support requests via a webhook, normalizes the payload, and uses OpenAI to classify and route tickets through HubSpot, Slack, Gmail, WhatsApp Business API, and Google Sheets, with optional auto-replies, duplicate handling, and an hourly SLA-breach monitor.

## How it works
1. Receives inbound support messages from any channel through a POST webhook.
2. Normalizes the incoming payload into consistent ticket fields (ticket ID, customer details, message, channel, and SLA deadline) and sends the content to OpenAI for triage (category, urgency, sentiment, language, auto-resolve flag, and a suggested reply).
3. If OpenAI marks the request as auto-resolvable with high confidence, sends an automatic reply via WhatsApp Business API for WhatsApp requests or via Gmail for other requests.
4. Checks HubSpot for existing/enrolled tickets to detect duplicates, then either creates a new HubSpot ticket with AI metadata or records it as a duplicate linked to an existing ticket.
5. Appends ticket metrics to Google Sheets for reporting and analytics.
6. For tickets needing human attention, escalates critical issues to Slack, creates a HubSpot escalation task for angry customers, drafts an agent response with OpenAI, and posts the ticket to the appropriate Slack team queue.
7. Runs hourly to fetch high-priority HubSpot tickets and posts a Slack alert when the SLA deadline has been breached.

## Setup
1. Add credentials and tokens for OpenAI, HubSpot (Private App token), Slack, Gmail, and Google Sheets, and replace the placeholder HubSpot and WhatsApp Authorization headers with real values.
2. Configure your source systems (web form, email gateway, WhatsApp integration, etc.) to send POST requests to the workflow’s webhook URL at the `support-inbound` path.
3. Update HubSpot pipeline IDs/stages and program/contact identifiers used for duplicate checks (for example `BILLING_PIPELINE`, `TECH_PIPELINE`, `CS_PIPELINE`, `BILLING_PROGRAM`, `CS_PROGRAM`, and any contact/customer ID mapping).
4. Set the target Slack channels for critical alerts, team-queue routing, and SLA-breach notifications.
5. Select the Google Sheets document and ensure the sheet has columns to store the logged ticket metrics you append.
6. Review and tailor the OpenAI prompts and thresholds (including the auto-resolve confidence cutoff and the SLA deadline calculation) to match your support policies.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
