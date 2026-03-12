# 🔬 Monitor AI budgets and optimize costs with Anthropic Claude and Slack alerts

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates enterprise budget monitoring and cost optimization using Anthropic Claude as the core AI engine across multiple specialist agents. It targets finance teams, operations managers, and CFOs managing complex multi-department budgets where manual tracking leads to delayed decisions and cost overruns. The workflow triggers on schedule, generates metrics data, and routes it through a Cost Intelligence Agent that classifies budget status (Critical, Warning, Review, Feedback). Each path activates specialist agents—Budget Alert, Routing Recommendation, and Cost Projection—coordinated by an Optimization Coordinator. Results are routed by action type: urgent alerts fire via Slack, executive summaries deliver via email, and all optimization actions are stored. This gives finance teams real-time cost intelligence with automated escalation and audit-ready records.

## Setup Steps
1. Import workflow JSON into your n8n instance.
2. Add Anthropic API credentials.
3. Set Schedule Trigger frequency.
4. Update Workflow Configuration node with budget thresholds per department or cost centre.
5. Add Slack credentials and configure the target channel in the Send Slack Alert node.
6. Set Gmail/SMTP credentials for the Send Executive Report Email node.

## Prerequisites
n8n (cloud or self-hosted), Anthropic API key (Claude), Slack workspace with bot token 
## Use Cases
Finance teams automating multi-department budget variance detection and escalation
## Customization
Replace Anthropic Claude with OpenAI GPT-4 or NVIDIA NIM in any agent node
## Benefits
Eliminates manual budget reviews through automated AI-driven cost classification

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
