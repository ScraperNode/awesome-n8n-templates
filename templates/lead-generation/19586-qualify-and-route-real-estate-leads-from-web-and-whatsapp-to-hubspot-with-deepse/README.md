# 🎣 Qualify and route real estate leads from web and WhatsApp to HubSpot with DeepSeek and Gmail

> ⚡ **39 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Captures real estate leads from web forms, WhatsApp and Facebook Lead Ads, then deduplicates and qualifies them with DeepSeek AI.Assigns each lead to the next available agent through fair round robin rotation, logs everything in HubSpot, and automatically emails the agent lead details plus a booking link to the lead.

## How it works
1. Receives a new lead via one of three webhook endpoints (web form, WhatsApp, or Facebook Lead Ads).
2. Normalizes the incoming payload into a consistent lead record (name, phone, email, message, and source) and standardizes the phone number.
3. Searches HubSpot for the normalized phone number and stops the workflow when it detects a duplicate enquiry.
4. Uses a DeepSeek chat model to classify the lead (type, priority, budget signal) and generate a one-sentence intent summary.
5. Reads an Agents tab in Google Sheets, selects the agent with the oldest LastAssignedAt value, and updates their timestamp to claim the slot.
6. Creates or updates the contact in HubSpot with the AI qualification fields and the assigned agent details.
7. Sends an email to the assigned agent with the lead details and sends the lead an email with the agent’s booking link (or a fallback message if no agent is available).

## Setup
1. Add HubSpot credentials (app token/service key) and create the required contact properties: lead_type, priority, budget_signal, intent_summary, assigned_agent_name, assigned_agent_email, lead_status.
2. Add a Google Sheets OAuth2 credential and create an Agents sheet with columns Name, Email, Status, LastAssignedAt, and CalComLink, then update the workflow’s spreadsheet and sheet references if needed.
3. Add a DeepSeek API credential for the LangChain agent’s chat model.
4. Add a Gmail OAuth2 credential and set the recipient fields in the two email steps (agent notification and lead reply) to use your desired addresses.
5. Copy each webhook URL and configure your web form, WhatsApp provider, and Facebook Lead Ads integration to POST lead data to the matching endpoint paths.

## 🔗 Nodes Used

Google Sheets, Webhook, HubSpot, Gmail, AI Agent, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
