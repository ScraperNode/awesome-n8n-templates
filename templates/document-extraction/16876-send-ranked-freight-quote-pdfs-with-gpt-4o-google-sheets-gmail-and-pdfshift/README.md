# 🔬 Send ranked freight quote PDFs with GPT-4o, Google Sheets, Gmail and PDFShift

> ⚡ **74 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives shipment requests via webhook, pulls carrier rate data from Google Sheets, uses OpenAI GPT-4o to generate a ranked HTML freight quote, converts it to a PDF with PDFShift, and emails the PDF to the customer via Gmail, with Slack alerts on workflow errors.

## How it works
1. Receives a POST webhook request containing shipment details like origin, destination, weight, mode, and customer contact information.
2. Reads rate information in parallel from three carrier tabs in a Google Sheets spreadsheet (BlueDart, DTDC, and Delhivery).
3. Combines the carrier results and calculates per-carrier total cost based on the shipment weight.
4. Sends the shipment and carrier data to OpenAI GPT-4o to generate a complete HTML quote page with a ranked comparison table.
5. Converts the generated HTML into an A4 PDF file using the PDFShift API.
6. Emails the PDF quote to the customer using Gmail with a prefilled subject and message.
7. If the workflow fails, posts an error alert message to a Slack channel.

## Setup
1. Configure the webhook path in n8n and copy the production webhook URL into the system that submits shipment requests.
2. Add Google Sheets OAuth2 credentials and ensure the referenced spreadsheet and carrier sheet tabs (BlueDart_Rates, DTDC_Rates, Delhivery_Rates) exist and include the expected columns (for example, Rate_Per_Kg and Transit_Days).
3. Add an OpenAI API credential for the GPT-4o step and confirm the prompt/model settings generate HTML in the expected format.
4. Add your PDFShift API key by replacing the X-API-Key header value in the PDFShift request (and switch off sandbox mode if you want live PDFs).
5. Add Gmail OAuth2 credentials and verify the sender mailbox and attachment settings for the outbound quote email.
6. (Optional) Add Slack OAuth2 credentials and set the target channel for error notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
