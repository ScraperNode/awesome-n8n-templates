# ⚒️ Monitor asset health and predict maintenance with Anthropic Claude and Slack

> ⚡ **31 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates industrial asset health monitoring and predictive maintenance using Anthropic Claude across coordinated specialist agents. It targets facility managers, maintenance engineers, and operations teams in manufacturing, energy, and infrastructure sectors where reactive maintenance leads to costly unplanned downtime and asset failures. On schedule, the system ingests asset health data and routes it through a Performance Evaluation Agent that coordinates three specialist agents: Maintenance Scheduling, Parts Readiness, and Lifecycle Reporting. An MCP External Data Tool enriches analysis with real-time contextual data. Results are risk-routed—Critical assets trigger immediate Slack alerts, High-risk assets escalate via email reports, and Routine cases are logged for scheduled maintenance. All paths merge into a unified maintenance log, giving operations teams proactive, audit-ready asset intelligence before failures occur.

## Setup Steps
1. Import workflow JSON into your n8n instance.
2. Add Anthropic API credentials.
3. Set Schedule Trigger frequency aligned to your asset monitoring cycle.
4. Update Workflow Configuration node with asset thresholds.
5. Configure MCP External Data Tool with your external data source endpoint and authentication.
6. Add Slack credentials and set the target channel in the Notify Critical Alert node.
7. Set Gmail/SMTP credentials for the Email Escalation Report node.

## Prerequisites
n8n (cloud or self-hosted), Anthropic API key (Claude), Slack workspace with bot token 
## Use Cases
Facility managers automating condition-based maintenance scheduling across multiple assets
## Customization
Replace Anthropic Claude with OpenAI GPT-4 or NVIDIA NIM in any agent node
## Benefits
Shifts maintenance from reactive to predictive, reducing unplanned downtime significantly

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
