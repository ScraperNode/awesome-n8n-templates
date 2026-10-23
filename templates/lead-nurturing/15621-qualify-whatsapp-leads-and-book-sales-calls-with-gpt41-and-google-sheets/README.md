# 💬 Qualify WhatsApp leads and book sales calls with GPT‑4.1 and Google Sheets

> ⚡ **494 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow automatically qualifies leads, answers FAQs, and books sales calls via WhatsApp using AI-powered conversation logic.

### Who's it for
• Sales teams handling high inbound message volume
• SaaS / service businesses using WhatsApp for outreach
• Agencies automating lead qualification pipelines

### How it works
1. WhatsApp message arrives via webhook (Twilio/Meta Cloud API)
2. Conversation state is loaded from memory/sheet
3. AI qualifies lead (Budget, Authority, Need, Timeline)
4. Bot answers FAQs automatically
5. Qualified leads get calendar booking link / slot picker
6. All activity is logged to Google Sheets CRM
7. Hot leads trigger Slack/email alert to sales rep

### How to set up
1. Import this workflow into n8n
2. Set up credentials: Twilio/Meta WhatsApp, Google Sheets, Google Calendar, OpenAI
3. Update YOUR_SHEET_ID and YOUR_CALENDAR_ID placeholders
4. Update your product FAQ knowledge base in the AI node
5. Activate workflow and configure your WhatsApp webhook URL

### Requirements
• Twilio WhatsApp API or Meta Cloud API
• Google Sheets (CRM tracker)
• Google Calendar or Calendly
• OpenAI API key
• n8n instance (cloud or self-hosted)

### Customization
• Edit BANT scoring thresholds in JS node
• Update FAQ knowledge base in AI system prompt
• Modify booking time slots in calendar node
• Adjust Slack alert conditions

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
