# 📁 Migrate SmartSuite record attachments into Monday.com file columns

> ⚡ **1 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow manually migrates file attachments from SmartSuite records to matching items in Monday.com by downloading each SmartSuite file and uploading it to a Monday files column based on a record-ID match.

## How it works
1. Starts when you run the workflow manually.
2. Fetches a batch of records from a SmartSuite table and converts each attachment in the specified file fields into an individual file task.
3. Processes files one by one and queries Monday.com to find the matching item by searching a specific text column for the SmartSuite record ID.
4. Skips files with no matching Monday.com item and continues with the next file.
5. For matched items, requests a temporary SmartSuite download URL, downloads the file, and uploads it to the configured Monday.com files column.
6. Waits briefly after each upload to stay within Monday.com API rate limits before continuing.

## Setup
1. Add your SmartSuite API key and workspace (Account-Id) in the configuration values, and set the SmartSuite table ID you want to migrate from.
2. Enter the SmartSuite file field slugs (comma-separated) for the attachment columns you want to migrate.
3. Add your Monday.com API key and set the board ID, the text column ID used to match SmartSuite record IDs, and the target files column ID.
4. Ensure each Monday.com item contains the corresponding SmartSuite record ID in the chosen text column so matching works.
5. Adjust the batch limit and offset values if you need to migrate the table in multiple pages.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
