# 🔒 Detect transaction fraud and manage compliance with GPT-4 and Airtable

> ⚡ **16 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How It Works
This workflow automates financial transaction monitoring, fraud detection, and regulatory compliance using OpenAI GPT-4 across coordinated specialist agents. It targets compliance officers, fraud analysts, and fintech operations teams managing high transaction volumes where manual review is too slow to catch emerging fraud patterns and compliance breaches in time. On schedule, the system fetches pending transactions from Airtable and routes them through a Transaction Signal Agent that classifies each by risk level—High, Medium, Low, or Unclassified. A Compliance Agent then coordinates three specialist agents: Investigation, Risk Scoring, and Reporting. Airtable stores all compliance records throughout. Results merge and update transaction records directly, giving compliance teams a fully automated, audit-ready pipeline that flags fraud, scores risk, and generates regulatory reports without manual intervention.

## Setup Steps
1. Import workflow JSON into your n8n instance.
2. Add OpenAI API credentials.
3. Set Schedule Trigger frequency aligned to your transaction processing cycle.
4. Update Workflow Configuration node with risk thresholds and compliance rule parameters.
5. Connect Airtable credentials and configure base/table IDs for Fetch Pending Transactions.

## Prerequisites
n8n (cloud or self-hosted), OpenAI API key (GPT-4), Airtable account with configured base and appropriate table schema 
## Use Cases
Compliance teams automating AML screening and suspicious transaction flagging across high transaction volumes
## Customization
Replace OpenAI GPT-4 with Anthropic Claude or NVIDIA NIM in any agent node
## Benefits
Automates end-to-end fraud detection and compliance reporting, eliminating manual transaction reviews

## 🔗 Nodes Used

Airtable, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
