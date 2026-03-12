# 🎬 Generate AI Twitter posts with web research using GPT, Tavily and image generation

> ⚡ **1,276 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# **🤖 AI-Powered Twitter Content Generator**

Transform topic ideas into ready to post Twitter drafts (text + image) using fresh web data and AI agents

## **🎯 What does this workflow do?**

This end to end automation creates complete Twitter posts by:

Taking your topic input (e.g., "Agentic AI") via chat interface

Generating fresh, research-backed content using AI agents:

First agent uses GPT-4.1-MINI + Tavily to bypass LLM knowledge limits with real-time web data

Second agent creates optimized prompt for image generation

Producing custom visuals through OpenAI's gpt-image-1

Delivering polished drafts (text + image) via Gmail for review

## **⚙️ How it works**

User input: You provide a topic through chat node

Content research:

Agent 1 (GPT-4.1-mini + Tavily) researches current web data

Generates factually fresh tweet content

Visual creation:

Agent 2 optimizes prompt for image generation

HTTP request node calls OpenAI's gpt-image-1 model to generate the image

Convert to file node converst the base64 string to a file so we can send it as an attachment

Delivery:

Gmail node sends compiled draft with text body + image attachment

## **🔑 Required setup**

Have a verified organization: [OpenAI Org Settings](https://platform.openai.com/account/org-settings)

OpenAI API Key: [Create a Key Here](https://platform.openai.com/settings/organization/api-keys)

Tavily API Key: [Get it Here](https://app.tavily.com/home)

Gmail credentials: [Google Cloud Console](https://console.cloud.google.com)

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Convert to File, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
