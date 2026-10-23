# 🔬 Collect event feedback with Google Sheets and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow manually pulls event participants from Google Sheets, generates and stores a unique ID per participant, and creates personalized Gmail draft emails that include a pre-filled Google Forms link to collect missing feedback.

## How it works
1. Starts when you manually run the workflow.
2. Reads all participant rows from a Google Sheets spreadsheet.
3. Filters the list to participants whose “Food pref” field is empty.
4. Processes participants in batches and generates a unique ID for each participant if one is not already present.
5. Updates the participant’s row in Google Sheets with the generated ID.
6. Builds a personalized email body that includes a pre-filled Google Forms link containing the participant name and unique ID.
7. Creates a Gmail draft addressed to the participant, then continues to the next batch until all matching participants are processed.

## Setup
1. Add Google Sheets OAuth2 credentials and select your spreadsheet and sheet in both the read and update steps.
2. Add Gmail OAuth2 credentials for the account that should create the email drafts.
3. Ensure your Google Sheet includes columns for Name, Email, Food pref, and an ID field (plus row_number for updates) and adjust the filter if you use different column names.
4. Create or copy a Google Form and replace the form URL and entry parameters in the email message so the link is pre-filled with the participant’s ID and name.
5. Customize the email subject and message text to match your event and data-collection needs.

## 🔗 Nodes Used

Google Sheets, Gmail, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
