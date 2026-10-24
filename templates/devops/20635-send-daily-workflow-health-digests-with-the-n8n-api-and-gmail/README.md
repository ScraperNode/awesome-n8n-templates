# ⚙️ Send daily workflow health digests with the n8n API and Gmail

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
A daily health check for your n8n instance. Through the n8n API, which it only reads, it looks for failed executions, schedules that didn't fire, workflows with no working failure path, and broken sub-workflow calls, then emails a digest only when something needs attention, plus a weekly all-clear.

## How it works
1. Runs every day at 06:30 (or on manual trigger) and loads configuration like alert email, tag scope, timezone, and lookback window.
2. Uses the n8n API to fetch all active published workflows, then optionally narrows monitoring to workflows that match the configured tags.
3. Uses the n8n API to pull recent errored executions and summarizes errors per in-scope workflow within the lookback window.
4. Detects scheduled workflows in scope, calculates when each schedule should have last fired in its workflow timezone, and checks the last executions to flag schedules that did not run when expected.
5. Scans in-scope workflows for missing or invalid error-handling configuration (no error workflow or Error Trigger, self-referential error workflow, unpublished/blocked error workflow).
6. Scans in-scope workflows for Execute Workflow calls that point to unpublished or disallowed sub-workflows and records them as broken sub-workflow calls.
7. Builds an HTML health digest with links back to the n8n editor and emails it via Gmail only when problems are found (or sends a weekly all-clear heartbeat if enabled).

## Setup
1. Create an n8n API key (Settings → n8n API) and add it as an n8n API credential on the nodes that read workflows and executions, using your instance base URL (for example, https://<your-instance>/api/v1).
2. Add a Gmail credential for sending the digest, or replace the Gmail node with your preferred email/notification service.
3. Update the Config values, especially alertEmail, and optionally set scopeTags, lookbackHours, heartbeatWeekday, and instanceUrl if auto-detection does not match your public editor URL.
4. Ensure the workflows you want monitored are active and (if using scopeTags) tagged accordingly so they are included in scope.

## Requirements
- An n8n API key (Settings > n8n API). Read-only scopes are enough where your plan offers them.
- A Gmail account, or any other email or chat node you'd rather swap in.

## Customization
- Scope: put tags in scopeTags (comma-separated) to watch only tagged workflows. Workflows left out are named in the digest footer, so nothing drops out of monitoring silently. Error workflows and sub-workflows always resolve against everything that's published, so an untagged sub-workflow is never misreported as unpublished.
- Schedule: change the trigger and keep lookbackHours equal to its interval.
- Heartbeat: heartbeatWeekday picks the all-clear day (1 = Monday ... 7 = Sunday, 0 = off).
- Channel: replace the Gmail node with Slack, Teams, Telegram or SMTP. The subject and HTML body are already prepared on the incoming item (subject, summaryHtml), along with counts per check.

## 🔗 Nodes Used

Gmail, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
