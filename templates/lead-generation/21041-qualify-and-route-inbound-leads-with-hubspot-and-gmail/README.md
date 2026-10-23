# 🎣 Qualify and route inbound leads with HubSpot and Gmail

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead submissions via a webhook, normalizes and scores them, creates a contact in HubSpot, and uses Gmail to email the lead and notify the sales team when the lead is classified as hot.

## How it works
1. Receives a POST request on the `/lead-intake` webhook containing lead details like name, email, budget, urgency, and timeline.
2. Normalizes incoming fields and applies defaults (for example, missing budget becomes 0 and missing timeline becomes 999 weeks).
3. Calculates a 0–100 lead score based on budget, urgency, and timeline, and labels the lead as Hot (score ≥ 60) or Cold.
4. Creates a new contact in HubSpot using the lead’s email and name.
5. Checks whether the lead is categorized as Hot and, if so, sends a Gmail message to the lead and a separate Gmail alert to the sales team.
6. If the lead is categorized as Cold, sends a standard Gmail acknowledgement email to the lead.

## Setup
1. Create a webhook integration in your lead source (form, website, or app) and configure it to POST JSON to the workflow’s `/lead-intake` webhook URL.
2. Add a HubSpot App Token credential in n8n and confirm the contact properties you want to map (email and first name).
3. Add a Gmail OAuth2 credential in n8n for sending emails.
4. Replace `sales-team@yourcompany.com` with your real sales notification address and adjust the email subjects/bodies as needed.

## 🔗 Nodes Used

Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
