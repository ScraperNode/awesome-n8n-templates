# ⚒️ Sync PostgreSQL customer changes with HubSpot, Mailchimp, and Slack

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow captures INSERT/UPDATE/DELETE changes from PostgreSQL via an outbox table and syncs them to HubSpot, Mailchimp, and Slack on a 1-minute schedule, with leasing, retries with exponential backoff, dead-letter alerting, and a webhook endpoint to requeue failed events.

## How it works
1. Runs every minute and loads sync settings such as batch size, enabled targets, and retry/backoff limits.
2. Claims a batch of eligible rows from the PostgreSQL `cdc_outbox` table using a lease so multiple workers can process safely while preserving per-row ordering.
3. Expands each claimed change into one delivery task per enabled target (HubSpot upsert, Mailchimp member sync/unsubscribe, and/or Slack notification), skipping targets that already succeeded.
4. Sends each task sequentially to HubSpot, Mailchimp, or Slack via HTTP requests and records whether the call succeeded, failed temporarily, or failed permanently.
5. Updates each outbox event in PostgreSQL as delivered, scheduled for retry with exponential backoff, or dead-lettered, and posts a Slack alert when any events become dead.
6. Accepts `POST /cdc-requeue` requests to reset dead-lettered event IDs back to pending in PostgreSQL and returns how many were requeued.

## Setup
1. Add PostgreSQL credentials, update the source table name in the setup query (default `public.customers`), and run the manual setup once to create `cdc_outbox` plus the capture function and trigger.
2. Create HubSpot authentication using HTTP Header Auth (`Authorization: Bearer <token>`) and Mailchimp authentication using HTTP Basic Auth (any username, API key as password).
3. Set your Mailchimp data center and list ID, and provide Slack incoming webhook URLs for both change notifications and dead-letter alerts.
4. Adjust the field mapping used for HubSpot and Mailchimp payloads (for example `email`, `first_name`, `last_name`, `phone`, `company`) to match your PostgreSQL row schema.
5. Copy the workflow’s `cdc-requeue` webhook URL and use it to requeue dead-letter IDs after fixing the underlying error.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
