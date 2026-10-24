# 🤝 Sync warehouse stock to GoHighLevel via SFTP, Google Drive, and webhook

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow syncs warehouse stock from XML files into GoHighLevel (LeadConnector) products using three entry points: a scheduled SFTP feed, a manual Google Drive test download, and a real-time webhook, creating or updating product records and stock quantities via the LeadConnector API.

## How it works
1. Runs on a schedule to list XML files on an SFTP server, selects the most recent matching stock file, parses its STOCK_BALANCE entries, and posts SKU stock counts to the LeadConnector stock-update endpoint.
2. Runs manually to download a stock XML file from Google Drive, parses STOCK_BALANCE entries, and searches LeadConnector custom object product records to decide whether each item needs an update or a create.
3. Updates existing GoHighLevel product records in LeadConnector with the latest stock-related fields when a matching product is found.
4. Creates new GoHighLevel product records in LeadConnector with SKU, name/description, and stock-related fields when no match is found.
5. Receives an HTTP POST webhook containing stock XML, extracts STOCK_BALANCE entries, optionally limits the batch size, and processes the items in batches.
6. For each webhook item, searches LeadConnector for a matching product and then updates the existing record or creates a new one in the configured products custom object.

## Setup
1. Add credentials for SFTP (for listing and downloading files), Google Drive OAuth2 (for manual testing), and a GoHighLevel/LeadConnector Private Integration token (used as the Bearer token in all HTTP requests).
2. Replace YOUR_GHL_LOCATION_ID and YOUR_GHL_PRODUCTS_OBJECT_ID in all LeadConnector custom object search/create/update requests, and replace the placeholder Bearer token in the stock-update request.
3. If you use the webhook path, copy the webhook URL from n8n and configure your ERP/WMS (or other source) to POST the stock XML payload to it.
4. If you use the Google Drive test path, set the Google Drive file ID for the XML file you want to download.
5. If you use the SFTP path, confirm the remote directory and filename pattern (e.g. /out-box/ and Distinct_Stock_Balance_*.xml) and adjust the schedule trigger to your preferred run times.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, FTP, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
