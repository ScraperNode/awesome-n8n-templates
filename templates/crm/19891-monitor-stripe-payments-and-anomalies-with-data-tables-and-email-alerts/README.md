# 🤝 Monitor Stripe payments and anomalies with data tables and email alerts

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Monitors Stripe payments in real time: logs every payment, failure, refund and dispute to an n8n Data Table, ignores duplicate webhooks, flags unusual amounts against your own 30-day baseline, detects failed-payment spikes, and emails instant alerts plus a daily health digest.

## How it works
1. Stripe Trigger receives checkout.session.completed, charge.failed, charge.refunded and charge.dispute.created events. Normalize Event turns each one into a row with a fixed shape, using Stripe's own event time.
2. Load History reads the stored events and Analyze Event skips any event ID that already exists, so Stripe webhook retries are never counted twice.
3. For completed payments, Analyze Event compares the amount with your 30-day average for the same currency using a z-score. With fewer than 10 past payments it falls back to a fixed threshold.
4. It raises a critical finding when 3 or more payments fail within 60 minutes (possible card testing), a warning when refunds spike, and a critical finding for every new dispute.
5. New events are saved to the Data Table. Events with a warning or critical finding trigger Send Alert, an email stating the severity, the reason and the baseline used.
6. Every 24 hours, Calculate Metrics compares the last day with the day before and the 7-day average (revenue, payments, failure rate, refund rate, disputes), and Send Daily Digest emails a HEALTHY or ATTENTION report.

## Setup
1. Create a Data Table named stripe_events with string columns event_id, event_type, currency, customer_email, status and created_at, and a number column amount. Select it in Load History, Store Event and Load Events.
2. Add your Stripe API credential to Stripe Trigger. n8n registers the webhook in Stripe automatically when you activate the workflow, so your n8n instance must be reachable from the internet.
3. Add an SMTP credential to Send Alert and Send Daily Digest, and replace the example From Email and To Email addresses with your own.
4. Test without real payments: open Stripe Trigger, set mock data with a sample Stripe event and click Execute workflow. Use a new event ID for each test, because repeated IDs are skipped as duplicates. Then activate the workflow.

## Requirements
- An n8n instance with Data Tables, a Stripe account (test mode works) and an SMTP email account.

## Customization
- All thresholds (baseline window, z-score limit, failed-payment and refund spike limits, fixed fallback threshold) are constants at the top of the Analyze Event code. Change the digest interval in Daily Digest Trigger.

## Additional info
Built only from native n8n nodes: no external database, no community nodes. Tested end to end on n8n 2.40.7 with mock Stripe events: a large payment (warning alert), three failed payments within one hour (critical alert), a repeated event ID (skipped as duplicate) and the daily digest (ATTENTION status at a 75% failure rate).

## 🔗 Nodes Used

Send Email, Stripe Trigger, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
