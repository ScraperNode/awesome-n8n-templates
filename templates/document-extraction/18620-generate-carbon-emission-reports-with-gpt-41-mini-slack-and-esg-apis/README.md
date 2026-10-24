# 🔬 Generate carbon emission reports with GPT-4.1-mini, Slack, and ESG APIs

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow ingests electricity and fuel consumption via webhook, schedule, or manual run, estimates CO2e using a live grid carbon-intensity API with fallback factors, generates an OpenAI sustainability report after human review, then sends approved reports to an ESG dashboard API and posts them to Slack.

## How it works
1. Triggers from a POST webhook, a monthly schedule, or a manual test run and loads reporting configuration and consumption inputs.
2. Fetches the current grid carbon-intensity from api.carbonintensity.org.uk and falls back to a static emissions factor if the request fails.
3. Calculates electricity, fuel, and total CO2e emissions and classifies the result into low, medium, high, or critical based on configured thresholds.
4. Pauses for a human data review and continues only when the run is resumed and marked as approved.
5. Uses OpenAI to generate a structured sustainability report from the calculated emissions, then parses the JSON into a final report payload with a safe fallback if parsing fails.
6. Pauses again for report approval and, if approved, pushes the report to an ESG dashboard API endpoint and posts a formatted summary to a Slack channel (otherwise it marks the run as discarded).

## Setup
1. Add OpenAI credentials for the Chat Model used to generate the sustainability report.
2. Add Slack credentials with permission to post messages (chat:write) and set the target channel in the workflow configuration.
3. Update the configuration values (facility/company details, thresholds, emission factors, period dates, and dashboardApiUrl) to match your reporting requirements.
4. If using the webhook trigger, copy the webhook URL and configure your metering/facilities system to POST consumption data to it.
5. Configure the resume webhook URLs for the data-review and report-approval waits in your approval UI or process, and secure your ESG dashboard API endpoint (authentication, payload expectations) if you replace the demo URL.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
