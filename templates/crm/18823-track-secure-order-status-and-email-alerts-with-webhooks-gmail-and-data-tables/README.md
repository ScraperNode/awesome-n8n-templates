# 🤝 Track secure order status and email alerts with webhooks, Gmail, and Data Tables

> ⚡ **15 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Accept orders, enforce safe status transitions, deduplicate milestone alerts, expose a verifier-protected customer lookup, and surface stale notifications.

## How it works
1. Authenticates the order-intake webhook with the server-side ORDER_INTAKE_TOKEN.
2. Validates the required tenant, order ID, explicit source event ID, initial state, explicit-offset timestamp, and an unpadded 24–256-character per-order lookup secret; then derives stable keys and returns duplicate intake without another side effect.
3. Persists a new Order, Status History row, and pending Notification before sending a controlled Gmail message.
4. Authenticates exactly one internal status event per request with ORDER_STATUS_TOKEN, rejects arrays, joins the event to its Order, and reads all matching Status History rows before classification.
5. Returns accepted or held event replays without another write, holds new older or invalid transitions, and persists every valid transition before checking all matching Notifications rows; only a new notification key can create another notification or Gmail message.
6. Records Gmail success or explicit Pending Send failure in Notifications and Orders, serves a verifier-protected customer lookup with only safe fields, and alerts the operations inbox when notifications remain pending for at least two hours.

## Setup
1. Create n8n Data Tables named Orders, Status History, and Notifications with the columns listed in the workflow README, then re-select the correct table in every Data Table node.
2. Create distinct n8n Variables ORDER_INTAKE_TOKEN and ORDER_STATUS_TOKEN.
3. Connect a Gmail credential to the three Gmail nodes and replace ops@example.com with a controlled operations inbox. The template never takes the recipient from webhook data and does not email the customer directly.
4. Generate a distinct random 24–256-character unpadded lookup secret for each order, then connect the intake, internal status, and customer lookup webhook URLs to the correct source systems.
5. Review the status vocabulary, allowed transitions, equal-timestamp policy, customer-safe messages, notification copy, two-hour stale threshold, and schedule. Keep the workflow inactive while testing wrong tokens, weak secrets, missing event IDs, arrays, replays, re-entry, lookup outcomes, Gmail failure, and stale rows.

## Requirements
- n8n Data Tables for Orders, Status History, and Notifications; n8n Variables ORDER_INTAKE_TOKEN and ORDER_STATUS_TOKEN; a Gmail credential; a controlled operations inbox; and a distinct 24–256-character unpadded lookup secret per order.

## Customization
- Review the status vocabulary, allowed transition matrix, equal-timestamp policy, customer-safe messages, milestone notification copy and dedup policy, operations inbox, two-hour stale threshold, and schedule. Add tenant-specific authorization or a transactional store when your tenancy or concurrency model requires it.

## Additional info
Important limits:

- The lookup secret is not a complete customer identity system, rate limiter, or signed expiring link.
- n8n Data Tables do not provide an atomic unique constraint across lookup, multiple writes, and Gmail; concurrent first deliveries can race.
- Order, History, Notification, Gmail, and acknowledgement steps are not one transaction, so partial state can require operator reconciliation.
- Gmail failure leaves explicit Pending Send state for visibility; there is no automatic resend, and stale operator alerts have no throttle ledger.
- Milestone dedup suppresses only repeated notification side effects: a valid re-entry still updates Order and History.
- Raw webhook bodies and tokens can appear in execution history; configure retention, pruning, and access controls.
- One token authorizes its whole lane; add tenant-specific authorization for mutually untrusted tenants.
- This template includes no commerce-platform, inventory, carrier, or customer-portal adapter and does not claim exactly-once execution or guaranteed email delivery.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
