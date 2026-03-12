# 🔬 Monitor AI infrastructure costs and route budget alerts with Claude, NVIDIA, Slack, and Gmail

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates cost analysis and budget optimization for enterprises managing complex operational expenses. Designed for CFOs, finance teams, and operations managers, it addresses the challenge of identifying cost inefficiencies and generating actionable recommendations in real-time. The system runs every 15 minutes, monitoring cost metrics and generating AI performance data. The Cost Intelligence Agent aggregates financial data before routing to parallel AI processing. Claude AI executes budget optimization analysis while a specialized cost model identifies spending patterns. Routing engines evaluate optimization strategies, with NVIDIA parsers ensuring standardized outputs. The Optimization Coordinator consolidates insights and routes by severity: critical overruns trigger executive alerts via email and Slack, warnings generate management notifications, while routine optimizations proceed to documentation and historical storage for trend analysis.

## Setup Steps
1. Configure Schedule Trigger for 15-minute intervals
2. Add Claude API credentials in Workflow Configuration and Budget Alert Tool nodes
3. Set up NVIDIA API keys in Cost Intelligence Agent and Structured Output Parser nodes
4. Connect Gmail authentication and configure finance team distribution lists
5. Integrate Slack workspace credentials and specify budget alert channels
6. Configure storage endpoints in cost history nodes with database connections

## Prerequisites
Claude API access, NVIDIA API credentials, Gmail/Google Workspace account, Slack workspace integration
## Use Cases
Multi-department budget variance analysis, cloud cost optimization, procurement pattern detection
## Customization
Integrate ERP systems, add department-specific rules, customize alert thresholds by category
## Benefits
Reduces overruns 40% through early detection, identifies 15-20% monthly savings

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
