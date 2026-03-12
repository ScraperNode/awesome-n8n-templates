# ⚒️ Route engineering risks with Anthropic multi-agents and Slack alerts

> ⚡ **24 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates engineering governance by deploying a multi-agent AI system that validates designs, checks compliance, optimises safety, and predicts maintenance needs. Designed for engineering teams, quality assurance officers, and operations managers in regulated industries, it eliminates manual review bottlenecks and ensures systemic risk issues are escalated promptly. A schedule trigger fetches design specifications and operational data, merges them, then routes to three parallel agent tracks: Design Validation (with Compliance Verification, Resource Coordination, and Testing Validation sub-agents), Safety Optimisation, and Predictive Maintenance. All outputs consolidate into a risk score calculator, which routes by risk level—critical and high issues trigger Slack alerts immediately, while medium and low issues are logged for review.

## Setup Steps
1. Set schedule trigger interval to match governance review frequency.
2. Add Anthropic API credentials to all Anthropic Model nodes.
3. Connect design specification and operational data sources to fetch nodes.
4. Configure Slack credentials for critical and high-priority alert channels.
5. Define risk scoring thresholds in the Calculate Risk Scores node.

## Prerequisites
- Slack workspace with bot token
- Design and operational data sources (API or database)
## Use Cases
- Automated design compliance auditing for aerospace or manufacturing
- Real-time safety risk detection in industrial operations
## Customization
- Add sub-agents for environmental, cost, or regulatory compliance
## Benefits
- Automates multi-dimensional engineering governance on a schedule

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
