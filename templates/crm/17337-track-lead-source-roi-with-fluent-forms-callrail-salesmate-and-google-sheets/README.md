# 🤝 Track lead-source ROI with Fluent Forms, CallRail, Salesmate, and Google Sheets

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives inbound leads via a webhook, normalizes and validates the payload, tags the lead’s acquisition channel using UTM/referrer/gclid signals, creates a contact in Salesmate, logs the lead to a Google Sheets ROI dashboard, optionally sends a compliant acknowledgment email, and always notifies your firm by email.

## How it works
1. Receives a POST request on a webhook endpoint from Fluent Forms, CallRail, or any webhook-enabled form.
2. Normalizes the incoming payload into consistent lead fields and filters out test submissions or entries without usable contact information.
3. Classifies the lead source channel (for example Google Ads, social, referral, legal directories, inbound calls, or organic) based on UTM parameters, gclid, referrer, and other source signals.
4. Creates a new contact in Salesmate with tags for the detected channel (and optionally the matter type) and captures the returned contact ID when available.
5. Appends the lead details and Salesmate contact ID to a “Lead Log” tab in Google Sheets for ROI tracking.
6. If an email address is present, runs an acknowledgment message through a Bar-Compliance Guardrail workflow and sends the approved email via SMTP, otherwise skips the acknowledgment.
7. Sends your firm an intake alert email via SMTP with the full lead summary, source attribution, Salesmate link, and acknowledgment status.

## Setup
1. Create and configure credentials for Salesmate (HTTP Header Auth with your accessToken), Google Sheets (OAuth2), and an SMTP email account.
2. Create a Google Sheet with a “Lead Log” worksheet and set the spreadsheet ID in the ROI_SHEET_ID n8n variable.
3. Set required n8n variables including FIRM_NAME, FIRM_EMAIL, SALESMATE_BASE_URL, SALESMATE_LINK_NAME, ROI_SHEET_ID, and (optionally) FIRM_BOOKING_URL.
4. Deploy the Bar-Compliance Guardrail workflow, set its workflow ID in GUARDRAIL_WORKFLOW_ID, and ensure any guardrail dependencies (such as OPS1_SHEET_ID) are configured.
5. Copy the webhook Production URL after activation and paste it into Fluent Forms and/or CallRail webhook settings (or any external form that can POST JSON or form-encoded data).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
