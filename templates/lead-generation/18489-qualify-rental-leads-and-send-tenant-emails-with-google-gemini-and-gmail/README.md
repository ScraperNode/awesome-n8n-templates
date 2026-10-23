# 🎣 Qualify rental leads and send tenant emails with Google Gemini and Gmail

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
When a rental inquiry arrives, this workflow looks up the property requirements, qualifies the applicant using Gemini AI, and instantly sends a personalized response — application link for qualified tenants, clarification for borderline, polite decline for unqualified — then delivers a ranked daily digest every evening via Gmail and Slack.

## How it works
1. A rental inquiry arrives via webhook from any website form, chatbot, or lead source — carrying the applicant's details and which property they're enquiring about.
2. The workflow looks up that property's specific requirements from your Google Sheets property database — monthly rent, minimum income threshold, pet policy, occupant limit, and availability date.
3. Gemini AI reads the applicant's free-text message, extracts their income, move-in date, pets, and occupants, and qualifies them against the property requirements in a single call.
4. Every applicant receives an instant personalized email response matching their qualification outcome — Qualified applicants get a welcome message with the application link and a viewing booking link, Borderline applicants get a polite clarification request asking for specific missing information, Unqualified applicants get an empathetic decline explaining why they do not meet requirements.
5. If the applicant has a phone number on file, an optional WhatsApp message is sent alongside the email, reinforcing the response.
6. Every applicant logs in to Google Sheets with their score, reasoning, and response status.
7. Every evening at 6 pm, a daily digest email is delivered to the property manager — all applicants received that day are grouped by property and color-coded by qualification score. An optional Slack alert fires alongside the digest.

## Setup
1. Add credentials for Google Sheets OAuth2, Gmail OAuth2, Google Gemini (PaLM) API, and (optionally) Slack and WhatsApp Business Cloud.
2. Populate your Google Sheets with a Properties tab (including Property ID and requirement fields) and set the document IDs and sheet selections in the Google Sheets nodes.
3. Update the configuration values in the normalization step (MANAGER_EMAIL, MANAGER_NAME, CALENDLY_USERNAME, and CALENDLY_EVENT_SLUG) and set the daily digest recipient email and Slack channel.
4. Copy the webhook URL from n8n and configure your website form/chatbot/lead source to POST inquiries including a matching propertyId and applicant contact fields.
5. If using WhatsApp, configure your WhatsApp Business Cloud integration and enable the WhatsApp trigger and send nodes.

## Requirements
- Google Sheets setup: Create the Rental Management sheet and link its ID to all Sheets nodes. The file requires three tabs. Tab 1 — Properties — with these columns: Property ID, Property Name, Address, Monthly Rent, Min Income Required, Pet Policy, Max Occupants, Available From, Property Type, Bedrooms, Bathrooms, Application URL, Application Fee, Status, Property Manager Email, Description. Tab 2 — Applicants — with these columns: Applicant ID, Timestamp, Property ID, Property Name, Applicant Name, Email, Phone, Monthly Income, Move-in Date, Pets, Occupants, Message, Qualification Score, Score Reasoning, Response Sent, Response Type, Notes. Tab 3 — Daily Digest Log — with these columns: Digest Date, Total Applicants, Qualified Count, Borderline Count, Unqualified Count, Digest Sent.
- Properties setup: Add at least one property to the Properties tab before activating. Required fields: Property ID, Monthly Rent, Min Income Required, Pet Policy (No Pets / Small Pets OK / All Pets OK), Max Occupants, Available From, Status (must be Active). The Property ID must exactly match the propertyId field in incoming webhook payloads — this is how the workflow knows which property requirements to apply.
- Webhook payload format: Incoming inquiries must be POST requests with these fields: propertyId (matches Properties tab), applicantName, applicantEmail, applicantPhone (optional), monthlyIncome (optional — AI also extracts from message), moveInDate (optional), pets (optional), occupants (optional), message (free text — AI extracts criteria from this).

## Customization
- Add new rental properties at any time by adding rows to the Properties tab — no workflow changes needed.
- Adjust qualification thresholds in the Gemini system prompt — for example change the income ratio from 3x to 2.5x rent for more flexible screening.
- Change the daily digest time from 6pm to any preferred time in the Schedule trigger node.
- Edit response email tone per qualification tier in the Gemini system prompt — adjust formality, language, or translate to another language.
- Enable the WhatsApp node to send brief score-appropriate messages alongside emails for applicants with phone numbers on file.
- Enable the Slack node to receive a brief daily digest count alert in a Slack channel alongside the Gmail digest.

## Additional info
Multi-property routing. The propertyId field in the webhook payload tells the workflow which property's requirements to load from Google Sheets. One workflow instance handles any number of properties — the correct requirements are loaded dynamically per inquiry. Property IDs are case-insensitive in the matching logic.

Two independent workflow sections. This template contains two separate execution sections in one workflow. Section A fires immediately when an inquiry arrives via webhook. Section B fires every evening at 6 pm via a Schedule trigger. Neither section triggers the other — they share data only through Google Sheets. Both sections must be active for the full workflow to function.

WhatsApp trigger (optional). The WhatsApp Business Cloud trigger node is included on canvas but disabled by default. Enabling it allows the workflow to receive and process inquiries sent directly to your WhatsApp Business number. This requires a permanent public n8n URL — not localhost. For local testing, use the Webhook trigger and test with mock payloads.

Calendly booking link. No Calendly API credentials required. Update CALENDLY_USERNAME and CALENDLY_EVENT_SLUG in the Normalize node to your Calendly username and event URL slug. The booking link is constructed automatically and included in Qualified response emails only. If left as placeholder values, the booking link is omitted from emails.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
