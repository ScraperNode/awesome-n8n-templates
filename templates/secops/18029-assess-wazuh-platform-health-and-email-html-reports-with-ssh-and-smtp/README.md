# 🔒 Assess Wazuh platform health and email HTML reports with SSH and SMTP

> ⚡ **84 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs a manual health assessment of a Wazuh deployment by querying the Wazuh Manager API, Wazuh Indexer API, and host metrics over SSH, then scores the results, generates prioritized recommendations, stores a baseline in an n8n Data Table, and emails an HTML report.

## How it works
1. Runs when you manually trigger the workflow.
2. Authenticates to the Wazuh Manager API and collects manager info, process status, manager statistics, daemon statistics, agent connectivity summary, and cluster health.
3. Queries the Wazuh Indexer API to collect cluster health, shard/allocation status, disk allocation, and node pressure (CPU/load, heap, and RAM usage).
4. Connects over SSH to the Wazuh host to sample Linux CPU, memory, disk, inode, uptime, and (when present) Docker container state and health.
5. Loads the most recent stored run from an n8n Data Table and evaluates all collected evidence against configurable thresholds to compute an overall Green/Yellow/Red status, a weighted health score, and prioritized recommendations.
6. Stores the current run’s metrics and comparison data in the Data Table and emails the formatted HTML health report via SMTP.

## Setup
1. Create and select a Wazuh Manager API HTTP Basic Auth credential with permission to call the manager, agents, daemons, and cluster endpoints.
2. Create and select a Wazuh Indexer HTTP Basic Auth credential with access to cluster health and cat APIs (for example, a role including cluster_monitor).
3. Create and select an SSH private key credential for a least-privilege Linux account that can run the provided read-only metrics commands on the target host.
4. Create an n8n Data Table named “Wazuh Health Runs” (or update the table selection) and ensure it includes fields for runId, runAt, assessmentLabel, overallStatus, healthScore, criticalCount, warningCount, metrics_object, recommendations_object, comparison_object, and reportSent.
5. Add an SMTP credential, then update the Wazuh Manager/Indexer URLs, organization label, sender/recipient addresses, deploymentType, and threshold values in the configuration step before running the workflow.

## 🔗 Nodes Used

Send Email, HTTP Request, SSH, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
