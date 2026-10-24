# 🔬 Send monthly missing document reminders with Google Drive, Sheets, and Chatwork

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs monthly to check each client’s previous-month folder in Google Drive for missing required documents, sends a Chatwork reminder listing missing categories, and updates a Google Sheets tracker to avoid duplicate reminders.

## How it works
1. Runs on a schedule at 12:00 on the 10th day of every month.
2. Calculates the previous month’s folder prefix (Reiwa format) and loads the client list from a Google Sheets “clients” sheet.
3. Skips any client whose Google Sheets “last_reminder” equals today’s date to prevent duplicate reminders.
4. For each remaining client, searches Google Drive for the previous-month folder under the client’s parent folder and lists its subfolders.
5. Filters the subfolders to only those listed in the client’s comma-separated “required_folders” field and checks each one via the Google Drive API to confirm it contains at least one non-folder file.
6. Compiles a list of required document subfolders that contain no files. If any are empty, sends a Chatwork reminder listing those categories and updates “last_reminder” in Google Sheets to today.

## Setup
1. Create a Google Sheet with a sheet named “clients” and columns for client_name, folder_id (Google Drive parent folder ID), chatwork_room_id, required_folders (comma-separated), and last_reminder (YYYY-MM-DD).
2. Set up Google Sheets OAuth2 credentials in n8n and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID.
3. Set up Google Drive OAuth2 credentials (also used by the HTTP Request node) and ensure your Drive folder structure includes a previous-month folder named like “R{year}.{month}月” under each client’s parent folder.
4. Set up a Chatwork API credential and ensure each client row contains the correct Chatwork room ID for reminders.

## Requirements
- An n8n environment with the n8n-nodes-chatwork community node installed, Google Sheets and Google Drive OAuth2 credentials, and a Chatwork API credential.

## Additional info
Set the workflow timezone to Asia/Tokyo. Monthly folder names must include the Reiwa year and month prefix, for example R8.9月 for September 2026. Required subfolder names must exactly match required_folders in Google Sheets. The workflow detects empty existing subfolders; it does not report missing monthly folders or required subfolders that have not been created.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
