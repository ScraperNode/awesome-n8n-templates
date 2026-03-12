# 📖 Query Airtable data from ChatGPT using an MCP server

> ⚡ **7 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recidrbznaXlmqFUI.jpg)](https://youtu.be/lQh1fuIrBN8)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What This Workflow Does

This workflow creates an MCP (Model-Client-Protocol) server that exposes your Airtable data as AI-powered tools, enabling external applications like ChatGPT, custom GPTs, or voice agents to query your Airtable base using natural language. Instead of manually searching through your Airtable records, you can simply ask ChatGPT questions like "list all contacts from Microsoft" and receive instant answers pulled directly from your database.

## Key Features

- **Natural Language Queries**: Ask questions about your Airtable data in plain English from ChatGPT or other AI applications
- **Multi-Table Support**: Includes tools for both Contacts and Companies tables (easily customizable for your own tables)
- **Real-Time Data Access**: External applications query live data directly from your Airtable base
- **No-Code Integration**: Connect ChatGPT to your Airtable without writing any code

## Setup & Configuration

### 1. Airtable Connection

First, create an Airtable Personal Access Token at [airtable.com/create/tokens](https://airtable.com/create/tokens) with these required scopes:
- `data.records:read`
- `data.records:write`
- `schema.bases:read`

Then add this token to n8n by creating a new Airtable Personal Access Token API credential.

### 2. Configure Your Tables

Update both Airtable Tool nodes to point to your own Airtable base and tables. The default setup includes Search Contacts and Search Companies tools, but you can customize these or add additional tools for other tables in your base.

### 3. Connect to ChatGPT

After publishing the workflow, copy the Production URL from the MCP Server Trigger node. In ChatGPT, enable Developer Mode in settings, navigate to Apps, and create a new app using this MCP Server URL.

## Common Use Cases

- Query customer or contact databases from ChatGPT
- Research companies in your CRM without opening Airtable
- Build custom AI assistants with access to your organizational data
- Enable team members to access data through conversational interfaces

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
