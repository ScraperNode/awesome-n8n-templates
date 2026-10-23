# 🎬 Create daily quote videos from Google Sheets with Zvid

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily (or manually) to pull the next unused quote from Google Sheets and generate a branded vertical MP4 using Zvid, then writes the finished video URL back to the sheet for review.

## How it works
1. Runs every day at 8am (or on manual start) and loads the workflow configuration values.
2. Reads all rows from a Google Sheets tab and selects the first row where the Status column is empty.
3. Builds a Zvid video project JSON using the quote, author, optional author note, and a rotating background video/music selection.
4. Validates the project through the official Zvid node and stops with a detailed error if the project is invalid.
5. If dryRun is enabled, saves the project as a draft in Zvid Editor and outputs an editor link and estimated render credits without updating the sheet.
6. With dryRun: false (the default), submits a paid Zvid render and waits until it completes, fails, or reaches the configured timeout.
7. After a successful render, updates the same Google Sheets row with Status=done and VideoUrl. The Watch video step downloads the finished MP4 for review inside n8n. Failed renders leave the row pending.

## Setup
1. Before configuring Zvid credentials, install @zvid/n8n-nodes-zvid from Settings → Community nodes. A workspace owner/admin may need to install it. On n8n Cloud, the owner can search for Zvid in the Nodes panel and install the verified integration. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io, then select it on every Zvid node.
2. Add a Google Sheets OAuth credential and select the same spreadsheet and sheet in both the read and update steps.
3. Create these exact headers: Quote, Author, AuthorNote, Status, VideoUrl. Fill Quote and Author; AuthorNote is optional. Leave Status and VideoUrl empty for rows waiting to render.
4. Customize Config with your channel handle, call to action, fonts, and colors. Run manually with dryRun: false (the default), which renders a video and spends Zvid credits. For an optional free editor draft and quote without a sheet update, set dryRun: true before running.
5. Open Watch video → Binary → data → View to review the MP4. Confirm your schedule and workflow timezone before activating the daily trigger.

## Requirements
- An n8n workspace with the verified Zvid integration, Google Sheets read/write access, and sufficient Zvid credits for rendering.

## Customization
- Customize channelName, ctaText, fonts, colors, musicVolume, and background overrides in Config. The five default backgrounds rotate by date; poolIndexOverride can pin a look. Confirm quote attribution before sharing.

## Additional info
All Zvid operations use the official Zvid node. The five included background videos and shared end-card image are verified at 1080×1920. Custom source media must fit your account’s input limits before rendering begins. The workflow returns a finished video and updates Google Sheets; social publishing is not included.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
