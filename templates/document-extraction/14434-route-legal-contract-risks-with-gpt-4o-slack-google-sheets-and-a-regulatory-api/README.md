# 🔬 Route legal contract risks with GPT-4o, Slack, Google Sheets and a regulatory API

> ⚡ **73 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates end-to-end legal contract review and compliance governance for legal teams, contract managers, and risk officers. It solves the problem of manually reviewing uploaded contracts for regulatory compliance, risk classification, and approval routing, a process that is time-consuming, inconsistent, and difficult to audit at scale. Contracts are ingested via a webhook upload trigger and text is extracted immediately. The extracted content is passed to a Legal Governance Agent backed by shared memory, which coordinates three specialist components: a Contract Review Agent (using a dedicated review model and memory), a Compliance Validation Agent (referencing a Regulatory Database Tool and compliance model), and a Slack Alert Tool with structured output parsing. The agent classifies each contract by risk level and routes accordingly, critical alerts, high-risk alerts, and standard reviews each follow distinct paths. All contracts generate an audit record. High and critical cases trigger contract review tracking, approval requirement checks, approval log preparation, and a final summary. Risk clauses are extracted in parallel, split, and stored for downstream reference.

## Setup Steps
1. Import workflow; configure the Contract Upload Webhook trigger URL.
2. Add AI model credentials to the Legal Governance Agent, Contract Review Agent, and Compliance Validation Agent nodes.
3. Connect Slack credentials to the Slack Alert Tool node.
4. Link Google Sheets credentials; set sheet IDs for Contract Reviews, Approval Log, and Risk Clauses tabs.
5. Configure the Regulatory Database Tool with your compliance database API endpoint and credentials.

## Prerequisites
- OpenAI API key (or compatible LLM)
- Slack workspace with bot credentials
- Google Sheets with review and risk log tabs pre-created
- Regulatory database API endpoint access
## Use Cases
- Legal teams auto-triaging uploaded vendor contracts by compliance risk level
## Customisation
- Swap the Regulatory Database Tool endpoint to target jurisdiction-specific compliance frameworks (GDPR, CCPA, MAS)
## Benefits
- Eliminates manual contract triage, reducing review cycle time significantly

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
