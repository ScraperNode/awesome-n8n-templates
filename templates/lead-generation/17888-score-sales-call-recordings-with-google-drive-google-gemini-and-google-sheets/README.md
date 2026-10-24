# 🎣 Score sales call recordings with Google Drive, Google Gemini and Google Sheets

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new audio recordings, analyzes each call with Google Gemini to extract sentiment and lead-qualification details, and appends the structured results to a Google Sheets log.

## How it works
1. Triggers every minute when a new file is created in a specified Google Drive folder.
2. Checks whether the new file is an audio file and ignores anything that is not.
3. Downloads the audio file from Google Drive and processes files one at a time to avoid rate limits.
4. Sends the audio binary to Google Gemini (gemini-3.6-flash) to generate a JSON analysis including sentiment, lead qualification, objections, a summary, and recommended next actions.
5. Extracts the JSON output fields and appends them as a new row in a Google Sheets “Call Sheet,” including a timestamp.
6. Waits 30 seconds and continues with the next file in the batch.

## Setup
1. Connect Google Drive OAuth2 credentials and set the folder ID to watch for new call recordings.
2. Add a Google Gemini (PaLM) API credential and confirm the selected model (models/gemini-3.6-flash) is available in your project.
3. Connect Google Sheets OAuth2 credentials and update the target spreadsheet ID and sheet tab (for example, “Spreadsheet_Sentiment” → “Call Sheet”).
4. Ensure your Google Sheet has matching columns for sentiment, sentiment score, objection category, lead qualification, recommended action, follow-up status, prospect name, company name, and conversation summary.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
