# 🎬 Nano banana AI image editor via Telegram

> ⚡ **8,308 views** · 🎬 [Content Creation & Video](../)

## Description

# Nano Banana AI Image Editor

Transform your Telegram photos with AI-powered image processing using the revolutionary Nano Banana technology. This workflow automatically receives photos via Telegram, processes them through Google's advanced Gemini 2.5 Flash vision model, and sends back intelligently enhanced images - all powered by the innovative Nano Banana processing pipeline.

## Who's it for

Perfect for content creators, social media managers, photographers, and anyone who wants to automatically enhance their Telegram photos with AI. Whether you're running a photo editing service, creating content for clients, or just want smarter image processing in your personal chats, the Nano Banana AI editor delivers professional-grade results.

## How it works

The Nano Banana workflow creates an intelligent Telegram bot that processes images in real-time. When you send a photo with a caption to your bot, it automatically downloads the image, converts it to the proper format, sends it to Google's Gemini AI for analysis and enhancement, then returns the processed result. The Nano Banana engine optimizes every step for speed and quality.

## How to set up

1. **Create Telegram Bot:** Get your bot token from @BotFather on Telegram
2. **OpenRouter Account:** Sign up at openrouter.ai for free Gemini access  
3. **Configure Credentials:** Add your Telegram and OpenRouter API keys to n8n
4. **Update Chat ID:** Replace "YOUR_CHAT_ID_HERE" with your actual Telegram chat ID
5. **Activate Webhook:** Enable the Telegram trigger to start receiving messages

## Requirements

- n8n instance (cloud or self-hosted)
- Telegram Bot API credentials
- OpenRouter account (free tier available)
- Basic understanding of webhook configuration

## How to customize the workflow

The Nano Banana editor is highly customizable:

- **Change AI Model:** Modify the model parameter in "Nano Banana Image Processor" node
- **Add Filters:** Insert additional processing nodes before the AI analysis
- **Custom Prompts:** Edit the text content sent to Gemini for different processing styles
- **Multiple Chats:** Duplicate the final node for different Telegram destinations
- **Error Handling:** Add conditional logic for failed processing attempts
- **Batch Processing:** Extend to handle multiple images simultaneously

The Nano Banana technology ensures optimal performance while maintaining flexibility for your specific use cases.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
