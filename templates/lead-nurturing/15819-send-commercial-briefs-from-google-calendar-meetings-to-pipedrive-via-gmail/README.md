# 💬 Send commercial briefs from Google Calendar meetings to Pipedrive via Gmail

> ⚡ **41 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who it's for

This workflow is designed for sales teams and business development managers who use Pipedrive to track leads and Google Calendar to schedule discovery calls. It automates the sending of commercial briefs before meetings, eliminating manual follow-up steps.

## How it works

1. A schedule trigger fires every 30 minutes and fetches upcoming appointments from a Google Calendar.
2. A JavaScript code node filters events matching a specific meeting title and extracts attendee emails, excluding internal team members.
3. Each attendee email is looked up in Pipedrive to retrieve the matching contact person.
4. The workflow fetches the associated lead in Pipedrive and filters out leads that don't exist or already have the "brief sent" label.
5. Existing notes on the lead are retrieved, and leads with at least one note are filtered out to prevent duplicate sends.
6. A commercial brief email is sent via Gmail to qualifying leads, and the Pipedrive lead label is updated to mark the brief as sent.

## How to set up

- [ ] Connect your **Google Calendar** account and set the correct calendar ID in the "Fetch Calendar Appointments" node
- [ ] Update the JavaScript filter in "Parse Calendar Events" with your meeting title and internal team emails
- [ ] Connect your **Pipedrive** account and verify API credentials in all Pipedrive and HTTP Request nodes
- [ ] Connect your **Gmail** account and customize the email subject, body, and recipient field
- [ ] Review the filter conditions to match your Pipedrive label IDs for the brief-sent flag

## Requirements

- Google Calendar account (OAuth2)
- Pipedrive account with API access
- Gmail account (OAuth2)

## How to customize

- Adjust the schedule trigger interval (e.g., once per day in the morning) to better match your meeting cadence
- Replace Gmail with an SMTP or Outlook node if your team uses a different email provider
- Extend the workflow to also create a Pipedrive activity or note after sending the brief, for full CRM traceability

## 🔗 Nodes Used

HTTP Request, Pipedrive, Google Calendar, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
