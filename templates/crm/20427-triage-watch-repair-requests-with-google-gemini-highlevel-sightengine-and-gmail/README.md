# 🤝 Triage watch repair requests with Google Gemini, HighLevel, Sightengine and Gmail

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Qd5CW0-TwS4

This workflow collects watch repair requests via an n8n form, syncs the customer to GoHighLevel, checks the uploaded photo with Sightengine, uses Google Gemini to generate a structured estimate and email draft, logs the ticket to Google Sheets, and emails the customer and shop via Gmail.

## How it works
1. Receives a new watch repair request from an n8n form submission, including a required uploaded watch photo.
2. Normalizes the submitted customer and watch details and looks up the contact in GoHighLevel, creating/updating the contact if it does not already exist.
3. Reattaches the uploaded photo as binary data, extracts basic image metadata, and generates a unique repair ticket ID with a submission timestamp.
4. Sends the photo to the Sightengine API to score whether it appears AI-generated and labels the request with an authenticity status.
5. Uses Google Gemini (via an AI agent with structured output) to classify the issue, estimate price range and turnaround, determine if manual review is needed, and draft a short customer email.
6. Logs the full ticket details, AI outputs, and review flags to a Google Sheets “Repair Tickets” worksheet.
7. If manual review is required, emails the shop to review and sends the customer an acknowledgement; otherwise, emails the AI-generated estimate to the customer and notifies the shop that the estimate was sent.

## Setup
1. Configure the n8n Form Trigger fields (or embed the form) and ensure file uploads are enabled for the watch photo.
2. Add a GoHighLevel OAuth2 credential and confirm the workflow can search and upsert contacts in your GoHighLevel account.
3. Add a Google Gemini (PaLM) API credential and keep the model set to `models/gemini-3.1-flash-lite` (or update it to your preferred Gemini model).
4. Add a Gmail OAuth2 credential and update the shop notification recipient address(es) and shop identity fields (shop name/email) used in the messages.
5. Add a Google Sheets Service Account credential, share the target spreadsheet with the service account, and update the spreadsheet ID and sheet name if you are not using the provided “Repair Tickets” sheet.
6. Replace the hardcoded Sightengine `api_user` and `api_secret` values with your own Sightengine credentials.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Gmail, HighLevel, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
