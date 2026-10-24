# 🧾 Extract invoice data and send payment reminders with Google Drive, Mistral, Groq and Gmail

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new receipt or invoice images, uses Mistral AI OCR and a Groq-hosted LLM to extract key fields, writes the results to Google Sheets, and sends scheduled Gmail reminders when document dates are 7, 3, 1, or 0 days away.

## How it works
1. Triggers when a new file is created in a specified Google Drive folder.
2. Downloads the new Google Drive file and sends it to Mistral AI to extract OCR text from the image.
3. Uses a Groq Chat LLM chain to parse the OCR text into JSON containing the document date, total amount, and company name.
4. Formats the extracted fields, adds the Google Drive file ID and link, and upserts the record into a Google Sheets table keyed by the Drive file ID.
5. Runs on a daily schedule and reads all rows from the same Google Sheets document.
6. Filters rows whose document date is exactly 7, 3, 1, or 0 days from today and emails a payment reminder for each matching row via Gmail.

## Setup
1. Connect credentials for Google Drive, Google Sheets, Mistral Cloud, Groq, and Gmail.
2. Set the Google Drive trigger to watch your target folder for new files.
3. Update the Google Sheets document and sheet tab in both the write (append/update) and read steps, and ensure the sheet has columns for ID, Document_date, Total_Note, Company_Name, and Note_Link.
4. Replace the "[ReceiverEmail]" placeholder with the destination email address for reminders.
5. Adjust the daily schedule timing and the reminder-day logic (7, 3, 1, 0) if you want different notification intervals.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
