# 🔧 Process Jellyfin media requests with Google Sheets, Radarr, Sonarr, and Gmail

> ⚡ **35 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow monitors a Google Sheets-based media request form and automatically routes requests to Radarr (movies) or Sonarr (TV shows) via their APIs, then emails the requester through Gmail once the matching title is added for download.

## How it works
1. Triggers every 5 minutes when a new row is added to a specified Google Sheets worksheet.
2. Checks the “Request Type” field and routes the request to either the movie (Radarr) path or the TV show (Sonarr) path.
3. Searches Radarr or Sonarr for the requested “Title of Media” using the lookup API endpoint.
4. Filters the lookup results in JavaScript to pick the best matching title, prioritizing English originals and (for TV) allowing exact-title matches to support dubbed/anime requests.
5. Submits the selected movie or series to Radarr or Sonarr with a defined quality profile, root folder path, and an automatic search for downloads.
6. Sends a Gmail notification to the email address from the Google Form submission confirming the request is being downloaded.

## Setup
1. Connect Google Sheets credentials and set the Spreadsheet (documentId) and worksheet (sheetName) used by your Google Form responses.
2. Add HTTP Header Auth credentials for Radarr and Sonarr (API key header) and update the base URLs if they are not running on localhost ports 7878 and 8989.
3. Confirm Radarr/Sonarr settings match the workflow payload (qualityProfileId, rootFolderPath) and that download clients/indexers are configured in Radarr/Sonarr.
4. Connect Gmail credentials and verify the workflow can send email from your account to the requester address captured in the sheet.

## Requirements
- Sonarr, Radarr, Prowlarr (Full Stack) instances.  
- Google Form
- Google Sheet
- Download client

## 🔗 Nodes Used

HTTP Request, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
