# 📖 Query PostgreSQL from Slack using Google Sheets metadata and Gemini

> ⚡ **10 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow lets Slack users ask natural-language questions about a PostgreSQL database, uses Google Sheets metadata plus live schema data to generate and validate a safe read-only SQL query with Google Gemini, executes it, and replies in Slack with a formatted answer.

## How it works
1. Triggers when the Slack app is mentioned in a channel.
2. Extracts the user’s question text, loads table definitions from Google Sheets, and builds a list of allowed tables.
3. Queries PostgreSQL system catalogs for the selected tables’ columns and keys, then combines that with the Google Sheets descriptions into a structured schema context.
4. Sends the question and schema context to Google Gemini to generate a single read-only SQL query in JSON.
5. Validates the generated SQL to ensure it is a single SELECT-only query, and if it fails, asks Google Gemini once to regenerate and revalidates.
6. Executes the validated SQL against PostgreSQL and packages the rows into a results object.
7. Uses Google Gemini to turn the query results into a Slack-formatted response (or a polite failure message) and posts it back to the originating Slack channel.

## Setup
1. Create and install a Slack App with a bot user, enable Event Subscriptions for app mentions, add scopes like chat:write and app_mentions:read, then connect the Slack bot token in n8n and set the target channel in the trigger and reply steps.
2. Add PostgreSQL credentials in n8n for the database you want to query.
3. Create a Google Sheet with table metadata (at minimum “Table Name” and “Description”, plus any optional fields used), connect Google Sheets credentials, and set the document and sheet IDs.
4. Add a Google Gemini (PaLM) API credential and select the model for the SQL-generation step.
5. Publish the workflow and copy the Slack Trigger webhook URL into your Slack App’s Event Subscriptions settings, then invite the bot to the channel you want to query from.

## 🔗 Nodes Used

Google Sheets, Postgres, Slack, Slack Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
