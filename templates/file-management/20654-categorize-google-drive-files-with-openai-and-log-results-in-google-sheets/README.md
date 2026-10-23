# 📁 Categorize Google Drive files with OpenAI and log results in Google Sheets

> ⚡ **1 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow polls a Google Drive “Incoming” folder, uses an OpenAI-compatible Chat Completions API to classify files into predefined categories, moves them into matching subfolders under an “Organized” root, and appends an audit log row to Google Sheets with optional Slack/email notifications.

## How it works
1. Runs on a schedule (every few minutes) and loads configuration values, then reads a Google Sheets log to determine which files are new or need retrying.
2. Lists non-folder files in the configured Google Drive source folder, filters out already-processed items, and processes a capped batch one file at a time.
3. Detects each file’s type and, when enabled, downloads and extracts content from PDFs, Office files, spreadsheets, text files, or prepares images for vision; otherwise it falls back to filename and metadata only.
4. Sends file metadata and extracted text or image content to an OpenAI-compatible /chat/completions endpoint and parses/repairs the model’s JSON classification response.
5. Validates the category against the approved taxonomy and routes low-confidence, sensitive, or failed classifications to the default “Uncategorized” bucket for review.
6. Finds or creates the destination category folder in Google Drive, applies the configured duplicate-name strategy (keep, rename, or skip), and moves the file while preserving its ID and sharing.
7. Appends a per-file result row (SUCCESS, REVIEW, SKIPPED, or ERROR) to Google Sheets and optionally sends Slack/email notifications for review items, plus an optional daily summary.

## Setup
1. Add Google Drive OAuth2 credentials (used by both Google Drive nodes and Drive REST calls via HTTP Request) and set the SOURCE_FOLDER_ID and DESTINATION_ROOT_FOLDER_ID in the configuration.
2. Add Google Sheets OAuth2 credentials and set the LOG_SPREADSHEET_ID and LOG_SHEET_NAME to a sheet tab whose header matches the workflow’s log fields.
3. Add an HTTP Header Auth credential for your OpenAI-compatible API (Authorization: Bearer <API_KEY>) and confirm the AI_BASE_URL and AI_MODEL values.
4. Review and adjust CATEGORY_TAXONOMY, CONFIDENCE_THRESHOLD, SENSITIVE_CATEGORIES, DUPLICATE_STRATEGY, and processing limits (MAX_FILES_PER_RUN, MIN_FILE_AGE_SECONDS, MAX_ATTEMPTS) in the configuration.
5. (Optional) Enable the Slack and/or SMTP email nodes, add the required credentials, and set SLACK_CHANNEL and notification email addresses in the configuration.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
