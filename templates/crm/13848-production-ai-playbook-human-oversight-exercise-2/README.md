# 🤝 Production AI Playbook: Human Oversight (Exercise 2)

> ⚡ **46 views** · 🤝 [CRM & Sales Operations](../)

## Description

Gate high-risk AI actions behind human approval. This template shows how to prevent an AI agent from executing sensitive operations (like sending contracts) without a human signing off first.

**What you'll do**
- Ask the AI agent to send a contract to a customer.
- See the agent pause and present the intended action for review in the chat.
- Approve or decline the action and watch the workflow respond accordingly.

**What you'll learn**
- How HITL (Human-in-the-Loop) for Tool Calls works in n8n
- How to add a human review gate between an AI Agent and its tools
- How the agent displays its intended action and waits for approval before executing
- How to selectively gate high-risk tools while letting low-risk tools run freely

**Why it matters**
AI agents with tool access can take real-world actions. One wrong API call, one incorrect email, and you have a problem. This pattern ensures humans stay in control of the actions that matter while letting safe operations run automatically.

This template is a learning companion to the Production AI Playbook, a series that explores strategies, shares best practices, and provides practical examples for building reliable AI systems in n8n.  

[Link to blog](https://go.n8n.io/PAP-HO-Blog)

## 🔗 Nodes Used

AI Agent, Code Tool, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
