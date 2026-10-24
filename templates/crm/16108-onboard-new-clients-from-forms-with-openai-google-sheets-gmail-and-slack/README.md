# 🤝 Onboard new clients from forms with OpenAI, Google Sheets, Gmail, and Slack

> ⚡ **82 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow captures client inquiries via an n8n Form, uses OpenAI to generate an internal brief and client-facing summary, logs the submission to Google Sheets, creates a Google Drive folder, notifies your team in Slack, and sends welcome and follow-up emails through Gmail.

## How it works
1. Triggers when a new submission is received via an n8n Form.
2. Normalizes the submitted fields into a consistent client inquiry object (name, company, email, service, challenge, budget, and timing).
3. Sends the normalized inquiry to OpenAI to generate a 3-sentence internal brief and a 2-sentence client-facing summary.
4. Logs the full inquiry and AI brief into a Google Sheets “Clients” worksheet.
5. Creates a dedicated Google Drive folder for the client and posts a Slack message to your chosen channel with the brief and folder link.
6. Sends a personalized welcome email to the client via Gmail, waits one day, and then sends an automated follow-up email.

## Setup
1. Connect credentials for OpenAI, Google Sheets, Google Drive, Slack (OAuth2), and Gmail (OAuth2).
2. Update the Google Sheets document and ensure the “Clients” sheet has columns that match the mapped fields (Timestamp, Name, Company, Email, Phone, Service, Challenge, Budget, Start date, AI brief, Status).
3. Set the Google Drive parent folder ID for where new client folders should be created.
4. Replace the Slack channel ID and confirm your Slack app/bot has permission to post messages.
5. Edit the welcome and follow-up Gmail templates to insert your booking link and signature details.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
