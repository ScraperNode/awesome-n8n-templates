# ⚙️ Log n8n workflow errors to your REST API with Slack alerts and metrics

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Track all n8n workflow failures with automatic error capture, severity classification, duplicate detection, Slack alerting, performance metrics, and log retention.

WHAT IT DOES:

Runs as an error sub-workflow attached to any workflow you want to monitor
Captures execution metadata (workflow name, ID, duration, mode, failed node, stack trace)
Extracts environment info (timezone, node version, platform)
Classifies error severity (critical, warning, info) based on configurable keywords
Deduplicates alerts within 5-minute windows to prevent flooding
Saves structured logs to your database via REST API
Routes alerts to the appropriate Slack channel by severity
Calculates performance metrics and updates daily aggregates
Auto-cleans old logs based on configurable retention policy
Includes a fallback error handler to prevent cascading failures from the logger itself

INCLUDED FLOWS:

New critical error: Error Trigger → Extract metadata → Classify as critical → Check duplicate → Save log → Slack alert to #workflow-alerts → Calculate metrics → Update aggregates → Cleanup old logs
New warning error: Same capture flow → Classify as warning → Slack alert to #workflow-warnings → Metrics and retention
New info error: Same capture flow → No keyword match → Logged only, no alert → Metrics and retention
Duplicate error: Same workflowId + errorNode + errorType within 5-minute window → Skipped, no alert or log saved
Logger failure: Logger Error Trigger → Format error → Immediate Slack alert to #system-errors, prevents cascading

SEVERITY CLASSIFICATION:

Critical (immediate alert to #workflow-alerts): payment, database, authentication, authorization, critical, fatal, connection, timeout
Warning (alert to #workflow-warnings): retry, temporary, unavailable, rate limit, quota
Info (logged only, no alert): any error not matching critical or warning keywords

LOG DATA STRUCTURE:

Each log entry contains execution_id, workflow_id, workflow_name, status, severity, started_at, ended_at, duration_seconds
Error details include error_message, error_type, error_node, error_stack (truncated to 2000 chars)
Deduplication fields: error_hash, dedupe_key
Additional fields: mode, environment (JSON), created_at timestamp

SETUP:

HTTP Header Auth credential with API key and base URL for your logging REST API
Slack credential with access to three channels: #workflow-alerts (critical), #workflow-warnings (warnings), #system-errors (logger failures)
Backend API with endpoints: GET /api/logs/dedupe/:dedupeKey, POST /api/logs/execution, POST /api/logs/metrics, POST /api/logs/aggregate, DELETE /api/logs/cleanup
To monitor a workflow, set this workflow as its error sub-workflow in the workflow settings

CUSTOMIZABLE:

Critical and warning keywords are editable arrays in the Classify Error code node
Deduplication window is adjustable in the Generate Error Hash code node (default: 5 minutes)
Retention period is configurable in the Calculate Retention code node (default: 30 days)
Metrics calculation logic is editable in the Calculate Metrics code node
Slack channel names are configurable in each Slack alert node
Stack trace truncation length is adjustable in the Format Log Entry code node (default: 2000 chars)
Add email alerts by connecting a Gmail node after any Slack alert node
Add PagerDuty or Opsgenie integration after the critical alert path for on-call escalation

IDEAL FOR:

DevOps teams, n8n administrators, and automation engineers who need centralized error monitoring, alerting, and performance tracking across multiple n8n workflows.

## 🔗 Nodes Used

HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
