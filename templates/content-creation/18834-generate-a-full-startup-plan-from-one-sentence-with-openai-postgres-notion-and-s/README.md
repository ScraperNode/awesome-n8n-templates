# 🎬 Generate a full startup plan from one sentence with OpenAI, Postgres, Notion and Sheets

> ⚡ **10 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a one-sentence startup idea via an n8n form, uses OpenAI and SerpApi to generate a full startup plan, creates a PostgreSQL schema, publishes a live landing page via GitHub Gist, and exports deliverables to Google Drive, Notion, Google Sheets, Gmail, Slack, and Telegram.

## How it works
1. Receives a one-sentence startup idea through an n8n Form trigger.
2. Uses OpenAI to expand the idea into structured fields, searches Google results via SerpApi, and summarizes up to five competitors with pricing and features.
3. Uses OpenAI to generate target customer personas and a lean business model canvas based on the idea and competitor context.
4. Uses OpenAI to write a Markdown PRD, generate PostgreSQL CREATE TABLE statements, executes the SQL against a PostgreSQL database, and then generates an OpenAPI 3.0 YAML specification.
5. Uses OpenAI to generate a single-file HTML landing page, publishes it to GitHub Gist, and builds a live preview URL using htmlpreview.github.io.
6. Uses OpenAI to create marketing copy and a launch checklist, then generates an executive summary and estimates total OpenAI token cost.
7. Uploads the generated documents to Google Drive, creates a structured tracker page in Notion, logs a summary row in Google Sheets, and sends the final links via Gmail and Slack.
8. If the workflow fails, sends a Telegram alert with the error details.

## Setup
1. Create and select credentials for OpenAI (HTTP Header Auth), SerpApi (HTTP Query Auth with `api_key`), and a GitHub personal access token with `gist` scope (HTTP Header Auth).
2. Add a PostgreSQL credential for a dev/staging database, since the workflow runs generated CREATE TABLE statements.
3. Connect Google Drive, Google Sheets, Notion, Gmail, Slack, and Telegram credentials, and set your Telegram chat ID for failure alerts.
4. Update the Configuration values (OpenAI model, Notion parent page ID, Google Sheet ID, Google Drive folder ID, recipient email, Slack channel, and token cost rate).
5. Ensure your Google Sheet contains a tab named “Startup Ideas” with matching columns (Date, Product Name, Notion Link, Drive Folder, Live Preview, Estimated Cost USD).
6. Copy the Form trigger production URL and use it to submit ideas, and optionally set this workflow as the instance Error Workflow so the Telegram alert runs on failures.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Slack, Telegram, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
