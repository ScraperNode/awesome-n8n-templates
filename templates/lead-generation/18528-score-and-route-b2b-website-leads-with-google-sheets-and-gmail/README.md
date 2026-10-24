# 🎣 Score and route B2B website leads with Google Sheets and Gmail

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures website lead payloads, enriches company context, scores urgency, routes ownership, logs the result, and returns SLA-ready follow-up instructions.

## How it works
1. Receives a website lead or demo-request payload through a webhook so the full routing path can run from one structured request.
2. Normalizes contact, company, source, message, budget, and requested-timeline fields, then assigns the initial owner and scoring inputs.
3. Checks whether usable contact details are present and returns a clear missing-contact response before any enrichment or notification work runs.
4. Fetches the submitted company page when available and converts page content into deterministic company, intent, source-quality, and urgency signals.
5. Writes the normalized lead, score, priority, owner, SLA deadline, and context fields into a Google Sheets audit row for reporting and replay.
6. Routes hot, review-queue, and normal leads into separate Gmail alerts with the appropriate context, recommended action, and follow-up angle.
7. Checks executive-escalation criteria, sends the additional alert when required, and returns a structured success response to the original webhook request.

## Setup
1. Import the workflow into n8n, open the When Lead Submitted Webhook node, and use its test URL while configuring the workflow. Keep the workflow inactive until all sample cases pass.
2. Connect a Google Sheets credential to Append Audit Row in Sheets, select the destination spreadsheet and sheet, and confirm each normalized field maps to the intended audit column.
3. Connect a Gmail credential to the hot, review-queue, normal, and executive email nodes. Replace all placeholder recipients with shared business inboxes or queue addresses.
4. Review Normalize and Assign Owner, Parse Page Signals, Route by Lead Priority, and Check for Executive Escalation. Update scoring weights, owner queues, SLA hours, and escalation thresholds.
5. Test missing-contact, hot, review-queue, normal, and executive-escalation payloads. Confirm one audit row, the expected emails, and the webhook response before activating the production URL.

## Requirements
- n8n, a production webhook URL, and a website-lead payload with name, email, company, source, message, and optional requestedTimeline or budget fields. Add destination credentials only after the demo scoring path passes with sample data.

## Customization
- Adjust scoring weights, high-intent keywords, source quality rules, SLA hour thresholds, owner queues, destination fields, and follow-up language for your sales process.

## Additional info
The included workflow is a use-case demo with placeholder destinations and test-safe values. Replace sheet IDs, Gmail recipients, CRM fields, Slack channels, and any sample enrichment values inside your own n8n instance before production use.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
