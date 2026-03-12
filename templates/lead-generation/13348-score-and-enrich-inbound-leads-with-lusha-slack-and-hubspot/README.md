# 🎣 Score and enrich inbound leads with Lusha, Slack, and HubSpot

> ⚡ **22 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. A webhook receives a new lead with an email address, which is validated
2. Lusha enriches the lead with seniority, company size, industry, and phone data
3. A lead score is calculated based on ICP fit (seniority, company size, industry match, data quality)
4. Three-tier routing: hot leads (60+ pts) get a Slack alert + CRM upsert, warm leads (35-59) get CRM + Slack, cold leads go to nurture
5. A webhook response returns the score and tier to the calling system

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, Slack, and HubSpot credentials
3. Customize the scoring logic in the Code node to match your ICP criteria
4. Set the Slack channels (#hot-leads, #warm-leads) and activate

## 🔗 Nodes Used

Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
