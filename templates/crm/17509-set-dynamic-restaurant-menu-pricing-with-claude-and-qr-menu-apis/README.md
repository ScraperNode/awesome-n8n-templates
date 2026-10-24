# 🤝 Set dynamic restaurant menu pricing with Claude and QR menu APIs

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs every 15 minutes to calculate dynamic restaurant dish prices from POS order velocity, local weather, and nearby events/foot-traffic data, then uses Anthropic Claude to review changes for brand-damage risk before pushing approved prices to a QR-code digital menu via API.

## How it works
1. Runs on a schedule every 15 minutes to start a pricing cycle.
2. Fetches POS order-velocity data, current local weather, and nearby events/foot-traffic data via HTTP APIs.
3. Combines the API responses and derives per-dish demand features such as velocity ratio plus weather and event multipliers.
4. Applies an elasticity-based pricing model to propose per-dish price changes within defined surge and discount caps.
5. Waits briefly, then sends the proposed changes to Anthropic Claude to approve, cap, or reject each change with a short risk rationale.
6. Parses Claude’s JSON decisions with a safety fallback that keeps current prices if the AI output can’t be parsed.
7. Posts the final approved dish prices to the QR/digital menu platform’s price-update API.

## Setup
1. Add an Anthropic API credential and select the Claude model used by the brand-safety review step.
2. Configure your POS API endpoint and replace the placeholder POS bearer token (YOUR_POS_API_KEY).
3. Configure your weather API endpoint and replace the placeholder weather bearer token (YOUR_WEATHER_API_KEY).
4. Configure your events/foot-traffic API endpoint and replace the placeholder events bearer token (YOUR_EVENTS_API_KEY).
5. Configure your QR/digital menu platform endpoint and replace the placeholder menu platform API key (YOUR_MENU_PLATFORM_API_KEY).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
