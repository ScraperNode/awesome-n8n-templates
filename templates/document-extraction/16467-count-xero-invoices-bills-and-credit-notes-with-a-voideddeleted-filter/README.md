# 🔬 Count Xero invoices, bills, and credit notes with a voided/deleted filter

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on manual execution to count Xero Accounting records: sales invoices, bills, and sales/bill credit notes; with an optional filter to exclude VOIDED and DELETED statuses, returning a simple tally per record type.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sets an option that controls whether VOIDED and DELETED records are included in the counts.
3. Calls Xero’s Connections endpoint to retrieve the tenant ID(s) used to authenticate subsequent Accounting API requests.
4. Queries the Xero Accounting API for sales invoices (ACCREC) and bills (ACCPAY), paging through results and counting returned invoice records.
5. Queries the Xero Accounting API for sales credit notes (ACCRECCREDIT) and bill credit notes (ACCPAYCREDIT), paging through results and counting returned credit note records.
6. Combines the four tallies into a single output list of `{ type, count }` results.

## Setup
1. Create and select a Xero OAuth2 credential in n8n with access to the target Xero organisation(s).
2. If your Xero credential can access multiple tenants, adjust the workflow to target a single tenant if you need per-organisation counts.
3. Set `includeVoidedDeleted` to `true` if you want to include VOIDED and DELETED records; otherwise leave it `false` to exclude them.

## Requirements
- Xero OAuth2 credential in n8n

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
