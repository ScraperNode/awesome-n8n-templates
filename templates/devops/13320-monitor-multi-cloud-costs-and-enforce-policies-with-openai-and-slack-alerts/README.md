# ⚙️ Monitor multi-cloud costs and enforce policies with OpenAI and Slack alerts

> ⚡ **28 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How It Works
This workflow automates cloud cost intelligence and governance for organizations struggling with unpredictable cloud spending and budget overruns. Designed for FinOps teams, cloud architects, and finance departments, it solves the critical challenge of monitoring multi-cloud expenses and enforcing cost policies in real-time. The system performs daily cloud cost checks, simulates spending scenarios, analyzes data through dual AI agents (Cost Intelligence Agent identifies optimization opportunities, Governance Agent enforces policies), routes alerts by severity, and notifies stakeholders via Slack and email. By automating cost analysis, anomaly detection, and policy enforcement, organizations prevent budget violations, optimize resource allocation, and maintain financial accountability—essential for enterprises managing complex cloud infrastructures where uncontrolled spending can escalate rapidly.

## Setup Steps
1. Connect **Daily Trigger** (schedule time aligned with billing cycle updates)
2. Configure **Cloud Provider APIs** 
3. Add **OpenAI API keys** to Cost Intelligence Agent and Governance Agent nodes
4. Set budget thresholds and cost policies in Governance Agent prompts
5. Configure **Slack** webhooks for critical and high-priority alerts
6. Link **Gmail** credentials for finance team report distribution

## Prerequisites
Cloud provider API access (AWS/Azure/GCP billing), OpenAI API account
## Use Cases
Multi-cloud cost optimization, budget compliance enforcement
## Customization
Modify AI prompts for company-specific cost policies, adjust severity thresholds for alerts
## Benefits
Prevents budget overruns through proactive alerts, reduces cloud waste by 30-50%

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
