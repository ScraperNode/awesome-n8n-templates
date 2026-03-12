# 🎣 Enrich form leads with Lusha, waterfall enrichment, HubSpot, and Slack

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. A webhook receives a form submission with an email address
2. The email is validated, then Lusha enriches the contact
3. If phone or email is missing, a fallback provider fills the gaps via HTTP request
4. Data from both sources is merged, upserted into HubSpot, and an SDR alert is sent to Slack
5. The webhook returns the enriched lead as a JSON response

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API, HubSpot, and Slack credentials
3. Configure the fallback HTTP node with your secondary provider's API endpoint and key
4. Point your form's action URL to the webhook endpoint

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
