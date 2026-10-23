# 🔒 Route IAM events with GPT-4o-mini, forgeLLM, Slack, email, and audit logs

> ⚡ **65 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How It Works
This workflow automates Identity and Access Management (IAM) event governance using an AI agent, targeting security operations teams, compliance officers, and IT governance teams managing cloud or enterprise IAM systems. The core problem it solves is the manual, error-prone review of IAM events, such as permission grants, role changes, and access revocations, which are high-risk and require rapid, consistent decision-making at scale. When an IAM event is received via webhook (POST), a Governance Agent powered by an LLM evaluates it using contextual memory, an Access Signal Agent, and a forgeLLM API. It cross-references compliance rules via a Compliance Query Tool and logs findings through an Audit Log Tool. Notifications are dispatched via Email and Slack. Based on the agent's decision, a Rules-based Router directs the event into one of three branches, namely: Approved, Revoked, or Escalated, where event data is prepared and stored accordingly. A unified response is then returned to the caller, ensuring every IAM event is audited, classified, and actioned without human bottlenecks.

## Setup Steps
1. Configure the Webhook node with your IAM event source endpoint.
2. Add LLM credentials to the forgeLLM API Tool node.
3. Set up Governance Model with your policy prompt and connect Conversation Memory.
4. Configure Access Signal Agent with your access data source credentials.
5. Connect Compliance Query Tool to your compliance database or API.
6. Add Gmail/SMTP credentials to the Email Notification Tool.
7. Add Slack Bot token to the Slack Notification Tool.
 
## Prerequisites
- forgeLLM or compatible LLM API key
- Slack Bot token
- Gmail/SMTP credentials
## Use Cases
- Automatically approve or revoke IAM role assignments based on policy.
## Customization
- Swap forgeLLM for OpenAI or Anthropic models.
## Benefits
- Eliminates manual IAM review bottlenecks.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
