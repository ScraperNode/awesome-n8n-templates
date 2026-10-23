# 🎫 Monitor pharma regulatory updates with Anthropic Claude and Slack alerts

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls a regulatory publications API on a schedule, filters for updates related to your therapeutic areas and products, and uses Anthropic Claude to summarize implications and assess urgency, then creates compliance tickets via an HTTP API and posts notifications to Slack.

## How it works
1. Runs on a schedule (or manually for testing) to start a monitoring cycle.
2. Requests the latest regulatory publications from a configured source API and deduplicates results against previously seen publication IDs stored in workflow static data.
3. Filters the new publications list to only items matching your monitored therapeutic areas or products, and stops if nothing relevant remains.
4. Fetches the full text for each relevant publication and sends it to Anthropic Claude to classify affected areas/products, summarize implications, and assign an urgency level with recommended compliance actions.
5. Creates a high-priority or normal-priority compliance ticket in your ticketing system (via HTTP API) based on the urgency classification.
6. Posts an immediate Slack alert for urgent items and posts a summary for all processed items to your regulatory intelligence Slack channel.
7. Records each processed publication ID as seen so future runs only act on newly published items.

## Setup
1. Create an HTTP Header Auth credential for your regulatory publications source API and set the correct `publicationsSourceUrl` value in the configuration.
2. Add an Anthropic credential (Claude) and ensure the agent uses your preferred model/settings.
3. Create an HTTP Header Auth credential for your ticketing system API and update `ticketingApiUrl` to the correct endpoint for creating tickets.
4. Add a Slack credential and set `complianceSlackChannel` and `urgentSlackChannel` to channels that exist in your workspace.
5. Update `monitoredTherapeuticAreas`, `monitoredProducts`, and (optionally) `defaultAgency` in the configuration to match what you want to monitor.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
