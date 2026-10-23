# 🔬 Create Xero AR/AP Markdown snapshots with optional OpenAI GPT summaries

> ⚡ **30 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on a schedule to pull outstanding customer invoices and supplier bills from Xero, ranks the top 5 by amount due, and generates a Markdown AR/AP snapshot (optionally adding an OpenAI-based narrative summary).

## How it works
1. Runs on a scheduled trigger (weekly by default).
2. Sets report metadata and Xero invoice filters for receivables (ACCREC) and payables (ACCPAY) with AmountDue > 0.
3. Fetches all matching authorised customer invoices and supplier bills from Xero.
4. Normalizes dates and amounts, calculates days outstanding, sorts by amount due, and keeps the top 5 items for each list.
5. Merges both lists and builds a Markdown snapshot with two tables and reporting notes.
6. Outputs the final snapshot data (and, if enabled, sends the Markdown to OpenAI via an AI Agent to prepend a short AI summary).

## Setup
1. Add a Xero OAuth2 credential and select the correct Xero tenant/organization ID used by the Xero nodes.
2. Update the tenant/organization value in the snapshot settings (replace `YOUR_XERO_TENANT_ID`) and adjust the cadence label if needed.
3. Configure the Schedule Trigger interval (weekly/monthly/quarterly/annual) to match your reporting rhythm.
4. Optional: add an OpenAI (chat model) credential and connect the Markdown output through the AI Agent path to generate an AI summary.
5. Connect the final output node to your delivery or storage destination (for example Email, Slack, Notion, or Google Sheets).

## 🔗 Nodes Used

Xero, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
