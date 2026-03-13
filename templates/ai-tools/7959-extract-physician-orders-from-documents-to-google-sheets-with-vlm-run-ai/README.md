# 🎯 Extract physician orders from documents to Google Sheets with VLM Run AI

> ⚡ **56 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**Process Physician Orders into Google Sheets with VLM Run AI Extraction**

**What this workflow does**

1. **Monitors Google Drive** for new physician order files in a target folder
2. **Downloads the file** automatically inside n8n for processing
3. **Sends the file to VLM Run** for AI transcription and structured data extraction
4. **Parses healthcare-specific details** from the `healthcare.physician-order` domain as JSON
5. **Appends normalized attributes** to a Google Sheet as a new row

---

## Setup

**Prerequisites:** Google account, VLM Run API credentials, Google Sheets access, n8n.
Install the verified **VLM Run** node from the n8n node list, then click **Install**. Once installed, you can integrate it directly in your workflow.

**Quick Setup:**

1. Create the Drive folder you want to watch and copy its **Folder ID**
2. Create a Google Sheet with headers such as:
   `timestamp, file_name, file_id, mime_type, size_bytes, uploader_email, patient_name, patient_dob, patient_gender, patient_address, patient_phone_no, physician_name, physician_phone_no, physician_email, referring_clinic, diagnosis, exam_date, form_signed_in`, …other physician order fields as needed
3. Configure **Google Drive OAuth2** for the trigger and download nodes
4. Add your **VLM Run API credentials** from [VLM Run Dashboard](https://app.vlm.run/dashboard) to the VLM Run node
5. Configure **Google Sheets OAuth2** and set Spreadsheet ID + target tab
6. Upload a sample physician order file to the Drive folder to test, then activate

---

## Perfect for

* Converting physician order documents into structured, machine-readable text
* Automating extraction of patient, physician, and clinical details with VLM Run
* Creating a centralized archive of orders for compliance, auditing, or reporting
* Reducing manual data entry and ensuring consistent formatting

---

## Key Benefits

* **End-to-end automation** from Drive upload to structured Google Sheets row
* **AI-powered accuracy** using VLM Run’s healthcare-specific extraction models
* **Standardized attribute mapping** for patient and physician records
* **Instantly searchable archive** directly in Google Sheets
* **Hands-free processing** once the workflow is activated

---

## How to customize

**Extend by adding:**

* Attribute-specific parsing (e.g., ICD/CPT diagnosis codes, insurance details)
* Automatic classification of orders by specialty, urgency, or exam type
* Slack, Teams, or email notifications when new physician orders are logged
* Keyword tagging for fast filtering and downstream workflows
* Error-handling rules that move failed conversions into a review folder or error sheet

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
