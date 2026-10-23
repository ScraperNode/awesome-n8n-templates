# 📁 Reconcile daily Google Drive CSV exports into a master file and send a Slack recap

> ⚡ **257 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs daily to reconcile multiple CSV exports from a Google Drive folder into a deduplicated master CSV, quarantine invalid or duplicate rows into a reject CSV, and post a run summary to a Slack channel.

## How it works
1. Runs every day at 06:00 (cron) on a schedule.
2. Searches a Google Drive folder for CSV files whose names do not include the "reconciled-" prefix, then downloads each file.
3. Parses each downloaded CSV into rows and records any files that cannot be parsed.
4. Validates each row for required columns and basic data types, deduplicates by order_id (keeping the first), and routes invalid, duplicate, or unreadable inputs into a reject dataset with reasons.
5. Builds and uploads a dated master CSV (reconciled-master-YYYY-MM-DD.csv) back to Google Drive when there are valid rows.
6. Builds and uploads a dated reject CSV (reconciled-rejects-YYYY-MM-DD.csv) back to Google Drive when any rows are quarantined.
7. Posts a recap message to Slack with counts for files read, rows processed, merged rows, quarantined rows, duplicates dropped, and unreadable files.

## Setup
1. Add Google Drive OAuth2 credentials and select the input folder to search in the Google Drive search step.
2. Set the target Google Drive folder and drive (e.g., My Drive) for the master and reject CSV uploads.
3. Add Slack credentials and choose the Slack channel where the recap message is posted.
4. Edit the reconciliation rules in the code step (required columns, dedup key column, and data type checks) to match your CSV export schema.
5. Ensure incoming CSV filenames do not start with "reconciled-" (or adjust the Google Drive query) so output files are not reprocessed on the next run.

## Requirements
- A Google Drive credential (OAuth2) with access to the folder the exports land in
- A Slack credential (bot token or OAuth2) for the recap channel

## Customization
- Edit the rules block at the top of the Reconcile node to change the required columns, the dedup key, or the format checks
- Change the schedule, or the "reconciled" output filename prefix
- Point the two upload nodes at a separate output folder (the List node already skips the reconciled- prefix, so writing back to the same folder is safe)
- Drop the Slack node to run with Google Drive only
- Feed only the count summary (never the file contents) to a cheap LLM for a smoother narrative recap line

## Additional info
Fully rule-based and deterministic: the same input always produces the same output, with no AI in the path. Auditability is the point. Every row that does not reach the master lands in a dated reject file with source_file, reject_type, and reject_reason columns, and the recap balances (rows in equals merged plus quarantined plus duplicates). It is resilient too: an unparseable file is logged as unreadable_file and the run carries on, no master is written when there are no valid rows, no reject file when nothing is quarantined, and the recap always posts. All sample data is fictional and credentials and folder selectors ship empty as placeholders.

## 🔗 Nodes Used

Slack, Google Drive, Schedule Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
