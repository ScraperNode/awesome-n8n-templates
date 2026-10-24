# 💬 Book home care assessments by phone with Vapi, Google Gemini and Google Calendar

> ⚡ **13 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow provides two Vapi webhook tools to check care assessment availability and book appointments, using Google Calendar for scheduling, Google Gemini to translate busy times into human-friendly availability, Google Sheets to log enquiries, and SMTP email to send booking confirmations.

## How it works
1. Receives a POST webhook from Vapi with a requested assessment date to check availability.
2. Pulls that day’s busy time ranges from Google Calendar in the configured timezone.
3. Sends the busy slots to Google Gemini, which returns plain-language available 1-hour booking windows (Mon–Sat, 9am–5pm) or refuses Sundays.
4. Responds to Vapi with the availability text mapped to the original tool call ID.
5. Receives a second POST webhook from Vapi containing the confirmed booking details.
6. Parses the booking payload defensively across multiple Vapi tool-call formats, normalizes the contact and date/time fields, and creates a 1-hour event in Google Calendar.
7. Appends the enquiry details to Google Sheets, emails a confirmation to the provided address via SMTP, and returns a success message to Vapi for the voice agent to read.

## Setup
1. In Vapi, create two server tools that point to this workflow’s production webhook URLs (one for availability and one for booking) and ensure the tool arguments match the fields used by the workflow.
2. Add a Google Calendar credential in n8n and select the target booking calendar in both calendar steps (adjust the timezone if you are not using Europe/London).
3. Add a Google Gemini (Google AI) credential for the chat model used to generate human-readable availability.
4. Add an SMTP email credential, set the From address, and update the confirmation email branding/content as needed.
5. Add a Google Sheets credential, create an enquiries spreadsheet with the expected columns, and select the document, sheet, and any required IDs in the append step.

## Requirements
- A Vapi account with an assistant configured with two server tools — check_assessment_availability (argument: date) and book_care_assessment (arguments listed on the canvas)
- A Google Calendar credential and a booking calendar (selected in both calendar nodes)
- A Google Gemini (Google AI) API key for the availability analysis
- An SMTP credential (e.g. your workspace mailbox) for the confirmation emails
- A Google Sheet for enquiry logging with the headers listed on the canvas

## Customization
- Edit working days, hours and slot length in the AI agent's system message (default Mon–Sat, 9am–5pm, 1-hour assessments)
- Replace the agency name, colours and footer in the confirmation email HTML
- Add or rename booking fields — update the Vapi tool, the parser and the sheet columns together
- Swap Gemini for any chat model n8n supports
- Adapt the two-tool pattern to any appointment business — clinics, salons, surveyors, trades call-outs

## Additional info
About the creator: Built and maintained by Ali Amin, founder of IhsanOps (https://ihsanops.ai) — a UK AI automation consultancy building voice agents and automations for SMEs. This template is based on a production voice-booking system built for a UK home care provider. Want it adapted to your business — different booking rules, CRM integration, SMS confirmations? Email ali@ihsanops.ai or see https://linkedin.com/in/ali-tm-amin.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Google Calendar, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
