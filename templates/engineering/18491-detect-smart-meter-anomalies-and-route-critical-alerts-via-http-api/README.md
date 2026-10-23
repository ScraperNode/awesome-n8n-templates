# ⚒️ Detect smart meter anomalies and route critical alerts via HTTP API

> ⚡ **19 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs hourly (or manually) to pull recent smart meter readings from a metering API, detect abnormal consumption patterns (spikes, drops, leakage, and stuck meters), and prepare either a critical escalation payload or a standard log payload for downstream alerting.

## How it works
1. Runs every hour on a cron schedule or starts manually for a test run.
2. Sets the metering API URL, meter group, lookback window, and anomaly detection thresholds.
3. Calls the smart meter API to fetch recent readings for the configured meter group and waits briefly for aggregation.
4. Calculates a per-meter baseline (mean and standard deviation), checks for spikes, drops, off-hours continuous flow, and low-variance “stuck” patterns, and assigns an anomaly score.
5. Filters out meters with no anomaly detected and outputs a no-action note.
6. Classifies each detected anomaly into a category and severity and builds a structured alert payload.
7. Routes critical anomalies through a short cooldown wait and marks them ready for critical dispatch, while non-critical anomalies are marked ready for standard logging.

## Setup
1. Add an HTTP Header Auth credential for the HTTP Request node to authenticate to your metering API.
2. Update the metering API base URL, meter group ID, and lookback window in the configuration step to match your environment.
3. Adjust detection thresholds (z-score limits, off-hours window, minimum flow, variance threshold, and critical score cutoff) to match your meter population.
4. Ensure your metering API response matches the expected shape: `{ meters: [ { meterId, address, readings: [ { timestamp, value }, ... ] } ] }`.
5. Connect the “critical” and “standard” outputs to your notification or ticketing system (for example Slack, PagerDuty, email, or Jira) using the `dispatchChannel` and `readyForDispatch` fields.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
