# 🎫 Process website contact form submissions with SharePoint and Gmail

> ⚡ **33 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works

This workflow fires whenever a visitor submits a contact form on your website.

A **Webhook** receives the POST payload (Name, Email, Phone, Message, Date, and Time) from your website form.

**Log Submission to SharePoint** writes each field into a SharePoint list for permanent record-keeping — giving you a searchable, auditable log of every inbound inquiry without any manual data entry.

**Build Branded Email HTML** is a Code node that constructs a fully branded HTML notification email. Colors, logo, and layout are all defined as named constants at the top of the node for easy one-time customization.

**Send Email Notification** delivers the notification via Gmail OAuth2 to your designated recipient address, with Reply-To automatically set to the submitter's email so you can respond in one click.

## How to set up

1. In **Webhook**, copy the production webhook URL and wire it to your contact form's POST action.
2. In **Log Submission to SharePoint**, update the site URL and list name to match your SharePoint environment.
3. In **Build Branded Email HTML**, update the brand constants at the top of the Code node: `FIRM_NAME`, `LOGO_URL`, and `ACCENT_COLOR`.
4. In **Send Email Notification**, select your Gmail OAuth2 credential and set your designated recipient address.

## Requirements

- Microsoft 365 account with SharePoint access
- Gmail account with OAuth2 configured in n8n
- A contact form capable of POSTing JSON to a webhook URL
- **Self-hosted n8n** recommended for production webhook reliability

## How to customize the workflow

- **Form fields** — Add or remove fields in the SharePoint write step and the HTML builder to match your form's payload.
- **List source** — Swap the SharePoint node for Airtable, Google Sheets, or any n8n-supported datastore. Map the same fields and the rest of the workflow requires no changes.
- **Email service** — Replace the Gmail node with Outlook, SendGrid, or any SMTP-compatible service supported by n8n.
- **Notifications** — Add a Slack or Teams message node in parallel with **Send Email Notification** to also ping a channel for every new submission.
- **Auto-reply** — Add a second Gmail node after the notification step to send an immediate confirmation email to the submitter.

Visit [automatedintelligentsolutions.com](https://automatedintelligentsolutions.com) for more information and workflows.

## 🔗 Nodes Used

Webhook, Gmail, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
