# 🎯 Classify Intercom messages & route to ClickUp or Slack with GPT-4o-mini

> ⚡ **148 views** · 🎯 [AI Summarization & Classification](../)

## Description

## How it works
This workflow automates the classification and routing of incoming Intercom conversations. When a new customer message arrives, it is analyzed by AI to determine category, sentiment, urgency, and tags. Based on this classification, the workflow creates tasks in ClickUp for Support or Product requests, or sends real-time alerts to Slack for Sales inquiries.

## Step-by-step

**Webhook Intake**

- Triggered when Intercom sends a new conversation payload.

- Captures customer details, message content, and metadata.

**AI Classification**

- Sends the conversation JSON to OpenAI (gpt-4o-mini) with a structured prompt.

- AI returns a JSON object with category (Support, Product, Sales, Other), sentiment, urgency, reasoning, and tags.

**Processing & Structuring**

- A Code node parses the AI output and merges it with conversation details.

- Prepares formatted task fields such as title, description, customer info, and priority.

**Conditional Routing**

- Support requests → Task created in ClickUp with urgency and tags.

- Product requests → Task created in ClickUp with structured details.

- Sales inquiries → Slack alert sent to the Sales channel with context and AI reasoning.

- Other → No task/action triggered.

## Benefits

- Automates Intercom ticket triage and routing in real time.

- Ensures consistent, AI-driven classification of all customer conversations.

- Reduces manual review time for Support, Product, and Sales teams.

- Creates structured tasks with enriched metadata for faster resolution.

- Keeps Sales teams instantly informed with Slack alerts for urgent leads.

## 🔗 Nodes Used

Slack, Webhook, ClickUp, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
