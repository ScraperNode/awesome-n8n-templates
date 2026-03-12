# 💬 GummyMail - Next Gen Gumroad AutoReply & CRM System

> ⚡ **32 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## GummyMail – Gumroad Personalized Autoreply system

This n8n template automates post-purchase communication for Gumroad creators by sending AI-powered personalized thank-you emails and logging customer data into Notion. It helps creators engage buyers instantly while keeping a clean customer CRM — fully hands-free.

**Use cases**

- Automatically send personalized thank-you emails after every Gumroad purchase
- Maintain a lightweight customer CRM in Notion
- Reduce manual email follow-ups for digital product sales
- Improve buyer experience and post-purchase engagement
- Build a foundation for creator support, upsells, or onboarding flows

**Good to know**
This workflow connects to a few external services, so credentials must be configured before running the template. It works on both n8n Cloud and self-hosted instances, and setup typically takes 5 minutes.

### Requirements

- n8n Cloud or self-hosted instance
- Gmail account (OAuth connected) to receive and send emails
- Notion account with a customer database
- Google Gemini API key for AI-generated email content

### Customising this workflow
- Replace Gmail with Slack, Telegram, or WhatsApp for message delivery
- Swap Google Gemini with OpenAI or Claude for different writing styles
- Add follow-up emails, upsells, or discount links
- Extend the Notion database into a full creator CRM
- Use it as a base for Gumroad analytics, support automation, or AI creator tools

## 🔗 Nodes Used

Gmail, Notion, Stop and Error, Gmail Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
