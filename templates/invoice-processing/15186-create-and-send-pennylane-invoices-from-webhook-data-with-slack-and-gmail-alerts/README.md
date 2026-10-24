# 🧾 Create and send Pennylane invoices from webhook data with Slack and Gmail alerts

> ⚡ **94 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for

SMEs and freelancers using Pennylane (the leading French accounting platform) who want to automate invoice creation from their CRM, forms, or any business tool.

## What it does

This workflow receives deal or order data via a POST webhook, searches for the customer in Pennylane by email (or creates one if not found), generates a customer invoice with line items and VAT, optionally sends it by email through Pennylane, and notifies your team via Slack and/or Gmail with an HTML-formatted summary.

## How to set up

1. Import this workflow into n8n
2. Create a **Header Auth** credential with name `Authorization` and value `Bearer &lt;YOUR_PENNYLANE_TOKEN&gt;`
3. Select your Slack channel in the `SL Send Notification` node
4. (Optional) Connect your Gmail credential for HTML email notifications
5. Configure invoice numbering in your Pennylane settings (required for finalized invoices)
6. Send a test POST request to the webhook URL with a sample payload

## Requirements

- Pennylane account with API access (Essentiel plan or higher)
- Pennylane API token with scopes: `customer_invoices:all`, `customers:all`
- (Optional) Slack workspace for team notifications
- (Optional) Gmail OAuth for email notifications

## How to customize

- Set `draft: true` in the `Code Build Invoice Payload` node to create draft invoices for manual review before finalizing
- Replace Slack/Gmail with Telegram or any other notification channel
- See example payloads and CRM mappings (Pipedrive, Sellsy, Axonaut) in the GitHub repo: https://github.com/Gauthier-Huguenin/n8n-pennylane-auto-invoicing

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
