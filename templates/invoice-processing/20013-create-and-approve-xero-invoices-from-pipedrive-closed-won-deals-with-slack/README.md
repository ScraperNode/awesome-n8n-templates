# 🧾 Create and approve Xero invoices from Pipedrive Closed Won deals with Slack

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow triggers when a Pipedrive deal is moved into the Closed Won stage, creates a matching draft invoice in Xero, and posts it to Slack for approval before authorising and emailing the invoice to the customer.

## How it works
1. Triggers when a deal changes in Pipedrive and continues only when the deal newly enters the configured Closed Won stage.
2. Fetches the deal’s person details from Pipedrive and prepares the contact name and email for invoicing.
3. Searches Xero for an existing contact by email (or by name if email is missing) and creates a new Xero contact if none is found.
4. Pulls the deal’s products from Pipedrive, builds Xero invoice line items (or falls back to the deal title/value), and creates an ACCREC draft invoice in Xero with calculated due date and configured currency.
5. Sends the draft invoice details to a Slack channel and waits for an Approve & Send or Reject decision.
6. If approved, updates the invoice in Xero to AUTHORISED and emails it via Xero when an email address is available, then posts a confirmation to Slack.
7. If rejected, leaves the invoice as a draft in Xero and posts a rejection notice to Slack.

## Setup
1. Connect your Pipedrive credentials and ensure the Pipedrive deal-change trigger webhook is registered for your Pipedrive account.
2. Connect your Xero OAuth2 credentials, set your Xero tenant ID (Xero-tenant-id), and confirm your organisation supports the configured invoice currency.
3. Connect your Slack OAuth2 credentials and set the target finance channel for the approval and notification messages.
4. Update the workflow configuration values (Closed Won stage ID, sales account code, tax type, invoice currency, and payment terms days) to match your Pipedrive pipeline and Xero chart of accounts.
5. Ensure Pipedrive deals have an associated person and email address if you want invoices to be emailed automatically from Xero.

## Requirements
- Pipedrive API credential + trigger Action change / Entity deal
- Xero OAuth2 (contacts + invoices); org must be subscribed to the invoice currency (this tenant: INR)
- Slack OAuth2 with permission to post + send-and-wait in the finance channel
- Closed Won mapped to the correct stage_id (here: 84)
- Client person email in Pipedrive for the auto-email step
- Valid Xero sales account code + tax type for your org
- After any edit: click Publish so the live version matches the draft

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

HTTP Request, Pipedrive, Pipedrive Trigger, Slack, Xero

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
