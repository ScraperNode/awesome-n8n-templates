# 🔬 Sync PostgreSQL data to a Pinecone vector knowledge base using Gemini embeddings

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# PostgreSQL Auto-Discovery to Pinecone Vector Knowledge Base

Turn existing PostgreSQL databases into AI-searchable Pinecone vector knowledge bases without manually defining every table and column.

This template discovers your PostgreSQL schema, selects text-rich tables, builds readable embedding documents from rows, generates Google Gemini embeddings, upserts vectors into Pinecone, and tracks per-table sync state for incremental indexing.

It also includes a companion semantic search webhook workflow that embeds a user query, queries Pinecone, and returns source row metadata for RAG and AI assistant use cases.

## Features

- Dynamic PostgreSQL schema discovery using `information_schema`.
- No hard-coded schema, table, or column names.
- Primary key detection.
- Timestamp column detection for incremental sync.
- Text-rich column detection for embedding.
- Default sensitive-column exclusion.
- Configurable allowed schemas, allowed tables, excluded tables, excluded columns, and max rows per table.
- Google Gemini embeddings with `gemini-embedding-001`.
- Pinecone upsert using namespaces.
- Per-table sync state stored in n8n workflow static data.
- Fail-fast error behavior so PostgreSQL, Gemini, or Pinecone errors stop execution.
- Companion semantic search webhook for testing RAG retrieval.

## Architecture

The main workflow runs through these stages:

1. Manual or scheduled trigger.
2. Configuration.
3. PostgreSQL metadata discovery.
4. Table analysis and filtering.
5. Dynamic row fetching for selected tables.
6. Row-to-document transformation.
7. Gemini embedding batch preparation.
8. Gemini embedding generation.
9. Pinecone vector batch preparation.
10. Pinecone upsert.
11. Sync state update and summary output.


## How Auto-Discovery Works

The workflow inspects PostgreSQL metadata, groups columns by table, and chooses indexable tables based on:

- Allowed and excluded schema/table settings.
- Presence of a primary key, if required.
- Presence of text or JSON columns.
- Presence of timestamp columns, unless full-sync fallback is enabled.
- Sensitive-column filtering.

## Security Filtering

The workflow excludes sensitive columns before documents are built. By default, it filters column names containing:

- `password`
- `passwd`
- `pwd`
- `token`
- `secret`
- `api_key`
- `apikey`
- `access_key`
- `refresh_token`
- `reset_token`
- `otp`
- `pin`
- `session`
- `cookie`
- `hash`
- `salt`
- `private_key`
- `client_secret`

You can add more column names in the `excludedColumns` setting.

Important: review your database schema and compliance requirements before enabling indexing in production. This workflow provides safe defaults, but it cannot understand every business-specific sensitive field.

## Supported PostgreSQL Column Types

The workflow treats these as text-rich embedding candidates:

- `text`
- `varchar`
- `character varying`
- `char`
- `character`
- `json`
- `jsonb`

When `includeScalarContextColumns` is enabled, the document also includes useful scalar context from:

- integers and numeric types
- booleans
- dates
- timestamps
- UUIDs

## PostgreSQL Setup

Create or select a PostgreSQL credential in n8n with read-only access.

Recommended permissions:

```sql
GRANT USAGE ON SCHEMA public TO your_n8n_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO your_n8n_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO your_n8n_user;
```

For production, prefer a dedicated read-only user and restrict schemas with the workflow `allowedSchemas` setting.

## Pinecone Setup

1. Create a Pinecone index.
2. Use the same vector dimension as the embedding model.
3. This workflow requests `1536` dimensions from Gemini so it can use a Pinecone index configured for 1536-dimensional vectors.
4. Copy the index host, for example `your-index-abc123.svc.us-east-1-aws.pinecone.io`.
5. Create an n8n HTTP Header Auth credential:
   - Header name: `Api-Key`
   - Header value: your Pinecone API key.
6. Set `pineconeIndexHost` in the workflow configuration.

The workflow uses Pinecone namespaces in this format:

```text
postgres-{schema}.{table}
```

Example:

```text
postgres-public.tickets
```

## Gemini Setup

Create an n8n HTTP Header Auth credential:

- Header name: `x-goog-api-key`
- Header value: your Gemini API key from Google AI Studio

The default embedding model is:

```text
gemini-embedding-001
```

This workflow requests `geminiOutputDimensionality = 1536`. Pinecone index dimensions must match the vectors you upsert.

