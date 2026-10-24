# 📋 Review agency asset readiness and approvals with Google Sheets and Gmail

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This manual workflow reads a Google Sheets tracker of projects, items, and version-specific review decisions to calculate readiness and generate a preview digest of missing assets, pending reviews, requested changes, and approvals, with an optional (disabled) Gmail test-send path that records delivery attempts in a Sheets ledger.

## How it works
1. Runs when you manually execute the workflow.
2. Loads the pilot configuration and blocks execution if the target Google Sheets spreadsheet ID is not set.
3. Reads the projects, items, decisions, and send_ledger tabs from Google Sheets.
4. Validates IDs, dates, receipt timestamps, and version-specific approval rules, then computes each project’s readiness plus an owner follow-up queue.
5. In preview mode, returns a readable summary (subject/body plus structured rows) without writing to Sheets or sending email.
6. In explicitly approved send-test mode, appends a reservation to the send_ledger sheet, rereads Sheets to confirm nothing changed, and only then sends a single test email via Gmail.
7. Records the Gmail result as sent or uncertain back into the send_ledger tab and verifies the outcome exists in the ledger.

## Setup
1. Create a Google Sheets workbook with four tabs named projects, items, decisions, and send_ledger and add the required header columns as described in the workflow notes.
2. Select an already-authorized Google Sheets OAuth2 credential on every Sheets node, verify the intended account and workbook access, and set spreadsheet_id in Pilot configuration. Creating or expanding access requires separate account-owner approval.
3. Keep mode=preview, allow_test_send=false, single_operator_confirmed=false, all recipient and approval fields blank, Gmail disabled and the workflow inactive. Run manually, one execution at a time, and inspect Return preview only. Preview writes no ledger rows and sends no email.
4. For an optional synthetic email test, first obtain separate approval of the sending account, one recipient and exact evaluation.digest content. Follow every embedded guarded-send configuration and reconciliation step. Do not enable Gmail or sending for preview; never blindly retry an ambiguous outcome.

## Additional info
### Purpose and audience

Help a small creative, web or marketing agency coordinator review missing assets, received work awaiting review, requested changes and approved current versions. This manual workflow reads a human-maintained Google Sheets tracker, calculates readiness from included required items, and produces an owner follow-up queue. Receipt, silence and approval of an older version never approve the current version.

### Connected apps and how it works

Uses built-in n8n nodes and Google Sheets. A Manual Trigger loads private configuration and reads projects, items, decisions and send_ledger. JavaScript validates IDs, types, dates, receipts and version-specific decisions. A strict branch returns a readable preview with project readiness, item status and suggested owner actions. Invalid or conflicting input fails closed.

Gmail is included only as an optional, disabled, separately approved synthetic test-send path. It reserves and rechecks an append-only ledger, current source data and explicit operator approval before sending. Its original email formatter differs from the readable preview proposal.

### Setup

The workflow's yellow notes contain the complete sheet headers, data types, copyable fictional sample rows, configuration fields and operating steps. Create a synthetic workbook with the four exact tab names, enter the provided headers and your fictional records, select an authorized Google Sheets credential on every Sheets node, and set spreadsheet_id in Pilot configuration. Keep mode=preview, allow_test_send=false, all recipient/approval fields blank, single_operator_confirmed=false and Gmail disabled. No external sample file or private repository document is needed.

### Usage

Run manually, one execution at a time, without activation or publication. Inspect Return preview only for evaluation, readable_items, proposed_subject and proposed_body. The preview writes no ledger rows and sends no email. A person maintains all receipts, versions, explicit decisions, owners and dates. Use the embedded example and fixed-clock instructions for a reproducible no-send check; restore the current clock afterward.

### Limitations and costs

This is a synthetic single-operator pilot. It does not watch uploads, review file contents, authenticate reviewers, infer approval or contact clients. Overlapping runs and concurrent edits are unsupported. Each source table is limited to 100 rows and the canonical snapshot to 40,000 characters. Sheets and Gmail are not a transaction: duplicate suppression is best-effort, and ambiguous sends require manual reconciliation rather than retries.

No AI service or paid add-on is required; existing n8n hosting, Google account costs and API quotas still apply. Historical testing used n8n 2.33.3: 65 acceptance assertions ran inside n8n, and four later no-email demo executions matched expected behavior. Additional local and schema checks are distinct from live execution; no fresh import of this final sanitized export is claimed. Existing OAuth grants worked, but reduced-scope setup and their complete effective scopes were not audited.

No measured time saving, revenue improvement, willingness to pay, uniqueness or production readiness is claimed.

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
