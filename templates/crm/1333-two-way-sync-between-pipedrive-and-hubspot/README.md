# 🤝 Two-way sync between Pipedrive and HubSpot

> ⚡ **1,452 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow synchronizes data both ways between Pipedrive and HubSpot.

![workflow-screenshot](fileId:568)

- **Cron node** schedules the workflow to run every minute.
- **Pipedrive** and **Hubspot nodes** pull in both lists of persons from Pipedrive and contacts from HubSpot.
- **Merge1** and **Merge2 nodes** with the option Remove Key Matches identify the items that uniquely exist in HubSpot and Pipedrive, respectively.
- **Update Pipedrive** and **Update HubSpot nodes** take those unique items and add them in Pipedrive and HubSpot, respectively.

## 🔗 Nodes Used

Cron, Pipedrive, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
