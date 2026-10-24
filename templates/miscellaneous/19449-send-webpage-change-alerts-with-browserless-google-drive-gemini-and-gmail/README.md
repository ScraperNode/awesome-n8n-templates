# 🔧 Send webpage change alerts with Browserless, Google Drive, Gemini and Gmail

> ⚡ **23 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow checks a target webpage every 6 hours, captures and archives screenshots in Google Drive, and uses Google Gemini to compare the latest image to the previous one, emailing you via Gmail only when a meaningful change is detected.

## How it works
1. Runs every 6 hours on a schedule.
2. Loads the configured URL in Browserless, captures a screenshot, and uploads it to a chosen Google Drive folder with a timestamped filename.
3. If the URL has never been tracked before, saves the uploaded screenshot as the baseline in an n8n Data Table and sends a “baseline captured” email via Gmail.
4. If the URL has been tracked before, downloads the previously saved screenshot from Google Drive and bundles it with the new screenshot.
5. Sends both screenshots to Google Gemini to classify the update as either NO_CHANGE or CHANGED with a one-sentence description while ignoring trivial visual noise.
6. Updates the n8n Data Table with the latest Drive screenshot ID and timestamp, then emails the change description via Gmail only when Gemini reports CHANGED.

## Setup
1. Add credentials for Browserless, Google Drive, Gmail, and Google Gemini.
2. In the Configuration step, set the targetUrl, driveFolderId, and notifyEmail values for your environment.
3. Ensure the Google Drive folder you reference exists and your Drive credential has permission to upload and download files in it.
4. Run the workflow once manually to create the site_watch_state Data Table and capture the initial baseline before relying on the schedule.

## 🔗 Nodes Used

Google Drive, Gmail, Schedule Trigger, Google Gemini, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
