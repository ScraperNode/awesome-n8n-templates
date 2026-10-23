# 🧾 Sync multi-bank balance data to BigQuery using Plaid

> ⚡ **400 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow automatically fetches balances from multiple financial institutions (RBC, Amex, Wise, PayPal) using Plaid, maps them to QuickBooks account names, and loads structured records into Google BigQuery for analytics.

## How it works
1. The Schedule Trigger runs weekly.
2. Four Plaid API calls fetch balances from RBC, Amex, Wise, and PayPal.
3. Each response splits out individual accounts and maps them to QuickBooks names.
4. All accounts are merged into one dataset.
5. The workflow structures the account data, generates UUIDs, and formats SQL inserts.
6. BigQuery node uploads the finalized records.

## Setup
1. Add your Plaid and Google BigQuery credentials in the n8n Credential Manager before making any changes to the workflow.
2. Open the configuration node and replace all hardcoded client IDs and secrets with the corresponding credential variables you just created.
3. Test each credential connection individually to confirm Plaid and BigQuery are both authenticating and responding correctly.
4. Open the Schedule Trigger node and set the frequency to match your preferred reporting cadence before activating the workflow.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

HTTP Request, Google BigQuery, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
