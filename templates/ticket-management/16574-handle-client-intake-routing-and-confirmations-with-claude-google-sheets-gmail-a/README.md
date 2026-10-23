# 🎫 Handle client intake, routing, and confirmations with Claude, Google Sheets, Gmail, and Twilio

> ⚡ **6 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow hosts an n8n intake form, checks whether the submitted state is in your service area, uses Anthropic Claude to draft confirmation messages and an internal summary, logs requests to Google Sheets, emails via Gmail, optionally sends an SMS via Twilio, and shows the customer a confirmation page.

## How it works
1. Receives a new client request through an n8n-hosted form submission.
2. Normalizes the submitted details (name, email, phone, state, request type, description, and SMS consent) and generates a timestamp and reference number.
3. Checks whether the submitted state is included in your configured served-area list.
4. For in-area requests, sends the intake details to Anthropic Claude and parses the returned JSON into a customer email message, customer SMS message, internal summary, category, priority, and missing-info list.
5. Appends the request to Google Sheets, emails the intake team and the customer via Gmail, and sends an SMS confirmation via Twilio only when the customer opted in.
6. For out-of-area requests, appends the submission to a Google Sheets waitlist and shows the customer a waitlist message.

## Setup
1. Customize the n8n Form Trigger fields and text to match your intake questions and desired response pages.
2. Update the business name and the comma-separated served-area list in the intake field mapping.
3. Add an Anthropic API key as an HTTP Header Auth credential (x-api-key) and attach it to the Anthropic request.
4. Connect Gmail credentials and set the team notification recipient and any desired email content/subjects.
5. Connect Google Sheets credentials and replace the placeholder spreadsheet ID and ensure the “New Requests” and “Waitlist” sheets contain the expected columns.
6. Connect Twilio credentials and set a valid Twilio sending number for SMS confirmations.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
