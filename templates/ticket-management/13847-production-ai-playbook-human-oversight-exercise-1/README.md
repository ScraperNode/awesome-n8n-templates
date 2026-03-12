# 🎫 Production AI Playbook: Human Oversight (Exercise 1)

> ⚡ **109 views** · 🎫 [Ticket Management & Triage](../)

## Description

Review AI-drafted customer responses before they go out. This template sets up a chat-based approval flow where an AI agent drafts a reply and a human reviewer approves or rejects it, all within the n8n chat interface.

**What you'll do**
- Send a customer support message to the AI agent and watch it draft a response.
- Review the AI's draft in the chat with Approve and Decline buttons.
- See how approved responses flow forward while declined ones get flagged.

**What you'll learn**
- How to use the Chat Trigger to start AI-powered conversations
- How the Chat node's "Send and Wait for Response" operation pauses workflows for human input
- How IF nodes route workflows based on approval decisions
- How to connect an AI Agent to an LLM (OpenRouter) for response generation

**Why it matters**
Every customer-facing message deserves a human sanity check. This template gives you a lightweight approval flow that catches AI mistakes before they reach your customers, without slowing your team down.

This template is a learning companion to the Production AI Playbook, a series that explores strategies, shares best practices, and provides practical examples for building reliable AI systems in n8n.  

[Link to blog](https://go.n8n.io/PAP-HO-Blog)

## 🔗 Nodes Used

Gmail, AI Agent, Chat Trigger, OpenRouter Chat Model, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
