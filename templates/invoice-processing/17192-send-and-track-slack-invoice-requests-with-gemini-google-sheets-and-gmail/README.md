# 🧾 Send and track Slack invoice requests with Gemini, Google Sheets and Gmail

> ⚡ **10 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/42-oHh9w9Eo
This workflow listens for Slack @mentions, uses Google Gemini to classify the request and extract invoice details, then reads and updates Google Sheets, generates invoice PDFs with PdfBro, sends invoices or reminders via Gmail, and posts confirmations or errors back to Slack.

## How it works
1. Triggers when the workflow’s Slack app is mentioned in a specified Slack channel.
2. Uses Google Gemini to classify the message intent (send invoice, remind invoice, or check status) and extract the recipient email and invoice due date.
3. Routes the request based on the extracted intent and stops if the intent cannot be determined.
4. For SEND_INVOICE, looks up the client in a Google Sheets “Client Bill” spreadsheet and posts a Slack error if no matching email is found.
5. If a client is found, generates an invoice PDF with PdfBro, emails it to the client via Gmail, appends/updates the invoice record in a Google Sheets “Client Invoices” spreadsheet, and posts a Slack confirmation.
6. For REMIND_INVOICE, finds an UNPAID invoice for the email in the “Client Invoices” Google Sheet, regenerates the invoice PDF with PdfBro, emails a reminder via Gmail, and posts a Slack confirmation or an error if no match is found.
7. For CHECK_STATUS, looks up invoices for the email in the “Client Invoices” Google Sheet and posts the invoice total and status back to Slack or an error if no match is found.

## Setup
1. Connect Slack credentials and ensure the Slack Trigger is configured for the correct channel and event (app_mention).
2. Add Google Gemini (Google PaLM/Vertex) credentials for the chat model used by the intent classifier and structured output parser.
3. Add Google Sheets service account credentials and update the spreadsheet IDs/sheet tabs for the “Client Bill” and “Client Invoices” documents.
4. Add PdfBro credentials and confirm the invoice template and required fields match your invoice format.
5. Add Gmail OAuth2 credentials and update the sender account, subject lines, and HTML email templates as needed.
6. Ensure your Google Sheets columns match the workflow mappings (email, client_name, client_address, items/services, status, due_date, invoice_id, total_amount).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
