# 📊 Get AI meeting briefs from Google Calendar with SerpAPI, Azure OpenAI and Slack

> ⚡ **66 views** · 📊 [Market Research & Insights](../)

## Description

📊 Description
Streamline your meeting preparation with this AI-powered research automation. 📅🤖 Whenever a new event is created in your Google Calendar, this workflow automatically researches the attendee and their company, generates a concise AI-powered briefing, and delivers it directly to you on Slack. By combining real-time web search data with Azure OpenAI summarization, you walk into every meeting fully informed. No manual Googling. No last-minute scrambling. Just smart, automated meeting intelligence. 🚀
🔄 What This Template Does
📅 Monitors new Google Calendar events in real time.
👥 Filters events with external attendees and extracts their name and company.
🔎 Runs parallel Google searches (via SerpAPI) for the person and their company.
🧹 Parses and cleans search results for structured research data.
🔀 Merges personal and company insights into one dataset.
🤖 Generates a concise meeting brief using Azure OpenAI (GPT-4o-mini).
📨 Sends a formatted Slack DM with your personalized meeting briefing.
✅ Key Benefits
✅ Eliminates manual pre-meeting research
✅ Automatically prepares you before every new event
✅ Combines personal and company intelligence in one summary
✅ Delivers insights directly to Slack in real time
✅ Saves hours of repetitive Googling every week
✅ Improves meeting confidence and preparation quality

## ⚙️ Features
- Google Calendar new event trigger
- Conditional attendee filtering logic
- Parallel SerpAPI Google searches (person + company)
- JavaScript parsing and data cleaning nodes
- Azure OpenAI GPT-4o-mini summarization agent
- Structured AI-generated meeting brief
- Slack direct message delivery
- Modular design for adding LinkedIn or news searches

## 🔐 Requirements
- Google Calendar OAuth2 credentials
- SerpAPI API key
- Azure OpenAI API credentials (GPT-4o-mini deployment)
- Slack OAuth2 credentials (User ID required for DM delivery)

## 🎯 Target Audience
- Founders and startup operators
- Sales professionals and account executives
- Recruiters and hiring managers
- Consultants and client-facing teams

## 🔗 Nodes Used

Slack, Google Calendar Trigger, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
