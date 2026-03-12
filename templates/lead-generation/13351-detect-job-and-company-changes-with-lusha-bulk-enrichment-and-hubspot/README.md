# 🎣 Detect job and company changes with Lusha bulk enrichment and HubSpot

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. A daily schedule pulls your existing contacts from HubSpot
2. All contacts are bulk-enriched with Lusha in a single API call for efficiency
3. A code node compares current Lusha data against CRM records to detect job title or company changes
4. Changed contacts trigger a CRM update and a Slack alert to the assigned rep

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, HubSpot, and Slack credentials
3. Adjust the CRM fetch limit based on your contact volume
4. Activate the workflow to run daily

## 🔗 Nodes Used

Slack, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
