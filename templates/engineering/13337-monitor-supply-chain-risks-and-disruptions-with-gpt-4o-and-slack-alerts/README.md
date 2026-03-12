# ⚒️ Monitor supply chain risks and disruptions with GPT-4o and Slack alerts

> ⚡ **15 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates end-to-end supply chain visibility and logistics coordination for manufacturers, distributors, and retailers managing complex multi-tier supply networks. Designed for supply chain planners, logistics managers, and operations directors, it solves the challenge of tracking inventory across procurement, warehousing, and transportation while optimizing decisions for cost, speed, and risk mitigation. The system schedules regular data collection from procurement and warehouse/transportation systems, consolidates supply chain data, analyzes patterns through dual AI agents (Signal Monitoring identifies anomalies and trends, Coordination Agent orchestrates optimization decisions), routes findings by risk level (critical/marginal/acceptable), triggers action-specific responses (critical issues send Slack alerts, escalation emails, and compliance audit logs with approval workflows; acceptable conditions generate standard reports), and maintains complete traceability. Organizations achieve 50% reduction in stockouts, optimize logistics costs by 30%, enable proactive disruption management, and maintain real-time visibility across global supply networks.

## Setup Steps
1. Connect **Schedule Trigger** for monitoring frequency 
2. Configure **procurement system APIs** with order and supplier data access credentials
3. Link **warehouse management systems** (WMS) and **transportation platforms** (TMS) for inventory and shipment tracking
4. Add **AI model API keys** to Signal Monitoring and Coordination Agent nodes
5. Define **optimization parameters** in agent prompts
6. Configure **Slack webhooks** for critical supply chain alerts to operations teams
7. Set up **email credentials** for escalation workflows  

## Prerequisites
Supply chain system API access (ERP, WMS, TMS), AI service accounts.
## Use Cases
Inventory optimization across multi-tier networks, predictive stockout prevention
## Customization
Modify agent prompts for industry-specific constraints (perishable goods, hazmat regulations)
## Benefits
Reduces stockouts by 50% and optimizes logistics costs by 30%

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
