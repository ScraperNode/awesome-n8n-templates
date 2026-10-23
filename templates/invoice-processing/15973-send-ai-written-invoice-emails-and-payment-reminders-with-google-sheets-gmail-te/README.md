# 🧾 Send AI-written invoice emails and payment reminders with Google Sheets, Gmail, Telegram and Groq

> ⚡ **70 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow automates invoicing and payment follow-ups using Google Sheets, PDFShift, Groq (LLM), Gmail, and Telegram, sending initial invoices with PDF attachments, scheduling overdue reminders at 9am, and letting you mark invoices as paid via a Telegram command with automatic thank-you emails and sheet updates.

## How it works
1. Triggers when a new row is added to a Google Sheets “Client Invoices” spreadsheet to start the invoice-sending flow.
2. Generates an HTML invoice, converts it to a PDF via the PDFShift API, and uses Groq to draft a short invoice email.
3. Sends the invoice email via Gmail with the generated PDF attached, then updates the Google Sheet to set Status to Unpaid and log the send date.
4. Runs every morning at 9am, reads all invoices from Google Sheets, filters for Status = Unpaid, and calculates how many days each invoice is overdue.
5. Routes each unpaid invoice to a 7-day, 14-day, or 30-day reminder track based on overdue days and whether prior reminders were already sent.
6. Uses Groq to write the appropriate reminder email, sends it via Gmail, posts a notification to Telegram, and updates the Google Sheet to flag the reminder as sent.
7. Triggers on incoming Telegram messages, parses commands starting with “paid”, looks up the matching client in Google Sheets, marks the invoice as Paid, emails the client a thank-you via Gmail, and confirms back on Telegram (or sends a “client not found” message).

## Setup
1. Connect credentials for Google Sheets (read/update and trigger), Gmail, Telegram, and Groq.
2. Add PDFShift credentials as HTTP Basic Auth for the PDF conversion request (or replace the PDF generation step with your preferred PDF service).
3. Create/confirm the Google Sheets columns used by the workflow, including Client Name, Client Email, Service, Amount, Invoice Date, Due Date, Status, Notes, First Reminder Sent, Second Reminder Sent, and Final Notice Sent (and optional Currency).
4. Update the Google Sheets document ID/sheet tab, and set the Telegram chat ID(s) used for owner notifications and bot replies.
5. Adjust the schedule trigger time (9am) and reminder thresholds (7/14/30 days) and email wording/subjects as needed for your billing policy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
