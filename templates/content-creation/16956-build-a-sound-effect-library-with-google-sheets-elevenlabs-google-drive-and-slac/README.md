# 🎬 Build a sound effect library with Google Sheets, ElevenLabs, Google Drive and Slack

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually or every 15 minutes to read queued sound-effect prompts from Google Sheets, generate MP3s via the ElevenLabs sound-generation API, upload them to Google Drive, update each row with status and a file link, and post a run recap to Slack.

## How it works
1. Runs manually or on a 15-minute schedule.
2. Reads all rows from a Google Sheets tab and selects a capped batch where Status is blank or Queued and Description is present, clamping DurationSeconds and PromptInfluence to valid ranges.
3. Sends each selected Description to the ElevenLabs sound-generation API to generate an MP3 file.
4. Uploads the returned MP3 to a specified Google Drive folder using a deterministic filename based on the sheet row.
5. Updates the matching Google Sheets row to Done with the Google Drive link and timestamp, or to Failed with error notes and timestamp if generation or upload fails.
6. Counts how many rows succeeded or failed in the run and posts a one-line recap message to a selected Slack channel.

## Setup
1. Add an ElevenLabs HTTP Header Auth credential (xi-api-key) and select it in the ElevenLabs request step.
2. Connect Google Sheets OAuth2 credentials and set the spreadsheet and sheet tab in the read and update steps.
3. Connect Google Drive OAuth2 credentials and choose the target folder (and drive, if applicable) for MP3 uploads.
4. Connect Slack credentials and select the channel where the recap message is posted.
5. Ensure your Google Sheet includes the columns Description, DurationSeconds, PromptInfluence, Status, Link, Notes, GeneratedAt, and a row_number field used to match updates.

## Requirements
- ElevenLabs account and API key, stored as an HTTP Header Auth credential that sends xi-api-key
- Google Sheets OAuth2 credential to read and update the queue sheet
- Google Drive OAuth2 credential to upload the generated MP3s
- Slack credential to post the run recap to a channel
- A Google Sheet with columns Description, DurationSeconds, PromptInfluence, Status, Link, Notes, GeneratedAt, and a row_number field used to match updates

## Customization
- Switch between manual runs and the 15-minute schedule, or change the interval
- Adjust the batch cap so each run processes more or fewer rows
- Change the clamp ranges for DurationSeconds and PromptInfluence
- Edit the deterministic filename pattern used for Drive uploads
- Reword the one-line Slack recap, or point it at a different channel

## Additional info
ElevenLabs bills by credits, so cost scales with the number of queued rows and their durations. The workflow only picks up rows where Status is blank or Queued and Description is present, which lets the sheet double as the work queue. Failed rows are marked Failed with an error note and timestamp instead of being skipped silently, so you can fix and re-queue them. It runs on both n8n Cloud and self-hosted, since it uses core nodes only and no community node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