## Why HTTP Request Nodes Are Used

n8n has native AI/vector nodes, including embedding and Pinecone vector store nodes. This template uses HTTP Request nodes for Gemini and Pinecone because the workflow needs precise control over production indexing behavior:

- Stable custom vector IDs in the format `postgres::{schema}::{table}::{primary_key_value}`.
- Exact Pinecone metadata for tracing search results back to PostgreSQL rows.
- Dynamic namespaces for each discovered table.
- Batch-level Pinecone upsert handling.
- Sync state updates only after successful upserts.
- Raw Pinecone query responses for the companion semantic search API.

The native nodes are excellent for standard document ingestion and retrieval flows. For this auto-discovery template, HTTP requests make the workflow more predictable and easier to customize for database indexing.

## Main Workflow Configuration

Open the `Workflow Configuration` node and set:

| Field | Description |
| --- | --- |
| `allowedSchemas` | Comma-separated schemas to include. Default: `public`. Leave empty to allow all non-system schemas. |
| `allowedTables` | Optional comma-separated table names or `schema.table` names to include. |
| `excludedTables` | Tables to skip. Supports table names or `schema.table`. |
| `excludedColumns` | Additional columns to exclude. |
| `maxRowsPerTable` | Maximum rows fetched per table per run. Default: `10` for safe first runs. |
| `maxDocumentsPerRun` | Hard cap on documents sent to Gemini in one execution. Default: `10` so first tests finish quickly. |
| `fullSyncTablesWithoutTimestamp` | If true, tables without timestamp columns receive limited full syncs. |
| `skipTablesWithoutPrimaryKey` | If true, tables without primary keys are skipped. |
| `includeScalarContextColumns` | Adds scalar values such as status, price, priority, dates, and UUIDs to documents. |
| `maxDocumentCharacters` | Truncates very large documents before embedding. Default: `2000`. |
| `geminiEmbeddingModel` | Gemini embedding model. Default: `gemini-embedding-001`. |
| `geminiOutputDimensionality` | Output vector size requested from Gemini. Default: `1536`. |
| `geminiBatchSize` | Number of documents sent to Gemini per embeddings request. Default: `1` for safe first runs. |
| `geminiSmokeTestMode` | Sends only one document to Gemini. Default: `true`. Disable after one-document embedding works. |
| `pineconeIndexHost` | Your Pinecone index host. |
| `pineconeNamespacePrefix` | Namespace prefix. Default: `postgres-`. |
| `pineconeBatchSize` | Number of vectors per Pinecone upsert request. |

## Document Format

Each PostgreSQL row becomes a readable document for embedding:

```text
Database: postgres
Schema: public
Table: tickets
Id: 123
Updated At: 2026-05-17T12:00:00.000Z
Title: Payment failed for user
Description: Customer payment failed after webhook timeout
Status: open
Priority: high
```

The goal is to preserve business meaning instead of embedding raw JSON alone.

## Pinecone Vector Structure

Each vector is upserted like this:

```json
{
  "id": "postgres::public::tickets::123",
  "values": [0.0123, -0.0456],
  "metadata": {
    "source": "postgres",
    "schema": "public",
    "table": "tickets",
    "primary_key": "id",
    "primary_key_value": "123",
    "updated_at": "2026-05-17T12:00:00.000Z",
    "text_columns": "title,description",
    "document_columns": "id,updated_at,title,description,status,priority"
  }
}
```

Vector ID format:

```text
postgres::{schema}::{table}::{primary_key_value}
```

## Workflow Setup Steps

1. Import `workflow.json` into n8n.
2. Add your PostgreSQL credential to both PostgreSQL nodes.
3. Add your Gemini HTTP Header Auth credential to `Generate Gemini Embeddings`.
4. Add your Pinecone HTTP Header Auth credential to `Upsert Vectors to Pinecone`.
5. Open `Workflow Configuration`.
6. Set `allowedSchemas`, `pineconeIndexHost`, and any table or column filters.
7. Run manually with a small `maxRowsPerTable` for the first test.
8. Inspect the `Return Sync Summary` output.
9. Confirm vectors appear in Pinecone.
10. Enable the optional Cron trigger when ready.

Then import `semantic-search-workflow.json` and configure its Gemini and Pinecone credentials.

## Troubleshooting

### No tables are indexed

Check:

