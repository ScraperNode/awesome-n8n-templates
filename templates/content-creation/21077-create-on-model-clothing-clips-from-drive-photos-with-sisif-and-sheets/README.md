# 🎬 Create on-model clothing clips from Drive photos with Sisif and Sheets

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Drop a mannequin or flat-lay garment photo into a Google Drive folder and get a 5-second on-model motion clip from Sisif. The workflow animates the exact garment on a model and logs each result (video URL, status, source file) to Google Sheets.

## How it works
1. Triggers when a new file is created in a specified Google Drive folder.
2. Filters out non-image files based on the Google Drive MIME type.
3. Downloads the image from Google Drive and converts it to a base64 string for API upload.
4. Sends the base64 image and an apparel prompt to Sisif to generate an on-model clip.
5. Polls Sisif every 30 seconds for the video status until it is READY, ERROR/REFUNDED, or 40 checks are reached.
6. Appends a row to Google Sheets with the file name, Drive file ID, Sisif video ID, status, video/poster URLs, error message, and timestamp (marking TIMEOUT if it never completes).

## Setup
1. Create a Sisif API key at https://sisif.ai/users/api-keys/ and add it to n8n as an HTTP Bearer Auth credential, then select it in the Sisif HTTP Request steps.
2. Connect your Google Drive OAuth2 account and set the specific folder to watch in the Google Drive trigger.
3. Connect your Google Sheets OAuth2 account and select the target spreadsheet and sheet in both Google Sheets append actions.
4. Create the Google Sheet columns `file_name`, `drive_file_id`, `sisif_video_id`, `status`, `video_url`, `poster_url`, `error_message`, and `processed_at` to match the appended fields.
5. Optionally edit the apparel prompt text to control the model, setting, and motion used by Sisif.

## Requirements
- A Sisif API key (https://sisif.ai/users/api-keys/), Google Drive and Google Sheets credentials, and a sheet with the headers file_name, drive_file_id, sisif_video_id, status, video_url, poster_url, error_message, processed_at.

## Customization
- Change the model, setting and camera move in Apparel Prompt Config. Add a Slack or email step after the Sheets row.

## Additional info
Who it's for: Fashion brands, resellers and marketplace sellers who shoot on mannequins or flat-lay and want on-model video without booking models.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
