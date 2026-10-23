# ⚒️ Optimize maritime routes and disruption response with OpenAI and Slack

> ⚡ **40 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to pull vessel telemetry/AIS data, enrich it with port and weather context, and use OpenAI to detect disruptions, simulate route alternatives, and generate an executive briefing that requires human approval before notifying teams in Slack.

## How it works
1. Runs every 15 minutes on a schedule.
2. Fetches fleet vessel telemetry and AIS data from a configured HTTP API.
3. Retrieves weather forecast and port congestion context for each vessel/route from a second HTTP API.
4. Uses OpenAI to analyze telemetry against historical baselines and classify any operational anomalies with severity and confidence.
5. Uses OpenAI to aggregate anomaly, weather, and port context into risk factors, urgency, and an action category.
6. Uses OpenAI to simulate 2–3 routing and speed options, estimating cost, emissions, fuel, duration, and weather risk, and selects a recommended route.
7. Generates an executive briefing with compliance and master-authority notes, pauses for human approval via an n8n form, and then posts the decision and recommendation to a Slack channel.

## Setup
1. Add OpenAI API credentials for the three OpenAI chat model steps.
2. Configure HTTP Header Auth credentials and replace the placeholder URLs and query parameters for your AIS/telemetry API and your weather/port API.
3. Ensure the upstream APIs return the fields referenced in the prompts (for example position, speed, fuel consumption, historical baselines, forecast, and port congestion).
4. Connect a Slack OAuth2 credential and select the target channel for posting the approved briefing.
5. Test the approval form step in n8n and confirm who will receive and complete approvals before enabling the workflow.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
