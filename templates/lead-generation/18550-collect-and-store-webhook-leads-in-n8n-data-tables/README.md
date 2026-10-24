# 🎣 Collect and store webhook leads in n8n Data Tables

> ⚡ **24 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead submissions via an HTTP POST webhook, normalizes the payload, stores each lead in an n8n Data Table, and returns a JSON confirmation response without requiring any external service credentials.

## How it works
1. Receives a lead payload via a POST request to the `free-lead-collector` webhook endpoint.
2. Normalizes incoming fields (lead_id, name, email, phone, message, source) and sets defaults like `status=NEW` and `created_at` to the current time.
3. Inserts the normalized lead as a new row into the `free_leads` n8n Data Table.
4. Responds to the webhook request with a JSON body confirming success and returning the stored `lead_id`.

## Setup
1. Run the manual setup trigger once to create the `free_leads` n8n Data Table with the required columns (it creates the table if it does not exist).
2. Activate the workflow so the webhook endpoint becomes available.
3. Copy the production webhook URL and configure your form, website, or tool to POST JSON lead data to the `free-lead-collector` endpoint.

## Requirements
- An n8n instance with Data Tables support enabled.

## Customization
- Rename the Data Table, add or remove lead fields, change the default status, or connect additional nodes for email, CRM, Slack, WhatsApp, or other delivery channels.

## Additional info
Rename the Data Table, add or remove lead fields, change the default status, or connect additional nodes for email, CRM, Slack, WhatsApp, or other delivery channels.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
