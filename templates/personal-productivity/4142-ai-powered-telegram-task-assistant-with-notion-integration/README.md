# ⚡ AI-powered Telegram task assistant with Notion integration

> ⚡ **1,750 views** · ⚡ [Personal Productivity](../)

## Description

This workflow creates a powerful AI assistant in Telegram that helps you manage your tasks in Notion. The assistant leverages OpenAI's language models to understand natural language commands, process voice messages, and maintain context through conversations.

Key features:
- Processes both text and voice messages in Telegram
- Transcribes voice messages automatically
- Maintains conversation context with memory
- Manages Notion tasks through a custom tool:
  • List all tasks
  • Add new tasks with priority (today/later)
  • Complete or uncomplete tasks
  • Change task timing

The workflow consists of two main parts:
1. AI Agent section: Handles Telegram connectivity, message processing, voice transcription, and conversation management
2. Notion Tool section: Implements the custom tool that connects to your Notion database, allowing the AI to interact with your tasks

Setup requires:
- A Telegram bot token
- OpenAI API credentials
- Notion integration token and database ID

[Example Notion Database](https://minglesai.notion.site/1feb53dccd6a81a1a12aedea55bff6a6?v=1feb53dccd6a81f5880c000c0387b716&pvs=4)


Perfect for personal productivity, team task management, or as a foundation for building more complex AI assistants with additional tools.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Notion, Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
