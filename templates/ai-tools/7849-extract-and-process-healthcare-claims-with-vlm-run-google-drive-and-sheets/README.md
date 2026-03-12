# 🎯 Extract and process healthcare claims with VLM Run, Google Drive and Sheets

> ⚡ **694 views** · 🎯 [AI Summarization & Classification](../)

## Description

**Automatically process healthcare claims into structured Google Sheets entries with VLM Run extraction**

## What this workflow does

* Monitors Google Drive for new files in a target folder
* Downloads the file inside n8n for processing
* Sends the file to VLM Run for AI transcription or analysis
* Fetches extra details from the healthcare.claims-processing domain as JSON
* Appends normalized fields to a Google Sheet as a new row

## Setup

**Prerequisites:** Google account, VLM Run API credentials, Google Sheets access, n8n. Install the verified VLM Run node by searching for VLM Run in the node list, then click Install. Once installed, you can start using it in your workflows.

**Quick Setup:**

1. Create the Drive folder you want to watch and copy its Folder ID
2. Create a Google Sheet with headers like: timestamp, file\_name, file\_id, mime\_type, size\_bytes, uploader\_email, form\_type, carrier\_name, patient\_name, patient\_birth\_date, patient\_sex, patient\_address, insurance\_type, insurance\_id, insured\_name, total\_charge, amount\_due, amount\_paid, hospitalization\_from, hospitalization\_to, referring\_physician\_name, processing\_notes, …other claim fields as needed
3. Configure Google Drive OAuth2 for the trigger and download nodes
4. Add VLM Run API credentials from [https://app.vlm.run/dashboard](https://app.vlm.run/dashboard) to the VLM Run node
5. Configure Google Sheets OAuth2 and set Spreadsheet ID and target sheet tab
6. Test by uploading a sample file to the watched Drive folder and activate

## Perfect for

* Centralized intake of healthcare claim documents with instant AI summaries
* Claims and operations teams collecting structured claim insights
* Customer support attachments that need quick triage to a Sheet
* Compliance and audit logs for claim documents

## Key Benefits

* End to end automation from Drive to Sheets
* Accurate AI output via VLM Run with optional timestamps
* Domain enrichment from healthcare.claims-processing JSON
* Clean, searchable logs in Google Sheets
* No manual steps after activation

## How to customize

**Extend by adding:**

* OCR tuning and field validation for claim forms
* Per type routing for PDFs, images, or scanned forms
* Slack notifications on each new Sheet append
* Keyword extraction and auto tagging for claim categories
* Error branch that records failures to a second Sheet

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
