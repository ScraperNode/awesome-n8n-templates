# 🤖 Multimodal telegram bot with voice, image & video analysis using Claude & Gemini

> ⚡ **1,482 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# What it's for:
This is a base template for anyone trying to develop a telegram AI Agent. This base allows for multiple inputs (Voice, Picture, Video, and Text inputs) to be processed by an AI model of their choosing to a get a User started. From here, the User may connect any tools that they see fit to the AI Agent for their n8n workflows.

# How it works:
**Input**: Telegram message to a bot chat

**n8n Processing**: Switch node determines the type:
1. Voice Message
2. Picture Message
3. Video Message
4. Text Message

(Currently uses OpenAI and Gemini to analyze Voice/Photo/Video content but feel free to change these nodes with other models)

**AI Agent Proccessing**: LLM of your choosing examines message and based on system prompt, generates an output

**Output**: AI Output is sent back in telegram Message

# How to use:
 1. Create your chat bot and generate access token
-&gt; Search Bot father in telegram
-&gt; Type "/newbot"
-&gt; follow instructions and create access token
-&gt; Copy access token

 2. Create Credentials in n8n
-&gt; Open telegram trigger node
-&gt; Click create credential
-&gt; Paste access token
-&gt; Save

 3. Create LLM access token
 (Different per LLM but search your LLM + API in google)
-&gt; (will have to create an account with the LLM platform)
-&gt; buy credits to use LLM API
-&gt; Generate Access token
-&gt; Paste token in LLM node

# Requirements:
- Telegram Bot Access Token
- Google Gemini Access Token (For Picture and Video messages)
- OpenAI Access Token (For Voice messages)
- LLM Access Token (Your preference for the AI Agent)

# Customizing this workflow:
- To personalize the AI Output, adjust the system prompt (give context or directions on the AI's role)
- Add tools to the AI agent to give it more utility besides a personalied LLM (Example: Calendars, Databases, etc).

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Anthropic Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
