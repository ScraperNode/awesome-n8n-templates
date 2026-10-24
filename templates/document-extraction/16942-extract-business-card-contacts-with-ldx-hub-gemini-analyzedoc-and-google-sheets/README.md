# 🔬 Extract business card contacts with LDX hub Gemini AnalyzeDoc and Google Sheets

> ⚡ **31 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a business card photo/scan through an n8n form, uses LDX hub AnalyzeDoc (Gemini) to extract contact details as structured JSON, and appends the resulting fields as a new row in Google Sheets.

## How it works
1. Receives a business card file upload (PDF/JPG/PNG) through an n8n form submission.
2. Sends the uploaded file to LDX hub AnalyzeDoc using the Gemini model and a fixed schema prompt to extract contact fields as JSON.
3. Parses the extracted JSON into individual fields like name, company, email, phone numbers, and address.
4. Appends the extracted fields as a single new row in the selected Google Sheets worksheet.

## Setup
1. Install the community node `n8n-nodes-ldxhub` and add an LDXhub API credential with your API key.
2. Add a Google Sheets OAuth2 credential and select the target spreadsheet and worksheet in the append step.
3. Create (or match) a header row in your sheet for `full_name, job_title, company, department, email, phone, mobile, address, website, notes` so the auto-mapping writes to the correct columns.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
