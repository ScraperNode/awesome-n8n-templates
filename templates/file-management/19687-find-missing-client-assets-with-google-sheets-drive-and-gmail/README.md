# 📁 Find missing client assets with Google Sheets, Drive, and Gmail

> ⚡ **2 views** · 📁 [File Management](../)

## Description

## Quick overview
Help agency teams find missing client files, identify assets awaiting human review, and prepare Gmail reminder drafts. Compare a Google Sheets checklist with a staff-only Drive folder, then receive an internal readiness digest. Includes a credential-free demo and requires no AI API.

## How it works
1. Start manually with fictional demo data, or run the daily schedule after configuring live mode. The demo produces a report without connecting accounts.
2. Live mode reads the Requirements and History tabs, checks the intake folder, lists its direct files, and retrieves open Gmail draft IDs. Incomplete listings stop the run.
3. Match each asset using the filename pattern `project_id__requirement_id__description.ext`. A human records approval against the file ID and version; changed files require review again.
4. Report missing assets, requested corrections, pending reviews, and project readiness. Invalid checklist rows block client drafts; ambiguous matches and missing reviewed files require staff attention.
5. When actions are enabled, create eligible reminders grouped by client email and send an internal digest. Existing generated drafts, a draft-creation cooldown, and daily digest receipts help reduce duplicates.
6. Append a History receipt after each Gmail acknowledgement. Client emails remain unsent drafts for a person to review and send.

## Setup
1. Import the workflow, keep its default demo settings, and execute the entire workflow. Open **Preview and run report** to inspect the fictional results.
2. Create a Google Sheets spreadsheet with **Requirements** and **History** tabs. Copy the exact headers and initialization instructions from the canvas note, including the History seed row. Add your checklist and display due dates as `yyyy-mm-dd`.
3. Create one staff-only Drive folder. Place assets directly inside it using `project_id__requirement_id__description.ext`; use one file per checklist item. Nested folders and shortcuts are unsupported.
4. Connect Google Sheets, Drive, and Gmail OAuth credentials. Use the same account within each service across its read and write nodes, following the canvas instructions. Enter spreadsheet and folder IDs plus your internal recipient in **Edit template settings**.
5. Set `dataMode=live`, keep `enableEffects=false`, and run a complete preview. Test actions with addresses you control before enabling production. For scheduled operation, set `enableEffects=true`, keep `allowManualEffects=false`, and activate/publish the workflow. The default schedule is 09:00 in Asia/Bangkok.

## Requirements
- An n8n instance and Google Sheets, Drive, and Gmail OAuth credentials.
- A staff-maintained checklist, one flat intake folder, and someone responsible for reviewing files and client drafts.
- Built-in nodes only. No community nodes or AI API are required; hosting and account limits still apply.

## Customization
- Change the reminder window, draft-creation cooldown, and internal recipient in **Edit template settings**.
- Adjust the Schedule Trigger and workflow timezone.
- Replace checklist items with your deliverables and add client-facing correction instructions when a file needs changes.

## Additional info
The workflow checks file presence and recorded human approval; it does not validate document contents or provide a client upload portal. Client messages remain drafts. Internal digest emails are sent when actions are enabled.

Keep History intact and prevent overlapping executions. If Gmail succeeds but receipt storage fails, inspect Gmail and History before retrying: exactly-once delivery is not guaranteed.

Existing generated drafts suppress new drafts for the same client even when requirements change. Review their contents before sending. The cooldown starts at draft creation; a missing draft does not prove that an email was sent.

Supported ceilings are 200 requirements, 1,000 files, 5,000 History rows, 20 planned client drafts, and 500 mailbox drafts. Drive and Gmail results must fit in a complete single page; incomplete or paginated results stop the run. Sheets row limits are checked after reading.

For a controlled manual action test, enable both `enableEffects` and `allowManualEffects`, use addresses you control, then reset `allowManualEffects=false`.

Validation currently covers local logic and static configuration. Real n8n import, authenticated Google execution, and scheduled operation still need acceptance testing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
