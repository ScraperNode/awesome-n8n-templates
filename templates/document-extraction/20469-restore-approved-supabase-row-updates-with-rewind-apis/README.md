# 🔬 Restore approved Supabase row updates with Rewind APIs

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Run an approved recovery job for a Supabase row update captured with Rewind. Check for later edits, conditionally restore the saved fields, and report the outcome. Capture and human approval happen separately; verify the restored row directly in Supabase.

## How it works
1. Run manually during setup; enable the schedule after the disposable-data checks pass.
2. Validate the two service origins and connection name.
3. Claim one human-approved Rewind recovery job.
4. Validate its supported update, table alias and row ID.
5. Read Supabase and compare the current revision and recorded fields.
6. Restore conditionally when they match; preserve newer edits otherwise.
7. Report the outcome to Rewind, then independently inspect Supabase.

## Setup
1. Connect Rewind before the write, capture a supported update, and approve recovery separately.
2. Install the connector and disposable demo table from https://rewind.kanishq.dev/#connect in a development project.
3. Select Rewind worker Header Auth on Claim approved job and Report outcome.
4. Select Supabase apikey Header Auth on Read current resource and Conditional restore.
5. Configure both service origins and the capture connection name. Keep inactive; test an approved restore, then a newer-edit conflict. Verify both directly in Supabase before enabling the schedule.

## Requirements
- A Rewind account, registered Supabase row, installed connector RPCs, and separate worker/server credentials stored in n8n. No credentials are included.

## Additional info
Before connecting credentials, try the [two-case browser demo](https://rewind.kanishq.dev/demo?from=n8n_template). Capture the example change, preview it and approve a simulated undo. Then reset, capture again, make the later edit to 11 seats and approve: recovery should stop and preserve the newer edit. This changes only sample data in your browser. The demo links to guided setup and help without signing in. Rewind's beta remains free; your provider costs are separate.

Supports registered Supabase row updates and supported scalar fields. It does not undo inserts, deletes, trigger side effects, sent messages, or other workflow actions. A worker success report is not independent verification. Inspect unknown outcomes manually before attempting any further restore.

Try one disposable recovery with the [complete setup guide](https://rewind.kanishq.dev/n8n-supabase-recovery), starting with the [capture companion](https://n8n.io/workflows/20420-capture-supabase-row-updates-and-record-recovery-receipts-with-rewind/) before the write. Approve the recorded change in Rewind, then run this worker and independently verify the row.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
