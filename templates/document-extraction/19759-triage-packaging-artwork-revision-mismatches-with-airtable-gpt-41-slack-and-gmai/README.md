# 🔬 Triage packaging artwork revision mismatches with Airtable, GPT-4.1, Slack and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow polls an Airtable PrintJobs register every 30 minutes, compares approved vs released packaging artwork revisions against a stored snapshot in Google Sheets, uses OpenAI to draft a brief explanation, then routes alerts to Slack or a Gmail draft and saves the new snapshot.

## How it works
1. Runs every 30 minutes on a schedule.
2. Fetches up to 100 print job records from Airtable and loads the last reported “release-register” snapshot from a Google Sheets “Snapshot” tab.
3. Validates required fields, compares each job’s approved/released/press-state signature to the prior snapshot, and stops with an error if the source data or snapshot is malformed.
4. If any changed jobs have approved and released revisions that differ, waits 60 seconds and refetches Airtable to confirm the same data is still present (debouncing unstable updates).
5. For stable mismatches, flags records as critical when the press state is plated or printing and uses OpenAI to generate a short JSON summary of the revision delta.
6. Posts the review brief to Slack for critical deltas or creates a Gmail draft for non-critical deltas, then updates the Google Sheets snapshot only after the Slack post or Gmail draft is confirmed.

## Setup
1. Add credentials for Airtable API access (HTTP Header Auth with a Bearer token), Google Sheets, Slack, Gmail, and an OpenAI chat model connection.
2. Update the configuration values in the workflow for your Airtable base ID and table name, Google Sheets document ID, Slack channel, and internal review email recipient.
3. Ensure your Airtable table includes the fields JobId, ApprovedRevision, ReleasedRevision, PressState (queued/plated/printing), ReprintExposure (number), and ChangeNotes.
4. Create a Google Sheets tab named “Snapshot” with columns Key and Snapshot, and add a row where Key is release-register and Snapshot is {}.

## Customization
- Press Risk Routing: Modify filter rules in Route Press Exposure to map additional printing statuses or adjust alert severity based on plant-specific workflow steps.
- Approval Settlement Window: Adjust the sleep duration in Debounce Artwork Changes (default: 60 seconds) to accommodate longer manual sync delays or multi-user editing cycles.
- Currency & Financial Formatting: Update Shape Revision Brief to prepend local currency symbols or format exposure thresholds for your accounting conventions.
- Alert & Delivery Destinations: Redirect Post Press Review Alert from Slack to Microsoft Teams, Discord, or an internal webhook/incident router.

## Additional info
Single-Writer Concurrency: Polling interval is set to 30 minutes; ensure workflow runtime plus debouncing stays well below this interval and configure execution mode as a single writer to avoid state-commit race conditions.

Pagination & Record Limits: Airtable queries are capped at 100 records and will fail closed if an API offset is returned; implement pagination before scaling past 100 concurrent active jobs.

Delivery-Guarded Snapshots: The Google Sheets snapshot advances only after a verified Slack delivery (ok: true) or Gmail draft creation (id confirmed), preventing missing revision alerts if delivery fails.

Data Privacy & Fallback Safety: AI nodes process strictly operational revision diffs andChangeNotes without personal identifiers; should AI generation timeout, deterministic row summaries are automatically passed as the fallback brief.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
