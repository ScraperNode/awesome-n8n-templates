# 🤖 QuickBooks Online MCP Server (step by step video)

> ⚡ **247 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_rec0EGjS8Q1AxvT1b.jpg)](https://youtu.be/mprQ4CY3yn0)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What This Workflow Does

This workflow creates an AI-powered chatbot that can answer natural language questions about your QuickBooks Online data. Using OpenAI's GPT models and the Model Context Protocol (MCP), the agent can retrieve customer information, analyze balances, and provide insights through a conversational interface. Users can simply ask questions like "How many customers do we have?" or "What's our total customer balance?" and get instant answers from live QuickBooks data.

## Key Features

- **Natural language queries**: Ask questions about your QuickBooks data in plain English
- **MCP architecture**: Uses Model Context Protocol to manage tools efficiently, making it easy to expand with additional QuickBooks operations
- **Public chat interface**: Share the chatbot URL with team members who need QuickBooks insights without direct access
- **Real-time data**: Queries live QuickBooks data for up-to-date answers

## Common Use Cases

- Customer service teams checking account balances without logging into QuickBooks
- Sales teams quickly looking up customer information
- Finance teams getting quick answers about customer data
- Managers monitoring key metrics through conversational queries

## Setup Requirements

**QuickBooks Developer Account**: Register at `developer.intuit.com` and create an app with Accounting scope permissions. You'll receive a Client ID and Client Secret.

**Configure OAuth**: In your Intuit Developer dashboard, add the redirect URL provided by n8n when creating QuickBooks credentials. Set the environment to Sandbox for testing, or complete Intuit's app approval process for Production use.

**OpenAI API**: Add your OpenAI API credentials to power the chat model. The workflow uses GPT-4.1-mini by default, but you can select other models based on your performance and cost requirements.

**Chat Access**: The chat trigger is set to public by default. Configure access settings based on your security requirements before sharing the chat URL.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger, MCP Client Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
