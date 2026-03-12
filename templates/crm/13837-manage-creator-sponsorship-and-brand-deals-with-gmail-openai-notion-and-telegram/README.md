# 🤝 Manage creator sponsorship and brand deals with Gmail, OpenAI, Notion and Telegram

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

### This n8n template automates the entire sponsorship pipeline for content creators by combining Gmail inbox monitoring, AI-powered deal classification, Notion CRM logging, and automated follow-up reminders to deliver a complete brand deal management system without switching between tools.

### Instead of manually tracking sponsorship emails in scattered spreadsheets or losing deals in your inbox, this workflow focuses on structured pipeline management, AI-drafted replies, and consistent follow-ups including surfacing deals that have gone quiet and need a nudge.

**Use cases**
- Automatically detect and classify sponsorship inquiries from your Gmail inbox
- Extract company name, contact, budget, campaign type, and channel from emails using AI
- Log every deal to a Notion CRM with deal stage, follow-up date, and notes
- Receive instant Telegram alerts with AI-drafted reply suggestions
- Get daily follow-up reminders for stale deals with ready-to-send email drafts
- Generate a monthly sponsorship revenue report with AI insights and channel breakdowns
- Power a professional creator business ops system with zero manual data entry

**Good to know**
This workflow monitors your Gmail inbox every minute, uses an AI model to classify emails and draft replies, and syncs all deal data to a Notion database. It does not auto-send emails all replies are reviewed by you before sending, keeping you in full control of brand relationships. The system is designed for solo creators and indie founders who want agency-level pipeline management without hiring an assistant. Setup typically takes 15–20 minutes.

### Requirements
- n8n Cloud or self-hosted instance
- Gmail account with OAuth2 access
- OpenAI API key (GPT-4o-mini recommended)
- Notion account with an integration token
- Telegram Bot Token + Chat ID
- Notion database (schema provided inside)

### Customising this workflow
- Replace Telegram with Slack or Discord for team alerts
- Swap Notion for Airtable or Google Sheets as your CRM
- Add a Gmail auto-send node if you want fully automated reply sending
- Adjust the AI classification prompt to include keywords specific to your niche
- Extend the monthly report to include platform-level breakdowns (YouTube vs Newsletter vs X)
- Adapt the follow-up logic to trigger after custom intervals per deal stage

### Flows included

Flow A — Inbound sponsorship detection, AI classification, Notion CRM logging, reply drafting

Flow B — Daily follow-up checker with AI-generated nudge drafts

Flow C — Monthly revenue report with AI insights delivered via Telegram and Gmail

## 🔗 Nodes Used

Telegram, Gmail, Notion, Gmail Trigger, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
