# 🔬 Sync warehouse stock from SFTP to GoHighLevel and iPaper with alerts

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs three times daily to download a stock CSV from an SFTP server, validate and transform the rows, sync inventory updates to GoHighLevel and iPaper via HTTP APIs, write an acknowledgement CSV back to SFTP, and email low-stock and validation-error alerts.

## How it works
1. Runs on a cron schedule at 06:00, 14:00, and 22:00.
2. Lists the `/outbound/stock/` directory on an SFTP server, filters for `.csv` files, and downloads the matching stock file.
3. Parses the CSV, validates required fields and numeric values, normalizes data types, and flags items with stock quantities of 10 or less.
4. Sends a low-stock alert email when any items are flagged as critically low.
5. Builds and emails a validation error report when any rows fail validation.
6. Splits valid products into batches of 50 and updates GoHighLevel and iPaper in parallel via authenticated HTTP requests.
7. Generates an acknowledgement CSV for the processed SKUs, uploads it to `/inbound/acknowledgements/` on SFTP, and logs a completion summary.

## Setup
1. Create and select an SFTP credential for the workflow’s SFTP list, download, and upload steps.
2. Add HTTP header authentication credentials for the GoHighLevel and iPaper HTTP requests (GHL bearer token and iPaper API key).
3. Set the environment variables `IPAPER_API_URL`, `GHL_BASE_URL`, `NOTIFY_FROM_EMAIL`, and `NOTIFY_TO_EMAIL` in your n8n instance.
4. Confirm the SFTP paths `/outbound/stock/` and `/inbound/acknowledgements/` match your warehouse server’s directory structure and file naming conventions.
5. Configure your SMTP/Email Send node settings in n8n so the low-stock and error-report emails can be delivered.

## 🔗 Nodes Used

Send Email, HTTP Request, Spreadsheet File, FTP, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
