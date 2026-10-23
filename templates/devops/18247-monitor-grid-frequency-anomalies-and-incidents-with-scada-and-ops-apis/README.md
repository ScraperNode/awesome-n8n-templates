# ⚙️ Monitor grid frequency anomalies and incidents with SCADA and ops APIs

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every minute (or manually) to pull grid frequency readings from a telemetry API, calculate deviation and ROCOF per region, enrich anomalies with recent history, post alerts to an operator dashboard, and open incidents for Critical events.

## How it works
1. Runs every minute on a schedule or starts manually for testing.
2. Sets API endpoints, the target region scope, nominal frequency, and deviation/ROCOF thresholds used for classification.
3. Fetches recent grid frequency readings from the grid telemetry API and waits briefly to allow the telemetry batch to settle.
4. Calculates each region’s frequency deviation, rolling average, and rate-of-change-of-frequency (ROCOF), then classifies severity as Normal, Watch, Warning, or Critical.
5. For Watch/Warning/Critical regions, fetches the last 6 hours of stability events from the history API and builds an operator alert payload with likely cause and recommended action.
6. Sends the alert to the operator dashboard API.
7. Creates a grid stability incident in the incident management API only for Critical-tier alerts, otherwise ends after dashboard notification.

## Setup
1. Add HTTP Header Auth credentials for the grid telemetry API and history API, and update the base URLs and regionId in the configuration values.
2. Add HTTP Basic Auth credentials for the operator dashboard API and incident management API, and confirm the POST endpoints accept the workflow’s JSON payloads.
3. Set nominalFrequencyHz and the watch/warning/critical deviation and ROCOF thresholds to match your grid standard and runbook.
4. Ensure the telemetry API returns data in the expected structure: `{ regions: [ { regionId, regionName, readings: [ { timestamp, frequencyHz }, ... ] } ] }`.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
