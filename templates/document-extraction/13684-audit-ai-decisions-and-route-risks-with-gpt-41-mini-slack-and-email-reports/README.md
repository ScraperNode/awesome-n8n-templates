# 🔬 Audit AI decisions and route risks with GPT-4.1-mini, Slack, and email reports

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates AI decision governance by tracing, assessing, and auditing automated decisions for risk and compliance. Designed for AI governance officers, compliance teams, and regulated industries, it addresses the critical need for explainability and accountability in AI-driven decisions. A schedule trigger initiates a simulated decision request, which is processed by a Decision Trace Agent to extract metadata. A Governance Agent then delegates to Risk Assessment and Compliance Checker sub-agents. Decisions are routed by risk level—high-risk cases trigger Slack alerts and are stored separately—while all outcomes are merged into a governance report sent via email, with full audit trail and explainability report stored for regulatory review.

## Setup Steps
1. Set schedule trigger interval to match governance audit frequency.
2. Add OpenAI API credentials to all OpenAI Model nodes.
3. Configure Slack credentials and set high-risk alert channel.
4. Add Gmail/SMTP credentials to Send Governance Report node.
5. Replace simulated decision request with live AI system webhook.

## Prerequisites
- Slack workspace with bot token
- Gmail or SMTP credentials
- Google Sheets or database for audit storage
## Use Cases
- Regulatory compliance auditing for AI-driven loan or insurance decisions
- Automated fairness and bias detection in HR or admissions systems
## Customization
- Swap simulated input with live AI system API or decision log feed
- Add sub-agents for fairness, bias, or sector-specific compliance checks
## Benefits
- Automates end-to-end AI decision auditing on a schedule
- Ensures high-risk decisions are flagged and stored instantly

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
