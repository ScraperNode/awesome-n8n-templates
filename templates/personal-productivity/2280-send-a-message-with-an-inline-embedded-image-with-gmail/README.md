# ⚡ Send a message with an inline embedded image with Gmail

> ⚡ **3,839 views** · ⚡ [Personal Productivity](../)

## Description

The built-in Gmail node doesn't yet support embedding images within the body of the email, but you can pull this off using the HTTP node, and this template shows you how.

## Requirements
- A Gmail account

## How it works
The workflow downloads an image, converts it into the format that the Gmail API expects (base64), packages it into a multipart MIME email and uses the HTTP node to send it.

## 🔗 Nodes Used

HTTP Request, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
