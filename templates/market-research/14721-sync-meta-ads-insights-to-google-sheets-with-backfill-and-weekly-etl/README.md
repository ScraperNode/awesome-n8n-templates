# 📊 Sync Meta Ads insights to Google Sheets with backfill and weekly ETL

> ⚡ **137 views** · 📊 [Market Research & Insights](../)

## Description

# Meta Ads Insights to Google Sheets (Backfill & Weekly Sync ETL)

This workflow provides a structured way to extract Meta Ads performance data and store it in Google Sheets for reporting, dashboarding, or further analysis.

It is designed as a lightweight, reliable ETL pipeline focused on stability, clarity, and ease of use, rather than building a full data warehouse solution.

## What This Workflow Does

At a high level, the system:

- Pulls Meta Ads Insights data via API
- Supports both historical backfill and automated incremental sync
- Splits large date ranges into manageable weekly chunks
- Handles pagination and retries automatically
- Filters out zero-spend records before storage
- Stores clean, structured data in Google Sheets
- Logs skipped or empty responses for traceability

## Architecture Overview
### Core Components
- n8n
- Meta Ads API
- Google Sheets

### Primary Data Outputs
- Account_A → Campaign-level data (weekly)
- Account_B → Ad-level data (daily breakdown)
- Account_A_Log / Account_B_Log → Logging for skipped or empty responses

## End-to-End Flow
### A) Dual Entry Points

The workflow supports two execution modes:

1. Historical Backfill (Manual Trigger)
Used to populate past data.

- Define start_date and end_date
- Workflow generates 7-day chunks
- Each chunk is processed sequentially

2. Incremental Sync (Scheduled Trigger)
Runs automatically every 7 days.

- Dynamically pulls last 7 days
- No manual input required

### B) Period Chunking

Large date ranges are split into weekly intervals.

- Prevents API overload
- Reduces risk of timeouts
- Ensures consistent data retrieval

### C) Data Extraction (Per Account)

Each period is processed for two separate data streams:

#### Account A
- Level: campaign
- Granularity: weekly

#### Account B
- Level: ad
- Granularity: daily (time_increment=1)

Both using pagination handling & fail-safe response handling

### D) Response Validation

Each API response is validated:

- Must contain a non-empty data array
- Invalid or empty responses are redirected to logging

This prevents corrupted or empty data from entering the dataset.

### E) Data Transformation

API responses are:

- Split into individual rows
- Normalized (numeric fields converted properly)
- Preserved in full structure (no schema trimming)

### F) Filtering Logic

Only meaningful data is stored:

- Records where spend != 0 are allowed
- Zero-spend rows are discarded

This keeps the dataset lean and relevant for reporting.

### G) Data Loading

Valid records are appended into Google Sheets:

- Account A → campaign-level table
- Account B → ad-level table

Each run adds new rows without overwriting previous data.

### H) Logging & Traceability

If a period returns:

- empty data
- or API anomaly

The workflow logs:

- status
- reason
- account
- date range
- execution ID
- timestamp

This creates a lightweight audit trail for debugging and monitoring.

## Safeguards Built In
- Pagination handling (auto-follow next page)
- Fail-safe handling for unstable API responses
- Execution-level traceability via logs
- Separation between transformation and filtering logic

## Google Sheets Schema
#### Account_A / Account_B

Includes:
- date range (start & stop)
- account, campaign, adset, and ad identifiers
- performance metrics (spend, impressions, clicks, etc.)
- action arrays and ranking fields

#### Log Sheets

Columns:

- status
- reason
- account
- since
- until
- execution_id
- timestamp

## Limitations (By Design)
- Append-only system (no deduplication)
- Re-running the same period will create duplicate rows
- No transactional guarantees (Google Sheets limitation)
- No concurrency control for parallel executions
- Not designed for real-time reporting

These constraints are intentional to keep the workflow simple and portable.

## When This Design Works Well
- Marketing reporting pipelines
- Looker Studio / dashboard data sources
- Small to medium datasets
- Teams without a data warehouse
- Lightweight ETL needs

## Setup Requirements
- Meta Ads API access (ads_read permission)
- Google Sheets (with required tabs)
- n8n instance (cloud or self-hosted)

## Summary
### This workflow focuses on:

- clarity over complexity
- reliability over completeness
- practical ETL over perfect data modeling

It is a solid foundation for building marketing data pipelines without heavy infrastructure.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
