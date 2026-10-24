# 🔬 Generate and email PDF quotes from Airtable via Gmail and Google Drive

> ⚡ **61 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Most service businesses and freelancers track their quotes in Airtable (or something similar), but when it comes to actually sending the quote, they're still manually copying data into a document, exporting a PDF, attaching it to an email, and then going back to update the record. This workflow cuts all of that out.

## Who is this for

Freelancers, agencies, and small service businesses who already use Airtable to track client work and want to stop manually creating quote documents. If you've ever caught yourself copying the same line items into a Google Doc for the third time in a week, this is for you.

## How it works

The workflow starts with a webhook. You can call it from an Airtable automation (when a record hits "Ready to Send", for example) or trigger it manually from Postman or any HTTP client.

Once triggered, it pulls the quote record from Airtable, grabs the client details and line items, and builds a branded HTML document with proper formatting, subtotals, tax calculation, and a grand total. That HTML then gets converted to a PDF through pdf.co's free API.

From there, the PDF gets uploaded to a Google Drive folder and emailed to the client as an attachment via Gmail. The Airtable record is updated with the Drive link and marked as "Sent" so you have a clear audit trail.

## How to set it up

1. Create an Airtable base with a "Quotes" table. You'll need these columns: Client Name, Client Email, Line Items (long text, one per line in the format `Description | Qty | Price`), Tax Rate, Notes, and Status
2. Open the "Configure Settings" node in the workflow and fill in your business name, email address, physical address, and Google Drive folder ID
3. Connect your Airtable, Gmail, and Google Drive accounts in n8n
4. Sign up for a free pdf.co account and add the API key as an HTTP Header Auth credential
5. Activate the workflow and test it by sending a POST request with `{"recordId": "rec..."}` to the webhook URL

## Requirements

- Airtable account (free tier works)
- Gmail account with OAuth connected in n8n
- Google Drive for PDF storage
- pdf.co API key (free tier gives you 100 credits/month, each conversion costs 1 credit)

## Customizing the workflow

The HTML template lives inside the "Build HTML Quote" code node. You can change the layout, fonts, colors, and add your logo by editing the HTML string directly. The brand color is pulled from the Configure Settings node, so changing it there updates the whole document.

You can also adjust the quote validity period (default is 30 days) or change the reference number format in the same code node. If you want to swap pdf.co for another HTML-to-PDF service, just update the HTTP Request node URL and payload format.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
