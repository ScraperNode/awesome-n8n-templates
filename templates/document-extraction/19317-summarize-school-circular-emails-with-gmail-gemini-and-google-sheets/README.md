# 🔬 Summarize school circular emails with Gmail, Gemini, and Google Sheets

> ⚡ **48 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors a labeled Gmail inbox for school circulars, extracts text from attached PDFs, uses Google Gemini to generate a structured parent-friendly digest, logs the results to Google Sheets for de-duplication, and emails the final summary to a parent address.

## How it works
1. Checks Gmail every hour for new emails in a specified label.
2. Normalizes the email metadata and determines whether the message includes an attachment.
3. Downloads the email attachment from Gmail and extracts text from the attached PDF.
4. If the extracted text is missing or unreliable, prepares fallback text so the workflow can continue.
5. Assembles a single final text block, generates a stable fingerprint for the circular, and looks it up in Google Sheets to avoid duplicates.
6. For new circulars, sends the finalized text to Google Gemini to extract structured fields (dates, fees, actions) and a short and detailed digest.
7. Appends the structured record to Google Sheets and sends the formatted digest to the parent via Gmail.

## Setup
1. Connect your Gmail credentials and set the Gmail trigger label to the label that receives school circular emails.
2. Connect your Google Gemini (PaLM/Gemini) credentials and select the model you want to use in the Gemini extraction step.
3. Connect your Google Sheets credentials and update the spreadsheet ID, sheet name, and columns used for the circular log and duplicate checks.
4. Ensure the incoming circular PDFs are available as Gmail attachments (the workflow extracts text from the first downloaded attachment binary field).
5. Update the recipient address in the final Gmail send step (and optionally adjust the email subject/body format to match your needs).

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
