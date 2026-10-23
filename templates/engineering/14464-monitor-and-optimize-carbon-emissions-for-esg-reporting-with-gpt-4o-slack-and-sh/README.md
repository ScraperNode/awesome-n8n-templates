# ⚒️ Monitor and optimize carbon emissions for ESG reporting with GPT-4o, Slack and Sheets

> ⚡ **102 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates end-to-end carbon emissions monitoring, strategy optimisation, and ESG reporting using a multi-agent AI supervisor architecture in n8n. Designed for sustainability managers, ESG teams, and operations leads, it eliminates the manual effort of tracking emissions, evaluating reduction strategies, and producing compliance reports. Data enters via scheduled pulls and real-time webhooks, then merges into a unified feed processed by a Carbon Supervisor Agent. Sub-agents handle monitoring, optimisation, policy enforcement, and ESG reporting. Approved strategies are auto-executed or routed for human sign-off. Outputs are consolidated and pushed to Slack, Google Sheets, and email, keeping all stakeholders informed. The workflow closes the loop from raw sensor data to actionable ESG dashboards with minimal human intervention.
## Setup Steps
1. Connect scheduled trigger and webhook nodes to your emissions data sources.
2. Add credentials for Slack (bot token), Gmail (OAuth2), and Google Sheets (service account).
3. Configure the Carbon Supervisor Agent with your preferred LLM (OpenAI or compatible).
4. Set approval thresholds in the Check Approval Required node.
5. Map Google Sheets document ID for ESG report and KPI dashboard nodes.

## Prerequisites
- OpenAI or compatible LLM API key
- Slack bot token
- Gmail OAuth2 credentials
- Google Sheets service account
## Use Cases
- Corporate sustainability teams automating monthly ESG reporting
## Customisation
- Swap LLM models per agent for cost or accuracy trade-offs
## Benefits
- Eliminates manual emissions data aggregation and report generation

## 🔗 Nodes Used

Send Email, Google Sheets, Postgres, Slack, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
