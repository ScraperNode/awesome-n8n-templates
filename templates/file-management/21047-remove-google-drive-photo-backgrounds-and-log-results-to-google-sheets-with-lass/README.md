# 📁 Remove Google Drive photo backgrounds and log results to Google Sheets with LassoCut

> ⚡ **0 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new images, removes their backgrounds using LassoCut, saves the cut-outs back to Drive, and logs processing details (including errors and credits used) to a Google Sheets log.

## How it works
1. Triggers every minute when a new file is created in a specified Google Drive folder, or runs manually to process all files already in that folder.
2. Lists files in the input folder (for manual runs) and filters to JPEG/PNG/WebP images that are 22 MB or smaller.
3. Processes images one at a time by downloading each file from Google Drive and sending it to LassoCut to remove the background.
4. Uploads the cut-out image to a Google Drive output folder using a "-cutout" filename and moves the original file to a done folder.
5. If downloading, background removal, or uploading fails, moves the original file to a failed folder and captures the error details.
6. Appends one row per image to Google Sheets with links, dimensions, detected type, credits charged, and a processed/failed status.
7. Builds a run summary that counts processed and failed images and totals the credits used.

## Setup
1. Install the community node package n8n-nodes-lassocut and create a LassoCut API credential with your LassoCut API key.
2. Add Google Drive OAuth2 credentials for the Google Drive trigger and Drive actions, and a Google Sheets OAuth2 credential for the Google Sheets append step.
3. Create four Google Drive folders (input, output, done, failed) and paste their IDs/URLs into the workflow settings, then select the same input folder in the Google Drive trigger.
4. Create a Google Sheets spreadsheet (with a tab name matching the configured sheet name, such as "Log") and paste its ID/URL into the workflow settings.

## Requirements
- A LassoCut account (free accounts get 50 previews a month, up to 10 a day; a full-size image costs 1 credit)
- A Google account with Google Drive and Google Sheets

## Customization
- Set a background colour (for example ffffff for white) in the Settings node to get JPG cut-outs on a solid colour
- Switch size to "preview" in Settings to test for free before processing full-size images
- Add a Slack or Gmail node after "Build run summary" to get a report after each run

## Additional info
Built by the founder of LassoCut, who maintains the verified n8n-nodes-lassocut node.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
