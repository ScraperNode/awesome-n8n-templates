# 🎣 Enrich new HubSpot contacts with Lusha and alert reps in Slack

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. Triggers instantly when a new contact is created in HubSpot
2. Checks the contact has a valid email, then enriches with Lusha
3. A data quality check verifies Lusha returned meaningful data (phone, title, company)
4. Enriched fields are written back to HubSpot; high-seniority contacts trigger a Slack alert

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, HubSpot OAuth2, and Slack credentials
3. Customize the seniority levels that trigger alerts
4. Activate the workflow — every new HubSpot contact will be enriched in real time

## 🔗 Nodes Used

Slack, HubSpot, HubSpot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
