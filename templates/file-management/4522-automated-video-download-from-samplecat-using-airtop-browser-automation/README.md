# 📁 Automated video download from Sample.cat using Airtop Browser Automation

> ⚡ **1,454 views** · 📁 [File Management](../)

## Description

README

# Automating Video File Download from Sample.cat with Airtop.ai


## Use Case
Automating file downloads from web pages is useful for scenarios like bulk media retrieval, dataset access, or recurring content backups. This workflow ensures a hands-free, consistent process for retrieving downloadable content.


## What This Automation Does
This automation performs a reliable download of a video file from a specified webpage using the following steps:

- Initiates an Airtop browser session.
- Opens a specified URL containing downloadable media.
- Interacts with the page to click the download button.
- Waits for the file to be processed and made available.
- Retrieves metadata to confirm availability.
- Downloads the file.
- Terminates the browser session to clean up resources.


## How It Works
1. **Manual Trigger**: Activated by user test.
2. **Session**: Starts an Airtop browser session.
3. **Window**: Navigates to `https://sample.cat/en/webm`.
4. **Interaction**: Simulates a click on the download button for the video titled “SD 640x360 (Seawater, drone view video, 30 FPS)”.
5. **Wait**: Pauses for 10 seconds to allow the file to be ready for download.
6. **Get File Data**: Checks for downloadable files in the session.
7. **Download File**: Retrieves the file using its ID.
8. **Terminate**: Ends the browser session to free up resources.


## Setup Requirements
1. [Airtop API Key](https://portal.airtop.ai/api-keys) — required to authenticate API calls.


## Next Steps
- **Enhance with Retry Logic**: Loop file availability check until `status = available` for more robust automation.
- **Customize File Targets**: Dynamically pass URLs and button descriptors for multi-source downloads.
- **Connect to Storage**: Pipe downloaded files to cloud storage or databases for archiving.

Read more about [automating file downloads from the web](https://www.airtop.ai/automations/simple-file-download-n8n)

## 🔗 Nodes Used

Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
