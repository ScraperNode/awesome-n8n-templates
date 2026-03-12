# 💬 Automate Telegram support handover from AI to humans with GPT4 and email alerts

> ⚡ **269 views** · 💬 [Support Chatbots](../)

## Description

## How it Works

This is a **Telegram AI-to-Human Handover System** that seamlessly transitions customer support conversations between an AI agent and human operators:

1. **AI-First Response**: When users message the Telegram bot, an AI agent handles the conversation initially, using memory to maintain context across messages.

2. **Smart Handover Detection**: The AI recognizes when users request human assistance and triggers a two-step confirmation process (user approval, then operator availability check).

3. **Topic-Based Routing**: Once confirmed, the system creates a dedicated Telegram Forum topic named after the user's ID, where operators can respond. Messages are automatically forwarded between the user's private chat and the operator's topic.

4. **Session Management**: A data table tracks conversation states ('ai', 'human', 'open', 'closed'), ensuring messages route correctly and maintaining conversation history.

5. **Clean Closure**: Operators type "exit" in the topic to close conversations, updating the database and closing the forum topic.

## Set-up Steps

**Estimated Time: 30-45 minutes** (first-time setup)

You'll need to:

- Create and configure a Telegram bot via BotFather
- Set up a Telegram group with Topics enabled and add your bot as admin
- Configure SMTP credentials (Gmail app password recommended)
- Create an n8n Data Table with specific columns (type, status, topic, user)
- Add your bot token to multiple HTTP Request nodes
- Set up AI model credentials (OpenRouter or Azure OpenAI)
- Fill in the Configuration node with your IDs and email addresses
- Test the flow using the included Personal Trigger to capture your group/user IDs

**Note**: The template includes detailed video guides (1-minute overview and 10-minute setup walkthrough) plus extensive documentation in sticky notes covering every node and credential setup.

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
