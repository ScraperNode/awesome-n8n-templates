# 🧾 AI auto-save Gmail receipts to Google Sheets + Google Drive

> ⚡ **1,960 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for?

This workflow is ideal for:

- For freelancers, business owners, and finance teams who receive receipts via Gmail  
- Automatically logs expenses for tax, 
- bookkeeping and year-end audits

## What problem is this workflow solving?

When tax season hits, missing receipts create panic.

This workflow keeps everything in one place. It uses AI to extract details from Gmail attachments, logs them in a Google Sheet, and stores the PDFs in Google Drive.

No digging. No copying. Just everything where it should be.

## How it works?

1. Apply the label `receipt` to any incoming Gmail email. Do not mark it as read.

2. On a schedule (e.g. daily at 8:00 AM), the workflow triggers.

3. It searches for unread emails with the label `receipt`.

4. For each matching email, it downloads the attached receipt file.

5. It extracts text content from the receipt file.

6. It uploads the original receipt file to a specified folder in Google Drive.

7. It merges the extracted text with email metadata.

8. It sends this combined data to OpenAI.  
   OpenAI extracts structured fields:
   - `date`
   - `merchant`
   - `category`
   - `description`
   - `subtotal`
   - `tax`
   - `total`

9. The extracted data is appended as a new row in the specific Google Sheet.

10. Finally, the email is marked as read to prevent it from being processed again.

## How to set up?

1. **Connect these services** in your n8n credentials:
   - Gmail (OAuth2)
   - Google Drive
   - Google Sheets
   - OpenAI
2. **Configure the Google Drive upload**:
   - In the “Upload File” node, select the target folder where you want receipt PDFs stored.
3. **Set your execution schedule**:
   - Open the “Schedule Trigger” node and choose when it should run (default is once daily at 8:00 AM).
4. **Choose your Google Sheet and tab**:
   - In the “Append to Google Sheet” node, select your document and tab
   - Ensure the sheet contains these columns:  
     `Date`, `Merchant`, `Category`, `Description`, `Subtotal`, `Tax`, `Total`.


## How to customize this workflow to your needs? 
- **Change the Gmail label or search filter** to match your needs.
- **Modify the OpenAI schema** to extract additional fields like `currency`, `project`, or `notes`.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
