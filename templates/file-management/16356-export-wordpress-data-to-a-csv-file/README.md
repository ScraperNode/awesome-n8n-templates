# 📁 Export WordPress data to a CSV file

> ⚡ **32 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow manually exports all records from a WordPress site, converts the returned JSON into a CSV file, and saves the CSV to disk on the n8n server.

## How it works
1. Starts when you manually click Execute in n8n.
2. Fetches all available items from your connected WordPress site via the WordPress API.
3. Converts the WordPress JSON response into a CSV file.
4. Writes the generated CSV to the n8n server as `data.csv`.

## Setup
1. Add WordPress API credentials in n8n (site URL, username, and an Application Password).
2. Choose the WordPress resource to export in the WordPress node and confirm the data shape matches what you want in the CSV.
3. Update the output file path/name in the file-writing step and ensure the target directory is writable on your n8n host (for example `/home/node/.n8n/data.csv`).

## 🔗 Nodes Used

Spreadsheet File, Write Binary File, Wordpress

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
