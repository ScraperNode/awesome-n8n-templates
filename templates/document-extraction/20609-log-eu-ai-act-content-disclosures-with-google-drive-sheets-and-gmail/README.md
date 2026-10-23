# 🔬 Log EU AI Act content disclosures with Google Drive, Sheets, and Gmail

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive review folder for AI-generated assets, fingerprints each file with a SHA-256 hash, generates an EU AI Act Article 50 disclosure manifest, and logs everything to Google Sheets, routing items for Gmail-based human sign-off when required.

## How it works
1. Triggers when a new file is created in a specific Google Drive review folder.
2. Reads disclosure settings from a Google Sheets Settings tab, downloads the file from Google Drive, and calculates a SHA-256 hash of the file contents.
3. Classifies the asset by MIME type/extension and determines which EU AI Act Article 50 disclosure duties apply, including whether human sign-off is required.
4. Builds a JSON disclosure manifest (including a visible label and schema.org JSON-LD) and saves it back to the Google Drive review folder beside the asset.
5. Writes or updates a row in a Google Sheets Register tab with the file details, hash, duties, manifest file ID, reviewer, and current status.
6. If sign-off is required, sends the reviewer an email via Gmail with what to confirm and instructions to mark the row as signed off in the register; otherwise, moves the file straight to a Google Drive approved folder.
7. Runs hourly to read the register, moves newly signed-off files to the approved folder, and updates the register to mark them as moved/published with a timestamp.

## Setup
1. Create Google Drive folders for review and approved content, then paste their folder IDs into the workflow where indicated.
2. Create a Google Sheets spreadsheet with a Settings tab (Organisation, Role, Generation Tool, Label Wording, Publishes Public Interest Content, Reviewer Email) and a Register tab with the columns listed in the workflow notes.
3. Add Google Drive and Google Sheets credentials in n8n and set the correct spreadsheet ID in all Google Sheets steps.
4. Add a Gmail credential and ensure the reviewer email in the Settings tab is valid and can receive the sign-off notifications.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
