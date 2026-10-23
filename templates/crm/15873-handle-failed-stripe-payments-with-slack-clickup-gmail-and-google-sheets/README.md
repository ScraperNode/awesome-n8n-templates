# 🤝 Handle failed Stripe payments with Slack, ClickUp, Gmail and Google Sheets

> ⚡ **29 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
This workflow automatically handles every failed Stripe payment by collecting all details, assessing severity, and taking immediate action — alerting your team, creating recovery tasks, escalating repeat failures, notifying the customer, and logging everything — without any manual effort.

## Step-by-step
- **Trigger & parse**
  - **Stripe Trigger** – Listens for `charge.failed`, `invoice.payment_failed`, and `payment_intent.payment_failed` events from Stripe.
  - **Parse & Enrich Payment Data** – Extracts and normalizes customer name, email, plan, amount, failure code, attempt count, and assigns severity (LOW / MEDIUM / HIGH / CRITICAL) and ClickUp priority based on payment amount.

- **High value check**
  - **High Value Check** – Checks if the failed payment is $1,000 or more to route it to a critical or standard alert path.
  - **Slack — Critical Alert** – Posts a urgent `CRITICAL PAYMENT FAILURE` message to Slack with full payment and customer details.
  - **Slack — Standard Alert** – Posts a standard payment failed message to Slack for lower-value failures.

- **Task creation**
  - **ClickUp — Create Recovery Task** – Creates a prioritized recovery task in ClickUp with due date set to 24h (critical) or 48h (standard) from failure time.

- **Repeat failure check**
  - **Retry Count Check** – Checks if the payment has failed more than twice to determine if escalation is needed.
  - **Slack — Escalation Alert** – Sends a `ESCALATION` message tagging the billing manager when repeated failures are detected.

- **Customer notification & logging**
  - **Send a message** – Sends an HTML-formatted Gmail to the customer explaining the failure, reason, and next retry date.
  - **Log to Google Sheets** – Appends all payment failure details including severity, attempt count, failure code, and Stripe links to a tracking sheet.
  - **Create or update a contact** – Creates or updates the customer record in HubSpot with their name, email, and plan details.

## Why use this?
- Instantly catches every Stripe payment failure across all event types with zero manual monitoring
- Severity-based routing ensures critical high-value failures get immediate escalated attention
- Auto-creates ClickUp recovery tasks so every failure has an owner and a deadline
- Escalates repeated failures automatically so chronic issues never slip through unnoticed
- Keeps customers informed with professional failure emails while logging everything for reporting and CRM hygiene

## 🔗 Nodes Used

Google Sheets, Slack, Stripe Trigger, HubSpot, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
