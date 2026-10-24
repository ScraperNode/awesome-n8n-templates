# 📊 Monitor AI citation changes for your domain with TriRank and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday, fetches AI citation signals for a chosen domain from the TriRank API, compares the latest result with the previous run using workflow static data, and posts an update to a Slack channel only when the citation state or score changes.

## How it works
1. Runs every Monday at 09:00 on a schedule.
2. Sets the domain to monitor and a flag that controls whether to notify on the first run.
3. Calls the TriRank `GET /api/signals/{domain}` endpoint to retrieve citation status, cited engines, score, and measurement date (or an HTTP error state).
4. Reduces the response to a single “reading,” stores it in workflow static data, and generates a message only on the first run (optional) or when the reading differs from the previous run.
5. Checks whether a message was generated and, if so, posts it to the selected Slack channel.

## Setup
1. Run a free TriRank audit for your domain at https://trirankai.com/audit so the domain has a measurement available.
2. Update the domain value (and optionally the first-run notification flag) in the configuration step.
3. Add a Slack credential and set the target channel for posting messages.
4. (Optional) Create a TriRank API key in TriRank and configure it on the HTTP request as an `x-api-key` header credential if you need a higher daily read limit.

## Requirements
- A Slack credential. No TriRank account is needed: the endpoint allows 60 anonymous reads per day per IP. An optional TriRank API key (Header Auth, x-api-key) raises that limit.

## Customization
- Change the schedule, swap Slack for Email or Discord, or watch several domains by returning one item per domain from Configure domain. The Code node keeps "no measurement on record" and "measured, not cited" as different messages — keep that distinction if you edit the wording.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
