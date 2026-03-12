# 👥 Validate academic promotion decisions with GPT-4o, policy rules, and Gmail

> ⚡ **16 views** · 👥 [HR & Recruitment](../)

## Description

## How It Works
This workflow automates performance governance and policy compliance monitoring for HR leaders, talent managers, and organizational development teams across enterprises. It solves the challenge of maintaining consistent performance standards while ensuring human judgment on promotion and termination decisions. Scheduled triggers initiate governance cycles that fetch performance data and policy rules, then orchestrate specialized AI agents working in parallel: governance assessment evaluates policy adherence, performance validation verifies metric accuracy, and calibration analysis ensures rating consistency across departments. A policy compliance checker synthesizes findings and routes outcomes intelligently—approved promotions store automatically, while exceptions requiring HR review trigger human approval gates before case creation and email escalation.

## Setup Steps
1. Configure API credentials with Llama-3.1-70B-Instruct model access
2. Set up schedule trigger aligned with review cycles (quarterly/annual)
3. Configure decision routing logic for approved versus exception cases
4. Connect Gmail for HR escalation alerts to designated reviewers
5. Set up Google Sheets for storing approved promotions and audit trails

## Prerequisites
API key, performance management system data access, Gmail account with app password
## Use Cases
Annual performance review calibration, promotion decision validation
## Customization
Integrate HRIS for live performance data, add custom policy rule engines
## Benefits
Reduces governance review time by 70%, ensures consistent policy application

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
