# 🎣 Qualify & route leads with GPT-4o, Clearbit, HubSpot CRM & Slack alerts

> ⚡ **237 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### How it works
• Webhook receives lead form submissions from your website
• AI Agent (GPT-4o) analyzes lead quality using intelligent scoring framework
• Clearbit enriches company data automatically (employee count, industry, revenue)
• Qualification score (0-100) determines routing: high-quality leads → HubSpot CRM + Slack alert, low-quality leads → Airtable for manual review
• Structured output parser ensures reliable JSON formatting every time

### Set up steps
• **Time to set up:** 15-20 minutes
• Import the Clearbit sub-workflow first (separate workflow file included)
• Create 7 custom properties in HubSpot (qualification_score, buying_intent, urgency_level, budget_indicator, ai_summary, pain_points, recommended_action)
• Create Airtable base with 14 columns for low-quality lead tracking
• Get Slack channel IDs for sales alerts and review requests
• Add credentials: OpenAI (GPT-4o), Clearbit API, HubSpot OAuth2, Slack OAuth2, Airtable Token
• Replace placeholder IDs in Slack and Airtable nodes
• Configure the Clearbit Enrichment Tool node with your sub-workflow ID

### What you'll need
• **OpenAI API** - OpenAI model access for AI qualification
• **Clearbit API** - Free tier available for company enrichment
• **HubSpot** - Free CRM account works
• **Slack** - Standard workspace
• **Airtable** - Free plan works
• **Website form** - To send webhook data

### Who this is for
Sales teams and agencies that want to automatically qualify inbound leads before they hit the CRM. Perfect for B2B companies with high lead volume that need intelligent routing.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, HubSpot, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
