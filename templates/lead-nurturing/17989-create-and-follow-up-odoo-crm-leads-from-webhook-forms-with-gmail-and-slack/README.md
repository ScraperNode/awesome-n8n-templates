# 💬 Create and follow up Odoo CRM leads from webhook forms with Gmail and Slack

> ⚡ **66 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow accepts website lead submissions via a webhook, creates a new lead in Odoo CRM, sends an automatic thank-you email through Gmail, and notifies a Slack sales channel, then waits 3 days and emails a follow-up reminder if the lead is still "New".

## How it works
1. Receives a POST request from a web form via a webhook endpoint.
2. Validates that the lead has a non-empty name and a properly formatted email address, returning HTTP 400 if validation fails.
3. Creates a new `crm.lead` record in Odoo CRM from the submitted details, returning HTTP 502 if Odoo lead creation fails.
4. Sends an automatic thank-you email to the lead using Gmail and posts a new-lead notification to a selected Slack channel (errors in these steps do not block the workflow).
5. Returns a success response to the webhook caller with the created Odoo lead ID.
6. Waits 3 days, re-fetches the same lead from Odoo, and checks whether its stage is still “New”.
7. If the lead is still “New”, sends a follow-up reminder email via Gmail to a configured sales email address; otherwise, it takes no action.

## Setup
1. Create and connect Odoo credentials with access to the CRM app and the `crm.lead` model.
2. Add Gmail credentials for sending the auto-reply and follow-up reminder emails, and update the follow-up recipient address (default is `sales-team@yourcompany.com`).
3. Add Slack credentials, choose the target channel for notifications, and update the Odoo lead link URL in the Slack message to match your real Odoo host.
4. Copy the webhook URL from n8n and configure your website form (or any HTTP client) to POST lead fields (name, email, phone, company, message) to it.

## Requirements
- Odoo with the CRM app installed

## Customization
- Change the 3-day wait to match your own follow-up cadence, add more required fields to the validation step, or swap Gmail for any other email node.

## Additional info
Questions or need this adapted to your Odoo setup? Reach out at anirpoke@gmail.com.

## 🔗 Nodes Used

Slack, Webhook, Gmail, Odoo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
