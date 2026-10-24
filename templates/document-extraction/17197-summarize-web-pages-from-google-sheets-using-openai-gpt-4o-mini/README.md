# 🔬 Summarize web pages from Google Sheets using OpenAI GPT-4o-mini

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow reads a list of web page URLs from Google Sheets, fetches each page, and uses OpenAI Chat Completions to generate a factual title, short summary, key points, topic, and confidence score, then writes the results back to the same sheet.

## How it works
1. Starts when you manually execute the workflow.
2. Loads run settings (maximum pages per run and the OpenAI model) and reads rows from the `pages` tab in Google Sheets.
3. Selects up to the configured limit of rows that have a URL but no existing summary, normalizes/validates the URL, and skips duplicates.
4. Fetches each web page over HTTP and extracts plain text (including the HTML title) for summarization.
5. Sends the page text to the OpenAI Chat Completions API with instructions to return strict JSON containing title, summary, key points, topic, and confidence.
6. Parses the OpenAI response, marks rows as `done` when a real summary is produced (or `failed` with blank fields if the page or API call fails), and updates the matching rows in Google Sheets by `row_number`.

## Setup
1. Create or use a Google Sheet with a tab named `pages` that includes columns `row_number` and `url`, plus `title`, `summary`, `key_points`, `topic`, `confidence`, `status`, and `summarised_at` for the workflow to fill.
2. Add Google Sheets OAuth2 credentials and paste your Google Sheet URL into both Google Sheets nodes (read and update).
3. Add an OpenAI API credential for the OpenAI HTTP request node.
4. Optionally adjust `max_per_run` (1–100) and choose an allowed model (for example `gpt-4o-mini`) in the configuration step before running.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
