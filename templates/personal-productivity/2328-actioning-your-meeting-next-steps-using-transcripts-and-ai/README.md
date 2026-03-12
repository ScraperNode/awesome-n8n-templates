# ⚡ Actioning your meeting next steps using transcripts and AI

> ⚡ **34,166 views** · ⚡ [Personal Productivity](../)

## Description

This n8n workflow demonstrates how you can summarise and automate post-meeting actions from video transcripts fed into an AI Agent.

Save time between meetings by allowing AI handle the chores of organising follow-up meetings and invites.

## How it works
* This workflow scans for the calendar for client or team meetings which were held online. * Attempts will be made to fetch any recorded transcripts which are then sent to the AI agent.
* The AI agent summarises and identifies if any follow-on meetings are required.
* If found, the Agent will use its Calendar Tool to to create the event for the time, date and place for the next meeting as well as add known attendees.

## Requirements
* Google Calendar and the ability to fetch Meeting Transcripts (There is a special OAuth permission for this action!)
* OpenAI account for access to the LLM.

## Customising the workflow

This example only books follow-on meetings but could be extended to generate reports or send emails.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Calendar, Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
