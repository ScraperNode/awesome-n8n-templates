# 🔬 Generate carbon emissions reports with OpenAI, Slack and an ESG dashboard

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives energy consumption data or runs on a schedule, converts electricity and fuel usage into estimated CO2e using a live grid-intensity API, and generates a management-ready sustainability report with OpenAI, delivering the approved report to an ESG dashboard API and Slack.

## How it works
1. Triggers from a webhook intake, a monthly schedule, or a manual test run to start a reporting cycle.
2. Loads configuration and consumption inputs, then fetches the current grid carbon intensity from api.carbonintensity.org.uk with a fallback factor if the request fails.
3. Calculates electricity, fuel, and total CO2e emissions and classifies the result into low, medium, high, or critical based on configured thresholds.
4. Pauses for a human data review via a resume webhook and continues only when the payload indicates the review is approved.
5. Uses OpenAI to generate a structured JSON sustainability report and parses it into a normalized report payload with a safe fallback if parsing fails.
6. Pauses for a human report-approval webhook and, when approved, posts the report to an ESG dashboard API and notifies management in Slack (otherwise it marks the run as discarded).

## Setup
1. Add OpenAI credentials for the Chat Model used to generate the sustainability report.
2. Add Slack credentials with the chat:write scope and set the target Slack channel name in the notifyChannel configuration.
3. Update the configuration values (emission factors, thresholds, region, reporting period, and dashboardApiUrl) and ensure your ESG dashboard endpoint accepts a JSON POST of the report payload.
4. Copy the webhook URL for the consumption upload trigger into your metering/facilities system, and configure the three wait-node resume webhooks in your review/approval UI to send reviewApproved/reportApproved flags.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
