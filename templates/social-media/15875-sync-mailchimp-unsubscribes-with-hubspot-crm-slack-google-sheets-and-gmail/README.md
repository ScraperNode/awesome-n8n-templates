# 📱 Sync Mailchimp unsubscribes with HubSpot CRM, Slack, Google Sheets and Gmail

> ⚡ **48 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works
This workflow automatically handles every Mailchimp unsubscribe event by capturing the contact details, syncing the status to HubSpot, alerting the team on Slack, logging the record to Google Sheets, and sending the user a confirmation email — all without any manual effort.

## Step-by-step
- **Trigger & normalize**
  - **Mailchimp — Unsubscribe Trigger** – Listens for `unsubscribe` events on a Mailchimp audience list.
  - **Set — Normalize & Enrich Data** – Parses and normalizes the raw Mailchimp payload across all supported formats, extracting email, first name, last name, phone, address, list name, unsubscribe reason, campaign ID, member rating, and formatted timestamps.

- **CRM sync**
  - **HubSpot — Search Contact by Email** – Searches HubSpot for an existing contact matching the unsubscribed email address.
  - **IF — Contact Exists in HubSpot?** – Routes to update or create based on whether a matching contact is found.
  - **Update HubSpot Contact** – Marks the existing contact as `Unsubscribed`, sets the email opt-out flag, and records the unsubscribe source, date, reason, campaign ID, and Mailchimp list ID.
  - **Create HubSpot Contact** – Creates a new HubSpot contact with full unsubscribe details and opt-out status if no existing contact is found.

- **Payload preparation**
  - **Set — Prepare Slack Payload** – Consolidates the HubSpot contact ID with all normalized unsubscribe data into a single clean object for downstream nodes.

- **Team notifications**
  - **Slack — Alert** – Posts an instant unsubscribe alert to the marketing Slack channel with the contact's name, email, audience, and timestamp.
  - **Slack — Log to** – Posts a detailed CRM audit log entry including HubSpot contact ID, campaign ID, unsubscribe reason, and processing timestamp.

- **Logging & confirmation**
  - **Store Unsubscribe Details in Sheet** – Appends a full unsubscribe record to Google Sheets including email, name, audience, reason, campaign ID, HubSpot contact ID, member rating, and timestamp.
  - **Send a confirmation email** – Sends a plain-text Gmail confirmation to the unsubscribed user acknowledging their removal from the list.

- **Completion log**
  - **Set — Workflow Completion Log** – Records a final summary of all completed actions, processing timestamp, and workflow status for monitoring and audit purposes.

## Why use this?
- Instantly syncs every Mailchimp unsubscribe to HubSpot so CRM contact status is always accurate and compliant
- Automatically creates new HubSpot contacts for unsubscribers who don't yet exist in the CRM
- Keeps the marketing team informed in real time with Slack alerts and a separate audit log channel
- Logs every unsubscribe event to Google Sheets for trend analysis, compliance reporting, and list health tracking
- Sends users an automatic confirmation email so every unsubscribe request is professionally acknowledged

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Mailchimp Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
