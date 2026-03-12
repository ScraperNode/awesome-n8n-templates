# 💬 Conversational Telegram bot with GPT-5/GPT-4o for text and voice messages

> ⚡ **90,705 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow leverages a Telegram Message Trigger to activate an intelligent AI Agent capable of processing both text and voice messages. When a user sends a message in text or in voice format, the workflow captures and transcribes it (if necessary), then passes it to the AI Agent for understanding and response generation.

To enhance user experience, the bot also displays a typing indicator while processing requests, simulating a natural, human-like interaction.

## Key Features
- Multi-Modal Input: Supports both text messages and voice notes from users.
- Real-Time Interaction: Shows a “typing…” action in Telegram while the AI processes the input.
- AI Agent Integration: Provides intelligent, context-aware, and conversational responses.
- Seamless Feedback Loop: Replies are sent directly back to the user within Telegram for smooth interaction.

## How It Works
- The workflow triggers whenever a message or voice note is received on Telegram.
- If the input is a voice note, the workflow transcribes it into text.
- The text input is sent to the AI Agent for processing.
- While processing, the bot sends a typing indicator to the user.
- Once the AI generates a response, the workflow sends it back to the user in Telegram.

## Setup Instructions
1. Create a Telegram Bot:
	- Use **@BotFather** to create a bot and obtain your bot token.
2. Configure n8n Credentials:
	- Add Telegram API credentials in n8n with your bot token.
	- Add credentials for any speech-to-text service used for voice transcription (e.g., Open AI Transcribe A Recording).
3. Import the Workflow:
	- Import this workflow into your n8n instance.
	- Update all credential nodes to use your Telegram and transcription service credentials.
4. Set Webhook URLs:
	- Ensure Telegram webhook is set properly for your bot to receive messages.
	- Make sure your n8n instance is publicly accessible for Telegram callbacks.
5. Test the Workflow:
	- Send text messages and voice notes to your Telegram bot and observe the AI responses.

## Customization Guidance
- Add new message handlers: Extend the workflow to handle additional message types (images, documents, etc.).
- Improve transcription: Swap or add speech-to-text services for better accuracy or language support.
- Enhance AI Agent: Customize prompts and context management to tailor the AI’s personality and responses.
- AI Model Flexibility: Swap between different AI models (e.g., GPT-5, GPT-4, Claude, or custom LLMs) based on task type, cost, or performance preferences. By default, I use GPT-4o in this template. However, you can use the latest GPT-5 model by changing them in **OpenAI Chat Model** Node. It will show you a list of all the available models to choose.
- Tool-Based Control: Add custom tools to the AI Agent such as calendar access, Notion, Google Sheets, web search, database queries, or custom APIs—allowing for dynamic, multi-functional agents


## Security and Implementation 
- Notes The Telegram node manages message reception and sending but does not directly handle AI processing.
- Voice transcription requires integration with external APIs; secure those credentials in n8n and monitor usage.
- To simulate typing, the workflow uses Telegram’s “sendChatAction” API method, providing users with feedback that the bot is processing.
- Ensure your AI API keys and Telegram tokens are securely stored in n8n credentials and not exposed in workflows or logs.

## Benefits
- Handles natural conversational inputs with text or voice.
- Provides a smooth, engaging user experience via typing indicators.
- Easy integration of advanced AI conversational agents with Telegram.
- Flexible for personal assistants, helpdesks, or interactive chatbots.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
