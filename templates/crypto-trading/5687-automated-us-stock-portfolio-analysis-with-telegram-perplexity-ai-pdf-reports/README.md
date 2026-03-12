# 📈 Automated US stock portfolio analysis with Telegram, Perplexity AI & PDF reports

> ⚡ **573 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

System Architecture
Two integrated N8N workflows providing automated US stock portfolio management through Telegram:

FLOW 1: Conversational Portfolio Manager
- Telegram bot for interactive portfolio management
- PDF upload & analysis via LlamaIndex Cloud API
- Natural language portfolio updates via GPT-4.1-mini
- Real-time user registration and data management

FLOW 2: Automated Weekly Reports
- Schedule-triggered weekly analysis (every 7 days)
- Perplexity AI sonar-deep-research for market analysis
- Professional PDF report generation via PDFco
- Automatic Telegram delivery to all registered users

## 🔗 Nodes Used

HTTP Request, Postgres, Telegram, Telegram Trigger, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
