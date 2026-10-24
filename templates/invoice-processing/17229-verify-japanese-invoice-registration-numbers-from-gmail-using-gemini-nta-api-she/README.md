# 🧾 Verify Japanese invoice registration numbers from Gmail using Gemini, NTA API, Sheets and Slack

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow monitors Gmail for unread invoice emails with PDF attachments, extracts invoice details with Google Gemini, verifies Japanese qualified invoice registration numbers against the National Tax Agency (NTA) Invoice Web-API, logs results to Google Sheets, and sends Slack alerts for invalid, missing, or inconclusive checks.

## How it works
1. Polls Gmail hourly for unread emails matching “has:attachment invoice” and downloads the first attachment.
2. Extracts text from the attached invoice PDF.
3. Uses Google Gemini to parse the invoice text into structured fields such as the T-registration number, issuer name, invoice date, and amounts.
4. Normalizes and validates the registration number to ensure it matches the required “T + 13 digits” format.
5. If the format is valid, calls the NTA Invoice Web-API to verify the registration number and interprets the response as valid, invalid, or not found.
6. Appends the invoice details and verification status to a Google Sheets worksheet.
7. Routes the outcome by sending the appropriate Slack alert for invalid/not found/inconclusive results or marking the invoice email as read when the number is valid.

## Setup
1. Connect your Gmail OAuth2 credential and ensure invoice emails are captured by the trigger query (update the Gmail search filter if needed).
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model used to extract invoice fields.
3. Create a Query Auth (HTTP Query Auth) credential containing your NTA Web-API application ID and select it in the NTA HTTP request node.
4. Connect Google Sheets OAuth2 credentials, select the target spreadsheet and the “Invoices” sheet (or update the sheet name).
5. Connect Slack OAuth2 credentials and choose the destination channel (for example, #accounting) for the alert messages.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
