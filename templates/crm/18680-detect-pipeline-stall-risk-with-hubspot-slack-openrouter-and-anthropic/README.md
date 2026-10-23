# 🤝 Detect pipeline stall risk with HubSpot, Slack, OpenRouter and Anthropic

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow monitors sales deals from HubSpot or a CRM-agnostic webhook, scores stall risk using deterministic rules, and uses OpenRouter (Anthropic models) plus an Anthropic guardrails check to generate, verify, and safely send Slack alerts and write notes back to your CRM.

## How it works
1. Runs on a weekly schedule to fetch open deals from HubSpot, or triggers on an incoming webhook when a deal stage change is posted, and immediately returns a 202 Accepted response.
2. Normalizes each deal into a common schema and calculates a weighted stall-risk score based on activity gaps, time in stage, stakeholder count, close date pushes, and missing next steps.
3. Skips LLM analysis for low/medium risk deals and only continues when the risk score meets the high-risk threshold.
4. Uses OpenRouter to generate a structured stall diagnosis (likely cause, recommended action, urgency, confidence) and then uses a second OpenRouter call to audit that diagnosis against the raw deal data.
5. Applies guardrails by validating the diagnosis fields and running an Anthropic-powered content safety scan before allowing any alert to be sent.
6. Suppresses duplicate alerts unless the risk score changes significantly or the last alert is older than a week.
7. Sends the verified alert to Slack (to the deal owner’s channel if available, otherwise a fallback channel) and writes a note back to the CRM, then records the alert to support future duplicate suppression.

## Setup
1. Add a HubSpot Private App token credential for fetching open deals (or use the webhook path and ensure your source system posts deal data to it).
2. Add an OpenRouter API credential for both the generator and auditor LLM calls.
3. Add an Anthropic API credential for the content safety guardrails check.
4. Connect Slack OAuth credentials and set the target channels (for example, #sales-alerts for owners and #sales-ops-alerts for failures).
5. If you use the CRM write-back step, set `crmBaseUrl` and provide HTTP header authentication for your CRM’s API (or replace the HTTP request with a native CRM “create note/task” node).
6. In the HubSpot fetch step, add filters for your specific “open” pipeline stage IDs to limit which deals are scanned.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
