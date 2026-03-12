# 🔬 Automate investment risk monitoring with Qwen-Max AI, Slack & email alerts

> ⚡ **224 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
Automates financial risk evaluation by intelligently consolidating information from five critical sources: financial, operational, legal, insurance, and regulatory systems. Hourly triggers enable continuous, AI-driven risk assessment using the OpenRouter Chat Model, producing dynamic risk scores while simultaneously identifying emerging compliance gaps and potential exposure areas. High-risk findings automatically initiate corrective actions, trigger secondary investigations, and send real-time alerts through Slack notifications as well as investor email updates. Designed for financial institutions, compliance teams, risk managers, and investment firms, it provides continuous, scalable, and fully data-driven monitoring of risk across complex regulatory and operational environments.

## Setup Steps
1. Configure hourly/daily schedule trigger. 
2. Authenticate all five data APIs. 
3. Set OpenRouter credentials. 
4. Configure Slack webhook. 
5. Set Gmail for email distribution. 
6. Define risk thresholds and compliance rules.

## Prerequisites
OpenRouter API key, five data source APIs, Slack access, Gmail account, investor contacts 

## Use Cases
Banking risk audits, insurance compliance monitoring, portfolio risk tracking 

## Customization
Swap AI models, modify data sources, adjust thresholds 

## Benefits
90% faster risk assessment, eliminates manual aggregation

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
