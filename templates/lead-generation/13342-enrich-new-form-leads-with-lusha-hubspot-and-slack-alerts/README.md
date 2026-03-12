# 🎣 Enrich new form leads with Lusha, HubSpot, and Slack alerts

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. A webhook receives form submissions with an email address
2. The email is validated and checked against HubSpot for duplicates
3. Lusha enriches the lead with phone number, job title, seniority, and company data
4. Enriched data is merged with form fields and upserted into HubSpot CRM
5. An SDR is alerted on Slack and the webhook returns a JSON response

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha) (`@lusha-org/n8n-nodes-lusha`)
2. Add your Lusha API, HubSpot OAuth2, and Slack credentials
3. Point your form's action URL to the webhook endpoint
4. Configure the Slack channel for SDR alerts

## 🔗 Nodes Used

Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
