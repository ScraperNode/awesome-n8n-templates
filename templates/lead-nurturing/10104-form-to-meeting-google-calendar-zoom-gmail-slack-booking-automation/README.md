# 💬 Form to meeting: Google Calendar, Zoom, Gmail & Slack booking automation

> ⚡ **2,208 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**Who’s it for**

Teams that collect meeting requests via a form and want instant, error-free scheduling: customer success, sales, education, agencies, and community managers.

**How it works / What it does**

This workflow ingests a form submission (name, email, preferred date/time), checks Google Calendar for conflicts, and branches automatically. If the slot is free, it creates a calendar event, spins up a Zoom meeting, emails the guest a confirmation, and posts a Slack summary to your team. If busy, it sends a polite “please pick another time” email. Time handling defaults to Asia/Tokyo and converts to ISO internally to keep downstream integrations consistent.

**How to set up**

Import the workflow and rename nodes for clarity if needed.

Open the Workflow Configuration (Set) node and adjust variables (calendar ID, meeting duration, Slack channel, sender info).

Map your form fields in Extract Booking Details.

Connect credentials in each service node (Google Calendar, Zoom, Gmail, Slack).

Test once with a real submission.

**Requirements**

Active accounts and n8n credentials for Google Calendar, Zoom, Gmail, and Slack.

A form or webhook source that sends name, email, and a valid datetime.

How to customize the workflow

Duration & buffers: Change end time calculation in Extract Booking Details.

Time zones: If you accept multiple time zones, normalize before building ISO strings.

Email copy: Personalize confirmation/alternative-time messages and add attachments if desired.

Slack format: Enrich the post with fields (host, Zoom join URL, internal tags).

Routing: Add CRM updates or reminders after the “slot free” branch.

Security note: No hardcoded API keys in HTTP nodes. Configure all credentials via n8n’s credential manager.

## 🔗 Nodes Used

Slack, Webhook, Google Calendar, Zoom, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
