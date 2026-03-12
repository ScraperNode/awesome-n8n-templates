# 💬 Automate SDR Outreach: Source Wiza Leads and Personalize Emails with LLMs

> ⚡ **340 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## What it does

Receives campaign parameters via form, creates a Smartlead campaign, sources qualified leads through Wiza based on your ICP description, researches each prospect with Perplexity AI, generates personalized icebreaker emails and follow-up sequences with OpenRouter LLMs, and uploads everything to Smartlead for automated delivery.

## Who's it for

B2B sales teams, marketing agencies, and consultants who want to automate the entire SDR prospecting process from lead sourcing to personalized email delivery.

## Requirements

- n8n (self-hosted or cloud)
- Smartlead API Key
- Wiza Bearer Token
- OpenRouter API Key
- Perplexity API Key

## How to set up

1. Import workflow JSON into n8n
2. Configure Smartlead, Wiza, OpenRouter, and Perplexity credentials
3. Create Lead Database and Case Study tables in n8n
4. Update the "Business Context" node with your offer
5. Activate workflow and use the campaign form

## How to customize

- Adjust ICP translation logic in the "Format Search Parameters" agent
- Modify email templates in the "Ice Breaker Email Generator" prompt
- Change follow-up sequence timing in the "Build Sequence Templates" code node

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, Structured Output Parser, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
