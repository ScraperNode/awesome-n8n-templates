# 🔬 Grade assignments and email feedback with OpenAI, Google Drive, Sheets, Gmail and Telegram

> ⚡ **165 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new PDF submissions, extracts text and grades each assignment with OpenAI using a Google Docs rubric, logs results to Google Sheets, emails feedback via Gmail, and sends a daily summary to the teacher via Gmail and Telegram, with Slack error alerts.

## How it works
1. Triggers when a new PDF file is created in a specific Google Drive folder.
2. Downloads the PDF from Google Drive and sends it to OpenAI to extract the full plain-text content.
3. Parses student name, email, assignment title, and course from the filename and fetches the grading rubric from Google Docs.
4. Sends the extracted assignment text and rubric to OpenAI to generate a JSON grade, per-criterion scores, and three feedback paragraphs.
5. Parses the returned JSON (falling back to default values if parsing fails) and appends a complete record to a Google Sheets Gradebook.
6. Sends the student a formatted Gmail message with the grade, score breakdown, and personalised feedback.
7. Runs daily at 6 PM to read the Gradebook in Google Sheets, summarize today’s grading results, and sends the summary to the teacher via Gmail and Telegram.

## Setup
1. Connect credentials for Google Drive, Google Docs, Google Sheets, Gmail, Telegram, and Slack (for error alerts).
2. Set the Google Drive folder ID to watch, the Google Docs rubric document URL, and the Google Sheets spreadsheet ID and Gradebook sheet name.
3. Update the teacher email address for the daily summary and set your Telegram bot chat ID.
4. Replace placeholder values like the rubric document ID in the metadata parsing step and ensure students follow the filename format `FirstLast__email@domain.com__Assignment_Title__Course.pdf`.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Google Drive, Gmail, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
