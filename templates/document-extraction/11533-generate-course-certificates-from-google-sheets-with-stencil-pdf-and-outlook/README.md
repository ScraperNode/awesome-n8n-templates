# 🔬 Generate course certificates from Google Sheets with Stencil PDF and Outlook

> ⚡ **43 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automatically generate and send course certificates when new participants are added to Google Sheets

This workflow creates PDF certificates using Stencil, stores them in Google Drive, and emails them to participants.

## How it works

1. A new row is added to the Google Sheets document (via form, webhook, or manual entry)
2. The workflow generates a PDF certificate using the Stencil API
3. The PDF is uploaded to a Google Drive folder for archiving
4. The certificate is sent to the participant via Outlook
5. The Google Sheet is updated with the file link and send timestamp

## Setup steps

1. Create a free account at [stencilpdf.com](https://stencilpdf.com) and set up a certificate template
2. Connect your Google account and select the target Sheet and Drive folder
3. Connect your Outlook account for sending emails
4. Configure the Stencil API credentials (Bearer Auth)
5. Adjust the email template text as needed

## Prerequisites

- Free [Stencil](https://stencilpdf.com) account with certificate template
- Google account (Sheets + Drive)
- Outlook/Microsoft 365 account
```

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Microsoft Outlook, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
