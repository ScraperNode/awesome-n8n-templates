# 🔬 Send certificate PDFs from Google Forms with Google Sheets, Orshot, and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Sheets response spreadsheet for new Google Forms submissions, renders a personalized certificate PDF with Orshot, and emails the certificate to the respondent via Gmail.

## How it works
1. Triggers when a new response row is added to a selected Google Sheets worksheet linked to a Google Form.
2. Extracts the respondent’s name and email from the row, sets the course name, issue date, and email metadata.
3. Sends the certificate fields to Orshot Studio to render a customized PDF and returns it as binary data.
4. Sends an email via Gmail to the respondent with the rendered certificate PDF attached.

## Setup
1. Link your Google Form to a Google Sheets response spreadsheet and ensure the sheet includes columns for the respondent’s name and email (for example, “Full name” and “Email address”).
2. Add Google Sheets Trigger credentials and select the target spreadsheet and worksheet in the trigger.
3. Add an Orshot API credential, set your Orshot Studio template ID, and ensure the modification keys match your template field IDs (for example, candidateName, courseName, issueDate).
4. Add Gmail OAuth2 credentials and confirm the sender name, subject, and message text you want to use.

## Requirements
- Orshot account with a certificate template (the Orshot node is verified, so it runs on n8n Cloud)
- Google account with a Google Form linked to a response sheet, plus Gmail

## Customization
- Set the response format to PNG to send an image certificate instead of a PDF
- Swap Gmail for Outlook, SendGrid or a Slack message

## Additional info
Full guide: [Automate certificates from Google Sheets](https://orshot.com/blog/google-sheets-certificates-automation)
Product page: [Orshot PDF API](https://orshot.com/solutions/pdf-generation-api)

## 🔗 Nodes Used

Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
