# 🎫 Route support messages with GPT-4.1-mini, Slack, email and human review

> ⚡ **79 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow classifies incoming support messages from email or Slack, drafts AI-generated replies for routine queries, and automatically pauses to notify a human agent for sensitive topics such as complaints, emotional distress, billing disputes, legal concerns, or escalation requests.

### Who's it for
• Customer support teams handling 50+ messages per day
• SaaS companies needing compliant, empathetic AI responses
• E-commerce brands managing returns, refunds, and complaints
• Any team that wants AI speed with human oversight on sensitive issues

### How it works / What it does
1. Captures incoming messages from Email (webhook) or Slack
2. Normalizes message context (sender, channel, body, urgency signals)
3. AI classifies the message into a category and sensitivity tier
4. Routine queries → AI drafts reply → sent automatically
5. Sensitive queries → AI drafts reply → paused for human review
6. Human approves, edits, or rejects the draft via webhook resume
7. Final reply sent to customer via email or Slack
8. All interactions logged to Google Sheet with category, tier, and resolution

### How to set up
1. Import this workflow
2. Configure credentials (Gmail/IMAP, Slack, OpenAI/Anthropic, Google Sheets)
3. Update your support tone, escalation keywords, and team Slack channel
4. Activate workflow

### Requirements
• Gmail or IMAP webhook / Slack Events API
• OpenAI / Anthropic / Grok API
• Slack Bot Token (for human notifications)
• Google Sheets for audit logging
• HTTP endpoint for human approval webhook

### How to customize the workflow
• Edit sensitivity tiers in the Python classification node
• Change escalation keywords list
• Update Slack notification channel and message template
• Modify AI tone and persona in the AI draft node
• Adjust wait timeout for human review window

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
