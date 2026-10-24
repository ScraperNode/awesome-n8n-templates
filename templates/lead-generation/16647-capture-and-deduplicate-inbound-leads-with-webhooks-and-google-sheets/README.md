# 🎣 Capture and deduplicate inbound leads with webhooks and Google Sheets

> ⚡ **87 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Capture inbound leads via webhook, validate and sanitize the data, deduplicate against Google Sheets, and store only clean leads ready to feed an AI-powered email/SMS nurture sequence.

## How it works
1. Webhook receives the lead POST request from any form builder or landing page.
2. Validation Missing email or phone returns a 400 and stops execution.
3. Sanitize & normalize Trims whitespace, lowercases email, normalizes phone to international format, sets lead stage to 1, fills defaults for optional fields.
4. Dedupe check Looks up the email in Google Sheets; flags duplicates safely even when the sheet returns zero rows.
5. Duplicate → 200 "Already Registered", execution ends.
6. New lead → appended to Sheets, 200 "Lead Accepted" returned.

## Setup
1. Import all 4 workflows they share one Google Sheet.
2. Create a sheet with these exact headers: Name, Email, Phone, Stage, Next Followup At, Has Replied, Lead Source, Service of Interest, SMS Consent
3. Connect Google Sheets OAuth2 in the Lookup and Append nodes; paste your Sheet ID/tab into the 🔧 CONFIG nodes.
4. Copy the webhook URL into your form builder. Map fields to: name, email, phone, lead_source, service_of_interest, sms_consent

## Requirements
- Google Sheets (OAuth2)
- Gmail (OAuth2) used in Workflow 2
- A form/webhook source
- n8n instance with Workflows 2–4 also imported
- Part of a 4-workflow system: Lead Intake (this one) → Nurture Scheduler → Reply Listener → Daily Report.

## Customization
- Add or remove fields Extend the Sanitize Data code node and the Sheets append mapping to capture any additional fields your form collects (e.g., company, budget, message).
- Change deduplication logic Currently deduplicates by email. Swap the lookup column to phone or add a second lookup node to deduplicate on both simultaneously.
- Swap the form source The webhook is source-agnostic. Replace a form builder with a CRM webhook, a Facebook Lead Ad integration, or a Zapier/Make relay as long as the payload keys match, nothing else changes.
- Adjust field defaults Modify the fallback values in the Sanitize Data node ('Friend' for name, 'Unknown' for lead source) to match your brand voice or CRM conventions.

## Additional info
This is Workflow 1 of 4 in a complete AI lead nurturing system built for freelancers, agency owners, and solo founders:

Workflow 1 — Lead Intake (this template): Captures, validates, deduplicates, and stores leads
Workflow 2 — Nurture Scheduler: Sends AI-written email and SMS follow-ups across 3 stages
Workflow 3 — Reply Listener: Classifies lead replies with an LLM and escalates hot leads in real time
Workflow 4 — Daily Report: Emails you a morning summary of pipeline activity and follow-up counts

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
