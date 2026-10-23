# 🔒 Orchestrate multi-agent compliance monitoring and audit logging with GPT-4o and Slack

> ⚡ **151 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How It Works
This workflow automates enterprise compliance governance using a multi-agent AI architecture. It targets compliance officers, legal teams, and risk managers who need continuous, jurisdiction-aware monitoring without manual intervention.The workflow runs on two paths: a scheduled governance check and an event-driven compliance signal receiver. Both converge on a central Governance Agent that orchestrates four specialised sub-agents, Compliance Signal, Jurisdiction Analysis, Remediation Planning, and Audit Documentation, each backed by dedicated AI models. External tools handle API lookups, penalty calculations, escalation notifications, and structured output parsing. Results feed into immutable audit logs, merged with scheduled reports, and dispatched as a daily email summary. Escalation logic ensures critical violations trigger immediate alerts. This eliminates fragmented compliance tracking, reduces human error, and provides auditable, timestamped records across multiple regulatory jurisdictions.

## Setup Steps
1. Add Claude/OpenAI credentials to all Chat Model nodes.
2. Configure the External Compliance API Tool with your regulatory API key and endpoint.
3. Set the Compliance Data Calculation Tool parameters (jurisdiction codes, penalty thresholds).
4. Connect the Escalation Notification Tool to your email or Slack credentials.
5. Set the Periodic Compliance Check schedule (cron) to your audit cadence.

## Prerequisites
- External compliance/regulatory API access
- Email or Slack account for notifications
- n8n instance (v1.40+ recommended)
## Use Cases
- Automated GDPR/MAS/SOX compliance monitoring across jurisdictions
## Customization
Swap AI models per agent for cost optimisation. 
## Benefits
Eliminates manual compliance checks with autonomous multi-agent orchestration.

## 🔗 Nodes Used

Send Email, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
