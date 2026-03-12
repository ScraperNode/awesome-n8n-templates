# 🔬 Triage and escalate ethics disclosures with GPT-4o, policy API and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates ethics disclosure intake, investigation, risk routing, and escalation for compliance officers, legal teams, and ethics oversight boards. Disclosures arrive via webhook and are processed by a central Governance Agent with persistent memory, supported by four specialised AI sub-agents: Ethics Monitoring Agent (flags policy breaches), Investigation Agent (conducts structured inquiry), Reporting Agent (generates case summaries), and Escalation Agent (determines escalation need). Shared tools include Audit Trail Storage, Policy Database API, and Slack Notification Tool. A Governance Output Parser structures results for a Risk Level Router, which splits cases into critical and standard tracks. Critical cases trigger Slack alerts to the oversight team; all cases are stored and merged before a final response is dispatched. This eliminates manual triage, ensures consistent policy application, and maintains a complete audit trail for regulatory accountability.

## Setup Steps
1. Configure webhook URL in **Ethics Disclosure Webhook** with secure authentication.
2. Set AI model credentials (OpenAI/Anthropic) in all agent and model nodes.
3. Connect Slack credentials and oversight channel.
4. Configure **Policy Database API** with your organisation's ethics policy endpoint or dataset.
5. Connect database/Google Sheets credentials 
6. Test with sample disclosure payloads across both risk tracks before activating.
## Prerequisites
- Slack workspace and bot token
- Ethics policy database or API endpoint
- Database or Google Sheets for case and audit storage
## Use Cases
- Automated triage and escalation of employee ethics disclosures in regulated industries
## Customisation
- Adjust Risk Level Router thresholds to match organisational severity definitions
## Benefits
- Eliminates manual disclosure triage — processes cases consistently at scale

## 🔗 Nodes Used

Slack, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
