# 🔬 Generate post-meeting surveys from Google Meet notes with OpenAI and Weavely

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Stop forgetting to send follow-up surveys. This workflow automatically 
generates a tailored post-meeting survey from your Google Meet notes the 
moment a meeting ends, and sends it to all attendees with one Slack approval.

## Who is it for

Teams and individuals who run recurring meetings and want structured feedback 
without manually writing and sending surveys after every call.

## How it works

1. Google Calendar detects when a meeting ends
2. Waits 10 minutes for Gemini to attach notes to the event
3. Reads the meeting notes from Google Docs
4. An AI agent generates 5 to 7 tailored survey questions based on what was discussed
5. Weavely MCP builds and publishes the form automatically
6. A Slack message is sent to the organiser to review and approve
7. On approval, all attendees receive a branded email with the survey link

## How to set up

1. Update the Configuration node with your calendar email and Slack user ID
2. Connect Google Calendar, Google Docs, Gmail, OpenAI, and Slack credentials
3. Enable Interactivity in your Slack app settings

## Requirements

- Google Workspace Business Standard or higher (required for Gemini meeting notes)
- OpenAI API key
- Weavely account, free at weavely.ai
- Slack workspace and Gmail account

## How to customise

- Swap Google Calendar for Calendly or any other calendar trigger
- Replace Gmail with a Slack message to the meeting channel
- Swap OpenAI for Claude or any other LLM supported by n8n
- Adjust the AI prompt to change the number or style of questions

## 🔗 Nodes Used

Slack, Google Calendar, Gmail, Google Docs, Google Calendar Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
