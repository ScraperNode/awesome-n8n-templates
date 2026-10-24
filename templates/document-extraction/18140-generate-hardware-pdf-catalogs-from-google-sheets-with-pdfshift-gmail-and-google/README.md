# 🔬 Generate hardware PDF catalogs from Google Sheets with PDFShift, Gmail, and Google Drive

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a webhook that searches a Google Sheets hardware catalog by keyword and maximum price, renders the matching results into an HTML catalog, converts it to a PDF via PDFShift, returns the HTML to the requester, emails the PDF with Gmail, and archives it in Google Drive.

## How it works
1. Receives a webhook request with `search`, `maxPrice`, and optional `email` query parameters.
2. Reads the full hardware product list from a Google Sheets spreadsheet.
3. Filters products by name/category keyword match and price threshold, calculates summary metrics, and generates a styled HTML catalog (sanitizing the email input and using a default if missing).
4. Sends the HTML to the PDFShift API to convert it into a PDF file.
5. Uploads the generated PDF to a specified Google Drive folder as a dated backup.
6. Emails the PDF as an attachment using Gmail with the search summary in the message.
7. Responds to the webhook request with the generated HTML (served as `text/html`).

## Setup
1. Create and connect Google Sheets OAuth2 credentials and set the correct spreadsheet ID and sheet tab for your hardware catalog.
2. Add a PDFShift API key and replace the hard-coded Authorization header value in the HTTP request to PDFShift.
3. Create and connect Gmail OAuth2 credentials, and set the recipient logic (use the webhook `email` parameter or update the static `sendTo` address).
4. Create and connect Google Drive OAuth2 credentials, and select the target Drive and folder ID where PDF backups should be stored.
5. Copy the webhook URL from n8n and call it with `search`/`maxPrice`/`email` query parameters from your browser, Postman, or source system.

## Requirements
-  Prerequisites & Requirements
- To run this workflow smoothly, ensure you have the following credentials and setups configured:
- *n8n Instance:** Version 1.0.0 or higher.
- *Google Sheets Account:** Authenticated connection to access the master product inventory spreadsheet.
- *PDFShift API Key:** Free or active account key from `pdfshift.io` added as `X-API-Key` header in the HTTP Request node for HTML-to-PDF conversion.
- *Gmail OAuth2 Credentials:** Connected Google/Gmail account with `send` scope enabled for auto-delivering PDF catalogs.
- *Google Drive Credentials (Optional):** OAuth2 connection if you wish to auto-archive PDF backup files in cloud storage.

## Customization
- Workflow Customization Options
- You can easily adapt this template to fit your specific business logic and branding needs:
- Custom Email Templates:
- - Open **Node 3 (Code in JavaScript)** to modify HTML/CSS for custom catalog layouts, color schemes, or company branding (logos, fonts, header/footer styling).
- Adjust Filter Criteria:
- - Update the filtering array logic in **Node 3** to add more product filters (e.g., brand name, in-stock status, or category tags).
- Alternative PDF Engines:
- - Replace **Node 4 (PDFShift)** with other HTML-to-PDF APIs like DocRaptor, HTML2PDF, or Gotenberg by adjusting the endpoint URL and API payload headers.
- Change Storage & Delivery Channels:
- - Swap **Node 5 (Gmail)** or **Node 7 (Google Drive)** with Slack, Microsoft Teams, AWS S3, or Dropbox to deliver/store catalogs on your preferred platforms.
- Local Currency & Date Formatting:
- - Modify the currency symbol ($) and locale date formatting in the JavaScript node to align with your local region and currency standards.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Drive, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
