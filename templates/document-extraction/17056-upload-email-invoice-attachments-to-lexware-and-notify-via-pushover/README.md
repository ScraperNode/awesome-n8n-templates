# 🔬 Upload email invoice attachments to Lexware and notify via Pushover

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches an IMAP inbox for new emails, extracts each attachment, uploads the files to the Lexware Files API as vouchers, and sends a Pushover notification once the upload completes.

## How it works
1. Triggers when a new email is received. The connection is established via IMAP.
2. Extracts all email attachments and splits them into individual file items.
3. Uploads each attachment to the Lexware API endpoint for file uploads, setting the file type to "voucher".
4. Sends a Pushover notification confirming that the invoice file(s) were uploaded.

## Setup
1. Configure IMAP credentials for the mailbox you want to monitor.
2. Add an HTTP Bearer token credential for the Lexware API and ensure the token has access to upload files.
3. Add Pushover API credentials, set your Pushover user key, and adjust the notification message if needed. The priority should be at least ‘normal’ in order to receive an active notification.

## Customization
- Use Gmail as optional trigger

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Pushover

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
