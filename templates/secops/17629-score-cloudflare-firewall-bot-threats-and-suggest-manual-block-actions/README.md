# 🔒 Score Cloudflare firewall bot threats and suggest manual block actions

> ⚡ **24 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs on a schedule (or manually) to read Cloudflare firewall events via the Cloudflare GraphQL API, aggregate activity by client IP, and compute deterministic bot-risk scores with evidence-based signals, then routes results into block recommendations, a review queue, or low-risk monitoring.

## How it works
1. Runs every 15 minutes (or on manual start) and loads the scoring configuration, including zone selection, look-back window, and thresholds.
2. Calls the Cloudflare REST API to discover available zones and resolves the final list of zones to assess.
3. Builds a Cloudflare GraphQL query for each zone and fetches recent `firewallEventsAdaptive` events within the configured time window.
4. Aggregates the returned events by zone and client IP, calculating indicators like probe-path hits, 404 rates, distinct paths, and challenge outcomes.
5. Scores each IP using a deterministic ruleset (no AI) and assigns a recommendation band (monitor, recommend_review, or recommend_block) with explainable signals.
6. Formats high-risk offenders into copy/paste block or managed-challenge recommendations (including a suggested Cloudflare IP List payload) and formats medium-risk offenders into a review message, while low-risk results are simply logged.

## Setup
1. Create a Cloudflare API token with Zone → Zone : Read and Zone → Analytics : Read, then add it to an n8n HTTP Header Auth credential as `Authorization: Bearer <token>`.
2. Update the Configuration code to set `zoneTags` (or leave empty for auto-discovery), `windowHours`, `eventLimitPerZone`, and the review/block thresholds.
3. Replace the two “SET UP:” placeholder steps with your preferred outputs (for example Slack, email, Google Sheets, or a SIEM destination) and map the formatted recommendation/review text into those nodes.

## Additional info
Looks for any custom automation in security , feel free to reach us at info@cybeneticsplus.com

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
