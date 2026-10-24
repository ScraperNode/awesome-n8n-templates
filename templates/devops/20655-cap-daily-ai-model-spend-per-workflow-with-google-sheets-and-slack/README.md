# ⚙️ Cap daily AI model spend per workflow with Google Sheets and Slack

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow caps per-workflow daily AI spend by tracking token usage in an n8n Data Table, looking up budgets and model pricing in Google Sheets, and sending one-time threshold alerts plus a daily spend summary to Slack.

## How it works
1. Receives an Execute Workflow call from another workflow with an action of either check (pre-flight) or record (post-call) and the workflow name plus usage or estimates.
2. Loads budget rules and Slack channel mappings from a Google Sheets “Budgets” tab and model token pricing from a “Model Prices” tab.
3. Resolves the matching budget row (or a default), applies the configured UTC offset to determine the current budget day, and looks up today’s spend row in an n8n Data Table ledger.
4. For action=check, calculates whether the estimated cost fits inside the remaining daily cap and returns an allowed/blocked decision to the calling workflow.
5. For action=record, prices the actual token usage using the Google Sheets rates (or a fallback rate for unknown models), updates the Data Table ledger totals, and posts a Slack alert only when a warning or cap threshold is crossed.
6. Runs daily on a schedule, reads yesterday’s ledger entries from the Data Table, and posts a single Slack message summarizing spend by workflow (posting nothing if there were no entries).

## Setup
1. Create and connect Google Sheets credentials, then set the spreadsheet ID and add “Budgets” and “Model Prices” tabs with the columns described in the node notes (including a default budget row).
2. Create an n8n Data Table to act as the spend ledger with columns: dayKey, date, workflow, usd, calls, warned, and blocked, then set its Data Table ID in the ledger nodes.
3. Create and connect Slack credentials, then set the default Slack channel for the daily summary and ensure each budget row has a valid Slack channel name (or update the fallback channel value).
4. In each AI workflow you want to cap, call this workflow before the model with action=check and after the model with action=record, passing the workflow name and the model usage object (or estimates).

## 🔗 Nodes Used

Google Sheets, Slack, Execute Workflow Trigger, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
