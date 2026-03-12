# 📁 Scheduled Google Sheets data backup to Google Drive

> ⚡ **214 views** · 📁 [File Management](../)

## Description

## Overview
This workflow regularly backs up a Google Sheet by exporting its data and saving it as a new file (CSV or XLSX) in a specified folder within your Google Drive. This ensures data redundancy and historical versions.

Use Case: Critical business data backup, audit trails, historical data snapshots.

## How It Works
This workflow operates in three main steps:

Scheduled Trigger:

A Cron node triggers the workflow at a set interval (e.g., daily, weekly).

Read Google Sheet Data:

A Google Sheets node reads all data from the specified tab of your target Google Sheet.

Upload to Google Drive:

A Google Drive node takes the data read from the sheet.

It converts the data into a file (e.g., CSV or XLSX format).

It then uploads this file to a pre-defined folder in your Google Drive, with a dynamic filename including the date for versioning.

## Setup Steps
To get this workflow up and running, follow these instructions:

Step 1: Create Google Sheets and Google Drive Credentials in n8n

In your n8n instance, go to Credentials in the left sidebar.

Ensure you have a "Google Sheets OAuth2 API" credential set up. If not, create one.

Ensure you have a "Google Drive OAuth2 API" credential set up. If not, create one.

Make note of their Credential Names.

Step 2: Prepare Your Google Sheet and Drive Folder

Source Google Sheet: Identify the Google Sheet you want to back up. Copy its Document ID (from the URL). Note the Sheet Name (or GID) of the specific tab you want to back up.

Destination Google Drive Folder: Go to your Google Drive (drive.google.com). Create a new folder for your backups (e.g., Google Sheets Backups). Copy the Folder ID from its URL.

Step 3: Import the Workflow JSON

Step 4: Configure the Nodes

Read Google Sheet Data Node:

Select your Google Sheets credential.

Replace YOUR_SOURCE_GOOGLE_SHEET_ID with the ID of the Google Sheet you want to back up.

Replace Sheet1 with the exact name of the tab you want to back up.

Upload Backup to Google Drive Node:

Select your Google Drive credential.

Replace YOUR_DESTINATION_GOOGLE_DRIVE_FOLDER_ID with the ID of the Google Drive folder where you want to store backups.

File Type: The fileType is set to csv. You can change this to xlsx if you prefer an Excel format for the backup (though CSV is often simpler for raw data backups).

Step 5: Activate and Test the Workflow

Click the "Activate" toggle button.

To test immediately, click "Execute Workflow".

Check your Google Drive backup folder. A new file named something like backup_Sheet1_2025-07-26.csv should appear.

## 🔗 Nodes Used

Cron, Google Sheets, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
