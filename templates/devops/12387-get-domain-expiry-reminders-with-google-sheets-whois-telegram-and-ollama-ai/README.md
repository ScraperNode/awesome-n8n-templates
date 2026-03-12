# ⚙️ Get domain expiry reminders with Google Sheets, WHOIS, Telegram, and Ollama AI

> ⚡ **453 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow helps you monitor domain expiration dates and send automated reminders via Telegram when a domain is about to expire or has already expired, using WHOIS data and AI-powered information extracting.

It helps prevent service downtime, lost traffic, and missed renewals for individuals and teams managing multiple domains.

Common use cases:
- Track and remind on agency-managed client domains
- Monitor personal or business domain portfolios
- Send automated expiry alerts for IT and DevOps teams

## How it works
- Runs daily at 08:00 AM
- Reads domain data from Google Sheets
- Fetches WHOIS information from whois.com for each domain
- Extracts the data (expired date, domain owner, status domain) using AI
- Sends a Telegram reminder if the domain expires within 90 days
- Records the notification date to avoid duplicate alerts

## Setup steps
1. Add your Google Sheets ID and ensure the required columns exist
2. Connect your [Google Sheets credentials](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets)
3. Connect your [Telegram credentials](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/chat-operations)
4. Configure your LLM provider (Ollama or other)
5. Activate the workflow

### Need Help?
Contact me on [LinkedIn](https://www.linkedin.com/in/dwicahyas/)!

## 🔗 Nodes Used

Cron, Google Sheets, HTTP Request, Telegram, Ollama Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
