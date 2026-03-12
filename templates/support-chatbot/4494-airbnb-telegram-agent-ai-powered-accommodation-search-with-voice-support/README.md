# 💬 Airbnb Telegram agent - AI-powered accommodation search with voice support

> ⚡ **6,643 views** · 💬 [Support Chatbots](../)

## Description

# Welcome to my Airbnb Telegram Agent Workflow!
This workflow creates an intelligent Telegram bot that helps users search and find Airbnb accommodations using natural language queries and voice messages.

**DISCLAIMER: This workflow only works with self-hosted n8n instances! You have to install the [n8n-nodes-mcp-client Community Node](https://www.npmjs.com/package/n8n-nodes-mcp)!**

![Screenshot 20250529 175332.png](fileId:1415)

## What this workflow does
This workflow processes incoming Telegram messages (text or voice) and provides personalized Airbnb accommodation recommendations. The AI agent understands natural language queries, searches through Airbnb data using MCP tools, and returns mobile-optimized results with clickable links, prices, and key details.

**Key Features:**
- Voice message support (speech-to-text and text-to-speech)
- Conversation memory for context-aware responses
- Mobile-optimized formatting for Telegram
- Real-time Airbnb data access via MCP integration

This workflow has the following sequence:
1. **Telegram Trigger** - Receives incoming messages from users
2. **Text or Voice Switch** - Routes based on message type
3. **Voice Processing** (if applicable) - Downloads and transcribes voice messages
4. **Text Preparation** - Formats text input for the AI agent
5. **Airbnb AI Agent** - Core logic that:
   - Lists available MCP tools for Airbnb data
   - Executes searches with parsed parameters
   - Formats results for mobile display
6. **Response Generation** - Sends formatted text response
7. **Voice Response** (optional) - Creates and sends audio summary

### Requirements:
- **Telegram Bot API**: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/telegram/) 
  - Create a bot via @BotFather on Telegram
  - Get bot token and configure webhook
- **OpenAI API**: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/openai/)
  - Used for speech transcription (Whisper)
  - Used for chat completion (GPT-4)
  - Used for text-to-speech generation
- **MCP Community Client Node**: [Documentation](https://github.com/nerding-io/n8n-nodes-mcp)
  - Custom integration for Airbnb data
  - Requires MCP server setup with Airbnb/Airtable connection
  - Provides tools for accommodation search and details

**Important:** You need to set up an MCP server with Airbnb data access. The workflow uses MCP tools to retrieve real accommodation data, so ensure your MCP server is properly configured with the Airtable/Airbnb integration.

**Configuration Notes:**
- Update the Telegram chat ID in the trigger for your specific bot
- Modify the system prompt in the Airbnb Agent for different use cases
- The workflow supports both individual users and can be extended for group chats

Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
