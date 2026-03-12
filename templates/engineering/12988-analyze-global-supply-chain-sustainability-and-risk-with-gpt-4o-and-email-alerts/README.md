# ⚒️ Analyze global supply chain sustainability and risk with GPT-4o and email alerts

> ⚡ **10 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates supply chain monitoring and risk management by deploying multiple specialized AI agents to analyze different supply chain dimensions simultaneously. Designed for supply chain managers, procurement teams, and logistics coordinators, it solves the critical challenge of real-time supply chain visibility and proactive risk mitigation across complex global networks. The system triggers on schedule, fetches current supply chain data, then deploys four specialized AI agents—Enterprise Executor for strategic coordination, Provider Generator for supplier assessment, Circular Economy analyzer for sustainability metrics, and Logistics Optimizer for distribution efficiency. Each agent leverages OpenAI models with dedicated tools for calculations and data parsing. Results are merged, analyzed for risk levels (critical, high, normal), and routed to appropriate stakeholders via email with risk-specific formatting and urgency levels.

## Setup Steps
1. Configure Schedule Trigger with desired monitoring frequency 
2. Set up OpenAI API credentials for all four AI agent nodes
3. Configure Fetch Supply Chain Data node with your ERP/SCM system API endpoint
4. Customize Enterprise Executor Agent tools with your strategic KPIs
5. Update Provider Generator Agent with supplier evaluation criteria
6. Configure Circular Economy Agent with sustainability metrics and targets
 
## Prerequisites
Active OpenAI API account with sufficient credits, supply chain management system with API access
## Use Cases
Daily supply chain health monitoring, supplier risk assessment, inventory shortage prediction
## Customization
Modify agent prompts for industry-specific analysis, adjust risk scoring algorithms
## Benefits
Provides 360-degree supply chain visibility, enables proactive risk mitigation

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
