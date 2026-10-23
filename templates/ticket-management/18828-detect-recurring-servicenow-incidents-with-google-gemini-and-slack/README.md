# 🎫 Detect recurring ServiceNow incidents with Google Gemini and Slack

> ⚡ **16 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Video Explanation: https://www.linkedin.com/posts/iamvaar_blankarray-n8n-automation-ugcPost-7499437115198373888-XrkB/

This workflow runs weekly to pull recent ServiceNow incidents, groups them by configuration item and category, uses Google Gemini to detect recurring patterns, creates ServiceNow Problem records for qualifying clusters, and posts a weekly summary of created problems to a Slack.

## How it works
1. Runs every Monday at 8:00 AM (or manually for testing) to start the weekly analysis.
2. Retrieves all ServiceNow incidents opened within the last 30 days and normalizes key incident fields for consistent processing.
3. Groups incidents by ServiceNow configuration item (cmdb_ci) and category to form incident clusters.
4. Sends each cluster to Google Gemini (via an AI agent) to assess recurrence, estimate frequency, and generate a root-cause hypothesis, problem description, and recommended priority.
5. Creates a ServiceNow Problem record for clusters flagged as recurring and meeting the minimum recurrence threshold.
6. Aggregates the created Problem records, builds a Slack-formatted weekly report with links back to ServiceNow, and posts it to the configured Slack channel.

## Setup
1. Configure ServiceNow Basic Auth credentials with access to read the Incident table and create records in the Problem table.
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model used by the AI agent.
3. Add Slack credentials and set the target channel name (for example, #general) for the weekly report.
4. Update the lookback window (lookback_days), recurrence threshold (min_recurrence_threshold), and the ServiceNow instance URL used in the report links to match your environment.

## 🔗 Nodes Used

Slack, ServiceNow, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
