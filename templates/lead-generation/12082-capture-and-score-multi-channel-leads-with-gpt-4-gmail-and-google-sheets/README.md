# 🎣 Capture and score multi-channel leads with GPT-4, Gmail and Google Sheets

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Complete AI-powered sales system
Automates lead capture, qualification, and follow-up from multiple channels.
AI INTELLIGENCE:

Automatic GPT-4 analysis
Detects: sentiment, urgency, intent, budget signals
Identifies pain points and interests
Generates personalized responses

LEAD SCORING ENGINE:
Score 0-100 based on 10+ variables:

Channel (Referral +30, LinkedIn +25, WhatsApp +20, Web Form +15, Email +10)
Positive sentiment (+15)
High urgency (+25)
Purchase intent (+30)
High budget (+20)
Decision maker (+20)
Engagement (+5 per interaction, max 25)

MULTI-CHANNEL INPUT:

Gmail (incoming emails)
Webhook for web forms
Webhook for WhatsApp/Telegram
All normalized to unified format

SMART ROUTER - 5 FLOWS:

Schedule Demo: Hot lead with Calendly CTA
Send Info: Informative response
Create Task: Slack notification for call
Nurturing: Cold lead, value-driven email
Disqualify: Invalid lead

AUTO CRM:

Detects new vs existing leads
Stores last 10 interactions history
Updates score and stage automatically
Complete interaction log

HOT LEAD ALERTS (Score 70+):
Instant Slack notification with lead data, company, score, stage, intent, urgency, pain points, and AI summary.
AUTO-NURTURING (Daily 10AM):

Filters leads with score 20-60
No contact in 3+ days
AI personalized follow-up emails
Max 10 per day

WEEKLY REPORT (Monday 9AM):

Total and new leads
Active hot leads count
Average score
Distribution by stage and channel

SETUP:

Google Sheets with 3 tabs: Leads, Interactions, Tasks
OpenAI API Key
Gmail connected
Slack channels: #sales, #errors

IDEAL FOR:

B2B Startups
Digital agencies
Consulting firms
SaaS companies
Any business with multi-channel leads

Replaces HubSpot, Pipedrive, Close.io - 100% customizable, no monthly fees.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
