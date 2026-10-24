# 🎫 Classify and route support tickets via webhooks using RapidAPI

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives new support tickets via a webhook, sends the ticket text to the Support Ticket Triage & Classifier API on RapidAPI to extract structured triage fields, and routes high-priority tickets to an escalation path while sending everything else to a standard helpdesk update path.

## How it works
1. Receives a new support ticket as a JSON payload via a POST webhook.
2. Normalizes the incoming payload to a single `ticket` text field regardless of the source field name.
3. Sends the ticket text to the Support Ticket Triage & Classifier endpoint on RapidAPI to return priority, category, sentiment, SLA breach risk, suggested team, tags, and summaries.
4. Checks whether the returned `priority` is `high` or `critical`.
5. For high/critical tickets, builds an escalation alert message (including summary, suggested team, SLA risk, and urgency signals) for sending to Slack, PagerDuty, or Microsoft Teams.
6. For all other tickets, builds a structured update object (priority, category, tags, team, summary) for updating a helpdesk tool such as Zendesk, Freshdesk, or Jira.

## Setup
1. Subscribe to the Support Ticket Triage & Classifier API on RapidAPI and create an n8n HTTP Header Auth credential with header `X-RapidAPI-Key`, then attach it to the HTTP request.
2. Copy the webhook URL from n8n and configure your ticket source (web form, email parser, Zendesk/Freshdesk/Intercom/Front webhook) to POST the ticket text in a field like `ticket`, `description`, or `comment`.
3. Replace the placeholder notification and helpdesk steps with real integrations (e.g., Slack/PagerDuty/Teams for escalation and Zendesk/Freshdesk/Jira for ticket updates) and add the required credentials for those services.

## Requirements
- An n8n instance (cloud or self-hosted).
A RapidAPI account subscribed to the Support Ticket Triage & Classifier API (a free BASIC plan is available: 50 requests/month, 1 request/second).

## Customization
- Every field the API returns is available on $json after the HTTP Request node, so you can branch on category, sentiment, sla_breach_risk, or suggested_team instead of priority, or swap the IF node for a Switch node to support more than two routing paths.

## Additional info
Full API reference (endpoint docs, response schema, error responses, and field mappings for Zendesk/Jira/Freshdesk/Salesforce) is on the RapidAPI listing: https://rapidapi.com/faisalakhtar12/api/support-ticket-triage

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
