# ⚡ Run a personal executive assistant with Gmail, Slack, Calendar, ClickUp, and OpenAI

> ⚡ **60 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every 15 minutes to triage unread Gmail and Slack mentions with OpenAI, request approvals in Slack before sending replies, detect Google Calendar conflicts and update events after approval, and send a 7AM daily briefing using ClickUp tasks via Gmail and Slack.

## How it works
1. Runs every 15 minutes and starts parallel checks for Gmail unread emails, upcoming Google Calendar events, recent Slack mentions, and whether it is 7AM.
2. Pulls unread Gmail messages, uses OpenAI to classify priority and draft a reply, and either requests Slack approval before replying or saves the reply as a Gmail draft.
3. Creates a ClickUp task for each triaged email using the AI-generated task title and description.
4. Retrieves the next 24 hours of Google Calendar events, detects overlapping meetings, and uses OpenAI to propose a reschedule message.
5. Sends the reschedule proposal to Slack for approval and, once approved, updates the Google Calendar event.
6. Fetches recent Slack channel history for the last 15 minutes, uses OpenAI to draft a response, and either posts immediately or requests Slack approval before posting.
7. If it is 7AM, fetches ClickUp tasks due today, uses OpenAI to compile a briefing that includes unread emails and upcoming events, and sends it via Gmail and posts it to Slack.

## Setup
1. Add credentials for Gmail OAuth2, Slack OAuth2, Google Calendar OAuth2, and an OpenAI API key.
2. Configure ClickUp API authentication for the HTTP Request nodes and replace `YOUR_CLICKUP_LIST_ID` with your ClickUp list ID.
3. Set the Slack channel ID used for approvals and posts (currently `C0AN1UGL0RM`) to the channel you want to use.
4. Review the Gmail search query and limits for unread email triage and adjust the calendar and Slack time windows if needed.
5. Activate the workflow and ensure it can run continuously so the 7AM check occurs at the right time.

## 🔗 Nodes Used

HTTP Request, Slack, Google Calendar, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
