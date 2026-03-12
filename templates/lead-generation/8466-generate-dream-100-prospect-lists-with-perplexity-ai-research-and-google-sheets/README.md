# 🎣 Generate Dream 100 prospect lists with Perplexity AI research and Google Sheets

> ⚡ **646 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview
Send an AI a few details about your "Dream Customer" in normal english, then have it search the web and give you a "Dream 100" - 100 ideal prospects to connect with in your industry.  

Great for stress-testing a product idea or giving you a start for networking in an industry.

## How it works

- Send the AI agent information about your business + ideal customer.  It will ask you to clarify any additional info.
- The agent will use an LLM to turn your criteria into specific prompts for an internet search
- Perplexity will use those prompts to identify ideal customers
- An LLM will format those Perplexity results, then they'll be added to a Google sheet.


## Set up steps

1. Copy the provided google sheets template into your Google Drive
2. Connect your Google Drive/Sheets to the workflow
3. Connect OpenRouter and Perplexity to the workflow (Just paste in your API key!)
4. If desired, connect the Slack trigger/response nodes to control the agent from Slack.

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, Simple Memory, Chat Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
