# ⚡ Generate a daily AI briefing from tasks, calendar, email, weather and news with OpenAI, WhatsApp and Email

> ⚡ **471 views** · ⚡ [Personal Productivity](../)

## Description

## AI Daily Personal Briefing Engine

This workflow runs every morning to fetch your tasks, calendar events, emails, weather, and news — then uses AI to generate a clean, personalized daily briefing delivered via WhatsApp or Email.

### Who's it for
• Busy professionals who want a structured morning overview
• Remote workers managing multiple tools (Todoist, Calendar, Gmail)
• Anyone who wants an AI-powered daily digest

### How it works / What it does
1. Triggers every morning at your chosen time
2. Fetches tasks from Todoist/Asana
3. Pulls today's calendar events
4. Reads unread/recent emails
5. Gets current weather forecast
6. Fetches top news headlines
7. Aggregates all data into one context object
8. AI generates a concise, human-friendly briefing
9. Routes to WhatsApp or Email based on your preference
10. Logs briefing summary to Google Sheets

### How to set up
1. Import this workflow into n8n
2. Set up credentials: Todoist/Asana, Google Calendar, Gmail, OpenAI, SendGrid, Twilio (WhatsApp)
3. Replace placeholder API keys and IDs
4. Set your preferred delivery method in the Set node
5. Activate the workflow

### Requirements
• Todoist or Asana account
• Google Calendar + Gmail
• OpenWeatherMap API key
• NewsAPI key
• OpenAI API key
• Twilio (WhatsApp) or SendGrid (Email)
• Google Sheets (for logging)

### How to customize
• Change cron time in the Schedule Trigger node
• Adjust AI tone/length in the AI Briefing node
• Add/remove data sources as needed
• Toggle delivery method in the Set Delivery Preference node

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
