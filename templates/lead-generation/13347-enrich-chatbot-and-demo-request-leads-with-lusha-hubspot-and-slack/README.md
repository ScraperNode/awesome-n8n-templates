# 🎣 Enrich chatbot and demo request leads with Lusha, HubSpot, and Slack

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. A webhook receives a chatbot message or demo request form with an email address
2. The email is validated and cleaned, then Lusha enriches the lead
3. A priority score is calculated based on seniority, company size, and request type
4. The lead is upserted into HubSpot; high-priority leads go to #urgent-demos on Slack, others to #demo-requests

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, Slack, and HubSpot credentials
3. Point your chatbot or demo form webhook to the n8n endpoint
4. Customize priority scoring thresholds and Slack channels

## 🔗 Nodes Used

Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
