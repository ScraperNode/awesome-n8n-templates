# 🎣 Detect account and contact growth signals with Lusha bulk enrichment

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. A daily schedule pulls your target accounts from HubSpot
2. All companies are bulk-enriched with Lusha in a single API call
3. A code node detects growth signals: headcount increase, revenue growth, and funding activity
4. For accounts showing signals, Lusha searches for key contacts and alerts your sales team via Slack

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, HubSpot, and Slack credentials
3. Define your target account list or ICP filters in HubSpot
4. Set the Slack channel for signal alerts and activate

## 🔗 Nodes Used

Slack, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
