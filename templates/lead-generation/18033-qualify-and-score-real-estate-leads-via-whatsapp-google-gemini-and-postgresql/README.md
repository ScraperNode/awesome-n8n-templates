# 🎣 Qualify and score real estate leads via WhatsApp, Google Gemini, and PostgreSQL

> ⚡ **163 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Capture real estate leads, qualify them through an AI-powered WhatsApp conversation, score buying intent, and notify your sales team when the lead is ready for follow-up.

## How it works
1. Receive Lead — Accept lead data through a webhook from a website form, Google Form, CRM, or another lead source
2. Validate & Store — Validate and normalize the lead details before storing the lead in PostgreSQL
3. Start WhatsApp Conversation — Send a WhatsApp template to start the qualification conversation.
4. AI Qualification — Google Gemini conducts a conversational qualification process, understanding requirements such as property type, preferred location, budget, purchase purpose, and timeline. PostgreSQL maintains conversation memory between messages.
5. Lead Scoring — Once sufficient information has been collected, the workflow retrieves the conversation history and evaluates buying intent, urgency, site-visit interest, budget, engagement, financial readiness, and decision-making authority.
6. Store & Notify — The resulting score, lead band, confidence, and recommended action are stored in PostgreSQL, and the sales team is notified for follow-up.

## Setup
1. Connect WhatsApp Cloud API credentials and configure the WhatsApp phone number used for sending messages and receiving conversations.
2. Create a Google Gemini API credential and select the Gemini model used by the AI qualification and lead-scoring nodes.
3. Configure PostgreSQL and ensure the required lead and chat-history tables are available.
4. Configure the webhook and connect your website form, CRM, or lead source to the ingest-data endpoint using the expected lead fields.
5. Create or configure the WhatsApp template used to start the lead qualification conversation.
6. Update the real estate project information in the AI Agent system prompt with your own projects, locations, pricing, and qualification criteria.

## Requirements
- WhatsApp Business Cloud API account
- Google Gemini API access
- PostgreSQL database
- A lead source capable of sending HTTP POST requests
- Approved WhatsApp message template
- n8n instance with access to the required integrations

## Additional info
Built by Ciphernutz IT Services, an AI-first Product Engineering company building AI agents, automation workflows, SaaS platforms, and enterprise solutions. We share practical n8n workflows designed to solve real business problems.

The workflow can be customized for different real estate businesses, lead sources, qualification processes, and sales workflows. For custom implementation or integration support, visit ciphernutz.com.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, WhatsApp Business Cloud, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
