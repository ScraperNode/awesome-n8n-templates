# 🔬 Reconcile Postgres records with an HTTP API and notify drift via Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs nightly to reconcile a Postgres table with records returned by an HTTP API, detect missing or mismatched rows, flag critical drift in the database, and post a drift summary (and critical alerts) to Slack.

## How it works
1. Runs every day at 03:00 on a schedule.
2. Reads all records from a Postgres table and fetches the current record list from an HTTP API endpoint.
3. Splits the API response into individual records and compares API and database rows by `id` to identify matches, missing records, and field-level differences.
4. Ignores configured “noise” fields, optionally limits comparison to a defined field list, and marks disagreements as critical when they involve specified critical fields.
5. For critical drift, updates the Postgres record to set a review flag and sends an immediate Slack message naming the affected record and critical fields.
6. Builds a once-per-run drift digest (including optional “only in API” and “only in database” cases) and posts the report to Slack only when drift is found.

## Setup
1. Add Postgres credentials and update the SQL query, target table, and review-flag column to match your schema.
2. Configure the HTTP API URL and set the API response field that contains the records array (for example, `data`).
3. Ensure both systems share a common key (default `id`) and align data types (for example, cast numeric fields in SQL) to avoid false positives.
4. Set your comparison policy in Drift Rules (fields to compare, fields to ignore, and which fields are considered critical).
5. Add Slack OAuth2 credentials and choose the Slack channel for the critical alert and the daily drift report messages.

## Requirements
- A Postgres database you can read, and write one column in
An HTTP endpoint that returns your records as JSON
A Slack workspace
No AI model and no paid service are needed

## Customization
- Drift Rules holds every editable value: which fields to compare, which to ignore as noise, and which count as critical
Clear compare_fields to compare every field both sides return, and let the ignore list do the filtering instead
Turn off report_when_only_in_api or report_when_only_in_database if a record that has not synced yet is normal for you
Change the schedule, raise max_rows_in_report, or point the Slack nodes at different channels for critical alerts and the digest

## Additional info
In simple language, Two systems are supposed to hold the same records. Over months they quietly stop agreeing, and nobody finds out until a customer complains about the wrong plan, the wrong price, or an account that should have been closed. This workflow is the thing that finds out, every night, before the customer does.

A WORKED EXAMPLE, using the exact data this template was tested against

Your database holds four customers:
  1  Acme Ltd     active  10
  2  Beta Inc     active  20
  3  Gamma GmbH   active  30
  4  Delta SA     active  40

Case 1 - the two sides agree. The API returns the same four records. Slack stays completely quiet, which is the point: you are not paged for a clean night. The run itself still finishes through its "Everything Matched" branch and records "Both systems agree on all 4 record(s) compared.", so when you open the execution you can tell a clean night apart from a workflow that silently did nothing.

Case 2 - a critical field disagrees. The API says Beta Inc is "archived" while your database still says "active". Status is on your critical list, so two things happen immediately: needs_review is set to true on that one row in your own database, and Slack gets a message naming record 2 and showing both values side by side. The other three rows are left completely untouched.

Case 3 - a minor field disagrees. The API spells record 3 as "Gamma GmbH (Europe)". Name is compared but is not critical, so this is real drift that waits for the digest instead. No database flag is written and nobody is interrupted at 3am over a spelling difference.

Case 4 - a record exists on one side only. Record 4 is in your database but not in the API, and a record 5 is in the API but not in your database. Both are named in the report, and you can switch either case off if a record that has not synced yet is normal for you.

WHAT IT DELIBERATELY DOES NOT DO

It never decides which side is right, and it never overwrites either system. Only a person knows whether the database or the API is correct. What does not scale by hand is working out WHICH handful of rows a person needs to open, and that is the part this automates.

TWO THINGS THAT WILL BITE YOU IF YOU SKIP THEM

Both sides must return the same field names for the fields you list in compare_fields. If one system calls it "status" and the other calls it "state", they will never match.

A Postgres numeric and a JSON number are different values, so "20.00" and 20 read as a difference on every single row. Cast in your SQL, exactly as the shipped query does with price::float.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
