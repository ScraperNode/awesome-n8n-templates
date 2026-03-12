# 💬 Telegram AI bot assistant: ready-made template for voice & text messages

> ⚡ **44,648 views** · 💬 [Support Chatbots](../)

## Description

## Free template for voice & text messages with short-term memory 
 
This n8n workflow template is a blueprint for an AI Telegram bot that processes both voice and text messages. Ready to use with minimal setup. 
 
The bot remembers the last several messages (10 by default), understands commands and provides responses in HTML. 
 
You can easily swap GPT-4 and Whisper for other language and speech-to-text models to suit your needs. 
 
### Core Features 
   - Text: send or forward messages 
   - Voice: transcription via Whisper 
 
Extend this template by adding [LangChain tools](https://community.n8n.io/t/review-node-as-tools-is-finally-here/57539). 
 
### Requirements 
- Telegram Bot API 
- OpenAI API (for GPT-4 and Whisper) 
 
💡 **New to Telegram bots?** Check our [step-by-step guide](https://blog.n8n.io/create-telegram-bot/#how-to-build-a-telegram-bot-with-n8n) on creating your first bot and setting up OpenAI access. 
 
### Use Cases 
- Personal AI assistant 
- Customer support automation 
- Knowledge base interface 
- Integration hub for services that you use: 
  - Connect to any API via [HTTP Request Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolhttprequest/) 
  - Trigger other n8n workflows with [Workflow Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
