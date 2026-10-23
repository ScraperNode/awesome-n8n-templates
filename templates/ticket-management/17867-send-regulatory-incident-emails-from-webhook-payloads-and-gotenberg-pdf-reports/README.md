# 🎫 Send regulatory incident emails from webhook payloads and Gotenberg PDF reports

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives a regulatory notification request via webhook, validates a CSV/XLSX recipient file, sends personalized notification emails in throttled batches, then generates a branded PDF delivery report using Gotenberg and emails the report to a designated recipient.

## How it works
1. Receives a POST webhook request containing notification details, a recipients CSV/XLSX file, and a shared secret.
2. Verifies the secret and immediately returns a 401 response when the request is unauthorized.
3. Normalizes and validates required form fields, decodes the uploaded file, and extracts recipient rows from CSV or Excel.
4. Validates email addresses, removes duplicates, optionally limits recipients in test mode, and responds to the webhook with an “accepted” summary.
5. Sends a personalized email to each recipient (based on the selected notification type or custom templates), processing recipients in configurable batches with a wait-based throttle and recording sent/failed outcomes.
6. Aggregates send metrics, builds a branded HTML compliance report, converts it to PDF via a Gotenberg HTTP request, and emails the PDF report to the configured report recipient.

## Setup
1. Copy the webhook URL from the workflow and configure your source system to POST to it with the recipients_file payload and the x-notification-secret header (or webhook_secret in the body).
2. Update the configuration values in the workflow, including the webhook secret, batch size, wait seconds, test mode limit, and the Gotenberg service URL.
3. Configure an EmailSend credential/service in n8n and set appropriate sender/reply-to addresses (sender_email/contact_email) to allow sending recipient notifications and the final report email.
4. Ensure your uploaded CSV/XLSX includes an email column (and optionally name/id) so recipients can be validated, deduplicated, and personalized.

## Requirements
- n8n instance
- SMTP credentials for all email steps
- PDF service endpoint (e.g., Gotenberg at YOUR_SERVICE_URL)
- Valid webhook secret

## Customization
- Update the notification email and final report templates by editing respective node content and layout settings. 
- Adjust tokens, branding (logo and color URLs), and change batching parameters to meet your organization’s requirements.

## Additional info
For support, contact: support@ais.email (AI Solutions, Inc.)

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
