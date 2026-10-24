# 🔒 Assess AWS security posture changes with Claude and Slack alerts

> ⚡ **19 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow polls or manually checks AWS security findings via HTTP endpoints, compares them to a stored baseline, enriches changes with asset inventory data, uses Anthropic Claude to assess severity and compliance impact, and then routes notifications to Slack, email, and compliance logging systems.

## How it works
1. Runs on a schedule or via manual trigger to start an AWS security posture check.
2. Calls a Security Hub/Config proxy API to fetch the latest security findings snapshot and compares it to the last stored baseline in workflow static data.
3. Stops immediately when the snapshot is unchanged, or continues when differences are detected.
4. Fetches account and resource context from an asset inventory/CMDB API and combines it with the findings diff.
5. Sends the previous/current snapshots and asset context to Anthropic Claude (via an AI Agent) to produce a structured change summary, severity, compliance frameworks impacted, and required actions.
6. Routes Critical findings to a sign-off wait step and posts all other severities to a Slack review channel.
7. If sign-off is approved (or for non-Critical findings), updates the security posture record via HTTP, writes an audit entry to a compliance log API, notifies SecOps and Compliance in Slack and sends an email summary, then persists the new snapshot as the baseline.

## Setup
1. Create HTTP Header Auth (or equivalent) credentials for the security findings API, asset inventory API, and compliance log API endpoints used by the HTTP Request steps.
2. Add an Anthropic credential and ensure the Claude model configured in the workflow is available in your Anthropic account.
3. Connect Slack credentials and verify the target channel names (for review, SecOps, and Compliance) exist and match the configuration values.
4. Configure an SMTP/email credential for sending messages and set the from/to addresses used for the security summary.
5. Update the workflow configuration values (AWS account ID, region, and the three API base URLs) to point to your real endpoints.
6. For Critical sign-off, copy the Wait node’s webhook URL and arrange for your approver process to call it with a signOffApproved value (true/false).

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
