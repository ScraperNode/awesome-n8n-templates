# 📁 Protect PDF with the password using ConvertAPI

> ⚡ **855 views** · 📁 [File Management](../)

## Description

## Who is this for?
For developers and organizations that need to protect **PDF** files with the password.

## What problem is this workflow solving?
PDF file protection problem.

## What this workflow does

1. Downloads the PDF file from the web.
2. Protects PDF file with the password.
3. Stores the PDF file in the local file system.

## How to customize this workflow to your needs
1. Open the `HTTP Request` node.
2. Adjust the URL parameter (all endpoints can be found [here](https://www.convertapi.com/api)).
3. Use your `API Token` for authentication. Pass the token in the `Authorization` header as a Bearer token. You can manage your API Tokens in the [User panel → Authentication](https://www.convertapi.com/a/authentication).
4. Change the password in the parameter `UserPassword`
5. Optionally, additional `Body Parameters` can be added for the converter.

## 🔗 Nodes Used

HTTP Request, Google Drive, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
