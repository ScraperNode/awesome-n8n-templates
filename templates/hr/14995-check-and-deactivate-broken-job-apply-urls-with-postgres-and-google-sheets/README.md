# 👥 Check and deactivate broken job apply URLs with Postgres and Google Sheets

> ⚡ **55 views** · 👥 [HR & Recruitment](../)

## Description

Keep your job listings database clean without manual checks. Every three days, this workflow fetches all active jobs from your Postgres database, runs each application URL through a validation check, identifies dead links via HTTP status codes and soft-404 redirect detection, then marks failed entries as inactive in both Supabase and Google Sheets simultaneously.

## Who it's for

Teams running a job aggregator, career platform, or internal hiring tracker who store job listings in Postgres and want stale or broken apply links removed automatically — without waiting for user reports.

## How it works

1. A Schedule Trigger fires every 3 days
2. All active jobs are fetched from your Postgres (Supabase) database via a SQL query
3. A Prepare URLs node filters out any rows with missing, malformed, or non-HTTP URLs before they're checked
4. An HTTP Request node sends a HEAD request to each `apply_url`
5. A Find Dead Jobs code node analyzes each response and flags a job as dead if:
   - Status code is `404` or `410`
   - DNS resolution fails (`ENOTFOUND`)
   - Connection is refused (`ECONNREFUSED`)
   - A `301`/`302`/`307` redirect points to a different path — indicating the job was removed and the ATS is silently redirecting (soft-404 detection)
6. If dead jobs are found, an IF node routes them to both update nodes in parallel:
   - **Supabase (Postgres)** — status set to `inactive` via parameterized SQL
   - **Google Sheets** — row updated to reflect the new status
7. If no dead jobs are detected, the workflow exits cleanly with no writes

## Setup

1. Connect your **Postgres** credentials and confirm the query in the Fetch Active Jobs node matches your table and column names (`apply_url`, `job_hash`, `job_title`)
2. Connect your **Google Sheets** credentials and set the Resource ID and Sheet Name in the Mark Inactive node
3. Confirm the `inactive` status value in the Postgres update query matches what your app expects
4. (Optional) Adjust the soft-404 redirect detection logic in the Find Dead Jobs node if your ATS platforms use non-standard redirect patterns

## Database columns expected

`job_hash` (unique identifier), `apply_url`, `job_title`, `status`

## Requirements

- Self-hosted or cloud n8n instance
- Supabase (or any Postgres-compatible) database with an active jobs table
- Google Sheets with a matching jobs log

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
