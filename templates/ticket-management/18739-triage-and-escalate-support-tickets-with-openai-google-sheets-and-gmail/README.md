# 🎫 Triage and escalate support tickets with OpenAI, Google Sheets, and Gmail

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Triage support tickets with privacy-safe AI, duplicate detection, customer context, knowledge base matching, SLA deadlines, and escalation alerts. This workflow logs tickets in Google Sheets, routes urgent or low-confidence cases to humans, and sends a daily digest for tickets nearing SLA breach.

## How it works
1. Receives a support ticket through a webhook and validates required fields while redacting emails, phone numbers, card-like numbers, and token-like strings before AI processing.
2. Checks Google Sheets for an existing open ticket from the same customer, looks up the customer tier, and loads knowledge base articles.
3. Matches the ticket text against Google Sheets knowledge base keywords and sends the redacted ticket plus context to OpenAI to return a JSON triage result (category, urgency, confidence, summary, and suggested reply).
4. Calculates an SLA due time based on urgency and customer tier, flags duplicates and low-confidence classifications, and determines whether human escalation is required.
5. Appends the enriched ticket record to the Google Sheets Tickets tab and, when escalation is needed, appends an entry to the Escalation Log tab and sends an escalation email via Gmail.
6. Responds to the webhook caller with a JSON acknowledgment including the ticket ID, classification, SLA due time, and suggested reply.
7. Runs every morning, reads open tickets from Google Sheets, identifies tickets overdue or within 4 hours of SLA breach, and emails a Gmail digest when risks are found.

## Setup
1. Create a Google Sheets spreadsheet with the tabs Tickets, Customers, Knowledge Base, and Escalation Log, and ensure the columns match what the workflow writes (including Status and SLA Due At).
2. Connect Google Sheets credentials in n8n and replace REPLACE_WITH_GOOGLE_SHEET_ID with your spreadsheet ID in all Google Sheets steps.
3. Add an OpenAI HTTP Header Auth credential using Authorization: Bearer <YOUR_OPENAI_API_KEY> for the OpenAI request.
4. Connect a Gmail account and update the escalation recipient (support-manager@example.com) for both the escalation email and daily SLA risk digest.
5. Copy the webhook URL from the webhook trigger and configure your support form/helpdesk/app to POST the ticket fields (customerEmail, subject, message, and optionally ticketId and customerName).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
