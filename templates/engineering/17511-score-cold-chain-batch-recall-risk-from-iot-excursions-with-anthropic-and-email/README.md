# ⚒️ Score cold-chain batch recall risk from IoT excursions with Anthropic and email alerts

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives cold-chain temperature excursion events via webhook, enriches them with shipment route history from a logistics API, uses Anthropic Claude to predict batch compromise risk, then formats and emails a predictive recall alert to quality and operations teams.

## How it works
1. Receives a POST webhook event containing a batch ID, shipment ID, and timestamped temperature/geo sensor readings from cold-chain IoT devices.
2. Fetches the shipment’s route and handling history from a logistics provider API using the shipment ID.
3. Calculates risk features such as safe temperature range, excursion count, maximum deviation, minutes outside range, and a route risk score.
4. Sends the engineered features to Anthropic Claude (claude-sonnet-4) to return a compromise probability, risk level, recommended action, and brief reasoning as JSON.
5. Parses the model output and builds a formatted predictive recall report, falling back to a rule-based risk assessment if JSON parsing fails.
6. Emails the report to the configured quality/ops recipients with the batch ID and risk level in the subject line.

## Setup
1. Configure the Webhook trigger URL in your IoT sensor gateway/app to POST excursion payloads to `/cold-chain-excursion`.
2. Add your logistics API authentication and replace `YOUR_LOGISTICS_API_KEY`, and confirm the route-history endpoint matches your provider’s API.
3. Add an Anthropic API credential for the Claude model used by the workflow.
4. Add SMTP credentials and set the from/to email addresses for the alert email.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
