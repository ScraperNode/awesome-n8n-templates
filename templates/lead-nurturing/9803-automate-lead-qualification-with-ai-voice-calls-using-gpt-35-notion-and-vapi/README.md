# 💬 Automate lead qualification with AI voice calls using GPT-3.5, Notion and Vapi

> ⚡ **1,094 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Website Leads to Voice Demo and Scheduling
Creator: [Summer Chang](https://www.youtube.com/channel/UCAdp-nOSH-jcrwXkLlUMyXQ)

## AI Booking Agent Setup Guide
Overview
This automation turns your website into an active booking agent. When someone fills out your form, it automatically:

Adds their information to Notion
AI researches their business from their website
Calls them immediately with a personalized pitch
Updates Notion with call results

Total setup time: 30-45 minutes

## What You Need
Before starting, create accounts and gather these:

n8n account (cloud or self-hosted)
Notion account - Free plan works [duplicate my notion template](https://summerchangco.notion.site/websiteinbound?v=28e2d5cd4ef481a78864000c6a5459a7&source=copy_link)
OpenRouter API key - Get from openrouter.ai
Vapi account - Get from vapi.ai

Create an AI assistant
Set up a phone number
Copy your API key, Assistant ID, and Phone Number ID

## How It Works
The Complete Flow

Visitor fills form on your website
Form submission creates new record in Notion with Status = "New"
Notion Trigger detects new record (checks every minute)
Main Workflow executes:

Fetches lead's website
AI analyzes their business
Updates Notion with analysis
Makes Vapi call with personalized intro


Call happens between your AI agent and the lead
When call ends, Vapi sends webhook to n8n
Webhook Workflow executes:

Fetches call details from Vapi
AI generates call summary
Updates Notion with results and recording

## 🔗 Nodes Used

HTTP Request, Webhook, Notion, Notion Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
