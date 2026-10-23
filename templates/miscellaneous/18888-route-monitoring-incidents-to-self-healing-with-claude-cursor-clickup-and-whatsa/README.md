# 🔧 Route monitoring incidents to self-healing with Claude, Cursor, ClickUp and WhatsApp

> ⚡ **3 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow receives monitoring alerts via a webhook, logs an incident in ClickUp, uses Anthropic Claude to perform root-cause analysis, and either triggers a Cursor background agent to implement and deploy a fix or escalates to on-call, then updates ClickUp and notifies via WhatsApp.

## How it works
1. Receives a POST webhook alert from your monitoring system and extracts service, severity, and an error signature for tracking.
2. Deduplicates recurring alerts using stored execution state, scores severity, and determines whether the service is eligible for unsupervised remediation.
3. Creates an incident task in ClickUp with the normalized alert details and waits briefly to debounce flapping alerts.
4. Sends the incident context to Anthropic Claude to generate a structured root-cause analysis including confidence, risk level, and fix instructions.
5. Approves auto-remediation only when the service is allowlisted and the analysis meets confidence and risk thresholds, otherwise prepares an escalation report.
6. If approved, waits for a short safety window, triggers a Cursor background agent to open a PR and run tests (and auto-merge/deploy when configured), then evaluates the outcome after a grace period.
7. Updates the ClickUp incident with the resolution status and sends the final result (auto-resolved or escalated) to the on-call recipient via WhatsApp.

## Setup
1. Create credentials for ClickUp, Anthropic (HTTP header auth), Cursor (HTTP header auth), and WhatsApp Business Cloud, then connect them to the respective nodes.
2. Set your ClickUp List ID in the incident creation node and ensure the update step can reference the created task ID.
3. Replace placeholders for WhatsApp Phone Number ID and the on-call recipient number in the WhatsApp node.
4. Update the Cursor repository mapping (the workflow uses `org/<service>`) and tune the auto-remediation allowlist and gating thresholds in the code steps.
5. Copy the webhook URL for the monitoring alert trigger and configure it in your monitoring tool’s alert notification settings.

## 🔗 Nodes Used

HTTP Request, Webhook, ClickUp, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
