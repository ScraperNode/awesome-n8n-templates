# 🔬 Check prescription safety and drug interactions with GPT-4o, Sheets, and Telegram

> ⚡ **63 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new prescription PDFs, extracts the text, uses OpenAI (GPT-4o-mini) to structure prescription details and draft a SOAP note, checks drugs against Google Sheets formulary and interaction tables, and notifies a pharmacist or patient via Telegram, with Slack error alerts.

## How it works
1. Triggers when a new PDF is created in a specified Google Drive folder.
2. Downloads the PDF and extracts its text content.
3. Sends the extracted text to OpenAI (GPT-4o-mini) to return structured patient/prescription fields, a drug list, and a drafted SOAP note as JSON.
4. Loads the approved formulary and the drug-interaction pairs from Google Sheets and cross-checks the prescribed drugs to detect off-formulary items and known interactions.
5. If issues are found, sends a detailed Telegram alert to the pharmacist and appends the case to the Google Sheets FlaggedPrescriptions tab for auditing.
6. If no issues are found, logs the prescription to the Google Sheets Prescriptions tab and sends a Telegram confirmation to the patient.
7. If any node errors, posts an error message with execution details to a Slack channel.

## Setup
1. Connect Google Drive OAuth2 credentials and set the folder ID in the Google Drive trigger to the intake folder for prescription PDFs.
2. Add an OpenAI API credential and confirm the model selection (default: gpt-4o-mini) meets your needs.
3. Connect Google Sheets OAuth2 credentials and create/update a spreadsheet with tabs named Formulary, Interactions, Prescriptions, and FlaggedPrescriptions, then set the spreadsheet ID in the Google Sheets nodes.
4. Configure a Telegram bot credential and replace the pharmacist and patient chatId values used in the two Telegram messages.
5. Connect Slack OAuth2 credentials and set the target Slack channel ID for workflow error alerts.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Google Drive, Google Drive Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
