# ⚒️ Send location updates of the ISS every minute to a table in Google BigQuery

> ⚡ **1,907 views** · ⚒️ [Engineering](../)

## Description

This workflow allows you to send position updates of the ISS every minute to a table in Google BigQuery.

![workflow-screenshot](fileId:484)

**Cron node:** The Cron node will trigger the workflow every minute.

**HTTP Request node:** This node will make a GET request to the API `https://api.wheretheiss.at/v1/satellites/25544/positions` to fetch the position of the ISS. This information gets passed on to the next node in the workflow.

**Set node:** We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.

**Google BigQuery:** This node will send the data from the previous node to the `position` table in Google BigQuery. If you have created a table with a different name, use that table instead.

## 🔗 Nodes Used

Cron, HTTP Request, Google BigQuery

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
