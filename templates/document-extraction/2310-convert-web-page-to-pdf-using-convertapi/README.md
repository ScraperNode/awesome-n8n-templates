# 🔬 Convert web page to PDF using ConvertAPI

> ⚡ **3,018 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for?
For developers and organizations that need to convert **web page** to **PDF**.

## What problem is this workflow solving?
The web page conversion to PDF problem.

## What this workflow does

1. Converts web page to PDF.
2. Stores the PDF file in the local file system.

## How to customize this workflow to your needs
1. Open the `HTTP Request` node.
2. Adjust the URL parameter (all endpoints can be found [here](https://www.convertapi.com/api)).
3. Use your `API Token` for authentication. Pass the token in the `Authorization` header as a Bearer token. You can manage your API Tokens in the [User panel → Authentication](https://www.convertapi.com/a/authentication).
4. Change the parameter `url` to the webpage you want to convert to pdf
5. Optionally, additional `Body Parameters` can be added for the converter.

## 🔗 Nodes Used

HTTP Request, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
