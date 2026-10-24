# 🔬 Generate product datasheet PDFs from Google Sheets with ShipPDF and Google Drive

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Sheets product catalog for new rows, sends each product’s data to ShipPDF to render a PDF datasheet from a template, polls until the PDF is ready, and then archives the finished datasheet to Google Drive.

## How it works
1. Triggers when a new product row is added to a specified Google Sheets worksheet.
2. Sends the row’s product fields (name, model, SKU, description, specifications, and optional image URL) to the ShipPDF Documents API to generate a datasheet from a template.
3. Waits 3 seconds and then polls ShipPDF for the document status, looping until generation completes or fails.
4. If ShipPDF returns a completed status, downloads the generated PDF from the provided URL.
5. Uploads the PDF to Google Drive with a filename based on the product name.
6. If ShipPDF returns a failed status, routes the item to an alert placeholder for you to replace with your preferred notification step.

## Setup
1. Connect Google Sheets credentials and set the spreadsheet ID and sheet name in the trigger.
2. Create a ShipPDF HTTP Bearer Auth credential (API key with documents:create and documents:read) and select it on both ShipPDF HTTP requests.
3. Update the ShipPDF template_id and ensure the mapped data fields match your ShipPDF datasheet template schema (including Image URL if you use a dynamic image).
4. Connect Google Drive credentials and choose the target Drive and folder for the uploaded PDFs.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
