# 🎬 Generate an FAQ MP3 library from form input with OpenAI TTS, Google Drive, Sheets and Gmail

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects up to five FAQ questions and answers from an n8n Form, converts each entry to an MP3 using OpenAI text-to-speech, uploads the files to Google Drive, logs links in Google Sheets, and emails a summary with listen and download links via Gmail.

## How it works
1. Receives an n8n Form submission containing the requester’s email, a FAQ category, and up to five question-and-answer pairs.
2. Splits the submitted FAQ pairs into individual items, generating a TTS script and a safe MP3 filename for each valid question and answer.
3. Calls the OpenAI Audio Speech API (tts-1) to generate an MP3 file for each FAQ script.
4. Uploads each generated MP3 to a specified Google Drive folder.
5. Builds Google Drive view and direct-download URLs for each uploaded file and appends the FAQ details and links to a Google Sheets tab.
6. Aggregates all processed FAQs into a single HTML summary and sends it to the submitter via Gmail with listen and download links.

## Setup
1. Add an OpenAI API credential for the HTTP request to the OpenAI Audio Speech endpoint.
2. Create (or choose) a Google Drive folder for the audio files, connect Google Drive OAuth2, and replace `YOUR_AUDIO_FOLDER_ID` with the target folder ID.
3. Create a Google Sheets document with a sheet/tab named `FAQs`, connect Google Sheets OAuth2, and replace `YOUR_FAQ_LOG_SHEET_ID` with your spreadsheet ID.
4. Connect Gmail OAuth2 and ensure the account is allowed to send emails to the recipient address collected in the form.
5. Activate the workflow and use the Form URL to submit FAQs for processing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
