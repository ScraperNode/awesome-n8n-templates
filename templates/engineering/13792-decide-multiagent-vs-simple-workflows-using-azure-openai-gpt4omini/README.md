# ⚒️ Decide multi‑agent vs simple workflows using Azure OpenAI GPT‑4o‑mini

> ⚡ **22 views** · ⚒️ [Engineering](../)

## Description

## 📘 Description
This workflow acts as an AI Multi-Agent Architecture Advisor for n8n. It receives a problem statement via webhook, uses Azure OpenAI (gpt-4o-mini) to decide whether the problem needs a multi-agent design or a simple workflow, then returns a styled HTML report showing the decision, recommended agents (if any), and the suggested step flow.

## ⚙️ Step-by-Step Flow
- Receive Problem Description via POST (Webhook)
-  Accepts a POST payload containing a description field.
- Extract Request Body (Code)
-  Strips the wrapper and outputs only the body JSON to simplify downstream prompts.
- Multi-Agent Architecture Decision Agent (AI Agent)
-  Analyzes the problem description and outputs one of:
- Decision: Multi-Agent Required + agent definitions + workflow steps
- Decision: Not Required + minimal simplified workflow nodes
- Parse Decision, Agents & Steps (Code)
-  Extracts three structured fields from the 

AI output:

decision
- agents[] (name, purpose, node, reason)
- workflow_flow[] (ordered steps)
- Build HTML Architecture Report (Code)
-  Renders a clean card-based HTML dashboard:
- Decision badge (multi vs simple)
- Agent cards (if present)
- Workflow flow chips (steps)
- Return HTML Report to Caller (Respond to Webhook)
-  Returns the HTML report directly as the webhook response.
- 

## 🧩 Prerequisites
-  • Azure OpenAI credential with an active gpt-4o-mini deployment
-  • n8n webhook endpoint exposed to the caller (or via tunnel)
- 

## 💡 Key Benefits
✔ Fast “multi-agent vs simple” decisioning
✔ Outputs an actionable architecture, not generic advice
✔ HTML report is ready to embed in internal tools (Base44/UI)
✔ Structured parsing makes it easy to store or extend later

## 👥 Perfect For
-  Automation agencies doing solution design calls
-  Teams standardizing how they choose agent-based workflows
-  Internal tooling that needs instant architecture recommendations

## 🔗 Nodes Used

Webhook, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
