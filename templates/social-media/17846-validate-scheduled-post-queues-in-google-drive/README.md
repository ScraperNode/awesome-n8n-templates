# 📱 Validate scheduled post queues in Google Drive

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This manual workflow audits a Google Drive “scheduled post” queue by validating folder names, scheduled times, and required files (tweet.txt and images). It reads each folder’s contents, flags invalid or duplicate schedules, and outputs a human-readable report plus structured results.

## How it works
1. Runs manually to start a validation pass.
2. Loads validation limits (image min/max and supported extensions) and lists all scheduled-post folders under a selected Google Drive root folder.
3. Parses each folder name in the `yyyy-MM-dd_HHmm__label` format to verify it contains a real date/time, converts it to UTC using your offset, checks that it is in the future, and warns on duplicate scheduled times.
4. Iterates through each scheduled-post folder and lists its files from Google Drive.
5. Validates each folder’s contents by requiring exactly one `tweet.txt`, enforcing the configured image count and extensions, and failing folders that contain nested folders or “already processed” marker files.
6. Generates a summary, a readable text report, and a JSON results array showing valid, warning, and invalid folders.

## Setup
1. Add a Google Drive credential with access to the queue and select the root folder that contains your scheduled-post folders.
2. In the validation settings, set `utcOffsetMinutes` to match the timezone used in folder names and adjust `minImages`, `maxImages`, and `supportedExtensions` as needed.
3. Ensure each scheduled-post folder follows `yyyy-MM-dd_HHmm__label` and contains exactly one `tweet.txt` plus the required number of supported image files before running the workflow.

## 🔗 Nodes Used

Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