- `allowedSchemas` matches your schema.
- Tables have at least one supported text or JSON column.
- Tables have a primary key, or disable `skipTablesWithoutPrimaryKey`.
- Tables have a timestamp column, or enable `fullSyncTablesWithoutTimestamp`.

### Gemini embedding request fails

Check:

- HTTP Header Auth uses `x-goog-api-key`.
- The value is your Gemini API key from Google AI Studio.
- Your Google AI Studio project has access to `gemini-embedding-001`.

If you receive status `429`, Gemini is rate limiting the workflow or the Google AI Studio project does not have enough available quota. n8n may show a generic batching/rate-limit message for both cases.

First run with smoke-test settings:

- `geminiBatchSize`: `1`
- `geminiSmokeTestMode`: `true`
- `maxRowsPerTable`: `1`
- `maxDocumentsPerRun`: `1`
- `maxDocumentCharacters`: `1000`

The `Generate Gemini Embeddings` HTTP Request node should also have Options &gt; Batching enabled with:

- Items per Batch: `1`
- Batch Interval: `5000` or higher

This spaces out the HTTP requests after the documents have already been grouped into embedding payloads.

If the workflow still returns `429` with smoke-test mode enabled, check your Google AI Studio project:

- Billing is active.
- The project has remaining credits or monthly spend limit available.
- The API key belongs to the project you are checking.
- The project has access to `gemini-embedding-001`.
- No other workflow or app is using the same project limits at the same time.

Gemini embeddings are documented here: https://ai.google.dev/api/embeddings.

### Gemini embedding node keeps loading

This usually means the workflow is processing more documents than expected while also spacing requests out to avoid rate limits. For example, 100 documents with a 10 second batch interval can take more than 16 minutes before retries.

For a quick smoke test, use:

- `maxRowsPerTable`: `1`
- `maxDocumentsPerRun`: `1`
- `geminiBatchSize`: `1`
- `Generate Gemini Embeddings` &gt; Options &gt; Batching &gt; Batch Interval: `1000`

After the smoke test succeeds, increase the limits gradually.

### Pinecone upsert fails

Check:

- HTTP Header Auth uses `Api-Key`.
- `pineconeIndexHost` is the host only, without `https://`.
- The Pinecone index dimension is `1024`.
- Your Pinecone project and API key match the index.

### Incremental sync does not pick up rows

Check:

- Your table has one of the supported timestamp columns.
- The timestamp column is updated when rows change.
- The stored static data `lastSync` is not newer than your test row.

### Too many rows are embedded

Lower `maxRowsPerTable`, restrict `allowedTables`, or keep `fullSyncTablesWithoutTimestamp` disabled.

## Performance Considerations

- Start with a low `maxRowsPerTable` such as `1` or `10`.
- Use `allowedSchemas` and `allowedTables` to limit the first run.
- Add indexes on timestamp columns used for incremental sync.
- Keep `pineconeBatchSize` between `25` and `100`.
- Consider separate workflows for very large schemas or high-volume tables.
- Avoid embedding huge JSON blobs unless they are meaningful for search.

## Cost Considerations

Costs come primarily from:

- Gemini embedding tokens.
- Pinecone vector storage.
- Pinecone query and write operations.
- n8n execution time.

To control costs:

- Exclude low-value tables.
- Exclude noisy or sensitive columns.
- Reduce `maxDocumentCharacters`.
- Use incremental sync.
- Test with small row limits before enabling scheduled runs.

## Customization Guide

Common customizations:

- Add more timestamp candidates in `Filter Indexable Tables`.
- Add business-specific sensitive column names.
- Change namespace format.
- Include only selected scalar columns.
- Add tenant or environment metadata.
- Add a notification step after `Return Sync Summary`.
- Route failed batches to Slack, email, or an incident workflow.
- Add a second Pinecone query workflow for internal tools or chatbots.

## Use Cases

- AI customer support over tickets and helpdesk records.
- RAG systems over business databases.
- Internal company knowledge bases.
- CRM AI assistants.
- Support ticket semantic search.
- E-commerce product discovery.
- Real estate listing search.
- AI copilots over operational databases.
- Semantic search for audits, notes, cases, articles, and documentation.

## Assumptions

- PostgreSQL tables use primary keys for stable vector IDs.
- Best incremental sync results come from `updated_at`, `modified_at`, or `last_modified` columns.
- Pinecone index dimension matches `geminiOutputDimensionality`.
- Users review security settings before indexing production data.
- n8n can reach PostgreSQL, Gemini, and Pinecone from its runtime environment.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
