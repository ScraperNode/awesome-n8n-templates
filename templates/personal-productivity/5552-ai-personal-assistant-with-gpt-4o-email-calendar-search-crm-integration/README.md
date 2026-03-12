# ⚡ AI personal assistant with GPT-4o: Email, calendar, search & CRM integration

> ⚡ **18,679 views** · ⚡ [Personal Productivity](../)

## Description

## This n8n template demonstrates how to use AI as a comprehensive personal assistant with multiple specialized agents.

Use cases include email management, scheduling, web search, calculations, and more - all automated through AI coordination.

## Good to know
This template integrates multiple AI services through OpenRouter

Each agent specializes in different tasks (Gmail, Calendar, Search, etc.)

Memory persistence maintains context across interactions

## How it works

The workflow is triggered by Telegram messages (can be replaced with other triggers)

A router node directs requests to the appropriate specialized agent

Agents include:

Gmail for email management

Calculator for math operations

Google Search for information retrieval

Calendar for scheduling

Contacts for CRM functions

The OpenRouter Chat Model coordinates responses

Final responses are sent back through Telegram

## How to use
Connect your Telegram bot credentials

Configure each service with appropriate API keys

The system will automatically route requests to the right agent

## Requirements

OpenRouter account for AI services

Telegram bot token

Google API credentials for relevant services

## Customising this workflow
Add more specialized agents as needed

Replace Telegram with other communication channels

Adjust routing logic for different use cases

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Calculator, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
