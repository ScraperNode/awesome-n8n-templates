# 🎫 Route critical lab results using Google Sheets, Slack, Gmail, Gemini, and Twilio

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
A lab result routing workflow that notifies the ordering physician by severity, using thresholds you control. Critical results trigger an immediate Slack and SMS alert with acknowledgment tracking and automatic escalation to a backup physician if unanswered. Abnormal results are emailed, and every outcome is logged for audit.

## How it works
1. Receives a lab result via an HTTP webhook (or fetches results from an LIS endpoint on a schedule).
2. Loads test limits, doctor contact details, and prior notification history from Google Sheets.
3. Parses incoming JSON or HL7 ORU text, normalizes units (including supported conversions), checks for missing fields, and suppresses duplicates based on the log.
4. Classifies each result as critical, abnormal, normal, duplicate, or needs lab review using the Limits sheet thresholds.
5. Uses Google Gemini to generate a short, non-diagnostic note that restates the severity, value, unit, and required action.
6. For critical results, sends a Slack DM (and a Twilio SMS when a phone number exists) with an acknowledgment link, waits 15 minutes, and escalates to a backup Slack contact if not acknowledged.
7. For abnormal results, sends an email via Gmail to the ordering doctor.
8. Posts unroutable items or delivery failures to a lab Slack channel and appends all statuses and messages to a Google Sheets Log tab.

## Setup
1. Create a Google Sheets document with three tabs named Limits, Doctors, and Log, then connect Google Sheets credentials and set the spreadsheet ID in all Google Sheets nodes.
2. Add Slack credentials and set the lab notification channel in the lab alert node, and ensure Doctors sheet includes Slack user IDs (and optional backup Slack IDs) for direct messages.
3. Add a Google Gemini (Google AI) credential for the note-generation step.
4. Add Gmail credentials (service account) and ensure the Doctors sheet includes doctor email addresses for abnormal-result routing.
5. Add Twilio credentials and replace the Twilio “from” number, and ensure the Doctors sheet includes a phone/mobile number if you want SMS for critical results.
6. If using polling, update the LIS HTTP endpoint URL and enable the schedule trigger, or if using push, copy the webhook URL and configure your LIS to POST results to it.

## Requirements
- n8n (self-hosted or Cloud)
- Google Sheets account and credential
- Slack workspace and credential (able to send DMs and post to a channel)
- Gmail (or another email) credential
- Google Gemini API credential
- Twilio account and credential (optional, for SMS escalation)
- An LIS or EHR able to call a webhook, or an API endpoint it can poll

## Customization
- Add or remove test codes and thresholds any time by editing the Limits sheet — no workflow changes needed
- Swap Gemini for any other chat-model node; the validation step only checks the note's content, not which model produced it
- Adjust the 15-minute acknowledgment window in the "Wait for acknowledgment" node
- Swap Slack, Gmail, or Twilio for other channels (Teams, WhatsApp, etc.) — the routing and logging logic is channel-agnostic
- Add a second escalation tier by extending the branch after "Link opened?"

## Additional info
This template handles LIS-to-physician routing and escalation only  it is not a full EHR/FHIR integration, and alert messages intentionally never carry direct patient identifiers (only a result reference ID); physicians open their secure EHR to review patient details.

For a deeper look at this pattern, see Ciphernutz's guide to medical lab automation with n8n.For more on this pattern, see Ciphernutz's guide to medical lab automation with n8n: https://ciphernutz.com/blog/n8n-for-medical-lab-automation

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Twilio, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
