# ⚒️ Access control for AI agents (RBAC) using Airtable and Telegram

> ⚡ **1,635 views** · ⚒️ [Engineering](../)

## Description

## Purpose

This workflow allows granular control over the access to tools connected to AI Agents (including Multi-Agent setups) using **R**ole **B**ased **A**ccess **C**ontrol.

## Demo & Explanation

[![demo video](https://img.youtube.com/vi/eNgik9NR0wg/0.jpg)](https://youtu.be/eNgik9NR0wg)

## How it works

- User permissions are managed in Airtable where every restricted AI tool is listed by name and connected via roles to users
- Requests to the Main Agent can be sent through a Telegram message (can be replaced by Whatsapp, IMAP or similar)
- On every request the Telegram username is used to query a list of all allowed tools which are linked in Airtable
- A LangChain Code node is used to compare that list against the connected tools
- Every tool which is not permitted to be used is being replaced by a tool, which has a status response, telling the Agent to return a message to the user, that he is not authorized to use the tool
- Otherwise allowed tools are passed through to the Agent, as if they were connected directly to the Agent
- The parameters can also be passed to a sub-agent called as a sub-workflow where permissions can be checked the same way
- Every response is sent back to the same Telegram conversation

## Setup

- Clone the workflow and select the belonging credentials. You'll need an OpenAI and Airtable Account as well as a Telegram Bot (refer to the docs for the [Telegram credentials](https://docs.n8n.io/integrations/builtin/credentials/telegram/)).
- Copy [this Airtable Template](https://airtable.com/appi5nijuvzQbZLJJ/shr8OkLysG1VtlCiz) into your workspace
- Follow the instructions given in the yellow sticky notes
- Activate the workflow

## How to use

Try this example:

- Create a new line in Airtable under “Users” containing your Telegram username and your full name
- Set the roles “basic” and “info”
- *Consider temporarily disconnecting or resetting the chat memories so they do not remember previous confirmations*
- Start a new chat, asking about your permitted roles - you should get a list of those
- Ask about the current weather in your city - you should be informed, that you do not have permission to access that information
- Back in Airtable add the role “weather” to your user
- Now ask the Agent the same question again - It should give you a proper answer this time

From here on you can add tools and create roles to your likings.

## Disclaimer

Please note, that this workflow can only run on self-hosted n8n instances, since it requires the LangChain Code Node.

## 🔗 Nodes Used

Airtable, Telegram, Telegram Trigger, Execute Workflow Trigger, AI Agent, LangChain Code

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
