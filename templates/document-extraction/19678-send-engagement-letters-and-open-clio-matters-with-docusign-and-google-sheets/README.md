# 🔬 Send engagement letters and open Clio matters with DocuSign and Google Sheets

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow automates engagement letter drafting and e-signing by connecting Clio, DocuSign, Google Sheets, and email: it creates or reuses a Clio contact, drafts a DocuSign envelope for attorney approval, logs progress in a tracking sheet, and opens a Clio matter after the envelope is completed.

## How it works
1. Receives a webhook when a lead is qualified for an engagement letter and normalizes the lead details (name, email, phone, practice area, case details, and assigned attorney).
2. Searches Clio for an existing contact by email and creates a new Clio contact if no exact match is found.
3. Fetches DocuSign account context, creates a draft envelope from your engagement letter template with prefilled fields, logs the engagement in Google Sheets, and emails the assigned attorney an approval link.
4. Receives an attorney approval webhook, validates the approval request, looks up the matching review ID in Google Sheets, and transitions the DocuSign envelope status to “sent”.
5. Updates the Google Sheets row with the send result and returns a confirmation (or error) response to the attorney’s approval request.
6. Receives a DocuSign Connect webhook, ignores non-completion events, and for completed envelopes matches the envelope ID back to the Google Sheets log.
7. Creates a new Clio matter for the signed client, updates the Google Sheets row as signed with the matter ID, notifies staff by email, and acknowledges the DocuSign webhook.

## Setup
1. Add Clio OAuth2 credentials in n8n and set the CLIO_BASE_URL variable for your Clio region.
2. Add DocuSign OAuth2 credentials in n8n, set DOCUSIGN_AUTH_BASE_URL, and set ENGAGEMENT_LETTER_TEMPLATE_ID and ENGAGEMENT_LETTER_ROLE_NAME to match your DocuSign template.
3. Create a Google Sheet with an “Engagement Pipeline” tab and the required columns (including review_id, envelope_id, status, sent_at, signed_at, contact_id, and matter_id), then set ENGAGEMENT_PIPELINE_SHEET_ID and connect Google Sheets credentials.
4. Configure SMTP email credentials and set FIRM_FROM_EMAIL plus a default recipient like FIRM_ATTORNEY_EMAIL for attorney/staff notifications.
5. Activate the workflow, set ENGAGEMENT_DECISION_WEBHOOK_URL to the production URL of the attorney decision webhook, and register the DocuSign Connect webhook URL for envelope completion events.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
