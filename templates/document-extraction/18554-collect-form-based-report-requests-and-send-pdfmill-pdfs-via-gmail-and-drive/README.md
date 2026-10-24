# 🔬 Collect form-based report requests and send pdfmill PDFs via Gmail and Drive

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Turn a shared Google Sheets metrics table into validated, branded PDF reports with correction handling, no-data notifications, Google Drive archiving, and Gmail delivery.

## How it works
1. Collects the report title, report key, period, recipient email, and optional summary through an n8n Form Trigger.
2. Validates required fields and supported period formats; invalid requests take a correction branch and never consume a render.
3. Loads Google Sheets rows that match both the report key and period, then stops with a clear notification when no metrics match.
4. Aggregates matching rows into KPIs, narrative sections, and a comparison table for the selected reporting period.
5. Renders one branded PDF with pdfmill, uploads that same binary to Google Drive, and sends it to the requester through Gmail.

## Setup
1. Install the verified pdfmill node, add a pdfmill API credential, and confirm the report template is available in your account.
2. Connect Google Sheets, Google Drive, and Gmail credentials using the scopes appropriate for your environment.
3. Select the metrics spreadsheet and sheet. Use the exact documented columns for Report key, Period, Metric, Current, Previous, Change, Direction, Section, and Commentary.
4. Choose the Drive folder, share the Form Trigger URL, and test the valid, invalid-period, and no-data paths before publishing.

## Requirements
- A pdfmill account plus Google Sheets, Google Drive, and Gmail access. The metrics sheet must use the documented column schema.

## Customization
- Change the form fields and sheet filters for your taxonomy, add metrics without editing the workflow, replace the pdfmill template for different branding, or swap the delivery nodes.

## Additional info
The gallery JSON contains no credentials or private resource IDs. Configure those values after importing the workflow.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
