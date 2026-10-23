# 🔬 Translate audio transcripts with Gladia, Google Drive, and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a public media URL and target language via an n8n form, sends the audio/video to Gladia for transcription and translation, then saves a Markdown transcript file to Google Drive and logs the outcome (success or failure) to Google Sheets.

## How it works
1. Receives a form submission containing a publicly reachable audio/video URL and a target language code.
2. Starts a Gladia pre-recorded job with transcription enabled and translation configured for the requested target language.
3. Waits and repeatedly polls Gladia’s result URL until the job finishes, errors, or reaches the maximum number of attempts.
4. When Gladia reports the job as done, builds a Markdown file containing the original transcript, the translated transcript, and language metadata.
5. Uploads the Markdown file to Google Drive.
6. Appends a “Translated” row to Google Sheets with the media URL, detected language, target language, and a Drive link, or logs a “Failed” row with error details if any step fails.

## Setup
1. Add a Gladia API key using an HTTP Header Auth credential (header name `x-gladia-key`) and select it for both Gladia HTTP Request steps.
2. Connect Google Drive OAuth credentials and choose the destination folder where the Markdown translations should be saved.
3. Connect Google Sheets OAuth credentials and update the target spreadsheet and sheet tab used to append the “Translated” and “Failed” log rows.
4. Open the form URL from the trigger and test with a public media URL and a target language code (default is `en` if left blank).

## Requirements
- Gladia account with an API key (the free tier is enough to start) from gladia.io
- Google account with Google Drive access, connected over OAuth2, for the translation files
- Google account with Google Sheets access for the run log (the same Google account works)
- Recordings hosted at a publicly reachable URL, since Gladia fetches the media by link

## Customization
- Tune the polling in Prepare Config Values: change wait_seconds and max_attempts (default is 10 seconds times 60 attempts, about 10 minutes)
- Change the default target language in Prepare Config Values (it is en until you change it).
- Translate into several languages at once by adding more codes to target_languages in Start Gladia Translation
- Reshape the output in Build Translation File: change the sections, the header fields, or the file name
- Change destinations: pick a different Drive folder, log to another sheet or tab, or swap the Sheets log for Slack, email, or a database
- Swap the Form trigger for a webhook, a schedule, or a Drive-folder watcher to translate recordings automatically

## Additional info
The workflow uses only core n8n nodes, so it runs the same on n8n Cloud and self-hosted with nothing to install. Transcription and translation happen in a single Gladia pre-recorded call: you pass the media URL with translation turned on, Gladia auto-detects the source language, and the job returns both the original transcript and the translation together. Because that call is asynchronous, the workflow starts the job and then polls it on a Wait plus HTTP Request loop until Gladia returns done or the attempt limit is reached.

Both the success and the failure paths append to the same Google Sheet, so the log doubles as an audit trail: a finished run writes a Translated row with a link to the Drive file, and any API error or timeout writes a Failed row with the reason instead of failing silently. The Gladia calls and the Drive upload all use continue-on-error, so a single hiccup is recorded rather than fatal. All sample values in the template are fictional and no credentials, IDs, or real endpoints are included, so you only need to add your own Gladia, Google Drive, and Google Sheets connections to run it.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
