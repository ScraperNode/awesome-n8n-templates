# 💬 Telegram AI bot with LangChain nodes

> ⚡ **72,620 views** · 💬 [Support Chatbots](../)

## Description

This workflow connects Telegram bots with LangChain nodes in n8n.
The main AI Agent Node is configured as a Conversation Agent. It has a custom System Prompt which explains the reply formatting and provides some additional instructions.
The AI Agent has several connections:
- OpenAI GPT-4 model is called to generate the replies
- Window Buffer Memory stores the history of conversation with each user separately
- There is an additional Custom n8n Workflow tool (Dall-E 3 Tool). AI Agent uses this tool when the user requests an image generation.
In the lower part of the workflow, there is a series of nodes that call Dall-E 3 model with the user Telegram ID and a prompt for a new image. Once image is ready, it is sent back to the user.
Finally, there is an extra Telegram node that masks HTML syntax for improved stability in case the AI Agent replies using the unsupported format.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
