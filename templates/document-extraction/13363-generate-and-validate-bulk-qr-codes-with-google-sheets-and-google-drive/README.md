# 🔬 Generate and validate bulk QR codes with Google Sheets and Google Drive

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow allows you to generate QR codes (Barcodes) in bulk from a Google Sheets file and store the generated QR images automatically in Google Drive. Each QR code contains a unique identifier (in this template, an email address) and is connected to a validation webhook.

When a QR code is scanned, the webhook checks whether the ID exists and verifies its status. The system updates the spreadsheet to reflect whether the QR code has been generated and whether it has already been used.

This template demonstrates a simple but practical QR lifecycle system:

- Generate QR codes in bulk from spreadsheet data

- Store QR images in Google Drive

- Validate QR scans through webhook

- Track generation and usage status directly in the spreadsheet

Example use cases include event check-in systems, access control, membership validation, digital ticketing, or controlled asset distribution.

The workflow is designed to be modular, easy to customize, and suitable for real-world implementation.


## How it works
1. Set Up Google Sheets

Create a Google Sheets file with at least the following columns: email & status_qr.

The email column acts as the unique ID.

The status_qr column will automatically update to indicate:

- QR_GENERATED 
- QR_USED

Make sure there are no duplicate email values.

2. Set Up Credentials
- Google Sheets Credential
- Google Drive Credential

Connect your Google account. Copy the Spreadsheet & Folder ID and configure it in the node.

3. Configure the QR Generator Workflow

- Confirm the spreadsheet and sheet name are correctly selected.
- Ensure the workflow checks the status_qr column before generating a QR code.
- Only rows with empty status_qr will generate new QR codes.
- Generated QR images will be uploaded automatically to the configured Google Drive folder.
- The status_qr column will be updated to indicate that the QR has been generated.
- Run the workflow to generate QR codes in bulk.

4. Configure the Validation Webhook

- Set the workflow to activate.
- Ensure the webhook URL matches the base URL embedded in the QR codes.

When a QR code is scanned:
- The system extracts the email (ID).
- It checks whether the email exists in the spreadsheet.
- It verifies whether the QR has already been used. If valid, it updates status_qr to reflect usage.

### Need Help?
Contact me on [LinkedIn](https://www.linkedin.com/in/dwicahyas/)!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
