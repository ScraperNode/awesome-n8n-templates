# 💬 Handle Telegram support, payments, and logo orders with Mistral and Gemini

> ⚡ **29 views** · 💬 [Support Chatbots](../)

## Description

## Who it's for
This **n8n workflow** is designed for **Telegram bot administrators** and **customer service managers** who want to automate customer support and payment verification processes. The workflow creates an intelligent Telegram bot assistant that can handle various message types, process payments, and manage customer interactions through natural language commands.

## Features
- **Intelligent AI Assistant**: Powered by Mistral AI with specialized system prompts for customer support operations
- **Telegram Integration**: Complete webhook-based implementation for seamless **Telegram Bot API** operations
- **Multi-format Message Handling**: Processes text, voice, image, document, and video messages automatically
- **Payment Verification**: Automated payment slip analysis using Google Gemini AI to extract transaction details
- **Customer Management**: Logs new users, tracks payment information, and maintains conversation history
- **Order Processing**: Identifies and confirms service orders (Logo Design, Stage Design, Banner Design)
- **Context-Aware Automation**: Uses conversation history and Google Sheets data to provide personalized responses

## Requirements
- **Telegram Bot API Token**: For accessing your **Telegram** bot and receiving messages
- **Mistral AI API Credentials**: For powering the AI assistant
- **Google Sheets API**: For storing customer data and payment information
- **Google Gemini API**: For analyzing payment receipt images
#### Configure Credentials
- **Telegram Bot API**: Configure with proper webhook URL and token from BotFather
- **Mistral AI**: Set up with appropriate model access
- **Google Sheets**: Configure with appropriate permissions for reading/writing data
- **Google Gemini**: Set up with image analysis capabilities

## Important Notes
- **Webhook Setup**: The workflow includes a **Telegram Trigger** that must be properly configured for production use
- **Message Routing**: The bot automatically routes different message types to appropriate processing paths
- **Payment Verification**: Image analysis extracts transaction ID, amount, date, and time from payment receipts
- **Order Confirmation**: The system identifies service orders and sends confirmation messages
- **Admin Notifications**: Special handling for admin/moderator requests with notification forwarding
- **Rate Limiting**: The workflow includes appropriate delays to prevent **Telegram API** rate limiting
- **Data Storage**: All customer interactions and payment information are stored in Google Sheets

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
