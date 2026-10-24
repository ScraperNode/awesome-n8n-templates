# 🧾 Send idempotent invoices and payment reminders with Gmail and n8n Data Tables

> ⚡ **31 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow receives job completion and payment webhooks to create invoices, track status, and run an idempotent dunning process that stops immediately on payment. It stores invoice state in n8n Data Tables and sends controlled invoice, reminder, and escalation emails via Gmail.

## How it works
1. Receives a job completion webhook, validates a shared token, normalizes the payload against a fixed price book, and ignores non-completion events.
2. Deduplicates the completion event using a deterministic invoice key, stores invalid payloads as dead letters, and persists valid invoices to an n8n Data Table.
3. Sends a controlled test invoice email via Gmail and updates the invoice row as sent so replays do not generate a second invoice.
4. Receives a payment webhook, validates the token, normalizes the payment payload, and deduplicates payment events.
5. If the invoice exists and is not already paid, marks it Paid in the invoice table (stopping any future reminders); otherwise it queues unmatched payments in a separate Data Table for human review.
6. Runs a daily scheduled sweep to recheck invoice status, claim due reminder actions, and send controlled reminder emails via Gmail while updating nudge counters and next-due dates.
7. Runs a second daily sweep to identify stuck or high-value overdue invoices and sends a controlled escalation email via Gmail before marking the invoice as Escalated.

## Setup
1. Create two n8n Data Tables (one for invoices and one for unmatched payments) and replace the placeholder table IDs in every Data Table node.
2. Add a Gmail OAuth2 credential and replace the controlled recipient address (currently ops@example.com) in all Gmail send steps.
3. Set the workflow variable DUNNING_WEBHOOK_TOKEN and configure your source systems to send it in the Authorization: Bearer header or x-dunning-token header for both webhooks.
4. Update the webhook paths as needed and copy the production webhook URLs into the systems that send job completion and payment events.
5. Review and adjust the embedded pricing rules, VAT rate, currency, reminder cadence, and escalation thresholds in the code steps before activating the schedules.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
