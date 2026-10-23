# 🎫 Send multi-tenant reminders via Telegram from webhooks and schedule with Postgres logging

> ⚡ **63 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works

- Any external system triggers a reminder via webhook with a tenant token — the workflow validates the token, fetches the tenant's channel config and message template from PostgreSQL, renders the message with event variables, and sends it immediately
- A schedule trigger runs every minute and queries events approaching their deadline window per tenant — idempotency via a `reminders_sent` table ensures the same reminder is never sent twice
- A built-in n8n form lets you register new tenants with their channel, message template and timing rules — no external backend needed
- Every send attempt is logged to the database with status, message sent and error details

## Set up steps

- Add your **PostgreSQL credentials** to all Postgres nodes (~2 min)
- Add your **Telegram credentials** to the Send Message node (~2 min)
- Create the required tables using the SQL schema provided in the workflow sticky note (~10 min)
- Register your first tenant at `/form/multi-tenant-register`
- Send events via `POST /webhook/multi-tenant-webhook` with `x-tenant-token` header

## 🔗 Nodes Used

Postgres, Webhook, Telegram, Schedule Trigger, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
