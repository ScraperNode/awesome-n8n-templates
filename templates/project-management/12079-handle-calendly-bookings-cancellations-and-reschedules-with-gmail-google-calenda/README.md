# 📋 Handle Calendly bookings, cancellations and reschedules with Gmail, Google Calendar, Sheets and Slack

> ⚡ **85 views** · 📋 [Project Management](../)

## Description

Complete Calendly automation that handles confirmations, cancellations and reschedules in a single workflow.
WHAT IT DOES:

Logs all meetings to Google Sheets automatically
Creates events in organizer's Google Calendar
Sends professional HTML emails to guests
Notifies your team on Slack (#meetings)
Handles errors with Slack alerts (#errors)

INCLUDED FLOWS:

New booking: Sheets + Calendar + Slack + Confirmation email
Cancellation: Sheets (updates status) + Slack + Cancellation email
Reschedule: Sheets + Slack + Email with new date/time

SETUP:

Connect Google Sheets (create sheet with columns: Event ID, Date Logged, Name, Email, Meeting Type, Date, Time, Status, Meeting URL, Timezone)
Connect Google Calendar
Connect Slack (create channels #meetings and #errors)
Connect Gmail
Configure webhook in Calendly &gt; Integrations &gt; Webhooks

CUSTOMIZABLE:
Emails include professional HTML design with editable colors and text directly in the code nodes.
IDEAL FOR:
Consultants, coaches, agencies and sales teams using Calendly.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
