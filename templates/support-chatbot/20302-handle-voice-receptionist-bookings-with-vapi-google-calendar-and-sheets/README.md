# 💬 Handle voice receptionist bookings with Vapi, Google Calendar and Sheets

> ⚡ **70 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow handles Vapi voice agent tool calls to check Google Calendar availability, book appointments into Google Calendar, and capture phone messages, then logs outcomes to Google Sheets and notifies the owner by email.

## How it works
1. Receives a POST webhook request from Vapi containing a tool call (or a status/transcript event).
2. Normalizes the Vapi payload to extract the tool name, tool call ID, and arguments, then routes the request by tool name.
3. For checkAvailability, fetches upcoming events from Google Calendar and computes the next available appointment slots based on configurable business-hour rules.
4. Sends the available slot options back to Vapi in a spoken-ready JSON response that includes ISO timestamps to book against.
5. For bookAppointment, creates a new Google Calendar event at the requested start time, appends a booking record to Google Sheets, and emails the owner a booking alert.
6. For takeMessage, appends the caller’s message to Google Sheets, emails the owner the message details, and returns a confirmation response to Vapi.
7. For any non-tool-call events, returns an empty acknowledgement to Vapi without taking action.

## Setup
1. In Vapi, create three server tools pointing to this workflow’s production webhook URL: checkAvailability (no args), bookAppointment (customerName, phoneNumber, service, startTime), and takeMessage (callerName, phoneNumber, message).
2. Add a Google Calendar credential and ensure the workflow can access the calendar you want to book into (the template uses the primary calendar).
3. Create/select a Google Sheets spreadsheet and sheet for the call log, with columns like Timestamp, Type, Caller Name, Phone, Details, and When, and set the document and sheet in both Google Sheets nodes.
4. Add an SMTP email credential and update the From and To addresses in both email nodes.
5. If needed, edit the availability rules in the open-slot calculation code (timezone, opening hours, working days, slot length, and minimum notice).

## Requirements
- A Vapi account with an assistant configured with three server tools (names and arguments are on the canvas)
- A Google Calendar credential — the primary calendar is used by default, no selection needed
- An SMTP credential for owner notifications
- A Google Sheet for the call log with the six headers listed on the canvas

## Customization
- Edit the CONFIGURE block in Compute Open Slots: timezone, opening hours, working days, slot length, notice period and how many slots to offer
- Change the appointment length (keep Create Event's duration in sync with SLOT_MINS)
- Reword the owner emails and the spoken confirmations the agent reads back
- Add more tools to the switch — cancellations, FAQs, transfer-to-human — using the same pattern
- Works for any business that books time: salons, clinics, trades, tutors, studios

## Additional info
About the creator: Built and maintained by Ali Amin, founder of IhsanOps (https://ihsanops.ai) — a UK AI automation consultancy building voice agents and automations for SMEs. This template is based on a production voice-booking system built for a UK home care provider. Want it adapted to your business — different booking rules, CRM integration, SMS confirmations? Email ali@ihsanops.ai or see https://linkedin.com/in/ali-tm-amin.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
