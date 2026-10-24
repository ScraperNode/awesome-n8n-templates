# 🔬 Capture Supabase row updates and record recovery receipts with Rewind

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually updates a specific Supabase row via custom RPCs, captures verified before/after snapshots, and records the change as a recovery receipt in Rewind using HTTP requests.

## How it works
1. Runs manually to start a single test update.
2. Sets the Supabase project URL, Rewind base URL, table alias, target row UUID, patch fields, and connection name, then validates these inputs.
3. Calls a Supabase REST RPC to read the current row revision and verifies a valid version is returned.
4. Calls a Supabase REST RPC to apply the patch only if the expected version matches, returning atomic before/after snapshots and the new revision.
5. Builds and validates a Rewind operation payload including idempotency key, resource identifier, and the captured snapshots and revision.
6. Sends the payload to the Rewind API to record the operation for later approval and recovery.

## Setup
1. Use a development Supabase project, n8n, and a Rewind account. From https://rewind.kanishq.dev/#connect download and run the connector SQL, then the disposable demo-table SQL.
2. Create an HTTP Header Auth credential in n8n with the Supabase server secret as apikey. Select it on Read row and Capture update. Keep credentials only in n8n; none are included in this template.
3. Create an HTTP Header Auth credential in n8n for Rewind using `Authorization: Bearer <RECORDING_KEY>`, and select it for the Rewind recording request.
4. Update the Supabase project origin URL, Rewind base URL, alias, row UUID, patch JSON, and connection name in the configuration step to match your environment and Rewind worker connection.

## Customization
- Only adapt registered tables and existing scalar fields after testing. Updates only: no inserts, deletes, messages or pre-install recovery. Leave schedules inactive until tested.

## Additional info
Before connecting credentials, try the [two-case browser demo](https://rewind.kanishq.dev/demo?from=n8n_template). Capture the example change, preview it and approve a simulated undo. Then reset, capture again, make the later edit to 11 seats and approve: recovery should stop and preserve the newer edit. This changes only sample data in your browser. The demo links to guided setup and help without signing in. Rewind's beta remains free; your provider costs are separate.

Recovery is a separate workflow. A person reviews and approves the recorded change in Rewind; approval queues work. The matching worker checks the current revision before restoring. Verify the actual Supabase row after the worker runs. Check active/5 becomes inactive/3 and returns to active/5. Repeat with a later edit to confirm conflict protection. If receipt delivery fails, retry only Record operation with saved input; never repeat the provider update.

Try one disposable recovery with the [complete setup guide](https://rewind.kanishq.dev/n8n-supabase-recovery), using the [approved recovery companion](https://n8n.io/workflows/20469-restore-approved-supabase-row-updates-with-rewind-apis/) after capture and human approval.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
