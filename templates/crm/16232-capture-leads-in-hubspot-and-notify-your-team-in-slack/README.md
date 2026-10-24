# 🤝 Capture leads in HubSpot and notify your team in Slack

> ⚡ **20 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives lead data via a webhook, normalizes the fields, upserts the contact in HubSpot CRM, and posts a new-lead notification to a Slack channel before returning a JSON success response to the sender.

## How it works
1. Receives a POST request on a webhook endpoint with lead details.
2. Normalizes incoming fields (first/last name, email, phone, company, source) and stamps a submission timestamp.
3. Upserts the lead as a contact in HubSpot using the email as the unique identifier.
4. Posts a formatted “New Lead” message with the lead details to a specified Slack channel.
5. Returns a 200 JSON response confirming the lead was received.

## Setup
1. Add a HubSpot connection (Private App token) and select it in the HubSpot contact upsert step.
2. Add a Slack OAuth connection and set the target channel (for example, #leads) for the notification message.
3. Copy the webhook URL for the “lead-capture” endpoint and configure your form/app to send a POST payload that includes at least an email (optionally firstname/lastname/phone/company/source).

## 🔗 Nodes Used

Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
