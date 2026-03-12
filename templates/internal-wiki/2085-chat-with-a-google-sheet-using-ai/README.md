# 📖 Chat with a Google Sheet using AI

> ⚡ **61,565 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow allows you to ask questions about the data in a Google Sheet over a chat interface. It uses n8n's built-in chat, but could be modified to work with Slack, Teams, WhatsApp, etc.

Behind the scenes, the workflow uses GPT4, so you'll need to have an OpenAI API key that supports it.

### How it works
The workflow uses an AI agent with custom tools that call a sub-workflow. That sub-workflow reads the Google Sheet and returns information from it.

Because models have a context window (and therefore a maximum number of characters they can accept), we can't pass the whole Google Sheet to GPT - at least not for big sheets. So we provide three ways of querying less data, that can be used in combination to answer questions. Those three functions are:
1. List all the columns in the sheet
2. Get all values of a single column
3. Get all values of a single row

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

Google Sheets, Execute Workflow Trigger, Filter, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
