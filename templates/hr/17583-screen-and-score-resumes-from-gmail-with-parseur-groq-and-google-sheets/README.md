# 👥 Screen and score resumes from Gmail with Parseur, Groq, and Google Sheets

> ⚡ **36 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for resume attachments, sends them to Parseur for data extraction, uses Groq (LLM) to generate an AI fit score, then uploads the original resume to Google Drive and appends or updates a candidate tracker in Google Sheets.

## How it works
1. Polls Gmail every minute for new emails that include PDF/DOC/DOCX resume attachments.
2. Downloads the email and its attachment and submits the resume file to Parseur for parsing.
3. Waits briefly, then calls the Parseur API to fetch the latest parsed document metadata and download the extracted candidate fields as JSON.
4. Skips processing if the extracted “Candidate Name” field is empty.
5. Builds a standardized base filename and document ID from the extracted candidate fields and uses Groq to generate a 1–10 fit score for the role.
6. Downloads the original resume from Parseur, uploads it to Google Drive, and writes the candidate details, fit score, and Drive link to a Google Sheets tracker (append or update by email).

## Setup
1. Connect Gmail OAuth credentials and confirm the Gmail search query targets the inbox/labels you use for applications.
2. Set up Parseur (with the same parserId used in the workflow) and add Parseur API authentication headers for the HTTP requests.
3. Add Groq credentials for the LangChain Groq chat model used to generate the fit score.
4. Connect Google Drive and Google Sheets OAuth credentials, then select the target Drive folder and update the spreadsheet/sheet where candidates are logged.
5. Ensure your Parseur template outputs the expected fields (for example Candidate Name, Email, Phone, Position Applied For, Years of Experience, Key Skills, and DocumentURL) so the validation, naming, and sheet mapping work correctly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
