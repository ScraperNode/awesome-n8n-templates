# 🎫 Detect scope creep in client emails with Gmail, OpenAI and Google Sheets

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for client emails, looks up the client’s statement of work in Google Docs, uses OpenAI to classify requests as in-scope or scope creep, logs each request to Google Sheets, and notifies your team in Slack while saving a change-order reply as a Gmail draft.

## How it works
1. Triggers every minute on new emails in a Gmail inbox matching the configured search query.
2. Extracts the sender domain, ignores emails from unmapped domains, and associates matched domains with the correct SOW Google Docs URL.
3. Fetches the client’s current SOW content from Google Docs and sends it with the email content to OpenAI to return a structured verdict, clause citation, effort estimate, and draft reply.
4. Drops messages classified as not_a_request and prepares a log record with estimated hours and value based on your hourly rate.
5. Appends the request details and verdict to a Google Sheets tab named “Scope Log” including a direct Gmail thread link.
6. If the verdict is out_of_scope or unclear, posts an alert to a Slack channel and creates a Gmail draft reply in the same thread; otherwise it only logs the in-scope request.

## Setup
1. Connect credentials for Gmail, Google Docs, Google Sheets, Slack, and OpenAI (ChatGPT/OpenAI API) in n8n.
2. Update the client_sow_map JSON to map each client email domain to its SOW Google Docs URL.
3. Create or select a Google Sheet and set its ID in sheet_id, and ensure a tab named “Scope Log” exists with the expected columns (checked_at, client_domain, from_email, subject, request_summary, verdict, matching_clause, estimated_hours, estimated_value, thread_link).
4. Set your hourly_rate, currency, Slack channel name, and sign_off_name in the configuration values.
5. Adjust the Gmail search query in the trigger if you want to monitor a different label, shared inbox, or filtering rule.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Google Docs, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
