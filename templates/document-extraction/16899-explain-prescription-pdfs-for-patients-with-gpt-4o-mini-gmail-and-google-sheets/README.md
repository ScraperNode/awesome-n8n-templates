# 🔬 Explain prescription PDFs for patients with GPT-4o-mini, Gmail and Google Sheets

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a patient’s prescription PDF via an n8n form, extracts its text, uses OpenAI (gpt-4o-mini) to generate a plain-language medicine-by-medicine explanation in the chosen language, emails the result via Gmail, and logs each processed prescription to Google Sheets.

## How it works
1. Receives a form submission with the patient’s name, email, preferred language, optional doctor/health notes, and a prescription PDF upload.
2. Extracts selectable text from the uploaded PDF.
3. Validates required fields, checks that the PDF contains readable text, and truncates/cleans the extracted content for the AI prompt.
4. Sends the prescription text and context to OpenAI Chat Completions (gpt-4o-mini) and requests a structured JSON explanation of each medicine in the selected language.
5. Parses and validates the returned JSON, ensuring at least one medicine is found and merging the AI output with the patient context.
6. Appends an audit row (date, patient details, doctor, medicine count, language, status, processed time) to a Google Sheets “Log” worksheet.
7. Builds a formatted HTML email with the medicine explanations and disclaimer, then sends it to the patient using Gmail.

## Setup
1. Add an OpenAI API credential for the HTTP request to the Chat Completions endpoint.
2. Add a Google Sheets OAuth credential, set the target spreadsheet ID, and ensure a worksheet named “Log” exists with matching columns for the appended fields.
3. Add a Gmail OAuth credential and confirm the sender account you want to use for outgoing patient emails.
4. Activate the workflow and share the n8n Form URL so patients can upload their prescription PDFs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
