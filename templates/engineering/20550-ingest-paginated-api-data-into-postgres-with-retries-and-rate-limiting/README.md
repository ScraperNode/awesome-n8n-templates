# ⚒️ Ingest paginated API data into Postgres with retries and rate limiting

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow manually ingests data from any paginated HTTP API, normalizes each record, and upserts it into a PostgreSQL table, looping through pages with built-in retries and an optional wait between requests.

## How it works
1. Starts when you run the workflow manually.
2. Builds an API request configuration (URL, headers, pagination strategy, limits, retry settings) and initializes pagination state.
3. Calls the API via HTTP Request and returns the full response while retrying on failures.
4. Parses the response body, extracts the records from the configured JSON path, maps fields into the target database schema, and computes the next page/cursor/link to request.
5. Upserts the normalized batch into PostgreSQL using an INSERT ... ON CONFLICT statement when the page contains records.
6. Checks whether more pages remain (and the max-pages safety limit is not exceeded), waits briefly to respect rate limits, and repeats the fetch until pagination ends.
7. Outputs a final summary with pages processed and total records ingested, then ends the workflow.

## Setup
1. Update the API configuration in the code step (base URL, auth header/token, pagination type and parameters, response dataPath/cursorPath, and any static query parameters).
2. Add a PostgreSQL credential, and ensure the target table and unique key column exist and match the configured tableName/uniqueKey and field mappings.
3. Adjust operational limits such as limit, maxPages, maxRetries, retryWaitMs, and the wait delay between pages to fit the API’s rate limits and payload size.

## 🔗 Nodes Used

HTTP Request, Postgres

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
