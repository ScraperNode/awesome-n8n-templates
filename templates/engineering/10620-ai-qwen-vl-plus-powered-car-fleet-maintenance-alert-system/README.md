# ⚒️ AI Qwen-Vl-Plus powered car fleet maintenance alert system

> ⚡ **196 views** · ⚒️ [Engineering](../)

## Description

## How It Works

Daily triggers automatically fetch fleet data and simulate key performance metrics for each vehicle. An AI agent analyzes maintenance requirements, detects potential issues, and routes alerts according to urgency levels. Fleet summaries are aggregated, logged into the database for historical tracking, and AI-enhanced insights are parsed to provide actionable information. Slack notifications are then sent to relevant teams, ensuring timely monitoring, informed decisions, and proactive fleet management.

## Setup Steps

1. Configure daily triggers to automatically fetch, process, and update fleet data.
2. Connect Slack, the database, and AI APIs to enable notifications and analytical processing.
3. Set AI parameters and provide API keys for accessing the models and ensuring proper scoring.
4. Configure PostgreSQL to log all fleet data, summaries, and alerts for historical tracking.
5. Define Slack channels to receive real-time alerts, summaries, and actionable insights for the team.

## Prerequisites
Slack workspace, database access, AI account (OpenRouter or compatible), fleet data source, n8n instance

## Use Cases
Fleet monitoring, predictive maintenance, multi-vehicle management, cost optimization, emergency alerts, compliance tracking

## Customization
Adjust AI parameters, alert thresholds, Slack message formatting, integrate alternative data sources, add email notifications, expand logging

## Benefits
Prevent breakdowns, reduce manual monitoring, enable data-driven decisions, centralize alerts, scale across vehicles, AI-powered insights

## 🔗 Nodes Used

Postgres, Slack, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
