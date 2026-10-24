# ⚒️ Optimize vessel fuel consumption, alerts, and reports with OpenAI and Gmail

> ⚡ **31 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow ingests vessel telemetry via a webhook, pulls historical performance from an n8n Data Table, and uses OpenAI agents to predict fuel burn, recommend fuel-minimizing speed/RPM settings within ETA and safety constraints, store results, and email alerts and daily fleet reports via Gmail.

## How it works
1. Receives vessel telemetry and voyage constraints in a POST webhook request.
2. Normalizes and validates the incoming fields (speed, RPM, engine load, fuel burn, and optional weather/current data) and flags unreliable readings.
3. Retrieves recent records for the same vessel from an n8n Data Table and computes statistical baselines (mean, standard deviation, similar-speed mean, and z-score anomaly).
4. Uses an OpenAI-powered prediction agent (with optional history lookup) to estimate current fuel consumption and generate candidate fuel predictions for alternative speed/RPM settings.
5. Uses an OpenAI-powered optimization agent to choose the most fuel-efficient candidate that meets ETA and safety limits and to estimate fuel and CO2 savings.
6. Uses an OpenAI-powered advisory agent to produce an operator-facing recommendation and determine whether an alert is needed based on anomalies or unreliable data.
7. Applies deterministic safety guardrails, consolidates and records the final result to the Data Table, responds to the webhook with the recommendation JSON, and sends Gmail alerts for warning/critical cases.
8. Runs daily on a schedule to aggregate all stored results into a fleet performance HTML report and emails it via Gmail.

## Setup
1. Create or select an n8n Data Table for vessel fuel history/results (matching the columns used by the workflow) and set its Data Table ID in the history lookup, record, and reporting steps.
2. Add an OpenAI API credential for the Chat model used by the three AI agents.
3. Add a Gmail OAuth2 credential and replace the placeholder recipient addresses for critical alerts, warning alerts, and the daily fleet report.
4. Copy the webhook URL for the “vessel-fuel-optimize” endpoint and configure your vessel data source to POST the required telemetry fields (speed_knots, engine_rpm, engine_load_pct, fuel_consumption_lph) plus any optional constraints (eta_required, distance_remaining_nm, max_safe_speed_knots).

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
