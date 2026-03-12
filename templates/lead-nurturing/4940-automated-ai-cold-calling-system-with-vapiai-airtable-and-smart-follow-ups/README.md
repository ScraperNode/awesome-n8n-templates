# 💬 Automated AI cold calling system with VAPI.ai, Airtable, and smart follow-ups

> ⚡ **441 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**Automate your cold calling process with AI-powered conversation handling, smart scheduling, and comprehensive call tracking**

## How it works

This comprehensive cold calling system automates your entire outbound calling workflow in 4 high-level steps:

1. **Automated Dialing** - System automatically calls prospects from your Airtable database at scheduled intervals
2. **AI Conversation Handling** - Advanced AI assistant conducts natural conversations, handles objections, and books appointments
3. **Smart Call Processing** - Real-time call analysis determines outcomes (answered, voicemail, busy) and updates prospect status
4. **Intelligent Follow-up** - Automatically schedules callbacks, creates calendar appointments, and maintains detailed call records

## Key Features

- **Automated Prospect Management** - Pulls contacts from Airtable and manages call status
- **AI-Powered Conversations** - Uses VAPI.ai for natural, human-like phone interactions
- **Research Integration** - AI can research prospects using Wikipedia, Hacker News, and web search
- **Calendar Integration** - Automatically books meetings in Google Calendar
- **Call Analytics** - Tracks costs, duration, transcripts, and outcomes
- **Smart Routing** - Different workflows for successful calls vs. callbacks

## Set up steps

**Total setup time: ~30 minutes**

### Prerequisites
- Airtable account with prospect database
- VAPI.ai account for AI calling
- Google Calendar (for appointment booking)
- OpenAI API key
- SerpAPI key (for web research)

### Quick Setup (5 steps)
1. **Import workflows** - Import all 4 workflow files into your n8n instance
2. **Configure Airtable** - Connect your Airtable base with prospect data (Name, Mobile, Status columns)
3. **Set up VAPI.ai** - Configure AI assistant and phone number in VAPI dashboard
4. **Connect integrations** - Add credentials for Google Calendar, OpenAI, and SerpAPI
5. **Test & Launch** - Run a test call and activate the scheduler

### Database Structure
Your Airtable should include these tables:
- **Data** - Main prospect list (Name, Mobile, Status)
- **Recordings** - Call logs and transcripts
- **Call Later** - Scheduled callbacks

*Detailed configuration notes are included within each workflow as sticky notes*

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
