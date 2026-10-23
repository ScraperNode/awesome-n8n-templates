# 👥 Screen and schedule recruitment interviews on WhatsApp with OpenAI

> ⚡ **245 views** · 👥 [HR & Recruitment](../)

## Description

This workflow automates three key recruitment processes through WhatsApp:
1. **Candidate Screening** — AI evaluates applicants against job criteria
2. **Interview Scheduling** — Checks availability and books meeting slots
3. **Hiring Updates** — Notifies candidates of status changes and outcomes

### Who's it for
• HR teams handling 20+ applicants per week
• Recruiting agencies managing multiple job roles
• Startups automating early-stage candidate pipelines

### How it works
1. Candidate sends a WhatsApp message to apply
2. AI screens the candidate against predefined job criteria
3. Qualified candidates receive available interview slots
4. Confirmed bookings are added to calendar and CRM
5. Post-interview, hiring status is sent via WhatsApp
6. All interactions are logged in Google Sheets / CRM

### Setup Steps
1. Import this workflow
2. Configure credentials (Twilio/WhatsApp, OpenAI, Google Calendar, Google Sheets)
3. Update job criteria and scoring thresholds in the AI node
4. Set your calendar availability windows
5. Activate the workflow

### Requirements
• Twilio WhatsApp Business API (or Meta WhatsApp Cloud API)
• OpenAI / Anthropic API
• Google Calendar API
• Google Sheets (CRM tracker)
• SendGrid or Gmail (backup notifications)

### Customization
• Adjust screening score threshold in the Filter node
• Modify interview slot logic in the Python scheduler
• Add more job roles by extending the AI system prompt
• Change notification templates in the message formatting nodes

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
