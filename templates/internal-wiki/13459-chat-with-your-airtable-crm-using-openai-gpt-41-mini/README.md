# 📖 Chat with your Airtable CRM using OpenAI GPT-4.1-mini

> ⚡ **3 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recidrbznaXlmqFUI.jpg)](https://youtu.be/lQh1fuIrBN8)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Workflow Overview

This workflow creates an intelligent AI chat agent that allows you to query and retrieve data from your Airtable base using natural language conversations. Instead of manually searching through tables or writing complex formulas, simply ask questions like "List all Microsoft employees" or "Show me contacts from California," and the agent will intelligently search the appropriate tables and provide accurate answers.

The agent is powered by OpenAI's GPT model and equipped with two specialized tools: one for searching your Contacts table and another for searching your Companies table. It maintains conversation context through built-in memory, allowing for follow-up questions and more natural interactions.

## Key Features

- **Natural language queries**: Ask questions in plain English instead of writing formulas
- **Multi-table search**: Automatically searches both Contacts and Companies tables
- **Intelligent tool selection**: The AI decides which table to query based on your question
- **Conversation memory**: Remembers context for follow-up questions
- **Web-based chat interface**: Interact with your data through a simple chat UI

## Setup Requirements

**Airtable Connection:**
1. Create a Personal Access Token at [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Add these scopes: `data.records:read`, `data.records:write`, and `schema.bases:read`
3. Grant access to your bases and copy the token
4. Add the token as an Airtable credential in n8n
5. Update both Airtable tool nodes to point to your specific base and tables

**OpenAI Connection:**
Connect your OpenAI API credentials in the OpenAI Chat Model node. The workflow uses GPT-4.1-mini by default, but you can select any available model.

Once published, the workflow provides a chat URL where you can start asking questions about your Airtable data immediately.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
