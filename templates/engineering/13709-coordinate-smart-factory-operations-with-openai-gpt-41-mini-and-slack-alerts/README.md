# ⚒️ Coordinate smart factory operations with OpenAI GPT-4.1-mini and Slack alerts

> ⚡ **7 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates cross-factory operations management by deploying a multi-agent AI system that validates production data, coordinates scheduling, procurement, and quality escalation, then routes outcomes by priority. Designed for manufacturing operations managers, supply chain coordinators, and factory floor teams, it eliminates manual coordination delays and ensures critical issues trigger immediate alerts. A schedule trigger fetches production and supply chain data in parallel, merges them, then passes to an Operations Validation Agent for data integrity checks. A Cross-Factory Coordination Agent orchestrates three sub-agents—Scheduling, Procurement, and Quality Escalation—producing consolidated coordination outputs. Results are routed by priority: high and critical cases trigger dedicated Slack alerts, while routine operations are logged for standard review.

## Setup Steps
1. Set schedule trigger interval to match operational review frequency.
2. Add OpenAI API credentials to all OpenAI Model nodes.
3. Connect production and supply chain data sources to fetch nodes.
4. Configure Slack credentials for high-priority and critical alert channels.
5. Define priority routing thresholds in the Route by Priority rules node.

## Prerequisites
- Slack workspace with bot token
- Production and supply chain data sources (API or database)
## Use Cases
- Automated cross-factory scheduling conflict detection and resolution
## Customization
- Add sub-agents for logistics, maintenance, or inventory optimisation
## Benefits
- Automates cross-factory coordination across scheduling, procurement, and quality

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
