# 🎣 Qualify property enquiries with OpenAI and book viewings via Google Calendar, WhatsApp, and HubSpot

> ⚡ **51 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives property enquiries via webhook, uses OpenAI to extract intent and score readiness, matches the brief against properties in Google Sheets, and then routes outcomes to Google Calendar, WhatsApp, HubSpot, Slack, and an enquiry log spreadsheet.

## How it works
1. Receives a property enquiry via a POST webhook.
2. Normalizes the payload (name, email, E.164 phone, message, and extra fields) and uses OpenAI to extract requirements like budget, bedrooms, areas, finance/chain status, and a readiness score, with a manual-review fallback if AI fails.
3. Reads available properties from Google Sheets and scores each listing against the extracted brief to select up to three best matches and set a verdict (VIEWING, NURTURE, WATCH, or UNSCORED).
4. If the verdict is VIEWING, checks availability in Google Calendar for the next week, proposes two free viewing slots within working hours, and creates a tentative calendar event for the top-matched property.
5. If enabled and a phone number is present, sends the proposed viewing slots to the applicant using a WhatsApp Business template message.
6. Upserts the applicant as a contact in HubSpot with the enquiry details, readiness score, verdict, summary, and matched property references.
7. Posts a formatted summary to a Slack channel and appends the enquiry record to a Google Sheets log.

## Setup
1. Add credentials for OpenAI, Google Sheets (OAuth2), Google Calendar, HubSpot (app token), Slack (access token), and WhatsApp Business Cloud.
2. In Agency Settings, fill in your agency description, thresholds, default country code, Slack channel, Google Sheet ID and tab names, viewing calendar ID, working hours, viewing duration, HubSpot portal ID, and WhatsApp phone number ID/template details.
3. Create and populate the Google Sheets tabs for “Available properties” (with fields like reference, address, postcode, price, bedrooms, property_type, listing_type, status, and url) and “Enquiries” (with columns matching the log step).
4. In HubSpot, create the custom contact properties used by the workflow (applicant_readiness_score, applicant_verdict, applicant_summary, and matched_property_references).
5. Copy the webhook URL into your website form or portal integration and send a test enquiry, then optionally set sendWhatsAppAutomatically to true once you are happy with the WhatsApp messaging behavior.

## Additional info
If you want the guide, the starter files and the sheet columns as a pack, it is £3.99 as an instant download: https://buy.stripe.com/14A28k2pt5Im4aK4Al4c80z

Before you set it up, read what loses you the viewing, the parts that break and the running cost: https://fractionalhq.uk/use-cases/estate-agent-enquiries

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, HubSpot, Google Calendar, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
