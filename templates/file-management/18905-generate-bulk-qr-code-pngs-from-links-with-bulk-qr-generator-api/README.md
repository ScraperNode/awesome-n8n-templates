# 📁 Generate bulk QR code PNGs from links with Bulk QR Generator API

> ⚡ **2 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs on demand to turn a list of URLs or text strings into QR code PNG files using the [Bulk QR Generator](https://bulkqrgenerator.net/) public API, then saving one image per item to disk.

## How it works
1. Runs when you manually execute the workflow.
2. Builds a list of items (name and content) and constructs a Bulk QR Generator API URL for each QR code.
3. Processes the list one item at a time to stay within rate limits.
4. Calls `https://bulkqrgenerator.net/api/v1/qr` for each item and retrieves the QR code as a PNG file.
5. Saves each returned PNG as `qr-<name>.png` and continues until all items are processed.

## Setup
1. Edit the link list (name and url/text content) so each item generates the QR code you want.
2. If you use file saving, ensure the n8n instance has permission to write to the target filesystem path (or replace the file save step with Google Drive/Dropbox/Email).
3. Adjust QR parameters in the API URL (for example `size`, `margin`, `format`) if you need different output settings.

## 🔗 Nodes Used

HTTP Request, Write Binary File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
