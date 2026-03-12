# ⚡ Simple expense tracker with n8n chat, AI agent and Google Sheets

> ⚡ **16,077 views** · ⚡ [Personal Productivity](../)

## Description

## Use Case
It is very convenient to add expenses via simple chat message. This workflow attempts to do exactly this using AI-powered n8n magic!

![20250129 at 17.37.png](fileId:921)
Send message to a chat, something like **"car wash; 59.3 usd; 25 jan 2024"**

And get a response:
**Your expense saved, here is the output of save sub-workflow:{"cost":59.3,"descr":"car wash","date":"2024-01-25","msg":"car wash; 59.3 usd; 25 jan 2024"}**


LLM will smartly parse your message to structured JSON and save the expense as a new row into Google Sheet!



## Installation
### 1. Set up Google Sheets:
Clone this Sheet:
https://docs.google.com/spreadsheets/d/1D0r3tun7LF7Ypb21CmbTKEtn76WE-kaHvBCM5NdgiPU/edit?gid=0#gid=0

(File -&gt; Make a copy)

Choose this sheet into "Save expense into Google Sheets" node.


### 2. Fix sub-workflow dropdown: 
open "Parse msg and save to Sheets" node (which is an n8n sub-workflow executor tool) and make sure the SAME workflow is chosen in the dropdown. it will allow n8n to locate and call "Workflow Input Trigger" properly when needed.


### 3. Activate the workflow to make chat work properly.
Sent message to chat, something like "car wash; 59.3 usd; 25 jan 2024"

you should get a response:
Your expense saved, here is the output of save sub-workflow:{"cost":59.3,"descr":"car wash","date":"2024-01-25","msg":"car wash; 59.3 usd; 25 jan 2024"}

and new row in Google sheets should be inserted!

## 🔗 Nodes Used

Google Sheets, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
