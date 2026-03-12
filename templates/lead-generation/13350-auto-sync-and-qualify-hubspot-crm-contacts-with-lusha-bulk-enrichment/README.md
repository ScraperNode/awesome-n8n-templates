# 🎣 Auto-sync and qualify HubSpot CRM contacts with Lusha bulk enrichment

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. Runs every 6 hours to pull contacts needing a data refresh from HubSpot
2. All contacts are bulk-enriched with Lusha in a single API call
3. Each contact is scored against your ICP criteria (seniority, company size, industry)
4. CRM records are updated with fresh data; high-scoring fast-track leads trigger a Slack alert

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, HubSpot, and Slack credentials
3. Customize the ICP scoring weights in the Code node
4. Set the Slack channel for fast-track alerts and activate

## 🔗 Nodes Used

Slack, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
