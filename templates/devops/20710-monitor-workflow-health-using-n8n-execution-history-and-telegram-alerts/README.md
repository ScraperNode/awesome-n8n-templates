# ⚙️ Monitor workflow health using n8n execution history and Telegram alerts

> ⚡ **16 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every 6 hours to audit your n8n instance by listing active workflows, reviewing their latest execution history, and compiling a health report, optionally sending alerts to Telegram when failures, repeated errors, or overdue runs are detected.

## How it works
1. Runs every 6 hours on a schedule trigger.
2. Uses the n8n API to list all active, non-archived workflows and excludes the monitor workflow itself.
3. Iterates through each workflow, fetching its metadata and the last five executions from the n8n API.
4. Analyzes execution statuses to flag workflows that have a failed last run, repeated recent failures, or an overdue expected run interval (if configured).
5. Builds a consolidated health report summarizing checked workflows and any alert details, including failed node and sanitized error message when available.
6. Sends the report to Telegram when at least one workflow requires attention.

## Setup
1. Create or select an n8n API credential with read access to workflows and executions, and assign it to the n8n API steps.
2. (Optional) Configure a Telegram bot credential, replace the chat ID, and enable the Telegram step to receive alerts.
3. (Optional) Define expected run intervals by workflow ID in the assessment code to enable inactivity/SLA alerts.
4. Execute the workflow once to validate the generated report, then activate it to run automatically every 6 hours.

## 🔗 Nodes Used

Slack, Telegram, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
