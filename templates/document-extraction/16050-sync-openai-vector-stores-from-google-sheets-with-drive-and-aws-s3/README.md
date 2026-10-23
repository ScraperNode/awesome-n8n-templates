# 🔬 Sync OpenAI vector stores from Google Sheets with Drive and AWS S3

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every two minutes to sync a Google Sheets file queue with an OpenAI Vector Store by deleting outdated entries, downloading new files from Google Drive, AWS S3, or a URL, uploading them to OpenAI, and updating each row’s processing status.

## How it works
1. Runs every two minutes and reads all rows from a Google Sheets queue.
2. For rows marked as `outdated`, deletes the referenced file from the OpenAI Vector Store and updates the row status to `deleted` in Google Sheets.
3. Filters for rows that have a `file_url` and no status, then processes them one by one.
4. Downloads each file based on its URL pattern using Google Drive, AWS S3, or an HTTP download.
5. Uploads the downloaded file to OpenAI Files (purpose: assistants) and adds the returned file ID to the target OpenAI Vector Store.
6. Waits and polls the OpenAI Vector Store file status until it is `completed`, then marks the row as `active` in Google Sheets.
7. If the file status returns anything other than `completed` or `in_progress`, marks the row as `error` in Google Sheets and continues with the next item.

## Setup
1. Add credentials for Google Sheets OAuth2, OpenAI API, Google Drive OAuth2, and AWS (IAM) for S3 access.
2. Replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets steps and ensure the sheet includes `file_url`, `status`, `openai_file_id`, `last_updated`, and a `row_number` column used for updates.
3. Replace `YOUR_VECTOR_STORE_ID` in the OpenAI Vector Store delete, add, and poll HTTP requests.
4. Replace `YOUR_S3_BUCKET_NAME` in the AWS S3 download step.
5. Replace `YOUR_ARTICLES_DOMAIN` in the URL routing rules used to decide when to download via HTTP.

## Additional info
Contact

LinkedIn: linkedin.com/in/salman-mehboob-pro
Email: salmanmehboob1947@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, AWS S3, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
