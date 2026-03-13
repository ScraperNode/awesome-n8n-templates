# 🧾 Extract & process invoices with Gemini AI, Google Sheets & Gmail notifications

> ⚡ **683 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# **AI-Powered Invoice Extraction & Automation System Workflow**

## Aim

The aim of the **Invoice Data Automation** workflow is to streamline invoice processing by extracting, validating, and storing invoice details automatically. It uses AI to read invoices (from images/PDFs), structures the data in JSON, checks for missing or duplicate entries, and records the information in a Google Sheet while also uploading the original invoice to Google Drive. Additionally, it sends email notifications for successful entries, duplicates, or missing fields.

## Goal

The goal is to:

* Allow users to upload invoice images/files via chat.
* Extract invoice data using AI and format it into a structured JSON.
* Validate mandatory fields like `invoice_id`, `shop_name`, `date`, `Total`, and `items`.
* Check if the invoice already exists in the Google Sheet.
* Append new invoices to Google Sheets and upload the original file to Google Drive.
* Notify the user via email about success, duplicates, or errors.

This ensures that invoices are processed *accurately, efficiently, and securely* with minimal manual effort.

## Requirements

The workflow relies on specific components and configurations:

### n8n Platform

The automation is built and hosted on **n8n**, which orchestrates the entire workflow.

### Node Requirements

1. **When chat message received** – Triggers the workflow when a user submits an invoice.
2. **Analyze image1** – Uses Google Gemini Vision AI to extract invoice data from the uploaded file.
3. **AI Agent1 + Google Gemini Chat Model1** – Restructures the extracted data into strict JSON format.
4. **Make data in JSON structure format** – Prepares and organizes the structured output.
5. **Get data** – Looks up the Google Sheet to check if the invoice already exists.
6. **check if Data exist or not in table** – Decides whether to process as new data or duplicate.
7. **New data add using payload / Check Mandatory fields** – Ensures invoice JSON is valid and complete.
8. **If – check missing field** – Branches based on whether mandatory fields are present.
9. **no missing field – new data add using payload 2** – Passes only verified invoices forward.
10. **Append data to sheet** – Saves invoice data in Google Sheets.
11. **Upload invoice to drive** – Uploads the original invoice file to Google Drive.
12. **Send successful email** – Notifies the user of successful entry.
13. **Duplicate entry send mail** – Alerts the user if the invoice already exists.
14. **Send missing field error on mail** – Sends an error email if mandatory fields are missing.

### Credentials

* **Google Gemini (PaLM) API** – For AI-based invoice data extraction and formatting.
* **Google Sheets API** – For storing structured invoice records.
* **Google Drive API** – For uploading original invoices.
* **Gmail API** – For sending success, duplicate, and error notifications.

### Input Requirements

* Invoice file (Image or PDF).

### Output

* Structured invoice data in **Google Sheets**.
* Original invoice stored in **Google Drive**.
* Notifications sent via **Gmail** (success, duplicate, or error).

## API Usage

* **Google Gemini (PaLM API):**
  Used in *Analyze image1* and *AI Agent1* to extract and structure invoice data. It ensures fields like `invoice_id`, `shop_name`, `date`, and `items` are clearly formatted.

* **Google Sheets API:**
  Used in *Get data* and *Append data to sheet* nodes to validate duplicates and store new invoices.

* **Google Drive API:**
  Used in *Upload invoice to drive* to securely store the original uploaded invoice file.

* **Gmail API:**
  Used in *Send successful email, Duplicate entry send mail, Send missing field error on mail* to notify users about the status of invoice processing.

## Workflow Summary

The **Invoice Data Automation** workflow automates the entire process of invoice handling by:

1. Receiving invoice uploads via chat.
2. Extracting invoice details with AI (Google Gemini).
3. Structuring and validating the data in JSON format.
4. Checking Google Sheets for duplicates.
5. Appending new invoices to the sheet and uploading originals to Google Drive.
6. Sending email notifications to keep the user updated on the process outcome.

This end-to-end automation ensures invoices are handled with *speed, accuracy, and transparency*, reducing manual work and eliminating common errors in invoice management.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, AI Agent, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
