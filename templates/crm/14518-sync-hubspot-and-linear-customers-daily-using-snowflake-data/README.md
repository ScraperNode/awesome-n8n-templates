# 🤝 Sync HubSpot and Linear customers daily using Snowflake data

> ⚡ **14 views** · 🤝 [CRM & Sales Operations](../)

## Description

## HubSpot → Linear Customers Sync

Keeps your **Linear Customers** list automatically in sync with HubSpot CRM data, using **Snowflake** as the data warehouse source.

Runs on a daily schedule and handles both **creates** and **updates** — only touching records where ARR or seat count has actually changed. No unnecessary API calls.

## How it works

1. A **Schedule Trigger** fires daily at a configurable time
2. **Snowflake** is queried to retrieve all customer accounts with aggregated ARR and seat count from your CRM (e.g. Hubspot) product table
3. All existing **Linear Customers** are fetched via cursor-based pagination (250 records/page)
4. A **matching step** compares records using HubSpot `COMPANY_ID` as the Linear `externalId`, with a domain-based fallback for re-keyed accounts
5. Unmatched companies are **created** as new Linear Customers
6. Changed records (ARR or seats) are **updated** in Linear
7. A **Slack notification** is sent for every sync action

## Setup

1. Add your **Snowflake** credential and adapt the SQL query to your schema
2. Connect your **Linear API** credential (requires Customer read + write permissions)
3. Set up a **Slack Bot** credential and update the target channel in the Slack node
4. Adjust the **Schedule Trigger** to your preferred sync time

## Notes

- The `Limit Snowflake (Testing)` node is **disabled by default** — enable it during testing to cap the number of Snowflake rows processed
- Matching uses `externalIds` (HubSpot company ID) first, then falls back to `domains`
- Only records with changed `revenue` or `size` values trigger a Linear update

## 🔗 Nodes Used

HTTP Request, Slack, Snowflake, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
