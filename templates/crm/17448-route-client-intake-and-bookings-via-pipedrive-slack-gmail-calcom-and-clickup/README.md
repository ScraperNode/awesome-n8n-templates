# 🤝 Route client intake and bookings via Pipedrive, Slack, Gmail, Cal.com and ClickUp

> ⚡ **11 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow captures new client inquiries via an n8n form, logs them to an n8n data table, creates or updates a lead in Pipedrive, notifies a Slack channel, and emails a Cal.com booking link; when Cal.com confirms a booking, it creates a ClickUp onboarding project and posts a Slack confirmation.

## How it works
1. Receives a new client inquiry through an n8n Form trigger.
2. Stores the raw submission in an n8n Data Table and normalizes fields like name, email, and budget.
3. Searches Pipedrive for an existing person by email and creates the person if no match is found.
4. Creates a new deal in Pipedrive for the inquiry and posts a formatted lead alert to Slack.
5. Sends the inquirer a Gmail message with your Cal.com discovery-call booking link.
6. Receives a Cal.com “booking created” webhook, normalizes booking details, and searches Pipedrive for the attendee by email.
7. Creates a ClickUp onboarding project containing the booking details and posts a “call booked” confirmation to Slack.

## Setup
1. Connect credentials for Pipedrive (API token), Slack, Gmail, and ClickUp (OAuth2).
2. Select or create an n8n Data Table and ensure it has columns for full_name, email, company, need, budget, source, and submitted_at.
3. Update the Slack channel and replace the Pipedrive URL domain in the Slack “Open deal in Pipedrive” button with your Pipedrive subdomain.
4. Replace the Cal.com booking link and sender details in the Gmail email template.
5. Copy the Cal.com webhook URL from the workflow and register it in Cal.com for the “Booking Created” event.

## 🔗 Nodes Used

Pipedrive, Slack, Webhook, ClickUp, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
