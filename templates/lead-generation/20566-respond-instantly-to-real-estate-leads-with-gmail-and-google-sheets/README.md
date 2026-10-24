# 🎣 Respond instantly to real estate leads with Gmail and Google Sheets

> ⚡ **16 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives real estate enquiries via a webhook, normalizes and scores them, saves or updates the lead in Google Sheets, and sends automated Gmail replies plus a hot-lead alert to the agent.

## How it works
1. Receives a lead submission via an HTTP POST webhook.
2. Normalizes incoming fields, validates that an email or phone is present, classifies intent (buy/sell/rent/other), calculates a 0–100 score, and prepares reply and alert email content.
3. Rejects invalid leads with a 422 JSON response listing validation errors.
4. Appends or updates the lead in a Google Sheets “Leads” tab using a stable Lead ID as the matching key.
5. If the lead includes a valid email address, sends an instant personalized reply to the lead via Gmail.
6. If the lead score meets the hot threshold, sends an alert email to the agent via Gmail, then returns a 200 JSON response with the leadId, score, and temperature.

## Setup
1. Add Google Sheets OAuth credentials and set the Google Sheet ID and “Leads” sheet/tab name used to store leads.
2. Add Gmail OAuth credentials for the mailbox that sends the lead reply and the agent hot-lead alert.
3. Update the configuration values (agency name, agent name/email/phone, booking link, currency symbol, and hot/warm score thresholds).
4. Copy the webhook URL from n8n and configure your website form/lead source to POST the lead payload to that endpoint.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
