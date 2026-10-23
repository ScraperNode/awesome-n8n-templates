# 🤝 Sync warehouse customer data from Postgres to HubSpot and Segment

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow syncs changed customer records from a PostgreSQL “warehouse” table to HubSpot (contact batch upsert) and Segment (identify batch) on a schedule or via webhook, while tracking per-record sync state in Postgres and alerting failures to Slack.

## How it works
1. Runs every 10 minutes on a schedule or on demand via an HTTP webhook.
2. Loads and validates the sync configuration (source table, key/email columns, destination enablement, and field mappings) and posts a Slack message if the configuration is invalid.
3. Acquires a PostgreSQL run lock to prevent overlapping sync runs.
4. Queries PostgreSQL for rows whose content hash has changed since the last successful sync (or rows due for retry) and exits early by releasing the lock if there are no changes.
5. Builds and sends destination-specific batch requests to HubSpot (CRM contacts batch upsert by email) and/or Segment (identify batch), capturing per-record failures from the API responses.
6. Writes updated per-record sync status (synced/failed with backoff/dead) and run metrics to PostgreSQL, loops through additional batches until drained or the per-run limit is reached, then releases the lock and posts a Slack alert only when failures or dead records occurred.

## Setup
1. Add PostgreSQL credentials and run the manual setup trigger once to create the state/log/lock tables (and the optional demo table) in your database.
2. Create HubSpot and Segment credentials: HubSpot HTTP Header Auth with `Authorization: Bearer <token>` and Segment HTTP Basic Auth with your write key as the username and an empty password.
3. Create any custom HubSpot contact properties referenced by your mapping (for example `lifetime_value` and `churn_risk`).
4. Update the sync configuration values (warehouse table and columns, enabled destinations, JSON field mappings, batch/retry limits, and Slack incoming webhook URL) and, if using the webhook trigger, copy the n8n webhook URL and call `POST /retl-sync-now` from your source system when needed.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
