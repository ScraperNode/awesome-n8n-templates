# 💬 Route and escalate student advising requests with OpenAI, Gmail and Slack

> ⚡ **2 views** · 💬 [Support Chatbots](../)

## Description

## How It Works
This workflow automates student academic advising by deploying a multi-agent AI system that triages student queries, routes them intelligently, and escalates when human intervention is needed. Designed for academic institutions, it eliminates manual triage bottlenecks and ensures timely, context-aware responses. A student event triggers the webhook, which feeds into a Status Agent to classify the student's situation. A routing node directs the request to an Academic Orchestration Agent, which delegates to specialized sub-agents—Advising, Notification, or Escalation—based on query type. Results are routed by action type, checked for escalation, then dispatched via student email, faculty email, or Slack advisor alert before logging completion.

## Setup Steps
1. Import workflow and configure Student Event Webhook URL.
2. Add OpenAI API credentials to all OpenAI Model nodes.
3. Configure Gmail credentials for student and faculty email nodes.
4. Add Slack credentials and set target advisor channel for Slack alert.
5. Set escalation thresholds in the "Check if Escalation Required" node.
6. Test with sample student event payload via webhook.

## Prerequisites
- OpenAI API key
- Gmail account with OAuth2
- Slack workspace with bot token
## Use Cases
- Automated academic query triage for universities
## Customization
- Add new sub-agents for career or financial advising
## Benefits
- Reduces advisor workload through intelligent auto-triage
- Ensures urgent cases are escalated instantly

## 🔗 Nodes Used

Send Email, Slack, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
