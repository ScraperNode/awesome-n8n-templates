# 📋 Manage Jira issues with natural language via Telegram and GPT-4o

> ⚡ **360 views** · 📋 [Project Management](../)

## Description

## Manage Jira Issues with Natural Language via Telegram and GPT-4o  
## Overview
The Jira Agent is an AI-powered assistant that allows users to interact with Jira directly through messaging platform Telegram. It leverages OpenAI's GPT-4o model to interpret natural language commands and perform various Jira-related actions. On Telegram, it enables users to create Jira stories by triggering a guided form when prompted with "create story." Additionally, it provides more extensive functionality, including creating, updating, searching, and transitioning Jira issues through natural language commands.

## How it works
**Normal interaction** 
Using messages as "Please give all my issues".

**Standardized process of creating stories:** 
1. Message: "create story"
2. Open the Form that Telegram responds back to you
3. Fill in the essential story information in the form
4. The story automatically gets created in your backlog. 

## Required Connections
To use the Jira Agent effectively, users need access to:
- A Telegram account, Telegram setup involves deploying the bot and starting a chat; story creation is triggered with a simple text command.
- A connected Jira workspace
- Permissions to create and modify Jira issue
- Access to GPT-4o API-key

*Detailed configuration instructions are provided in the workflow*

## Setup Time
&lt;15 minutes

## Customising this workflow

- Try adding more details to the form for more complete Jira ticket creation.
- Try connecting a Google Calendar node to plan your work

## 🔗 Nodes Used

Function, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
