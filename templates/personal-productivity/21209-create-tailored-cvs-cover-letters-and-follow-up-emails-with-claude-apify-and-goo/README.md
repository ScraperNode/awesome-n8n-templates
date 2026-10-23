# ⚡ Create tailored CVs, cover letters and follow-up emails with Claude, Apify and Google

> ⚡ **3 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Paste a LinkedIn job link into the n8n chat. The workflow fetches job details with Apify, has Claude tailor your CV and write a cover letter and follow-up email, saves PDFs to Google Drive, logs the job in Google Sheets, and creates a Gmail draft with attachments.

## How it works
1. Receives an n8n chat message containing a LinkedIn job URL (and optionally a contact name) and extracts the LinkedIn job ID and contact details.
2. Calls the Apify `apimaestro/linkedin-job-detail` actor to retrieve the job description, company information, and application details.
3. Writes or updates a matching row in a Google Sheets tracker so reruns refresh the same job instead of creating duplicates.
4. Downloads your master CV from Google Drive as a PDF, extracts the text, and sends it with the job description to Anthropic Claude to produce structured tailored CV content.
5. Creates (or reuses) a Google Docs CV file from a template in Google Drive, fills it via the Google Docs API, converts it to PDF, and uploads the PDF to Google Drive.
6. Sends the job details and master CV text to Anthropic Claude to generate a JSON cover letter, fills a copied Google Docs cover letter template via the Google Docs API, converts it to PDF, and uploads the PDF to Google Drive.
7. Uses Anthropic Claude to write a short follow-up email, creates a Gmail draft with the CV and cover letter PDFs attached, and updates the Google Sheets tracker with the email HTML and cover-letter JSON.

## Setup
1. Add an Anthropic (Claude) API credential and select it in the CV, cover-letter, and email generation steps.
2. Add Google OAuth credentials with access to Google Drive and Gmail, enable the Google Drive, Docs, and Sheets APIs in your Google Cloud project, and select the same Google credential on all Google Drive, Gmail, and Google Sheets/Docs HTTP request steps.
3. Create an Apify token and configure it as query authentication (name `token`) for the Apify HTTP request.
4. In the Config values, set your Google Sheet ID and tab name, the master CV Doc ID, the CV and cover-letter template Doc IDs, and the output folder IDs, plus your applicant contact details, timezone, and locale.
5. Ensure your tracker Google Sheet has the required header columns and your cover letter template Google Doc includes the expected tokens (for example `{{TODAY}}`, `{{CL_GREETING}}`, and `{{CL_PARAGRAPHS}}`).

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Extract from File, Chat Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
