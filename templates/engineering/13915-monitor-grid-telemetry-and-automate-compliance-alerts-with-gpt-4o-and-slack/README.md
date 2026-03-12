# ⚒️ Monitor grid telemetry and automate compliance alerts with GPT-4o and Slack

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates real-time energy grid telemetry ingestion, compliance validation, and multi-channel reporting for grid operators, energy managers, and compliance teams. Telemetry data arrives via webhook and is routed to a central Coordination Agent with persistent memory. Four specialised AI sub-agents operate in parallel: Grid Signal Agent (validates signals via Telemetry Validation Tool and parses structure), Compliance Agent (checks against compliance history), Reporting Agent (generates structured reports), and Notification Agent (triggers Slack alerts). Results flow into a Prepare Telemetry Storage node, then branch into three outputs, validated telemetry stored to a grid database, compliance alerts prepared and stored, and email reports dispatched. This eliminates manual grid monitoring, accelerates anomaly response, and maintains a continuous compliance audit trail across energy infrastructure.

## Setup Steps
1. Configure webhook URL in **Grid Telemetry Webhook** node.
2. Set AI model credentials (OpenAI/Anthropic) in all agent and model nodes.
3. Connect Slack credentials and target channel to **Slack Notification Tool** node.
4. Configure email credentials in **Send Report Email** node.
5. Connect database/Google Sheets credentials.
## Prerequisites
- Slack workspace and bot token
- Email account (SMTP or Gmail OAuth2)
- Database or Google Sheets for telemetry and alert storage
## Use Cases
- Real-time anomaly detection and alerting across smart grid sensor networks
- Automated regulatory compliance reporting for energy grid operators
## Customisation
- Extend Compliance Agent thresholds to match regional grid standards 
- Replace Slack with Teams or PagerDuty for incident escalation
## Benefits
- Eliminates manual telemetry review — processes grid events at machine speed

## 🔗 Nodes Used

Send Email, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
