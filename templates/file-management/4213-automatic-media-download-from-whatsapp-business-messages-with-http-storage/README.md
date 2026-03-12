# 📁 Automatic media download from WhatsApp Business messages with HTTP storage

> ⚡ **2,652 views** · 📁 [File Management](../)

## Description

This workflow listens for incoming WhatsApp messages that contain media (e.g., images) and automatically downloads the media file using WhatsApp's private media URL.

- The trigger node activates when a WhatsApp message with media is received.
- The media ID is extracted from the message payload.
- A private media URL is retrieved using the media ID.
- The media file is downloaded using an authenticated HTTP request.


Ideal for:
- Archiving WhatsApp media to external systems.
- Triggering further automations based on received media.
- Integrating with cloud storage like Google Drive, Dropbox, or Amazon S3.


Set up steps
- Connect your WhatsApp Business API account.
- Add HTTP credentials for downloading media via private URL.
- Set up the webhook in your WhatsApp Business account.
- Extend the workflow as needed for your use case (e.g., file storage, alerts).

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
