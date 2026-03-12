# 🎬 Wikipedia podcast generator - AI-powered voice content creator via Telegram

> ⚡ **1,819 views** · 🎬 [Content Creation & Video](../)

## Description

**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

# Welcome to my Wikipedia Podcast Telegram Bot Workflow!
This workflow creates an intelligent Telegram bot that transforms Wikipedia articles into engaging 5-minute podcast episodes using natural language queries and voice messages.

![Screenshot 20250529 185855.png](fileId:1416)

## What this workflow does
This workflow processes incoming Telegram messages (text or voice, e.g. "Berlin") and generates professional podcast content about any Wikipedia topic (e.g. "Berlin", "Shakespeare", etc.). The AI agent researches the requested subject, creates a structured podcast script, and delivers it as high-quality audio directly through Telegram.

**Key Features:**
- Voice message support (speech-to-text and text-to-speech)
- Wikipedia research integration for accurate content
- Professional podcast structure (intro, main content, outro)
- Natural-sounding AI voice synthesis
- Conversational and educational tone optimized for audio consumption

This workflow has the following sequence:

1. **Telegram Trigger** - Receives incoming messages (text or voice) from users via Telegram bot
2. **Text or Voice Switch** - Routes the message based on input type (text message vs. voice message)
3. **Voice Message Processing** (if voice input):
   - Retrieval of voice file from Telegram
   - Transcription of voice message to text using OpenAI Whisper
4. **Text Message Preparation** (if text input) - Prepares the text message for the AI agent
5. **Wikipedia Podcast Agent** - Core AI agent that:
   - Researches the requested topic using Wikipedia tool
   - Creates a professional 5-minute podcast script (600-750 words)
   - Follows structured format: intro, main content, outro
   - Uses conversational, accessible, and enthusiastic tone
6. **ElevenLabs Text to Speech** - Converts the podcast script into natural-sounding audio using AI voice synthesis
7. **Send Voice Response** - Delivers the generated podcast audio back to the user via Telegram

### Requirements:

- **Telegram Bot API**: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/telegram/)
  - Create a bot via @BotFather on Telegram
  - Get bot token and configure webhook
- **Anthropic API** (Claude 4 Sonnet): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/anthropic/)
  - Used for AI agent processing and podcast script generation
  - Provides Wikipedia research capabilities
- **OpenAI API**: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/openai/)
  - Used for speech transcription (Whisper model)
- **ElevenLabs API**: [Documentation](https://github.com/n8n-ninja/n8n-nodes-elevenlabs?tab=readme-ov-fil)
  - Used for high-quality text-to-speech generation
  - Provides natural-sounding voice synthesis

**Important:** The workflow uses the Wikipedia tool integrated with Claude 4 Sonnet to ensure accurate and comprehensive research. The AI agent is specifically prompted to create engaging, educational podcast content suitable for audio consumption.

**Configuration Notes:**
- Update the Telegram chat ID in the trigger for your specific bot
- Modify the voice selection in ElevenLabs for different narrator styles
- The system prompt can be customized for different podcast formats or target audiences
- Supports both individual users and can be extended for group chats

Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Anthropic Chat Model, Wikipedia, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
