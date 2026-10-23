# 🔬 Generate daily Etsy sales and ledger reports via Shop Operations API

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to pull recent Etsy receipts and payment-account ledger entries via a linked sub-workflow, then aggregates sales metrics by currency and fee totals by ledger type and outputs a consolidated report object for downstream accounting or BI tools.

## How it works
1. Runs every day on a schedule.
2. Sets the reporting window and maximum record count used for all Etsy queries.
3. Calls a separate Etsy Shop Operations workflow to fetch receipts for the configured date range.
4. Calls the same Etsy Shop Operations workflow to fetch payment-account ledger entries for the same date range.
5. Aggregates receipts into per-currency totals (orders, revenue, shipping, tax, discounts, and average order value) and groups ledger amounts by ledger type.
6. Outputs the final report payload (including summaries plus the raw receipts and ledger entries) for use in other steps like saving to a database or sending by email.

## Setup
1. Set up Etsy OAuth credentials in the workflow that performs the Etsy API calls (the Etsy Shop Operations sub-workflow).
2. In both Execute Workflow steps, select the Etsy Shop Operations workflow to run by filling in the referenced workflow ID.
3. Update the reporting window and record limit in the Configuration step (for example, days_back and max_records).
4. Add a downstream step to store or send the report (for example, Google Sheets, Notion, Airtable, email, or a database).

## 🔗 Nodes Used

Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
