# 🔬 Generate personalized financial plans with Google Gemini, Sheets, Drive and Gmail

> ⚡ **44 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives income and financial-goal data via webhook, stores enriched metrics in Google Sheets, generates a tailored plan with Google Gemini, converts it to a PDF via PDFShift, uploads it to Google Drive, and emails the result using Gmail.

## How it works
1. Receives a POST webhook request containing an Income value and a Goal string.
2. Normalizes the incoming fields and validates that income is non-negative and the goal is not empty, returning a webhook error response if validation fails.
3. Calculates a timestamp, a recommended monthly saving amount (20% of income), and an income category (Low/Mid/High), then appends the record to Google Sheets.
4. Routes the request by income category and uses Google Gemini (PaLM) to generate a personalized financial plan with category-specific guidance.
5. Builds an HTML report that includes the user’s inputs and the Gemini-generated plan, then converts the HTML to a PDF using the PDFShift API and fetches the generated file.
6. If the PDF is created successfully, uploads it to Google Drive, emails the PDF and Drive link via Gmail, and returns the HTML report in the webhook response.
7. If PDF generation fails, returns a JSON error response and sends the plan as a plain-text Gmail message instead.

## Setup
1. Configure the webhook URL in your source app (or use a tool like Postman) to send a POST body with Income and Goal fields.
2. Add Google Sheets OAuth2 credentials and set the target spreadsheet and sheet/tab where rows are appended.
3. Add Google Gemini (PaLM) API credentials for the Google Gemini nodes.
4. Add your PDFShift API key in the HTTP request header (X-API-key) used to convert HTML to PDF.
5. Add Google Drive OAuth2 credentials and choose the destination Drive/folder for uploaded PDFs.
6. Add Gmail OAuth2 credentials and set the recipient email address(es) for both the PDF email and the fallback plain-text email.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
