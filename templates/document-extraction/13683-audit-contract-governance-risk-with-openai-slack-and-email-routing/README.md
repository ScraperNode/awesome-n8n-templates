# 🔬 Audit contract governance risk with OpenAI, Slack and email routing

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates contract governance auditing by deploying a multi-agent AI system that validates contracts, assesses risk, checks compliance, and routes alerts based on risk level. Designed for legal, procurement, and compliance teams, it eliminates manual contract review bottlenecks and ensures timely escalation of high-risk issues. A schedule trigger initiates the workflow, simulating a contract audit data input. A Contract Validation Agent performs initial validation via OpenAI, then passes results to a Governance Orchestration Agent, which delegates to Risk Assessment and Compliance Checker sub-agents. Risk scores are routed by level—low, medium, or high—triggering appropriate notifications via Slack or email escalation before logging the audit trail.

## Setup Steps
1. Set schedule trigger interval to match audit frequency requirements.
2. Add OpenAI API credentials to all OpenAI Chat Model nodes.
3. Configure Slack credentials and set target channel for risk notifications.
4. Add Gmail/SMTP credentials to the Send Email Escalation node.
5. Define risk thresholds in the Route by Risk Level rules node.

## Prerequisites
- Slack workspace with bot token
- Gmail or SMTP credentials
- Basic n8n workflow knowledge
## Use Cases
- Automated periodic contract risk auditing for procurement teams
- Compliance breach detection with instant escalation to legal
## Customization
- Replace simulated data with live contract database or webhook input
## Benefits
- Eliminates manual contract review with scheduled AI auditing

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
