# ⚒️ Run incremental ETL from REST APIs to PostgreSQL with Slack schema alerts

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs every 15 minutes to incrementally pull updated order records from a REST API into PostgreSQL, automatically mapping and adapting the destination table when the source schema changes, and sending Slack alerts for extract failures, load failures, and detected schema changes.

## How it works
1. Runs on a schedule every 15 minutes and loads ETL configuration, the last saved watermark, and the current schema registry from PostgreSQL.
2. Calls the source REST API for records updated since the watermark (with a configurable overlap window) and fetches one page of results.
3. Parses the HTTP response, validates the payload, flattens one level of nested objects, de-duplicates records by primary key, and routes errors to a Slack webhook.
4. Infers field types from the extracted data, compares them to the PostgreSQL schema registry, and generates DDL to add new columns, widen column types, or deactivate missing fields.
5. Applies any schema updates in PostgreSQL, logs schema changes to tracking tables, and posts a schema-change notification to Slack.
6. Upserts the page into the PostgreSQL destination table (including a JSONB copy of the original record in _raw) and posts a Slack alert if the load fails.
7. Advances the PostgreSQL watermark only after a successful load and loops to fetch the next page until the source is drained or the per-run page limit is reached.

## Setup
1. Add PostgreSQL credentials to all PostgreSQL nodes and manually run the workflow once to create the ETL state tables, schema registry tables, and destination table.
2. Update the values in Set ETL Config (sourceUrl, recordsPath, pkField, updatedAtField, destTable, paging settings, and slackWebhookUrl) to match your API and database.
3. Add an HTTP Header Auth credential for the HTTP Request node if your API requires authentication, and adjust the query parameter names in the extract-request logic to match your API.
4. Create and configure a Slack incoming webhook for the target channel and paste its URL into the configuration so extract, schema-change, and load alerts can be delivered.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
