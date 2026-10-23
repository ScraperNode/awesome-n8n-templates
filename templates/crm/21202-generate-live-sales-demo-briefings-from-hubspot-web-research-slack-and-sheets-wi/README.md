# 🤝 Generate live sales demo briefings from HubSpot, web research, Slack and Sheets with Gemini

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/ZiZEtSxSFoY

This workflow receives demo booking webhooks, validates and deduplicates them, enriches the request with HubSpot history and lightweight web research, generates a sales briefing with Google Gemini, posts it to Slack, and logs the briefing status and AI output to Google Sheets.

## How it works
1. Receives a POST webhook request containing demo booking details.
2. Validates required fields, optionally checks a shared secret header, and deduplicates repeat bookings within a time window before deciding whether to proceed.
3. Upserts the booking into a Google Sheets “Bookings” sheet and waits briefly before looking up the contact in HubSpot by email.
4. Retrieves HubSpot deals, tickets, and recent engagements and creates a new HubSpot contact if none exists.
5. Builds a briefing context and runs several HTTP requests for web research snippets (DuckDuckGo results and optionally the company website via r.jina.ai).
6. Sends the compiled booking, HubSpot data, and research snippets to a Google Gemini model to generate a Slack-formatted sales briefing.
7. Posts the briefing to a Slack channel, logs briefing status and AI output back to Google Sheets, and returns a JSON success response to the original webhook call.

## Setup
1. Configure the webhook URL (POST `/demo-booking`) in your booking form or scheduling tool to send fields like name, email, company, stated_problem, booking_time, and optional website/job_title/phone.
2. Add HubSpot OAuth2 credentials with access to contacts, deals, tickets, and engagements.
3. Add a Google Gemini (PaLM) API credential for the `models/gemini-3.1-flash-lite` chat model.
4. Add a Slack OAuth credential and set the target channel where briefings should be posted.
5. Add a Google Sheets service account credential and ensure the target spreadsheet contains a “Bookings” sheet with columns matching the workflow’s upsert fields (including BookingKey).
6. (Optional) Set a shared secret value in the validation step and send it as the `x-webhook-secret` header from the source system.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, HubSpot, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
