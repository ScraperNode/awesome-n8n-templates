# ⚙️ Triage and remediate incidents with Anthropic Claude and Slack

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow ingests incidents from a schedule, an intake webhook, or a manual test trigger, gathers monitoring metrics and recent deploy history, uses Anthropic Claude to triage and plan remediation, posts approval requests and status updates to Slack, logs outcomes to an incident manager API, and sends a final digest.

## How it works
1. Runs on a schedule, via an incident intake webhook, or from a manual trigger, and normalizes the incoming incident payload.
2. Builds an incident processing queue either from the provided incident details or by fetching open incidents from an incident manager API.
3. For each queued incident, retrieves a recent metrics snapshot from a monitoring API and recent deployment data from a CI/CD or deploy-history API.
4. Sends the diagnostics to Anthropic Claude to generate a triage assessment, then asks Claude to propose a single runbook remediation action and risk level.
5. If the proposed action is medium/high risk or exceeds the auto-remediation severity threshold, posts an approval request to Slack and marks the remediation as pending.
6. If approval is not required, executes the runbook action via a runbook engine API and records the execution result.
7. Uses Anthropic Claude to draft a stakeholder status update, posts it to Slack, logs the full incident outcome to the incident manager API, and repeats until the queue is empty before posting a final digest to Slack and returning it via the webhook response.

## Setup
1. Add HTTP Header Auth credentials for your monitoring API, deploy-history API, incident manager API, Slack incoming webhooks, your runbook engine API, and the Anthropic API.
2. Update the configuration values for monitoringMetricsUrl, deployHistoryUrl, openIncidentsUrl, incidentUpdateUrl, runbookExecuteUrl, Slack webhook URLs, and the Anthropic model to match your environment.
3. Configure the schedule trigger interval and share the incident intake webhook URL with your alerting system if you want incidents pushed in.
4. Share the approval callback webhook URL with your approval UI or Slack workflow so approvers can submit approved/declined decisions with incidentId, action, and approved status.
5. Review and tune autoRemediateMaxSeverity and maxIncidentsPerRun to match your incident policy and desired per-run limits.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
