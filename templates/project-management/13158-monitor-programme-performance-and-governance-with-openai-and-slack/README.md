# 📋 Monitor programme performance and governance with OpenAI and Slack

> ⚡ **20 views** · 📋 [Project Management](../)

## Description

## How It Works
This workflow automates programme performance monitoring and governance oversight through intelligent AI-driven analysis and multi-tool orchestration. Designed for programme managers, portfolio management offices, and executive leadership teams, it solves the critical challenge of tracking programme health while coordinating interventions across escalation, exception handling, and briefing preparation workflows. The system operates on scheduled intervals, fetching programme data and processing it through dual AI agents for performance monitoring and governance assessment. It orchestrates parallel specialized tools for exception escalation, briefing preparation, and governance reporting, each with dedicated AI models and output parsers. The workflow intelligently routes findings based on severity classification, delivering critical alerts through multiple channels including email and Slack while generating formatted standard reports. By maintaining comprehensive documentation and coordinating multi-faceted governance responses, it ensures programme stakeholders receive timely, actionable intelligence while creating complete audit trails for portfolio reviews.

## Setup Steps
1. Configure Schedule Trigger with programme review frequency
2. Connect Workflow Configuration node with programme parameters
3. Set up Fetch Programme Data node with project management API credentials
4. Configure Programme Monitoring Agent with OpenAI API credentials
5. Set up monitoring processing 
6. Connect Governance Agent with OpenAI API credentials for orchestration
7. Configure parallel specialized tools  with respective OpenAI models
8. Set up tool-specific parsers 

## Prerequisites
OpenAI API credentials for multiple AI agents and specialized tools
## Use Cases
PMOs monitoring multi-project portfolios, consulting firms tracking client engagement health
## Customization
Adjust monitoring frequency for programme urgency levels
## Benefits
Reduces programme review overhead by 75%, eliminates manual status compilation

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
