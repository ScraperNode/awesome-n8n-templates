# 📁 Get multiple attachments from Gmail and upload them to GDrive

> ⚡ **11,147 views** · 📁 [File Management](../)

## Description

This is a simple template to show how to extract multiple email attachments and return them as an iterable output. 

## How it works: 
The **Gmail Trigger** node detects any new email that has attachments. The **Code** node will then extract them as binary files and attaches them to the item. They can then be uploaded via the **Google Drive** node. 

## Setup steps:
- add your Gmail Credentials
- add your Google Drive Credentials
- Follow the official [n8n Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/) for help

## Feedback & Questions

If you have any questions or feedback about this workflow - Feel free to get in touch at [ria@n8n.io](mailto:ria@n8n.io)

## 🔗 Nodes Used

Function, Google Drive, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
