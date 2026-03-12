# 🎫 AI-powered ticket triage with multi-model classification & knowledge base

> ⚡ **228 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How It Works
This workflow automates enterprise ticket management by combining AI-powered classification with knowledge base retrieval. It receives support tickets via webhook, routes them through multiple AI models (OpenAI ChatGPT, NVIDIA's text classification APIs, and embeddings-based search) to determine optimal resolution strategies. The system generates contextual diagnostic logs, formats responses, updates ticket systems, notifies engineers when escalation is needed, and seamlessly integrates with knowledge bases for continuous learning. It solves the critical problem of manual ticket sorting and delayed responses by automating intelligent triage, reducing resolution time, and ensuring consistent quality across support operations. Target audience includes support operations teams, technical support managers, and enterprises managing high-volume ticket queues seeking to improve efficiency and SLA compliance.

## Setup Steps
1. Configure the OpenAI API key in credentials.
2. Add NVIDIA API credentials for embedding and classification models.
3. Set up Google Sheets for knowledge base storage and retrieval.
4. Connect your ticketing system (Jira, Zendesk, or webhook) for incoming tickets.
5. Link a notification service (Gmail or Slack) for engineer alerts.
6. Map custom fields to your ticket system schema.

 
## Prerequisites
OpenAI API account with GPT access. NVIDIA API credentials (Embeddings & Classification). Google Sheets for KB management. Ticketing system with webhook capability.  

## Use Cases
SaaS support teams triaging 100+ daily tickets, reducing manual sorting by 80%. Technical support escalating complex issues intelligently while documenting solutions.  

## Customization
Swap OpenAI models for Claude or Anthropic APIs. Replace Google Sheets with database systems (PostgreSQL, Airtable).  

## Benefits
Reduces manual ticket sorting by 70-80%, freeing support staff for complex issues. Decreases average resolution time through intelligent routing.

## 🔗 Nodes Used

Postgres, Slack, Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
