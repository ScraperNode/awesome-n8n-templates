# 🎣 Capture form leads in HubSpot and send Slack notifications

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives form submissions via an n8n webhook, normalizes lead fields (name, email, phone, company, message), upserts the contact into HubSpot, and posts a new-lead notification to a Slack channel.

## How it works
1. Receives a POST request with lead data through an n8n webhook endpoint.
2. Extracts common field variants from the payload, splits the full name into first/last name, cleans the phone number, and validates the email format.
3. Upserts the contact in HubSpot using the email as the unique identifier and updates name, company, and phone properties.
4. Sends a formatted new-lead message to Slack including the lead’s name, email, company, and message.

## Setup
1. Add a HubSpot credential (Private App token with Contacts read/write) and select it in the HubSpot upsert step.
2. Add a Slack credential with permission to post messages and invite the Slack app/bot to your target channel.
3. Set the Slack channel (default #leads) where notifications should be posted.
4. Activate the workflow, copy the production webhook URL, and configure your form tool or website to POST submissions to that endpoint.

## 🔗 Nodes Used

Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
