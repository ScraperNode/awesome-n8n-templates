# 🎣 Qualify chat leads and create HubSpot companies with DeepSeek and Google Calendar

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives chat messages, uses a DeepSeek-powered AI Agent to decide whether the message indicates interest in automation workflows, creates a Company in HubSpot when relevant, and then schedules a Google Calendar follow-up event using the extracted company details.

## How it works
1. Receives an incoming chat message through the public chat trigger.
2. Uses a DeepSeek chat model with conversation memory to analyze the message and decide whether it relates to interest in n8n workflows or enterprise automation.
3. If relevant, creates a Company record in HubSpot with the company details extracted from the chat; otherwise it replies with “sorry, I don't know”.
4. Checks whether the AI Agent response contains the phrase “Company Created in HubSpot” to determine whether to proceed.
5. Extracts the company JSON object from the AI Agent’s markdown response and marks the run as successful.
6. Creates a follow-up Google Calendar event for the next day, using the company name in the event summary.

## Setup
1. Configure HubSpot OAuth2 credentials with permission to create Company records.
2. Add DeepSeek API credentials for the DeepSeek Chat Model used by the AI Agent.
3. Add Google Calendar OAuth2 credentials and select the target calendar for follow-up events.
4. Copy the chat trigger URL and use it in your chat client or n8n chat UI, and adjust the AI Agent prompt and HubSpot company fields to match the data you want to capture.

## 🔗 Nodes Used

Google Calendar, AI Agent, Simple Memory, Chat Trigger, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
