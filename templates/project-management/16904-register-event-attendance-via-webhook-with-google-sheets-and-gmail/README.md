# 📋 Register event attendance via webhook with Google Sheets and Gmail

> ⚡ **46 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow powers a QR code-based event attendance system. A presenter displays a QR code (generated via the companion web app) which participants scan with their phones. Scanning opens a registration form pre-filled with the Event ID; on submission, the form POSTs to this webhook.

## How it works
1. Receives a POST request via a webhook secured with Basic Auth.
2. Validates the request body (name, email format, and optional role/event/day) and generates a timestamp plus a target Google Sheets tab name.
3. If validation fails, returns an error JSON response to the caller.
4. Reads all existing rows from the Google Sheets tab for the selected day and checks whether the email address is already registered.
5. If the email is a duplicate, returns an “already registered” JSON response.
6. If the email is new, appends the attendee details to Google Sheets, sends a confirmation email through Gmail, and returns a success JSON response.

## Setup
1. Configure the webhook Basic Auth credentials and share the webhook URL with the form/app that submits attendance data.
2. Add Google Sheets OAuth2 credentials and update the spreadsheet ID and ensure each day has a matching tab name (for example, “Day 1” maps to a “Day1” sheet).
3. Add Gmail OAuth2 credentials and confirm the sender name and email content/subject match your event details.

## Customization
- Change the duplicate-check key (default: email + eventId) to match your deduplication strategy.
- Add or remove required fields in the validation Code node.
- Customize the error, duplicate, and success JSON response bodies to match what the front-end expects.
- To support multi-day events, extend the Google Sheets column mapping to include the day field sent in the payload.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
