# 💬 Send AI patient follow-ups and rebooking emails with Claude, Gmail, Slack and Sheets

> ⚡ **20 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow monitors a Google Sheets patient intake log, uses Anthropic Claude to decide the right follow-up action and draft an email, sends the message via Gmail, optionally notifies a clinic manager in Slack for re-bookings, and appends each communication to a Google Sheets log.

## How it works
1. Triggers when a new patient row appears in a Google Sheets intake spreadsheet.
2. Loads clinic settings (sheet IDs, clinic name, booking link, sender email, and Slack channel) and formats the patient record into a prompt.
3. Sends the prompt to Anthropic Claude (Sonnet) to return a JSON plan with an action, urgency, email subject/body, and a short reason.
4. Parses Claude’s JSON response and falls back to a default follow-up message if parsing fails.
5. Routes the patient to the correct branch and sends a plain-text email via Gmail (welcome, re-booking, or follow-up).
6. For re-booking emails, posts a Slack notification to the clinic manager with patient details for manual confirmation.
7. Appends a row to a Google Sheets communications log with the action, status, urgency, timestamp, and email details.

## Setup
1. Connect credentials for Google Sheets, Gmail, Slack, and Anthropic (Claude) in n8n.
2. Update the configuration values for INTAKE_SHEET_ID, LOG_SHEET_ID, LOG_SHEET_NAME, SLACK_CHANNEL_ID, CLINIC_NAME, BOOKING_LINK, and SENDER_EMAIL.
3. Ensure your intake sheet contains the expected fields (for example Patient Name, Email, Contact Reason, Appointment Status, Last Visit, and Notes) and create a communications log sheet with matching columns for the appended data.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Basic LLM Chain, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
