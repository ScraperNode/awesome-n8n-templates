# ⚙️ Send AI budget overspend alerts with Alephant AI Gateway and Gmail

> ⚡ **39 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every 6 hours to check an Alephant AI Gateway virtual key’s budget usage and, when live usage meets or exceeds the threshold, sends a detailed overspend alert email via Gmail.

## How it works
1. Runs every 6 hours on a schedule.
2. Requests the current virtual key budget status from Alephant AI Gateway, including usage percentage, spend, and circuit-breaker mode.
3. Checks whether the data source is live and the budget usage percentage is greater than or equal to the configured threshold.
4. If the threshold is exceeded, sets the alert recipient email address.
5. Formats an email containing spend, remaining budget, budget window, reset time, and the configured circuit-breaker behavior.
6. Sends the alert email to the configured recipient using Gmail.

## Setup
1. Install and configure the Alephant Analytics community node (@alephantai/n8n-nodes-alephant-analytics) in your n8n instance and add your Alephant Virtual Key credentials to the budget status step.
2. Add a Gmail credential and ensure the Gmail account is allowed to send mail from n8n.
3. Update the recipient email address and adjust the threshold value (it ships set to 1 for testing) to your desired alert level before activating the workflow.

## Requirements
- Alephant account (free tier works) — https://alephant.io
- A configured budget on your Alephant virtual key (so usage_pct has a limit to measure against)
- Gmail account

## Customization
- Change the alert threshold in the "Over Threshold?" node (default 75%) to be more or less sensitive
- Adjust the Schedule Trigger interval for more frequent or less frequent checks
- Swap the Gmail node for Slack, Discord, or Send Email (SMTP) to deliver alerts elsewhere
- Add a second alert at a higher threshold (e.g. 90%) by duplicating the IF + send branch for escalating warnings

## Additional info
Note: the threshold in the "Over Threshold?" node ships at 1% for testing so you can verify the alert fires. Change it to 75% (or your preferred level) before relying on it.
Alephant is an open-source AI FinOps Gateway that sits between your application and 50+ AI providers, giving you cost control, per-agent budget enforcement, and observability without taking custody of your API keys. Its budget circuit breaker can alert, throttle, or hard-stop a runaway key — this workflow surfaces that status so you know what the gateway will do on its own.
Documentation: https://developers.alephant.io
Quickstart: https://developers.alephant.io/docs/overview/getting-started/quickstart-guide
GitHub: https://github.com/AlephantAI/AIephant-AI-Agent-Gateway

## 🔗 Nodes Used

Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
