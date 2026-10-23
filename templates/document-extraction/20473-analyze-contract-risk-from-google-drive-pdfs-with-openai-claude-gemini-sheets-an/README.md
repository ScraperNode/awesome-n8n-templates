# 🔬 Analyze contract risk from Google Drive PDFs with OpenAI, Claude, Gemini, Sheets and Gmail

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new PDF contracts, extracts their text, analyzes them with OpenAI, Anthropic Claude, or Google Gemini to produce a structured risk assessment, logs the results to Google Sheets, and sends a Gmail alert when the risk score crosses a threshold.

## How it works
1. Triggers when a new file is created in a specified Google Drive folder.
2. Filters events to continue only when the uploaded file is a PDF.
3. Downloads the PDF from Google Drive, extracts its text, and trims the content to a configurable maximum length.
4. Sends the contract text to the selected AI provider (OpenAI, Anthropic Claude, or Google Gemini) to extract structured contract fields, risk flags, a summary, and a 0–100 risk score.
5. Normalizes the AI output into a single flat record with a calculated risk level and an alert decision based on your threshold.
6. Appends the normalized analysis as a new row in a Google Sheets tab.
7. Sends a formatted Gmail alert email with the summary and risk flags when the contract meets or exceeds the risk threshold.

## Setup
1. Connect credentials for Google Drive, Google Sheets, and Gmail in n8n.
2. Add credentials for one AI provider you plan to use: OpenAI, Anthropic, or Google Gemini.
3. Select the Google Drive folder to watch and update the Configuration values (aiProvider, googleSheetId, sheetTabName, alertEmail, riskAlertThreshold, and maxCharacters).
4. Create or choose a Google Sheets spreadsheet and ensure the target tab name (for example, “Contracts”) exists or matches the configured sheetTabName.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Filter, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
