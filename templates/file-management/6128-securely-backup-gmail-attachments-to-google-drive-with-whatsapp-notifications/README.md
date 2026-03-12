# 📁 Securely backup Gmail attachments to Google Drive with WhatsApp notifications

> ⚡ **269 views** · 📁 [File Management](../)

## Description

This automated n8n workflow securely backs up Gmail attachments to Google Drive by triggering on new emails, retrieving the attachments, and uploading them to a designated Drive folder. The process includes a delay to ensure reliable execution and notifies the user via WhatsApp upon completion.

## Good to Know
- The workflow triggers on new Gmail messages
- A short wait ensures proper processing
- Attachments are uploaded to Google Drive
- A WhatsApp message confirms the backup

## How It Works
- **New Email Received** - Initiates the workflow on new Gmail messages
- **Fetch Email Details** - Retrieves the new email message
- **Wait for Processing** - Adds a short delay for reliable processing
- **Process Attachment Data** - Processes the attachment data
- **Upload to Google Drive** - Uploads the attachment to Google Drive
- **Notify via WhatsApp** - Sends a WhatsApp message to confirm the backup

## How to Use
- Import the workflow into n8n
- Configure Gmail API credentials
- Set up Google Drive API credentials
- Configure WhatsApp API or integration credentials
- Test with a sample email containing an attachment
- Adjust the wait duration if needed

## Requirements
- Gmail API credentials
- Google Drive API credentials
- WhatsApp API or integration credentials

## Customizing This Workflow
- Modify the wait duration in the Wait node to optimize processing time
- Adjust the Code node to handle specific attachment types or folder destinations in Google Drive

## 🔗 Nodes Used

Google Drive, Gmail, Gmail Trigger, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
