# 🔬 Archive queued WeChat articles from Google Sheets to Google Drive with ReadGZH

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Archive public WeChat articles from a Google Sheets reading queue into Google Drive as Markdown. This workflow processes a bounded batch, checks for duplicate URLs, and writes the result and file link back to each queue row.

## How it works
1. Start the workflow manually. It reads the Queue sheet and selects rows marked pending, using a unique queue_id to track each article.
2. Validate the supplied WeChat article or ReadGZH share URL and check for duplicates already archived or in progress. Process the selected batch one row at a time.
3. Call the ReadGZH API to extract article Markdown, then check the returned content and create a UTF-8 Markdown file.
4. Upload the file to the configured Google Drive folder and write the outcome, file link, error message if any, and update time back to the matching sheet row.
5. Record invalid URLs and extraction errors per row. An uncertain Drive upload is marked needs_review rather than uploaded again automatically. Sheet-write failures stop execution; this workflow does not guarantee exactly-once delivery.

## Setup
1. Create a sheet named Queue with columns queue_id, article_url, status, output_url, error, updated_at. Give every row a unique queue_id using letters, digits, underscores or hyphens, up to 64 characters. Add a public WeChat article or ReadGZH share URL and set status to pending to opt in.
2. In Queue settings, set spreadsheetId and folderId, and adjust sheetName if needed. Connect your Google Sheets and Google Drive credentials. Ensure n8n can reach api.readgzh.site over HTTPS. Optional: configure Header Auth credentials on Fetch article with Authorization: Bearer followed by your own ReadGZH API key. Keep keys in credentials, never in shared JSON.
3. Run manually without overlapping executions. maxBatch defaults to five rows per run. Before retrying a processing or needs_review row, inspect the target Drive folder and any existing output_url to avoid duplicate files. Confirm the archived content before using it for research or an AI summary.

## Requirements
- An n8n instance with outbound HTTPS access, a Google Sheets queue and a Google Drive folder accessible to your connected credentials. ReadGZH provides limited anonymous access; extraction may consume credits. Images remain remote links, and private, deleted, paid or otherwise restricted articles may fail.

## Customization
- Adjust maxBatch from 1 to 20 to suit your queue. The template archives Markdown without requiring an LLM subscription. You can extend it with your own downstream knowledge or AI workflow after checking the article title, ending, tables and image-dependent passages against the original.

## Additional info
Maintainer disclosure: this template is provided by the ReadGZH project.

- [ReadGZH — WeChat article reader](https://readgzh.site/)
- [API documentation and current usage limits](https://readgzh.site/docs)
- [WeChat to Markdown guide](https://readgzh.site/guides/wechat-to-markdown)

The workflow processes article URLs supplied in your queue. It does not search all WeChat content or retrieve a complete account history.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
