# 🎫 Route airline disruption recovery with OpenAI, Slack, Twilio, and Google Sheets

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives flight disruption events via webhook, looks up passenger PNR details in a GDS API, uses OpenAI to choose a recovery path, then escalates to Slack or auto-rebooks via HTTP, notifies the passenger by Twilio SMS, and logs outcomes to Google Sheets.

## How it works
1. Receives a POST webhook with passenger and disruption details (pax_id, tier, itinerary, disruption_type, delay_minutes).
2. Normalizes the incoming payload and fetches the passenger’s PNR/loyalty context from a GDS API.
3. Sends disruption and PNR details to OpenAI to classify impact, choose a response path, and generate a recommended rebooking option.
4. Routes the case to either a VIP concierge escalation, a standard auto-rebooking flow, or a minor-delay notification path based on the OpenAI response.
5. For VIP cases, posts an alert to a Slack channel for the concierge desk and then sends the passenger an SMS update via Twilio.
6. For standard cases, calls the GDS rebooking API with the recommended option, then sends the passenger an SMS update via Twilio.
7. Appends or updates a row in a Google Sheets “Disruption Ops Dashboard” with the passenger, tier, impact score, and chosen response path.

## Setup
1. Configure the incoming system to POST disruption events to the workflow’s webhook URL at `/trip-disruption`.
2. Add an OpenAI credential (or API key) for the Disruption Impact Classifier model.
3. Configure access to your GDS/loyalty APIs and replace the example `api.gds.example.com` endpoints with your real lookup and rebooking URLs.
4. Add Slack OAuth credentials and set/confirm the target channel (for example `#vip-recovery-desk`).
5. Add Twilio credentials, set `TWILIO_FROM_NUMBER` in your environment, and ensure the webhook payload includes a passenger phone field that matches `paxPhone`.
6. Add a Google Sheets OAuth connection, set `TRACKER_SHEET_ID` in your environment, and ensure the “Disruption Ops Dashboard” sheet has columns for pax_id, tier, impact_score, and response_path.

## Requirements
- Active API credentials for OpenAI, Slack, Twilio, and Google Sheets.
- Access to a GDS/loyalty system API capable of fetching passenger details and executing rebooking.

## Customization
- Adjust OpenAI prompts and classification rules to customize how VIP vs. standard cases are categorized.
- Modify the response channels (e.g., send email updates via SendGrid instead of Twilio SMS).
- Add custom fields or additional logic branches based on tier levels or flight delay thresholds.

## Additional info
Ensures scalable, real-time handling of flight disruption events by automating routine rebookings while seamlessly escalating high-value passengers to human concierges

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Twilio, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
