# 🔬 Generate personalized franchise PDF letters from Excel with Google Drive and Docs

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects an uploaded XLSX list of franchise owners via an n8n form, then uses Google Drive and Google Docs to generate a personalized letter for each row and saves the resulting PDF files back to a Google Drive folder.

## How it works
1. Receives a form submission with an uploaded .xlsx file containing franchise owner details.
2. Extracts rows from the Excel file into individual items.
3. Iterates through each row in batches to process one franchise record at a time.
4. Copies a Google Docs template in Google Drive and names the new document using the franchise name.
5. Replaces placeholders in the copied Google Doc (owner, franchise, city, fee, and today’s date) with values from the current Excel row.
6. Downloads the updated Google Doc as a PDF.
7. Uploads the generated PDF to the target Google Drive folder and continues until all rows are processed.

## Setup
1. Connect Google Drive OAuth2 credentials and set the template file ID and destination folder in the Google Drive copy/upload steps.
2. Connect Google Docs OAuth2 credentials and ensure the template contains the placeholders (for example: [Dear Owner], [Franchise], [City], [Fee], [Date Today]).
3. Ensure the uploaded XLSX has columns matching the workflow’s expected field names (Franchise_Owner, Franchise_Name, City, Franchise_Fee) and upload it via the form trigger.

## 🔗 Nodes Used

Google Drive, Google Docs, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
