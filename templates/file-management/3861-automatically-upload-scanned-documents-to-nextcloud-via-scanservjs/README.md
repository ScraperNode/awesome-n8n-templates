# 📁 Automatically upload scanned documents to Nextcloud via ScanservJS

> ⚡ **650 views** · 📁 [File Management](../)

## Description

This workflow connects a USB scanner to Nextcloud via ScanservJS and the integrated API. It checks for new scans at a scheduled time (e.g., every 5 minutes). If there are any, they are automatically retrieved via HTTP request and then saved to a desired Nextcloud folder.

Ideal for home offices, offices, or maker projects with Raspberry Pi and network scanners.

![Bildschirmfoto 20250504 um 16.18.42.png](fileId:1264)

Nodes used:

- Schedule Trigger – starts the flow cyclically

- HTTP Request – retrieves document data from ScanservJS

- Nextcloud Node – uploads the file directly to your Nextcloud account

Requirements:

- Local installation of ScanservJS (e.g., on a Raspberry Pi)

- Configured USB scanner

![Bildschirmfoto 20250504 um 16.20.46.png](fileId:1265)

- Nextcloud access with write permissions in the target folder

## 🔗 Nodes Used

HTTP Request, Nextcloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
