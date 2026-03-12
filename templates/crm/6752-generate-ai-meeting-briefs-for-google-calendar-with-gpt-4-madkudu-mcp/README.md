# 🤝 Generate AI meeting briefs for Google Calendar with GPT-4 & MadKudu MCP

> ⚡ **500 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Prepare external meetings in Google Calendar with AI summaries powered by MadKudu Intelligence

Automatically prepare for external meetings by generating AI-powered attendee briefs and sending them to your calendar, using MadKudu MCP.

## Who’s it for
This workflow is designed for customer-facing professionals—such as Account Executives, Customer Success Managers, or Founders—who want to walk into meetings informed, without spending time researching attendees.

It’s perfect for teams that use Google Calendar, manage accounts in a CRM, and want to automate meeting prep with real-time enrichment and summaries.

## How it works
1. The workflow checks Google Calendar every hour for upcoming meetings.

2. It filters out internal-only meetings using your company email domain.

For meetings with external attendees, it:

- Uses MadKudu MCP to enrich attendees and company

- Summarizes attendee details and context using an OpenAI model

3. It creates a private calendar event with the meeting brief, visible only to you.

## How to set up
- Connect your Google Calendar account.

- Set your MadKudu API Key as a variable

- Connect your OpenAI credentials.

- Set your company domain (e.g. acme.com) as a variable


Test and Activate the workflow.

## Requirements
- Google Calendar integration
- OpenAI credentials
- MadKudu account with access to API key

## How to customize the workflow

Adjust the trigger frequency to check more or less often.

Update the prompt in the AI Agent node to control the summary format or tone.

## 🔗 Nodes Used

Google Calendar, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
