# 🔬 Extract data from Thai Government letters with Mistral OCR and store in Google Sheets

> ⚡ **1,697 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### LINE OCR Workflow to Extract and Save Thai Government Letters to Google Sheets

This template automates the extraction of structured data from Thai government letters received via LINE or uploaded to Google Drive. It uses Mistral AI for OCR and OpenAI for information extraction, saving results to a Google Sheet.

---

## Who’s it for?

- Thai government agencies or teams receiving official documents via LINE or Google Drive
- Automation developers working with document intake and OCR
- Anyone needing to extract fields from Thai scanned letters and store structured info

---

## What it does

This n8n workflow:
1. **Receives documents** from two sources:
   - LINE webhook (via Messaging API)
   - Google Drive (new file trigger)
2. **Checks file type** (PDF or image)
3. **Runs OCR** with Mistral AI (Document or Image model)
4. **Uses OpenAI** to extract key metadata such as:
   - book_id
   - subject
   - recipient (to)
   - signatory
   - date, contact info, etc.
5. **Stores structured data** in Google Sheets
6. **Replies to LINE user** with extracted info or moves files into archive folders (Drive)

---

## How to Set It Up

1. Create a Google Sheet with a tab named `data` and the following columns [Example Google Sheet](https://docs.google.com/spreadsheets/d/1asLDGXnPA4K55RfLDGRkgQzOpnKezDoVibWgnGaGUJ0/edit?usp=sharing):
   - `book_id`, `date`, `subject`, `to`, `attach`, `detail`, `signed_by`, `signed_by_position`, `contact_phone`, `contact_email`, `download_url`
2. Set up required credentials:
   - `googleDriveOAuth2Api`
   - `googleSheetsOAuth2Api`
   - `httpHeaderAuth` for LINE Messaging API
   - `openAiApi`
   - `mistralCloudApi`
3. Define environment variables:
   - `LINE_CHANNEL_ACCESS_TOKEN`
   - `GDRIVE_INVOICE_FOLDER_ID`
   - `GSHEET_ID`
   - `MISTRAL_API_KEY`
4. Deploy webhook to receive files from LINE Messaging API (Path: `/line-invoice`)
5. Monitor Drive uploads using `Google Drive Trigger`

---

## How to Customize the Workflow

- Adjust the **information extraction schema** in the OpenAI `Information Extractor` node to match your document layout
- Add logic for different document types if you have more than one format
- Modify the `LINE Reply` message format or use Flex Message
- Update the `Move File` node if you want to archive to a different folder

---

## Requirements

- n8n self-hosted or cloud instance
- Google account with access to Drive and Sheets
- LINE Developer Account
- OpenAI API key
- Mistral Cloud API key

---

## Notes

- Community nodes used: `@n8n/n8n-nodes-base.mistralAi`
- This workflow **supports both document images and PDF files**
- File handling is done dynamically via MIME type

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Google Drive Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
