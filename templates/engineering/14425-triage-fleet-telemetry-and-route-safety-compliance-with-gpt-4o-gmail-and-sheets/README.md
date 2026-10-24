# ⚒️ Triage fleet telemetry and route safety compliance with GPT-4o, Gmail and Sheets

> ⚡ **83 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates intelligent fleet operations management for transport operators, logistics companies, and smart mobility teams. It solves the problem of manually triaging high-volume vehicle telemetry data, a process prone to delays, missed safety thresholds, and inconsistent service prioritisation. Incoming vehicle telemetry is received via webhook and validated by a Telemetry Validation Agent using an AI model and output parser. Validated data is passed to a Fleet Orchestration Agent that coordinates three specialist sub-agents: a Safety Compliance Sub-Agent (checking thresholds and escalating breaches), a Service Scheduling Sub-Agent (optimising maintenance windows), and a Customer Email Notification Tool. The orchestrator then routes each case by service priority, namely: urgent, high, normal, or low, triggering the appropriate service preparation step and logging traceability data to Google Sheets. Compliance escalations follow a parallel path: checking status, preparing reports, and logging to Sheets. All branches converge into a unified webhook response, ensuring downstream systems receive a consistent, structured reply.
 
## Setup Steps
1. Import workflow and configure the webhook trigger URL.
2. Add AI model credentials to Validation Agent, Orchestration Agent, and both Sub-Agents.
3. Connect Gmail credentials to the Customer Email Notification Tool.
4. Link Google Sheets credentials; set target sheet IDs for Safety Traceability and Compliance Escalation logs.
5. Configure the Fleet Management API Tool and Urgent Service API Call with your fleet service endpoint URLs.
6. Set safety threshold values in the Safety Threshold Calculator node.

## Prerequisites
- OpenAI API key (or compatible LLM)
- Gmail account with OAuth credentials
- Google Sheets with log tabs pre-created
## Use Cases
- Logistics fleets auto-triaging vehicle fault alerts by severity
## Customisation
- Swap OpenAI for any LangChain-compatible model
## Benefits
- Eliminates manual telemetry triage, reducing response lag

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
