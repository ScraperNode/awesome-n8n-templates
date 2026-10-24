# 🎬 Launch and sell ebooks with Google Gemini, PDFShift, Google Drive and email

> ⚡ **21 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow turns a product idea into a ready-to-sell e-book using Google Gemini, converts it to a PDF with PDFShift, uploads it to Google Drive, publishes a product via the Lynk.id API, generates social promo copy, and delivers the file by email after successful payment.

## How it works
1. Receives a POST request via a webhook with a product topic to kick off the e-book creation process.
2. Uses Google Gemini to research the idea and produce a structured JSON output with the e-book title, target audience, price, and chapter outline.
3. Uses Google Gemini to write the full e-book manuscript in Markdown based on the outline.
4. Sends the Markdown to PDFShift to generate a PDF, then uploads the PDF to Google Drive.
5. Uses Google Gemini to generate an AIDA-style HTML sales page, then creates a product in Lynk.id with the price, description, and Google Drive file link.
6. Uses Google Gemini to generate three Threads/Instagram promo posts that include a call-to-action link provided in the incoming data.
7. Receives a separate payment-success webhook and emails the buyer their download link, then waits three days and sends a follow-up email requesting a testimonial.

## Setup
1. Create credentials for Google Gemini API and select a Gemini model (configured for gemini-1.5-pro) in each Gemini step.
2. Add a PDFShift API key as HTTP Header Auth credentials for the PDF conversion request.
3. Connect Google Drive OAuth2 credentials and ensure the workflow has permission to upload files to your Drive.
4. Add HTTP authentication for the Lynk.id product creation request and confirm the API endpoint and required fields match your Lynk.id account.
5. Configure an SMTP/Email Send credential in n8n and replace the sender address (sales@domainanda.com) with a verified from-address.
6. Copy both webhook URLs and configure your source app to POST the product idea payload (topic and product_url) and your payment provider/store to POST the payment-success payload (customer and download details).

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
