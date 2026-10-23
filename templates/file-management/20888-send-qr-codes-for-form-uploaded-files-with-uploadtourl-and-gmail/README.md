# 📁 Send QR codes for form-uploaded files with UploadToURL and Gmail

> ⚡ **4 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow collects a file upload via an n8n Form, uploads it to UploadToURL to create a public link, generates a QR code for that link, and emails the QR code and direct URL to the submitter using Gmail.

## How it works
1. Receives a submission from an n8n Form that includes a project name, email address, and an uploaded document or image.
2. Uploads the submitted file to UploadToURL and returns a publicly accessible URL.
3. Generates a PNG QR code that encodes the public file URL.
4. Sends an HTML email via Gmail to the submitted email address with the QR code attached and the direct file link included in the message.

## Setup
1. Create and connect an UploadToURL credential, and confirm the file retention/expiry behavior (currently set to never expire in the workflow).
2. Create and connect a Gmail OAuth2 credential for the sender account used to email QR codes.
3. Publish the n8n Form and share its URL with users so they can upload files and provide their email address.

## 🔗 Nodes Used

Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
