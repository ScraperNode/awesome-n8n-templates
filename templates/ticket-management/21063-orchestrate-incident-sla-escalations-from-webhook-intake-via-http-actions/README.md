# 🎫 Orchestrate incident SLA escalations from webhook intake via HTTP actions

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives incident or ticket data via webhook, calculates SLA response and resolution deadlines, determines breach risk, and triggers a multi-level escalation chain via HTTP requests before returning an orchestration report to the caller.

## How it works
1. Receives an incident or ticket payload through a POST webhook endpoint.
2. Validates required fields, derives a ticket ID, and calculates SLA response and resolution deadlines based on severity.
3. Compares the current time to the SLA deadlines to classify the ticket as on-track, at-risk, or breached.
4. Builds an escalation plan that selects which escalation levels (1–3) to execute based on severity and breach status.
5. Runs Level 1–3 escalation actions as HTTP POST requests (with short waits between levels) and records the status code result of each executed level.
6. Aggregates the breach details and executed actions into a final orchestration report and returns it in the webhook response (200 on success, 207 on partial failure).

## Setup
1. Activate the workflow and copy the webhook URL from the webhook node, then configure your ticketing/incident system to POST incidents to it.
2. Update the Level 1–3 HTTP Request URLs to point to your real notification, paging, or ticketing endpoints (the template defaults to httpbin.org).
3. Confirm the expected request payload fields (for example title, severity/priority, createdAt, assignee, and customer) match what your source system sends, and adjust the SLA targets and at-risk threshold in the SLA calculation code if needed.
4. If your endpoints require authentication, add the necessary HTTP credentials/headers to the Level 1–3 HTTP Request steps.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
