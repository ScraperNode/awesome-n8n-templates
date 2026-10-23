# ⚙️ Score DR readiness and create remediation and alerts from DR tooling

> ⚡ **10 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily (or manually) to assess disaster recovery readiness across defined systems by calling internal backup, RDS snapshot, replication, Terraform, and runbook metadata APIs, then scoring each system (0–100), creating remediation tasks for gaps, escalating critical findings, and generating a rollup report.

## How it works
1. Runs on a daily schedule at 06:00 (or on-demand) and loads the list of in-scope systems plus DR policy thresholds, pillar weights, and remediation settings.
2. For each system, calls HTTP APIs to fetch backup freshness, AWS RDS snapshot recency and cross-region copy status, replication health/lag, Terraform workspace drift status, and DR runbook last review metadata.
3. Normalizes the collected signals into a single per-system record, treating unreachable sources as “unknown” rather than healthy.
4. Scores backup, snapshot, replication, IaC drift, and runbook pillars (0–100), computes a weighted overall DR readiness score, and identifies pillar-level gaps and trends over recent runs.
5. Creates structured remediation tasks for each gap via a task-tracker HTTP API, including priority and due date based on severity.
6. For systems rated Critical, waits briefly to reduce duplicate escalations and then sends an urgent alert via an incident/alerting HTTP API.
7. Aggregates all system results into a single DR readiness rollup summary for the run.

## Setup
1. Replace the placeholder HTTP endpoints and add the required authentication for your backup monitoring API, RDS snapshot monitoring API, replication monitoring API, Terraform Cloud/Enterprise API, runbook/wiki metadata API, task tracker API, and alerting/incident API.
2. Update the configuration block to match your environment, including the systems list (identifiers, backup job names, RPO/RTO, replication requirement, Terraform workspace) and the runbook URL.
3. Adjust pillar weights, warning/critical thresholds, cooldown seconds, and remediation due-day SLAs to align with your DR policy and escalation process.
4. Set the target team/project identifiers used by your alerting and task systems (for example, the on-call team ID and task-tracker project key).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
