# 🎬 Production AI Playbook: Human Oversight (Exercise 3)

> ⚡ **53 views** · 🎬 [Content Creation & Video](../)

## Description

Route AI-generated content to reviewers on Slack or email, with automatic escalation if nobody responds. This template demonstrates a full multi-channel review workflow with timeout handling.

**What you'll do**
- Submit content through a Form Trigger with a body and preferred review channel (Slack or email).
- Watch the AI Agent enhance the content, then route the review request to Slack or Gmail with built-in Approve/Reject buttons.
- See how unanswered requests automatically escalate to a manager after a configurable timeout.

**What you'll learn**
- How to use a Form Trigger for structured workflow input
- How Switch nodes route requests to different review channels based on user selection
- How Slack and Gmail approval nodes pause workflows and present Approve/Reject buttons to reviewers
- How configuring a wait time limit on approval nodes enables automatic timeout handling
- How Switch nodes with three routing rules (approved, rejected, timed out) handle all decision outcomes
- How to implement timeout-based escalation paths for unresponsive reviewers

**Why it matters**
Real teams don't all live in the same tool. Some reviewers check Slack, others check email. This template meets reviewers where they are and ensures nothing falls through the cracks with built-in escalation logic.

This template is a learning companion to the Production AI Playbook, a series that explores strategies, shares best practices, and provides practical examples for building reliable AI systems in n8n.  

[Link to blog](https://go.n8n.io/PAP-HO-Blog)

## 🔗 Nodes Used

Slack, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
