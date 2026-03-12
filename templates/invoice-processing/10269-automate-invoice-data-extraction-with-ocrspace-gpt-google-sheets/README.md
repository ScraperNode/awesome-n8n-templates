# 🧾 Automate invoice data extraction with OCR.Space, GPT & Google Sheets

> ⚡ **439 views** · 🧾 [Invoice Processing](../)

## Description

## Overview
This template automates invoice processing for teams that currently copy data from PDFs into spreadsheets by hand. It is ideal for small businesses, back-office teams, accounting, and operations who want to reduce manual entry, avoid human error, and never miss a payment deadline. The workflow watches a structured Google Drive folder, performs OCR, converts the text into clean structured JSON with an LLM, and appends one row per invoice into Google Sheets. It preserves a link back to the original file for easy review and audit.

- **Designed for small businesses and back-office teams.**
- **Eliminates manual typing** and reduces errors.
- **Prevents missed due dates** by centralizing data.
- Works with monthly subfolders like "2025年10月分" (meaning "October 2025").
- Keeps a Google Drive link to each invoice file.

## How It Works
The workflow runs on a schedule, scans your Drive folder hierarchy, OCRs the PDFs/images, cleans the text, extracts key fields with an LLM, and appends a row to Google Sheets per invoice. Each step is modular so you can swap services or tweak prompts without breaking the flow.

- **Scheduled trigger** runs on a recurring cadence.
- **Scan the parent folder** in Google Drive.
- **Auto-detect the current-month folder** (e.g., a folder named "2025年10月分" meaning "October 2025").
- **Download PDFs/images** from the detected folder.
- **Extract text** using the OCR.Space API.
- **Clean noise** and normalize with a Code node.
- **Use an OpenAI model** to extract invoice_date, due_date, client_name, line items, totals, and bank info to JSON.
- **Append one row per invoice** to Google Sheets.

## Requirements
Before you start, make sure you have access to the required services and that your Drive is organized into monthly subfolders so the workflow can find the right files.

- **n8n account.**
- **Google Drive access.**
- **Google Sheets access.**
- **OCR.Space API key** (set as `&lt;your_ocr_api_key&gt;`).
- **OpenAI / LLM API credential** (e.g., `&lt;your_openai_credential_name&gt;`).
- **Invoice PDFs organized by month** on Google Drive (e.g., folders like "2025年10月分").

## Setup Instructions
Import the workflow, replace placeholder credentials and IDs with your own, and enable the schedule. You can also run it manually for testing. The parent-folder query and sheet ID must reflect your environment.

- Replace `&lt;your_google_drive_credential_id&gt;` and `&lt;your_google_drive_credential_name&gt;` with your **Google Drive Credential**.
- Adjust the **parent folder search query** to your invoice repository name.
- Replace the **Sheets document ID** `&lt;your_google_sheet_id&gt;` with your spreadsheet ID.
- Ensure your **OpenAI credential** `&lt;your_openai_credential_name&gt;` is selected.
- Set your **OCR.Space key** as `&lt;your_ocr_api_key&gt;`.
- **Enable the Schedule Trigger** after testing.

## Customization
This workflow is easily extensible. You can adapt folder naming rules, enrich the spreadsheet schema, and expand the AI prompt to extract custom fields specific to your company. It also works beyond invoices, covering receipts, quotes, or purchase orders with minor changes.

- Change the monthly folder naming rule such as `{{$now.setZone("Asia/Tokyo").format("yyyy年MM月")}}分` to match your convention.
- Modify or extend **Google Sheets column mappings** as needed.
- Tune the **AI prompt** to extract project codes, owner names, or custom fields.
- Repurpose for **receipts, quotes, or purchase orders**.
- Localize **date formats** and **tax calculation rules** to your standards.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
