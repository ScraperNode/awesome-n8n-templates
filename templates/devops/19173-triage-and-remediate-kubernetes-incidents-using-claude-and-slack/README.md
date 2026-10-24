# ⚙️ Triage and remediate Kubernetes incidents using Claude and Slack

> ⚡ **5 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow receives Kubernetes failure alerts via a webhook, collects diagnostics from a kubectl wrapper API, uses Anthropic Claude to propose a remediation with a risk level, requests approval in Slack when needed, executes the action via an API, then verifies recovery and either logs closure or escalates.

## How it works
1. Receives an Alertmanager/Kubernetes failure alert via a webhook (or runs manually for testing) and normalizes the target cluster, namespace, and resource details.
2. Calls a Kubernetes diagnostics wrapper API to gather recent events, logs, resource usage, and workload state for the affected resource.
3. Sends the diagnostic snapshot to Anthropic Claude to generate a root-cause hypothesis and a single proposed remediation action with a Safe vs NeedsApproval risk level.
4. Automatically executes the remediation via a Kubernetes action wrapper API when it is marked Safe and on the allowlist, otherwise posts the proposal to Slack and waits for an approval response.
5. After execution, waits for a stabilization period, re-collects diagnostics, and asks Anthropic Claude to verify whether the original symptoms are resolved.
6. Logs the incident as resolved to an incident log API when the cluster is healthy, or escalates the full context to a Slack escalation channel when it is not.

## Setup
1. Provide an Anthropic credential (Claude) and update the model selection if you don’t want to use the configured default.
2. Create HTTP Header Auth credentials for your Kubernetes diagnostics API, Kubernetes action API, and incident log API, then replace the three API base URLs in the configuration values.
3. Add a Slack credential and set the approval and escalation channel names to match your workspace.
4. Configure Alertmanager (or your alert source) to send POST requests to the workflow webhook URL with cluster/namespace/resource fields, and ensure your approval process can resume the wait step with an approved=true or approved=false payload.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
