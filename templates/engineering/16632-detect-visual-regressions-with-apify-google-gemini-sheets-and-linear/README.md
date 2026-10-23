# ⚒️ Detect visual regressions with Apify, Google Gemini, Sheets and Linear

> ⚡ **7 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow generates baseline website screenshots with Apify, stores them in Google Drive, and logs the file IDs in Google Sheets, then runs scheduled visual regression checks by comparing new screenshots against the baselines with Google Gemini Vision and creating a consolidated Linear issue when changes are detected.

## How it works
1. Manually starts to backfill missing baselines by reading URLs from Google Sheets that do not yet have a stored base image.
2. For each missing baseline URL, calls Apify’s screenshot actor, downloads the rendered image, uploads it to Google Drive, and updates the matching Google Sheets row with the Drive file ID.
3. Runs weekly on a schedule and reads the list of webpages to test from Google Sheets.
4. For each webpage, downloads the baseline image from Google Drive and captures a fresh screenshot via Apify.
5. Sends both images to Google Gemini (vision) to detect visual differences and returns a structured list of regressions (text, number, image, color, or position).
6. Filters out pages with no detected changes, aggregates the remaining results, and creates a Linear issue containing the regression report.

## Setup
1. Add an Apify API token as HTTP Query Auth for both Apify screenshot requests.
2. Connect Google Sheets credentials and set the correct spreadsheet/sheet, ensuring columns exist for the page URL and the baseline Drive file ID.
3. Connect Google Drive credentials and set the destination folder for storing baseline images.
4. Add Google Gemini API credentials for the Gemini chat model used to compare screenshots.
5. Connect Linear credentials and select the target team ID for creating the regression report issue.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Linear, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
