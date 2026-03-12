# 📊 Automated agentic news event monitoring with perplexity.ai

> ⚡ **8,236 views** · 📊 [Market Research & Insights](../)

## Description

## Purpose of workflow:
The purpose of this workflow is to create a news reporter AI agent that automatically monitors specific news events and sends summary emails to the user. 

This tool aims to keep users up-to-date with the latest happenings on topics of interest without the need to constantly check multiple news sources manually. It's particularly useful for investors or researchers who must stay informed about specific events that may impact their work or investments.

## How it works:
It leverages the power of large language models, specifically Perplexity's (perplexity.ai) online models accessed through Open Router (openrouter.ai), to understand and summarize up-to-date news. 

The workflow is scheduled to run at predetermined intervals (e.g., daily at 7 AM), automatically scanning for news on the specified topic, generating a summary, and sending it via email to the user.


## Setup:
1. Sign up and generate an API key from Openrouter.ai This provides access to Perplexity's online language models
2. Update Perplexity node with Openrouter.ai API key
3. Specify the event/topic to monitor in the News Reporter node
3. Activate workflow to turn on scheduling feature

## 🔗 Nodes Used

Gmail, Markdown, Schedule Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
