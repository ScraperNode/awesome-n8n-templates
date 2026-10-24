# 🔬 Create human-reviewed personalized PDFs from Stripe payments using OpenAI

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives Stripe payment webhooks, looks up the customer’s order in Google Sheets, generates personalized HTML content with OpenAI, converts it to a PDF using PDFShift, then queues the request for human approval and delivers the final document via Gmail with Slack notifications.

## How it works
1. Receives a Stripe payment notification via a webhook endpoint.
2. Extracts payment details (event type, payment ID, customer email, amount, currency) and stops the main flow if the email is missing.
3. Pulls order rows from Google Sheets and matches the order to the payer’s email.
4. Sends the combined payment and order data to the OpenAI Chat Completions API to generate structured personalized content, then renders it into an HTML document.
5. Converts the HTML to a PDF with PDFShift and sends the customer an acknowledgement email via Gmail.
6. Appends the request to a Google Sheets “ReviewQueue” and notifies staff in Slack with instructions to approve via a separate webhook.
7. When an approval webhook is received and marked approved, emails the final message to the customer via Gmail and updates the “ReviewQueue” status in Google Sheets.

## Setup
1. Create and configure two webhook URLs in Stripe and your internal approval process using the workflow’s webhook paths (upwork-stripe-pdf-order and upwork-pdf-approve).
2. Connect Google Sheets OAuth credentials and set the correct spreadsheet ID and sheet names for reading “Orders” and writing to “ReviewQueue.”
3. Add an OpenAI API credential and confirm the model/endpoint settings used for Chat Completions.
4. Add PDFShift HTTP Basic Auth credentials and set sandbox/production settings as needed.
5. Connect Gmail OAuth2 credentials for acknowledgement and final delivery emails, and set up Slack OAuth2 credentials plus the target channel for staff notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
