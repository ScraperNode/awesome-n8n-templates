# 🔬 Monitor academic integrity signals with GPT-4o, email alerts and case archiving

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates integrity signal detection and investigation orchestration for compliance officers, ethics teams, and risk managers in financial services, healthcare, and regulated industries. It solves the challenge of identifying potential misconduct while ensuring human judgment governs sensitive investigations. Scheduled triggers initiate assessments on synthetic integrity signals, which flow to an AI agent for severity classification based on risk indicators. High-risk signals route to parallel AI investigation agents: data correlation analysis to uncover patterns and anomaly detection to flag statistical outliers. Results converge at mandatory human review gates where compliance professionals evaluate findings before case creation. Approved investigations generate structured case records, while cleared signals archive automatically with full audit trails.

## Setup Steps
1. Configure Llama-3.1-70B-Instruct model access
2. Set up schedule trigger for daily or continuous monitoring cycles
3. Configure risk-based routing logic (Low/High thresholds)
4. Connect Gmail for human review alerts to compliance officers
5. Set up Google Sheets for case storage and automated archival

## Prerequisites
API key, Gmail account with app password
## Use Cases
Financial fraud detection, employee misconduct investigation
## Customization
Integrate case management systems, add industry-specific risk models
## Benefits
Reduces investigation triage time by 65%, ensures consistent risk assessment methodology

## 🔗 Nodes Used

Send Email, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
