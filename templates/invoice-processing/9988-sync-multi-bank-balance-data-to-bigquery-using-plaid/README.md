# 🧾 Sync multi-bank balance data to BigQuery using Plaid

> ⚡ **238 views** · 🧾 [Invoice Processing](../)

## Description

## Automated Multi-Bank Balance Sync to BigQuery

This workflow automatically fetches balances from multiple financial institutions (RBC, Amex, Wise, PayPal) using Plaid, maps them to QuickBooks account names, and loads structured records into Google BigQuery for analytics.

## Who’s it for?
Finance teams, accountants, and data engineers managing consolidated bank reporting in Google BigQuery.

## How it works
1. The Schedule Trigger runs weekly.
2. Four Plaid API calls fetch balances from RBC, Amex, Wise, and PayPal.
3. Each response splits out individual accounts and maps them to QuickBooks names.
4. All accounts are merged into one dataset.
5. The workflow structures the account data, generates UUIDs, and formats SQL inserts.
6. BigQuery node uploads the finalized records.

## How to set up
Add Plaid and Google BigQuery credentials, replace client IDs and secrets with variables, test each connection, and schedule the trigger for your reporting cadence.

## 🔗 Nodes Used

HTTP Request, Google BigQuery, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
