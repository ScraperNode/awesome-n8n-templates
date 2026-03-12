# 🎣 Automate client lifecycle: lead intake to onboarding with Airtable, Notion & Google Calendar

> ⚡ **349 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works

This workflow automates the entire lifecycle of a service-based client, combining four distinct business flows into a single view:

1. **Intake Leads:** Receives a webhook from your form builder, validates the data, optionally enriches the email using Clearbit, and creates records in Airtable and Notion.
2. **Manage Bookings:** Processes scheduling webhooks to update lead status, create Google Calendar events, and send pre-call survey emails.
3. **Send Reminders:** Runs a daily schedule to scan Airtable for upcoming calls and automatically sends 24h reminder emails to reduce no-shows.
4. **Onboard Clients:** Reacts to successful payments by marking leads as "Paid," generating a Notion Onboarding Checklist, and sending a Welcome Kit via Email and WhatsApp.

## Set up steps

1. **Configure Credentials:**
   * Connect your accounts for **Airtable, Notion, Slack, Google Calendar, and GMAIL**.
   * (Optional) Add credentials for **Clearbit** (enrichment) and **Twilio** (WhatsApp).

2. **Customize Emails:**
   * Open the four **Email Send** nodes.
   * Customize the `Body Text` with your own booking links and survey URLs.

3. **Configure Tables & IDs:**
   * Update the **Airtable** nodes with your specific Base and Table names (e.g., `tblLeads`).
   * Update the **Notion** nodes with your Database IDs for Projects and Onboarding.

4. **Connect Webhooks:**
   * Copy the Production URLs from the three Webhook nodes (`Lead Intake`, `Booking`, `Payment`) and paste them into your respective form, calendar, or payment provider settings.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
