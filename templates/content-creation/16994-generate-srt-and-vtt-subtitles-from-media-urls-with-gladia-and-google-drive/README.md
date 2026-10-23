# 🎬 Generate SRT and VTT subtitles from media URLs with Gladia and Google Drive

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a public media URL via an n8n form, sends it to Gladia to generate SRT and VTT subtitles, uploads the subtitle files to Google Drive, and returns Drive download links back in the form completion page.

## How it works
1. Receives a media URL (and optional title) from an n8n Form Trigger.
2. Submits the media URL to the Gladia pre-recorded transcription API with subtitles enabled for SRT and VTT output.
3. Waits and repeatedly polls Gladia for the job result until the status is done, or stops and fails if Gladia returns an error or the max-attempt limit is reached.
4. Extracts the SRT and VTT subtitle tracks from Gladia’s response, builds each one into a file, and stops with an error message if no subtitle tracks are returned.
5. Uploads the generated subtitle files to a specified Google Drive folder.
6. Displays a completion message in the form response containing the Google Drive links for the SRT and VTT files.

## Setup
1. Create an HTTP Header Auth credential for Gladia (header name `x-gladia-key`) and select it for the Gladia API request steps.
2. Connect a Google Drive OAuth2 credential and set the destination folder ID used for uploading subtitle files.
3. Update the polling interval and maximum attempts so the timeout fits your typical media length.
4. Publish the form and share the form URL so users can submit a public, direct audio/video file link.

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
