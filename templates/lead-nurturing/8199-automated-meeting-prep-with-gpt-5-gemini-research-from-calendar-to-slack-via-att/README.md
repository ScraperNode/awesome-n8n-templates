# 💬 Automated meeting prep with GPT-5 & Gemini research from calendar to Slack via Attio CRM

> ⚡ **327 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n template transforms your daily meeting preparation by automatically researching attendees and generating comprehensive briefing documents. Every weekday morning, it analyzes your calendar events, researches each external attendee using multiple data sources, and delivers professionally formatted meeting briefs directly to your Slack channel.

## Who's it for
Business professionals, sales teams, account managers, and executives who regularly attend meetings with external contacts and want to arrive fully prepared with relevant context, conversation starters, and strategic insights about their attendees.

## How it works
The workflow triggers automatically Monday through Friday at 6 AM, fetching your day's calendar events and filtering for meetings with external attendees.

For each meeting, an AI agent researches attendees using your CRM (Attio), email history (Gmail), past calendar interactions, and external company research via Perplexity when needed.

The system then generates structured meeting briefs containing attendee background, relationship context, key talking points, and strategic objectives, delivering everything as a formatted Slack message to start your day.

## Requirements

- Google Calendar with OAuth2 credentials
- Gmail with OAuth2 credentials
- Slack workspace with bot token and channel access
- Attio CRM with API bearer token
- OpenRouter API key for AI model access (or other API credentials to connect AI to your AI agents)
- Perplexity API key for company research

## How to set up

1. Configure credentials for all required services in your n8n instance
2. Update personal identifiers in the workflow:
	1. Replace "YOUR_EMAIL@example.com" with your actual calendar email in both Google Calendar nodes
	2. Replace "YOUR_SLACK_CHANNEL_ID" with your target channel ID in both Slack nodes

3. Adjust AI models in OpenRouter nodes based on your preferences and model availability
4. Test the workflow manually with a day that contains external meetings
5. Verify Slack formatting appears correctly in your channel

## How to customize the workflow
- Change meeting research depth: Modify the AI agent prompt to focus on specific research areas like company financial data, recent news, or technical background.
- Adjust notification timing: Update the cron expression in the Schedule Trigger to run at different times or days.
- Expand CRM integration: Add additional Attio API calls to capture more contact details or create follow-up tasks.
- Enhance Slack formatting: Customize the Block Kit message structure in the JavaScript code node to include additional meeting metadata or visual elements.
- Add more research sources: Connect additional tools like LinkedIn, company databases, or news APIs to the AI agent for richer attendee insights.
---

The template uses multiple AI models through OpenRouter for different processing stages, allowing you to optimize costs and performance by selecting appropriate models for research tasks versus text formatting operations.

## 🔗 Nodes Used

HTTP Request, Slack, Google Calendar, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
