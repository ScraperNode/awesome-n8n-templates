# 🎣 Filter website leads from spam and pitches with OpenAI, Twilio, Gmail and Google Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures website contact-form submissions, validates and enriches them with Twilio Lookup and OpenAI, and files them into Google Sheets as real leads, vendor pitches, or spam, while notifying you via Gmail (and optional Twilio SMS) and sending a weekly Gmail summary.

## How it works
1. Triggers when a website form posts to a webhook, when the built-in n8n form is submitted, on a weekly Monday 7am schedule, or when you run a one-time manual setup.
2. Normalizes the incoming submission fields (name, email, phone, message, etc.) and reads recent rows from the Google Sheets “Leads” tab to detect repeat contacts.
3. Runs rule-based spam checks (honeypot, too-fast submission, excessive links, disposable emails, missing contact details) and conditionally validates the phone number with the Twilio Lookup API.
4. Reads your “Services” definitions from Google Sheets and sends the submission plus checks/phone details to OpenAI to classify it (customer/vendor pitch/job seeker/spam/unclear) with urgency, summary, and a suggested reply.
5. Appends the resulting row to the appropriate Google Sheets tab (Leads, Pitches, or Spam) and emails the owner via Gmail for items filed as Leads.
6. Optionally sends the owner an SMS via Twilio for Leads and optionally emails an acknowledgement to the customer via Gmail.
7. Every Monday at 7am, compiles a 7-day summary from the three Google Sheets tabs and emails it to the owner via Gmail.

## Setup
1. Connect credentials for OpenAI, Google Sheets, and Gmail (used for owner notifications, optional customer auto-replies, and the weekly summary).
2. Add Twilio credentials if you want phone validation via Twilio Lookup and optional SMS alerts, and set a Twilio sending number.
3. Run “Create my spreadsheet” once, then copy the generated spreadsheet ID into the workflow settings and replace the example rows in the “Services” tab with your actual services and service area.
4. Fill in the settings values (owner_email at minimum, plus optional owner_cell, twilio_number, timezone, and any spam thresholds like min_seconds/repeat_days).
5. If using the webhook, copy the webhook URL and configure your website form provider to POST submissions to it (or publish the built-in n8n form and embed/link to it).

## Requirements
- OpenAI, Google Sheets and Gmail credentials in n8n; Twilio is optional for phone Lookup and text alerts

## Customization
- Rewrite the Services tab (what you do, what you do not do, where) and set the minimum fill time and repeat window in Your settings

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
