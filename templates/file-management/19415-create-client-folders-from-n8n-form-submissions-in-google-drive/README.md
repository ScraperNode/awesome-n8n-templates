# 📁 Create client folders from n8n form submissions in Google Drive

> ⚡ **2 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow collects new client details via an n8n Form and automatically creates a normalized, consistently named folder in Google Drive, returning the client fields along with the new folder ID and direct URL.

## How it works
1. Receives a new submission from an n8n Form that collects the client’s name, email, and company.
2. Cleans and normalizes the submitted fields (trims whitespace, lowercases the email) and generates a safe folder name in `YYYY-MM-DD - Company - Name` format.
3. Creates a new folder in Google Drive inside the configured parent drive and parent folder.
4. Outputs the normalized client details plus the created Google Drive folder name, folder ID, and a direct folder URL.

## Setup
1. Connect a Google Drive OAuth2 credential in the Google Drive folder-creation step.
2. Select the target parent Drive and parent Folder where new client folders should be created.
3. Run a test execution and submit the form using the Form Trigger test URL to verify the folder is created and the returned output includes the folder URL.

## 🔗 Nodes Used

Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
