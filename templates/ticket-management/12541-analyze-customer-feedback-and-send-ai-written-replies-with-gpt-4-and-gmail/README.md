# 🎫 Analyze customer feedback and send AI-written replies with GPT-4 and Gmail

> ⚡ **111 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How It Works
This workflow automates customer feedback processing by analyzing sentiment, identifying key issues, generating personalized responses, and escalating critical cases to support teams when required. Designed for customer success managers, support teams, and product managers, it enables scalable feedback handling without compromising response quality or urgency. The workflow eliminates manual triage and response drafting by normalizing incoming feedback, performing sentiment and topic analysis, generating context-aware AI responses, validating tone and intent, escalating high-risk or negative feedback, logging all interactions for traceability, and delivering automated replies via email.

## Setup Steps
1. Configure webhook trigger URL for feedback form integration or email parsing
2. Add OpenAI API key for sentiment analysis and response generation
3. Connect Anthropic Claude API for alternative response generation and validation
4. Set up Google Sheets integration for feedback logging and analytics tracking
5. Configure Gmail OAuth2 credentials for automated customer response delivery
6. Integrate support ticket system (Zendesk, Freshdesk) for escalation routing

## Prerequisites
OpenAI API key, Anthropic Claude API key (optional), Google Workspace account (Sheets, Gmail)
## Use Cases
Product feedback management, customer support automation
## Customization
Adjust sentiment scoring thresholds per industry standards, modify response templates
## Benefits
Responds to feedback 95% faster, maintains consistent response quality across all interactions

## 🔗 Nodes Used

Send Email, Google Sheets, Postgres, Redis, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
