# 📱 Send AI-personalized WhatsApp campaigns with WhatsApp Business API and Google Sheets

> ⚡ **261 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow automatically launches AI-powered personalized promotional campaigns to WhatsApp users. It handles audience segmentation, message personalization, delivery via WhatsApp Business API, and tracks performance in Google Sheets.

### Who’s it for
• Digital marketers and growth teams running high-volume WhatsApp campaigns
• E-commerce businesses with opt-in customer lists
• SaaS companies promoting features/upgrades
• Businesses using WhatsApp for marketing and sales

### How it works / What it does
1. Triggers on campaign launch (webhook/schedule)
2. Loads audience data and performs AI-powered segmentation
3. Generates highly personalized messages based on user behavior/demographics
4. Sends messages via WhatsApp Business API
5. Tracks delivery, engagement, and conversions
6. Logs all data and metrics in Google Sheets

### How to set up
1. Import this workflow
2. Set up credentials (WhatsApp Business API, Google Sheets, OpenAI)
3. Configure audience source and campaign templates
4. Update AI prompt and segmentation logic
5. Activate workflow

### Requirements
• WhatsApp Business Account & API access (Meta)
• Google Sheets for audience & tracking
• OpenAI / Anthropic / Grok API
• Opt-in compliant user data

### How to customize the workflow
• Modify AI tone/offers in AI node
• Update Python segmentation rules
• Change Google Sheet columns
• Add A/B testing or more conditions

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
