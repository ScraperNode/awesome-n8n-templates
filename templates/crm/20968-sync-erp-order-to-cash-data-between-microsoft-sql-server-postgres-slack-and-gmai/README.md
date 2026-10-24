# 🤝 Sync ERP order-to-cash data between Microsoft SQL Server, Postgres, Slack and Gmail

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily to pull open sales orders from a Microsoft SQL Server ERP, normalizes and batch-upserts them into a PostgreSQL data mart, alerts Finance in Slack for credit-risk or high-value orders, and sends a daily digest via Gmail with a run summary logged to Postgres.

## How it works
1. Runs every day at 06:30 (Berlin) and loads run settings like lookback window, alert thresholds, Slack channel ID, and digest email recipient.
2. Queries Microsoft SQL Server for recent open sales orders from the ERP and aggregates order totals and credit-risk flags.
3. Normalizes ERP rows into a canonical order model, de-duplicates by order ID, and calculates metrics like credit utilization and credit-risk status.
4. Processes orders in batches of 100 and upserts each order into PostgreSQL using an idempotent INSERT…ON CONFLICT update.
5. Posts a Slack alert for any order flagged as credit risk or above the configured high-value threshold and logs the event to a PostgreSQL audit table.
6. After all batches finish, queries PostgreSQL for KPIs (orders synced, revenue, averages, credit-risk count, and top customers) and builds an HTML and Slack digest.
7. Emails the digest via Gmail, posts the digest to Slack, and writes the run summary to PostgreSQL.
8. If the workflow errors, it formats an error payload, logs the failure to PostgreSQL, and sends an alert to Slack.

## Setup
1. Add credentials for Microsoft SQL Server (ERP read replica), PostgreSQL (data mart), Slack, and Gmail.
2. Create the required PostgreSQL tables (for example: erp.order_sync, erp.order_events, erp.sync_runs, and erp.pipeline_errors) with appropriate primary keys/constraints (notably a unique key on order_id for upserts).
3. Update the “Configure Run” values (lookbackDays, highValueThreshold, financeChannelId, and alertEmail) to match your environment and alerting preferences.
4. Verify the Microsoft SQL query matches your ERP schema (tables/columns/status codes) and adjust filters like company code, order status, and date window as needed.

## 🔗 Nodes Used

Postgres, Slack, Microsoft SQL, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
