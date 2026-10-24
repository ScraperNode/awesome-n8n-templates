# 🔬 Update VNTANA product attributes from scheduled Excel (.xlsx) attachments

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every 15 minutes, checks a VNTANA product for a new XLSX attachment with a defined filename prefix, reads attribute_key and attribute_value rows from the spreadsheet, and replaces the product’s attributes in VNTANA with the values from that file.

## How it works
1. Runs on a schedule every 15 minutes.
2. Logs in to VNTANA with your account credentials to get an auth token.
3. Searches the target VNTANA product’s attachments and selects the newest XLSX file whose name starts with the configured prefix.
4. Skips processing if the latest matching attachment UUID was already handled in a previous run.
5. Downloads the XLSX file from VNTANA storage and converts it into JSON rows.
6. Builds a VNTANA attributes payload from the attribute_key and attribute_value columns and updates the product via the VNTANA Products API, replacing all existing attributes.

## Setup
1. Create n8n Variables named VNTANA_EMAIL and VNTANA_PASSWORD with your VNTANA login details.
2. Update the Config values for productUuid, clientUuid (workspace UUID), and productName for the product you want to update.
3. Set filePrefix to match the attachment naming convention (for example, attributes_completed_) and ensure the spreadsheet includes attribute_key and attribute_value column headers.

## Requirements
- VNTANA account with platform API access
- n8n Variables: VNTANA_EMAIL and VNTANA_PASSWORD
- A VNTANA product UUID and workspace (client) UUID
- A spreadsheet (.xlsx) with columns attribute_key and attribute_value, attached to the product in VNTANA

## Customization
- Change the schedule interval (default: 15 minutes) on the Schedule Trigger node
- Update filePrefix in the Config node to match your naming convention (default: attributes_completed_)
- Values in attribute_value can be plain strings or JSON strings — useful for structured data like multilingual hotspot annotations

## Additional info
Attribute values that are JSON objects should be serialized as strings in the spreadsheet (the VNTANA API stores all attributes as string key-value pairs).

The workflow uses n8n static data to track the last processed attachment UUID, so re-uploads of the same file will not trigger a re-run unless the attachment is deleted and re-added.

## 🔗 Nodes Used

HTTP Request, Spreadsheet File, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
