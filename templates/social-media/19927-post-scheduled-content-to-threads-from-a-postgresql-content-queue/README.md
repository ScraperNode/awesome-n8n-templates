# 📱 Post scheduled content to Threads from a PostgreSQL content queue

> ⚡ **30 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs every four hours to pull the next scheduled post from a PostgreSQL content queue and publish it to Threads via the Threads Graph API, then updates the database record to mark the content as published.

## How it works
1. Runs every four hours on a schedule.
2. Queries PostgreSQL for the oldest queued record with status set to scheduled, returning the post text and optional image URL.
3. Checks whether a queued content record was found and stops if none exists.
4. Creates a Threads post container via the Threads Graph API, using IMAGE when an image_url is present and TEXT otherwise.
5. Publishes the created container via the Threads Graph API.
6. Updates the PostgreSQL record to set status to published and stores the publish timestamp.

## Setup
1. Create a PostgreSQL credential in n8n and ensure you have a content_queue table with the expected columns (id, post_text, image_url, status, scheduled_at, published_at).
2. Replace YOUR_THREADS_ACCESS_TOKEN in both HTTP requests with a valid Threads access token that has permission to publish.
3. Update the PostgreSQL queries if your table name, column names, or status values differ from the template.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
