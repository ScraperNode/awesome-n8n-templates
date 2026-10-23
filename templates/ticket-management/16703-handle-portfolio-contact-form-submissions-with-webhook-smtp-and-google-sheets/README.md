# 🎫 Handle portfolio contact form submissions with webhook, SMTP and Google Sheets

> ⚡ **38 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives portfolio contact form submissions via a webhook, validates and normalizes the input, then logs the message to Google Sheets and sends a confirmation email via SMTP before returning a JSON success or error response.

## How it works
1. Receives a POST request on a webhook endpoint for contact form submissions.
2. Validates that name, email, and message are present and within length/format limits, and returns a 400 JSON error response for invalid requests.
3. Normalizes the fields (trim text, lowercase email, set defaults, add timestamp and source) for valid submissions.
4. Appends the submission details to a Google Sheets spreadsheet.
5. Sends a personalized HTML confirmation email to the submitter using SMTP.
6. Returns a 200 JSON success response with basic submission details and CORS headers.

## Setup
1. Configure the webhook URL in your portfolio contact form and restrict allowed origins/CORS to your domain.
2. Add a Google Sheets OAuth2 credential and set the target spreadsheet and sheet where submissions should be appended.
3. Ensure the Google Sheet has columns that match the fields being written (Name, Email, Subject, Message, Phone, Timestamp, Source).
4. Add an SMTP credential and set the desired from address and email template content in the confirmation email step.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
