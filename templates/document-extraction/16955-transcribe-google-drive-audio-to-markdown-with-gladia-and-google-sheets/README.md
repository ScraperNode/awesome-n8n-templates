# 🔬 Transcribe Google Drive audio to markdown with Gladia and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new audio files, sends them to Gladia for asynchronous transcription, saves the resulting Markdown transcript back to Google Drive, and appends a success or failure record (with a link and details) to a Google Sheets log.

## How it works
1. Triggers every minute when a new file is created in a specific Google Drive folder.
2. Downloads the new file from Google Drive and uploads the binary audio to Gladia.
3. Starts a Gladia pre-recorded transcription job and waits a configurable interval before checking status.
4. Polls Gladia for the job result until the status is "done", an error is returned, or the maximum attempt limit is reached.
5. When completed, formats the transcript into a Markdown file (including metadata and speaker utterances when available) and uploads it to a target Google Drive folder.
6. Appends a row to Google Sheets with the timestamp, source file name, duration, status, transcript link, and a short preview, or logs a failure row with the error or timeout reason.

## Setup
1. Add Google Drive OAuth2 credentials and set the source folder ID to watch and the destination folder ID where transcripts are saved.
2. Create a Gladia HTTP Header Auth credential (header name `x-gladia-key`) and select it on the Gladia upload, job start, and result request steps.
3. Add Google Sheets OAuth2 credentials and set the spreadsheet ID and sheet tab name for both the success and failure logging steps.
4. (Optional) Adjust `wait_seconds` and `max_attempts` to match your typical audio length and Gladia processing time.

## Requirements
- Google account with a Google Drive OAuth2 credential that can read the source folder and write to the destination folder
- Google Sheets OAuth2 credential with access to the log spreadsheet
- Gladia account and API key (app.gladia.io), stored as an HTTP Header Auth credential with header name x-gladia-key
- A Google Sheet with columns for timestamp, source file name, duration, status, transcript link, and preview

## Customization
- Adjust wait_seconds and max_attempts to match your typical audio length and Gladia processing time
- Point the trigger at a different source folder ID, and change the destination folder ID where transcripts are saved
- Edit the Markdown template to change how metadata and speaker utterances are laid out
- Enable Gladia diarization or summarization in the job request if you want speaker labels or a summary line
- Change the trigger interval if once-per-minute polling is more frequent than you need

## Additional info
Gladia bills per minute of audio, so cost scales with file length (check current Gladia pricing). For long recordings, raise max_attempts so polling does not give up before the job finishes. The workflow logs both successes and failures to the sheet, so a failed row still records its reason rather than disappearing. It runs on both n8n Cloud and self-hosted, since it uses only core HTTP Request nodes and no community node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
