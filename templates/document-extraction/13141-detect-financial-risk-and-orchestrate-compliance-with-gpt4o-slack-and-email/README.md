# 🔬 Detect financial risk and orchestrate compliance with GPT‑4o, Slack and email

> ⚡ **59 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates comprehensive risk signal detection and regulatory compliance management across financial and claims data sources. Designed for risk management teams, compliance officers, and financial auditors, it solves the critical challenge of identifying potential risks while ensuring timely regulatory reporting and stakeholder notifications.
The system operates on scheduled intervals, fetching data from multiple sources including financial APIs and claims databases, then merging these streams for unified analysis. It employs an AI-powered risk signal agent to detect anomalies, regulatory violations, and compliance issues. The workflow intelligently routes findings based on risk severity, orchestrating parallel processes for critical risks requiring immediate escalation and standard risks needing documentation. It manages multi-channel notifications through Slack and email, generates comprehensive compliance documentation, and maintains detailed audit trails. By coordinating regulatory analysis, exception handling, and evidence collection, it ensures complete risk visibility while automating compliance workflows.

## Setup Steps
1. Configure Schedule Trigger with risk monitoring frequency
2. Connect Workflow Configuration node with data source parameters
3. Set up Fetch B2B Data and Fetch Claims Data nodes with respective API credentials
4. Configure Merge Financial Data node for data consolidation
5. Connect Calculate Risk Metrics node with risk scoring algorithms
6. Set up Risk Signal Agent with OpenAI/Nvidia API credentials for anomaly detection
7. Configure parallel output parsers
8. Connect Check Critical Risk node with severity routing logic
9. Set up Route by Risk Level node for workflow branching

## Prerequisites
OpenAI or Nvidia API credentials for AI-powered risk analysis, financial data API access
## Use Cases
Insurance companies monitoring claims fraud patterns, financial institutions detecting transaction anomalies
## Customization
Adjust risk scoring algorithms for industry-specific thresholds
## Benefits
Reduces risk detection time by 80%, eliminates manual compliance monitoring

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
