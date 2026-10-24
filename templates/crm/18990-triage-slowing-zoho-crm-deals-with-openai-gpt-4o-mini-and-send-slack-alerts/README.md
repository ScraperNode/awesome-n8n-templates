# 🤝 Triage slowing Zoho CRM deals with OpenAI GPT-4o-mini and send Slack alerts

> ⚡ **32 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every two hours to pull deals from Zoho CRM, calculate momentum and velocity metrics from recent activity, use OpenAI to generate sales acceleration tactics for slowing deals, and send formatted alerts to a Slack channel.

## How it works
1. Runs every two hours on a schedule trigger.
2. Retrieves up to 100 deals from Zoho CRM and processes them one by one.
3. Calculates momentum metrics per deal from recent activity, including engagement velocity, momentum score, trend, and days since last activity.
4. Filters for deals that are slowing based on declining velocity compared to the prior period and the 30-day average.
5. Sends the slowing-deal metrics to OpenAI to generate JSON with recommended acceleration tactics, a priority level, and a reason for the slowdown.
6. Merges the AI recommendations back with the deal metrics, formats a detailed alert message, and posts it to a selected Slack channel.

## Setup
1. Add Zoho CRM OAuth2 credentials in n8n and ensure your deal records include recent activity data (for example via an Activities field in the retrieved payload).
2. Add an OpenAI API credential and keep the AI prompt configured to return valid JSON as expected by the formatter.
3. Add Slack credentials, choose the target channel for alerts, and adjust the schedule interval if you want a different monitoring cadence.

## 🔗 Nodes Used

Slack, Zoho CRM, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
