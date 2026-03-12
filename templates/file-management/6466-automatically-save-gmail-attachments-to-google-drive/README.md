# 📁 Automatically save Gmail attachments to Google Drive

> ⚡ **2,433 views** · 📁 [File Management](../)

## Description

## Gmail Attachment Extractor to Google Drive

Description: This workflow monitors your Gmail inbox for new emails, specifically those with attachments, and automatically saves those attachments to a designated folder in your Google Drive.

Use Case: Automatically archive invoices, client documents, reports, or photos sent via email to a structured cloud storage.

## How It Works
This workflow operates in three main steps:

**Gmail New Email Trigger**:

The workflow starts with a Gmail Trigger node, set to monitor for new emails in your specified Gmail inbox (e.g., your primary inbox).

It checks for emails that contain attachments.

Conditional Check (Optional but Recommended):

An If node checks if the email actually has attachments. This prevents errors if an email without an attachment somehow triggers the workflow.

**Upload to Google Drive**:

A Google Drive node receives the email data and its attachments.

It's configured to upload these attachments to a specific folder in your Google Drive.

The attachments are named dynamically based on their original filenames.

## Setup Steps
To get this workflow up and running, follow these instructions:

Step 1: Create Gmail and Google Drive Credentials in n8n

In your n8n instance, click on Credentials in the left sidebar.

Click New Credential.

Search for and select "Gmail OAuth2 API" and follow the authentication steps with your Google account. Save it.

Click New Credential again.

Search for and select "Google Drive OAuth2 API" and follow the authentication steps with your Google account. Save it.

Make note of the Credential Names (e.g., "My Gmail Account", "My Google Drive Account").

Step 2: Create a Destination Folder in Google Drive

Go to your Google Drive (drive.google.com).

Create a new folder where you want to save the email attachments (e.g., Email Attachments Archive).

Copy the Folder ID from the URL (e.g., https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE).

## 🔗 Nodes Used

Google Drive, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
