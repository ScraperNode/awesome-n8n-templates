# 🎬 Create real estate listing videos with Google Sheets, Airtable and Zvid

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs on a schedule or manually, reads the next unprocessed property listing from Google Sheets or Airtable, builds and validates a Zvid vertical video project, and renders an MP4 listing reel with optional music, then stores the resulting video URL back in Google Sheets.

## How it works
1. Runs daily at 9am (or on manual execution) and loads branding, source, and render settings.
2. Reads listings from Google Sheets or fetches records from Airtable, then selects the first item with an empty Status field.
3. Normalizes the listing fields (address, price, beds/baths/sqft, photos, and agent details) and stops with an error if required data like Address or at least two photo URLs is missing.
4. Checks the configured music URL and removes it from the project if the file is unreachable, errors, or exceeds the configured size limit.
5. Builds a Zvid Instagram Reel–style project JSON from the listing data and validates it with Zvid’s free validation endpoint to get a credit estimate and any warnings.
6. If dryRun is enabled, optionally saves a draft project to the Zvid editor and outputs a preview summary instead of rendering.
7. If dryRun is disabled, submits the Zvid render job, polls until completion or timeout, and outputs a run summary with the final video URL.
8. In Google Sheets mode, updates the source row with Status=done and the VideoUrl, then optionally downloads the rendered video file for review.

## Setup
1. Install the community node package `@zvid/n8n-nodes-zvid` and create a Zvid API credential (API key with base URL `https://api.zvid.io`) for the Zvid nodes.
2. Choose a source in the Config node (sheet or airtable) and fill in the required IDs (Google Sheets document and sheet name, or Airtable base ID/table/view).
3. For Google Sheets, ensure your sheet has headers like Address, City, Price, Beds, Baths, Sqft, Photo1–Photo5, AgentName, AgentPhone, AgentPhotoUrl, Status, and VideoUrl, and leave Status empty for listings you want rendered.
4. For Airtable, add an HTTP Bearer Auth credential with a read-capable Airtable personal access token and ensure records include the needed fields (especially Address, Photo URLs, and Status).
5. Review and customize branding and media settings in Config (brandName, contactUrl, colors, fonts, musicUrl, and statusDoneValue), then set dryRun=true for preview-only or dryRun=false to render and spend credits.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
