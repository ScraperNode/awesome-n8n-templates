# 💬 Route missed roofing calls to a Retell AI agent with Twilio and Google Workspace

> ⚡ **6 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow routes missed roofing calls from Twilio to a Retell AI agent, which checks service coverage in Google Sheets, offers inspection slots from Google Calendar, books appointments, and escalates urgent leaks via Twilio SMS, then logs outcomes and call artifacts back to Google Sheets.

## How it works
1. Receives a Twilio fallback webhook for an inbound call, logs the call details to Google Sheets, and either ends the flow if the call was answered or returns TwiML to forward the caller to the Retell phone number.
2. Receives Retell “tool” webhook requests during the call and routes the request based on the tool name.
3. For service-area checks, looks up the caller’s ZIP or region in a Google Sheets “ServiceAreas” tab and returns a JSON response indicating whether the address is covered.
4. For availability checks, reads busy events from a Google Calendar “Inspections” calendar, computes the next five open one-hour slots within business hours over the next seven days, and returns them to Retell.
5. For booking requests, parses the booking details, searches Google Sheets “Leads” for recent entries by phone number, and either returns a duplicate response or creates an inspection event in Google Calendar and appends the new lead record to Google Sheets.
6. For urgent leak flags, appends an urgent lead row to Google Sheets and sends an on-call escalation SMS via Twilio before responding to Retell with an “escalated” status.
7. Receives a Retell “call ended” webhook, updates the matching lead in Google Sheets with transcript, recording, and outcome, and sends Twilio SMS messages to the owner (and to the office manager when booking was not completed).

## Setup
1. Create and connect credentials for Twilio, Google Sheets OAuth2, and Google Calendar OAuth2.
2. Configure your Twilio number’s fallback/voice webhook to point to the workflow’s “Twilio Fallback” webhook URL, and replace the TwiML forwarding number with your Retell phone number.
3. In Retell, configure the tool webhook and call-ended webhook URLs to the two Retell webhook endpoints in this workflow.
4. Update the Google Sheets document and ensure it contains the tabs and columns used (“Call Log”, “Leads”, and “ServiceAreas”, including fields like Timestamp, CallId, Phone, Address, BookingCompleted, TranscriptLink, and RecordingUrl).
5. Select the correct Google Calendar for inspections and adjust the business hours, slot length, days ahead, duplicate window, and SMS recipients/sender numbers (placeholders like <OWNER-PHONE-NUMBER> and <YOUR-TWILIO-NUMBER>).

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
