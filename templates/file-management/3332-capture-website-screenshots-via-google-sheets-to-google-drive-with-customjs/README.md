# 📁 Capture website screenshots via Google Sheets to Google Drive with CustomJS

> ⚡ **2,625 views** · 📁 [File Management](../)

## Description

![workflow.png](fileId:1053)

# n8n Workflow: Automating Website Screenshots from Google Sheets

This n8n workflow captures screenshots of websites listed in a Google Sheet and saves them to Google Drive using the CustomJS PDF Toolkit.

[@custom-js/n8n-nodes-pdf-toolkit](@custom-js/n8n-nodes-pdf-toolkit)

## Features

- **Monitors** a Google Sheet for new rows with website URLs.
- **Captures** screenshots of the websites using the CustomJS PDF Toolkit.
- **Uploads** the screenshots to a specified Google Drive folder.

# Notice 
Community nodes can only be installed on self-hosted instances of n8n.

## Requirements

- **Self-hosted** n8n instance
- A **Google Sheets** document containing website URLs and Titles.
- A **Google Drive** folder to store the screenshots.
- A **CustomJS API key** for website screenshots.
- **n8n credentials** for Google Sheets and Google Drive.

## Workflow Steps

1. **Google Sheets Trigger**

   - Monitors a specified sheet for new rows.
   - Extracts the `URL` and `Title` from the row.

2. **Website Screenshot Node**

   - Uses CustomJS PDF Toolkit to take a screenshot of the given URL.

3. **Google Drive Upload**
   - Saves the screenshot to a specific Google Drive folder.
   - Uses the `Title` column as the filename.

## Setup Guide

### 1. Connect Google Sheets

- Ensure your Google Sheet has a column named `Url` for website URLs and `Name` for website names.
- Set up Google Sheets credentials in n8n.

### 2. Configure CustomJS API

- Sign up at [CustomJS](https://www.customjs.space).
- Retrieve your API key from the profile page.
![1.png](fileId:1054)
- Add your API key as n8n credentials.
![2.png](fileId:1052)

### 3. Set Up Google Drive

- Create a folder in Google Drive to store screenshots.
- Copy the folder ID and set it in the Google Drive node in n8n.

## Perfect for:

- **Website monitoring**
- **Generating visual archives of web pages**
- **Automating content curation**

This workflow streamlines the process of capturing and organizing website screenshots efficiently.

## 🔗 Nodes Used

Google Drive, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
