# 🔬 Validate sales CSVs and generate review ZIPs with forms

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Validate uploaded sales CSVs, flag duplicate or conflicting orders, and compare them with previously released batches. Save an exact review, approve or reject the accepted rows through an authenticated form, and download a ZIP with the CSV, issues, report and decision audit.

## How it works
1. Receive a UTF-8 sales CSV and a unique batch ID through an authenticated n8n Form. Only configured users can submit or review batches.
2. Validate required headers, calendar dates, amounts and currency precision. Preserve additional columns. Keep one copy of identical rows and hold conflicting duplicate order groups.
3. Compare eligible orders with the release registry in an n8n Data Table. Exclude identical previously released orders and hold historical conflicts.
4. Save an immutable review snapshot with a hash, source-record references, issue details and separate totals per currency. Return a draft review ZIP.
5. Use the second authenticated form to download the exact saved review, approve its accepted rows or reject the batch. Approval requires the exact hash and an explicit confirmation.
6. Commit the decision receipt and released orders together through a conditional registry update. Repeated identical decisions do not release orders again; stale reviews and competing updates are blocked.
7. Return report.json, issues.csv, audit.json and either draft-sales.csv or released-sales.csv. Approval prepares a file for manual import; it does not import into an external system.

## Setup
1. Import the workflow into your n8n project. Create a Data Table with five string columns: record_key, kind, payload_json, owner_token and updated_at. Add exactly one initial row: record_key and kind both registry, payload_json {"orders":[],"decisions":{},"revision":0}, owner_token initial, and updated_at an ISO timestamp. Do not add another registry row to an existing table. The companion setup utility in the downloadable project package can create this fresh table instead.
2. Copy the Data Table ID into stateTableId in Configure intake and authenticate and Configure review and authenticate. Replace allowedReviewers in both nodes with the authorized n8n user emails. Keep n8n User Auth and Include User in Output enabled on both form triggers. Run Run credential-free demo to inspect a synthetic ZIP without writing review records.
3. Prepare a UTF-8 CSV with headers order_id, order_date, amount and currency, using one order per row. Run the intake form with a unique batch ID, upload the CSV and select its delimiter. Inspect report.json and the draft CSV. Enter batch_id and review_hash into the second form and choose download, approve or reject. Approval requires the exact confirmation RELEASE ACCEPTED ROWS. Test with synthetic data before publishing your configured forms.

## Requirements
- n8n with Data Tables and n8n-user Form authentication. Tested locally on Docker n8n 2.28.6. Built-in nodes; no external API credentials are required by the runtime workflow. One UTF-8 CSV per upload, with comma, semicolon or tab delimiter. Required headers: order_id, order_date, amount, currency. One order per row; supported currencies: USD, EUR, GBP, THB, JPY and KWD. Limits: 1,000 input rows, 4,000,000 upload bytes and 1,000,000 text characters. The release registry supports 5,000 orders, 1,000 decisions and 4,000,000 serialized characters. Run one intake at a time.

## Customization
- Preserve extra source columns or rename your export headers to the required schema. Use a separate release registry for each deliberately defined business scope. Set authorized reviewer emails and the review decision lifetime in both Configure nodes. The default lifetime is 24 hours. Changes to validation rules, supported currencies, limits or external destinations require code changes and new tests. Preserve exact-review hashes and conditional decision persistence.

## Additional info
The registry records orders released by this workflow, not proof of an external import or payment. Only accepted rows are released; unresolved rows remain in issues.csv. CSV formula prefixes are escaped while report.json keeps canonical values. If release history changes, create a fresh review under a new batch ID before approval. Stored reviews have a 24-hour decision window by default; downloads remain available. Duplicate batch IDs are detected but intake has no atomic unique constraint, so run one intake at a time. Do not edit stored registry JSON. Version 2.0.1: unused helper functions were removed and JavaScript syntax was normalized without changing nodes, connections, authentication or outputs. Tests: 25 core tests, 20 isolated native n8n scenarios, 22 ZIP checks, 25 CSV comparisons and nine download-output comparisons passed. Current native tests use synthetic authenticated-user fixtures; a live browser check of the new forms and n8n Cloud execution remain untested. The official sticky-note helper 13868 was executed with renameNodes=false and its notes were manually reviewed.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
