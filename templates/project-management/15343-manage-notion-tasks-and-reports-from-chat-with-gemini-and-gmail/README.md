# 📋 Manage Notion tasks and reports from chat with Gemini and Gmail

> ⚡ **106 views** · 📋 [Project Management](../)

## Description

Chat with a Gemini-powered operations assistant to create and update Notion tasks, send emails via Gmail, and pull live project summaries — all from a single chat interface. Daily and weekly status reports also fire automatically on a schedule.

**Who's it for**
Operations managers, project leads, and small teams who manage work in Notion and want a single conversational interface to handle task creation, updates, and reporting — without switching between tools.

**How it works**
A chat trigger receives a plain-English message and passes it to Gemini, which classifies the intent into one of five actions: create a Notion task, update an existing task, send a Gmail, generate an on-demand report, or fetch the latest task ID. The message is routed to the matching AI agent, which calls the correct sub-workflow or tool and replies in chat. Two scheduled flows run independently — a daily status report every morning and a weekly progress digest every Friday — both pulling live data from your Notion Workstreams database and summarising it with Gemini.

**How to set up**
1. Add your Google Gemini API credential in n8n and assign it to all Gemini nodes
2. Add your Notion credential in n8n and connect it to your Workstreams database
3. Add your Gmail OAuth2 credential in n8n
4. Replace the placeholder database ID in every Notion node with your own
5. After importing, open Call Sub-Create Workflow and Call Sub-Update Workflow and update the workflow ID to match your imported workflow

**Requirements**
- n8n (cloud or self-hosted)
- Google Gemini API key
- Notion account with a Workstreams database
- Gmail account with OAuth2 access

**How to customize**
Add new intent labels to the Route by Intent node and wire them to your own agents to extend MiniBox with new capabilities. Swap the Notion field names in the Sub-Create and Sub-Update sections to match your own database schema.

## 🔗 Nodes Used

Notion, Execute Workflow Trigger, Schedule Trigger, AI Agent, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
