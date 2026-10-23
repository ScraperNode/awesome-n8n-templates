# ⚙️ Send workflow failure alerts to Discord and log them in a data table

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow catches n8n production workflow failures, formats a readable error alert, posts it to Discord via a webhook, and logs key details (workflow, node, error, mode, execution URL) to an n8n Data Table for later reporting.

## How it works
1. Triggers when another n8n workflow errors via the Error Trigger, or runs a manual test alert from the manual trigger.
2. Sets configuration values such as the timezone used for timestamps.
3. Formats a Discord-ready message containing the workflow name, last executed node, error message/details, run mode, timestamp, and execution link (when available).
4. Sends the formatted alert to Discord using a Discord webhook with retries enabled.
5. Inserts the failure metadata into an n8n Data Table for tracking and analysis.
6. Optionally hands the failure payload off to another n8n workflow for follow-up triage without waiting for it to complete.

## Setup
1. In Discord, create an incoming webhook for your target channel and add the Discord webhook credential in n8n.
2. Create (or select) an n8n Data Table (for example, `workflow_failures`) with columns for `workflow`, `failed_node`, `error`, `mode`, and `execution_url`, then select it in the Log Failure to Data Table step.
3. Set the `N8N_EDITOR_BASE_URL` environment variable so execution URLs in alerts link back to your n8n editor.
4. Set this workflow as the Error Workflow in the settings of workflows you want to monitor.
5. (Optional) Select a triage sub-workflow in the hand-off step, or remove that step if you don’t need it.
6. Set your time zone in Build Config, then run Test Alert (manual) to confirm delivery before relying on it.

## Requirements
- n8n with Data Tables (recent 1.x or 2.x)
- A Discord server where you can create a webhook

## Customization
- Swap the Discord node for Slack, Telegram or email; the alert is plain text in content.
- Change the time zone in Build Config, or add fields such as severity in Format Alert and the data table.
- For AI diagnosis, import the companion template Diagnose failed n8n workflows with a local Ollama model and post to Discord and select it in Hand Off to Failure Triage. Otherwise delete that node.

## Additional info
Error workflows only fire on production runs, never on manual test runs, so use Test Alert (manual) to check delivery. No credentials, webhook URLs or IDs are stored in nodes.

## 🔗 Nodes Used

Discord, Execute Sub-workflow, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
