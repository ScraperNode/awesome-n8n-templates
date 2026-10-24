# 💬 Manage WhatsApp appointment reminders, confirmations and changes with Google Calendar, Gmail and OpenAI

> ⚡ **15 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow checks Google Calendar every 15 minutes to send WhatsApp appointment reminders 24 hours and 2 hours before events, logs sends in an n8n Data Table to avoid duplicates, and handles patient replies by confirming in Google Calendar or emailing the front desk via Gmail.

## How it works
1. Runs every 15 minutes on a schedule.
2. Pulls events from Google Calendar for the next 25 hours and reads previously sent reminders from an n8n Data Table.
3. Selects events that are due for a 24-hour or 2-hour reminder, extracts the patient phone number from the event description, and skips anything already logged.
4. Sends a WhatsApp template message with Confirm and Reschedule quick-reply buttons and records the send in the Data Table.
5. Triggers when an inbound WhatsApp message arrives and parses the button payload or text to determine the patient’s intent.
6. If the patient confirms, updates the Google Calendar event color to mark it confirmed and sends a WhatsApp confirmation message.
7. If the patient requests rescheduling or sends any other message, emails the front desk via Gmail (including the calendar link for reschedules) and sends a WhatsApp acknowledgement only for reschedule requests.

## Setup
1. Add credentials for Google Calendar, WhatsApp Cloud API (Meta), and Gmail in n8n.
2. Create an n8n Data Table named `appointment_reminders` with text columns `eventId`, `type`, `phone`, and `sentAt`.
3. In WhatsApp Manager, create a template named `appointment_reminder` (language `en`) with two body variables and two quick-reply buttons (Confirm and Reschedule).
4. Update the workflow with your WhatsApp phone number ID (`phoneNumberId`) and set the front-desk recipient address in both Gmail email actions.
5. Ensure each Google Calendar event description contains the patient number in a parsable format such as `Phone: +44 7700 900123`, and connect the WhatsApp Trigger webhook in your Meta app configuration.

## 🔗 Nodes Used

Google Calendar, Gmail, WhatsApp Business Cloud, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
