# 🔬 Automate business card management with LINE, AI, and Google Sheets

> ⚡ **94 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automate Business Card Management with LINE, AI, and Google Sheets

## Who's it for

This workflow is designed for business professionals and sales teams who receive business card images via LINE and want to quickly digitize contact information with minimal manual work.

It is best suited for users who process business cards one image at a time and want a simple, reliable automation rather than a high-volume ingestion pipeline.

## What it does

This workflow processes a single business card image sent via LINE, extracts text using Google Gemini AI, and stores the structured contact information in Google Sheets.

The workflow focuses on simplicity and clarity: it receives an image, performs AI-based OCR, parses the extracted text, saves the result, uploads the original image for reference, sends a thank-you email, and replies with the extracted data on LINE.

## How it works

1. A single business card image is sent to the LINE bot.
2. The workflow is triggered via a LINE webhook.
3. The image file is downloaded and sent to Google Gemini AI for OCR.
4. The extracted text is parsed into structured fields.
5. The data is appended to Google Sheets.
6. The image is uploaded to Google Drive.
7. A thank-you email is sent via Gmail.
8. The extracted information is sent back as a LINE reply.

This workflow is intentionally designed to handle **one image per execution**.

## Requirements

To use this workflow, you will need:

- A LINE Messaging API account  
- A Google Gemini API key  
- A Google account with access to Google Sheets and Google Drive  
- A Gmail account for sending thank-you emails  
- A Google Sheets document with the following column names:
  - Company Name  
  - Contact Name  
  - Department  
  - Address  
  - Email Address  
  - Phone Number  

## Important limitations

- This workflow **does not support multiple images sent in a single message**.
- Sending images in quick succession may trigger multiple executions and lead to unexpected results.
- Only the first image in an event payload is processed.
- OCR accuracy depends on image quality, lighting, and card design.

These limitations are intentional to keep the workflow simple and easy to understand.

## How to set up

1. Create a LINE Messaging API channel and obtain a Channel Access Token.
2. Generate a Google Gemini API key.
3. Update the Config node with your LINE token, Google Sheets ID, and Google Drive folder ID.
4. Configure credentials for LINE, Google Gemini, Google Sheets, Google Drive, and Gmail.
5. Register the n8n webhook URL in your LINE channel settings.
6. Activate the workflow in n8n and test it with a single business card image.

## How to customize

- Modify the AI prompt in the “Extract Card Info” node to support different languages or fields.
- Adjust the parsing logic to match different business card layouts.
- Replace Google Sheets with a CRM or database.
- Add queueing or locking logic if you want to support batch or sequential image uploads.

---

**Note:**  
This workflow was tested using real business card images sent individually via the LINE Messaging API.  
For production use, testing with your own card samples is strongly recommended.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
