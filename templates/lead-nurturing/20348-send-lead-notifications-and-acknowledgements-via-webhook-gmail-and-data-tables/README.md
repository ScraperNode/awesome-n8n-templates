# 💬 Send lead notifications and acknowledgements via webhook, Gmail and Data Tables

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives new lead submissions via a header-authenticated webhook, validates and normalizes the payload, prevents duplicate notifications using an n8n Data Table, then sends two Gmail emails (admin alert and lead acknowledgement) and returns a JSON response with the processing result.

## How it works
1. Receives a POST request on a header-authenticated webhook containing lead details.
2. Normalizes the incoming fields (for example trimming the name and lowercasing the email) and rejects invalid payloads with an HTTP 400 JSON response.
3. Checks an n8n Data Table log for an existing row with the same leadId to prevent sending notifications twice.
4. If the lead was already processed, returns a JSON response indicating the request is a duplicate.
5. If the lead is new, sends an admin notification email and a lead acknowledgement email through Gmail while allowing either email to fail without stopping the run.
6. Logs email send statuses and errors back to the n8n Data Table and responds to the caller with a JSON success payload.

## Setup
1. Create and attach a Header Auth credential to the webhook and configure the calling form/CRM to send requests to the webhook URL with the required header.
2. Connect a Gmail OAuth2 credential and select it in both Gmail email-sending steps.
3. Create an n8n Data Table named `lead_notification_log` with the expected columns (leadId, executionId, adminEmailStatus, adminEmailError, leadEmailStatus, leadEmailError, status, notifiedAt) and select it in both Data Table steps.
4. Update the admin recipient email address (currently `admin@example.com`) and adjust the email subjects/bodies to match your branding.

## 🔗 Nodes Used

Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
