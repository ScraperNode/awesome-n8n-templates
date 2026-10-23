# 💬 Convert seller leads into listing appointments with email, Google Calendar, and CRM

> ⚡ **16 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow captures seller consultation requests, assigns each lead to an agent, and manages booking via Google Calendar. It stores lead state in n8n Data Tables, optionally upserts the lead into HubSpot or Salesforce, sends email notifications, and runs scheduled follow-up planning plus a daily manager summary.

## How it works
1. Receives a new seller lead from an n8n Form or an authenticated webhook, or receives a booking selection/outcome submission from the booking and outcome forms.
2. Validates the request type, normalizes seller details, validates the chosen CRM provider, and generates an idempotency hash to deduplicate submissions.
3. Ensures the required n8n Data Tables exist, assigns the lead to an enabled agent using a stable round-robin key, and upserts the lead into the seller_lead_pipeline table.
4. For new leads, sends an acknowledgement email to the seller via SMTP and (optionally) creates or updates the seller record in HubSpot or Salesforce and builds a direct CRM record link.
5. Emails the assigned agent via SMTP with the lead details and the CRM link (or notes that CRM is not configured), then returns a structured result to the form/webhook response.
6. For booking requests, checks the assigned agent’s availability in Google Calendar and creates a listing consultation event on the agent’s calendar with the seller as an attendee.
7. Every 15 minutes, reads due follow-ups from the seller_lead_pipeline table and upserts planned follow-up actions into the seller_action_ledger table, and once daily reads the pipeline and emails a lead/booking count summary to the manager.

## Setup
1. Configure an SMTP credential and set the from/reply-to addresses used by the seller acknowledgement, agent notification, and manager summary email steps.
2. Connect a Google Calendar OAuth2 credential and ensure each agent entry includes a valid calendarId that the credential can access.
3. In “Configure Seller Appointment Funnel” and the schedule/summary configuration steps, set your timezone, agencyName, agents JSON, meeting duration, booking window/lead time, follow-up delay, and set dryRun to false when you are ready to send emails and create calendar events.
4. If using a CRM, add either a HubSpot app token credential or a Salesforce credential, set crmProvider to hubspot or salesforce, and set crmBaseUrl to your HubSpot contacts URL prefix or your Salesforce instance URL.
5. If using the authenticated webhook path, copy the webhook URL for the seller-lead-lifecycle endpoint and configure the required header authentication in the source system.

## Requirements
- SMTP credentials.
- Google Calendar OAuth2 credentials for appointment booking.
- Optional: HubSpot Service Key or Salesforce OAuth2 credentials when using a CRM.

## Customization
- Agency name and reply-to email.
- Timezone and booking settings.
- Agent list and Google Calendar IDs.
- Follow-up delay in days.
- CRM provider: none, hubspot, or salesforce.
- CRM base URL.

## 🔗 Nodes Used

Send Email, Webhook, HubSpot, Google Calendar, Salesforce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
