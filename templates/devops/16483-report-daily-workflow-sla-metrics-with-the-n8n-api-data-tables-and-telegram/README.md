# ⚙️ Report daily workflow SLA metrics with the n8n API, data tables and Telegram

> ⚡ **38 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily, queries the n8n API for workflows and recent executions, calculates per-workflow success rate, error count and p95 runtime over a rolling window, detects stalled schedules, stores a snapshot in an n8n Data Table, and sends a change-aware fleet health report to a Telegram chat.

## How it works
1. Runs once per day on a Schedule Trigger.
2. Fetches all workflows and a capped set of recent executions from the n8n API.
3. Calculates fleet and per-workflow metrics over a rolling window, including success rate, error count, p95 runtime, and last run time.
4. Detects active scheduled workflows that appear overdue based on their Schedule Trigger interval and a configurable buffer.
5. Loads the previous metrics snapshot from an n8n Data Table and compares it to the current snapshot to flag slowdowns, success-rate drops, newly stalled workflows, and recoveries.
6. Saves the current snapshot back to the Data Table and sends a formatted report message to Telegram.

## Setup
1. Create an n8n API key with scopes `workflow:list` and `execution:list`, save it as an n8n API credential, and select it in the two n8n API request nodes.
2. Create an n8n Data Table named `observability_history` with `runAt` (string) and `metrics` (string) columns, then select it in the snapshot read/write nodes.
3. Add Telegram bot credentials, set the target `chatId` in the Telegram node, and adjust the message format in the message composition step if needed.
4. Set the daily run hour in the Schedule Trigger and tune the rolling window, thresholds, and execution fetch limit values in the Config step.

## Requirements
- n8n Cloud or self-hosted instance on version 1.113.1 or later, where the Data Tables feature is available.
- n8n public API enabled, with an API key scoped to workflow:list and execution:list.
- A Telegram bot token and the chat ID of the destination chat or channel.

## Customization
- Tune windowHours, degradationPct, successDropPp, scheduleBuffer and executionLimit in the Config node to change the rolling window, alert thresholds and fetch limit.
- Swap the Schedule Trigger for a Manual or Webhook Trigger to run the report on demand.
- Replace the Telegram node with Slack, email or another channel, reusing the composed report text.
- Edit the layout and which metrics appear in the Compose message node (the message uses HTML parse mode).

## Additional info
Cost: free - it uses only your own n8n instance and a Telegram bot, with no paid API calls.

Data accuracy: the n8n executions API has no date filter, so each run fetches up to executionLimit executions (default 250). On busy instances older runs inside the window can be cut off; the workflow sets a windowTruncated flag and the report tells you to raise the limit.

Stalled-schedule detection only covers active workflows whose Schedule Trigger uses a fixed interval; schedules built on a cron expression have no fixed period and are skipped.

The change section needs a previous snapshot, so the first run only seeds history and "what changed since the last run" appears from the second run onward.

## 🔗 Nodes Used

Telegram, n8n, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
