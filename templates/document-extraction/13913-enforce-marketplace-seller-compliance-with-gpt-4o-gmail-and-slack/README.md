# 🔬 Enforce marketplace seller compliance with GPT-4o, Gmail and Slack

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Intelligent seller governance enforcement and compliance automation

 

## How It Works
This workflow automates marketplace seller compliance monitoring and enforcement for platform trust, legal, and operations teams. It receives seller data via webhook, routes it through a central Governance Agent backed by persistent memory, and fans out to four specialised AI sub-agents: Policy Monitoring (with compliance scoring and violation severity calculation), Appeals Review, and Enforcement Decision. A Structured Enforcement Output parser standardises results before routing to enforcement actions. The workflow then prepares an audit log, writes to an Enforcement Audit Trail, and triggers multi-channel notifications — Gmail appeal decisions, warning emails, Slack alerts to the compliance team, and suspension notices. Finally, seller records are updated in a Seller Compliance Records store. This eliminates manual case reviews, ensures consistent policy application, and creates a full auditable enforcement trail at scale.

## Setup Steps
1. Configure webhook URL in **Receive Seller Data** node and secure with authentication.
2. Set AI model credentials (OpenAI/Anthropic) in all agent and model nodes.
3. Add Slack credentials and target channel to **Notify Compliance Team** node.
4. Connect database/Google Sheets credentials.
5. Activate and test with a sample seller payload.
## Prerequisites
- Gmail account with OAuth2 credentials
- Slack workspace and bot token
- Database or Google Sheets for audit and records storage
## Use Cases
- Automated suspension and warning issuance for policy-violating marketplace sellers
## Customisation
- Swap enforcement channels (e.g., replace Gmail with SendGrid)
## Benefits
- Eliminates manual seller case reviews — scales enforcement without added headcount

## 🔗 Nodes Used

Slack, Webhook, Gmail, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
