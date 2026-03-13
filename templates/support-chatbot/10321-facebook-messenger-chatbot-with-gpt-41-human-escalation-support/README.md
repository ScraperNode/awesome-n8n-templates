# 💬 Facebook Messenger chatbot with GPT-4.1 & human escalation support

> ⚡ **396 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?
This n8n workflow is designed for businesses, customer support teams, and page administrators who want to automate their Facebook Messenger responses while maintaining the ability to escalate to human agents when needed. It's perfect for e-commerce stores, service providers, and organizations that receive customer inquiries through Facebook Messenger and want to provide instant, intelligent responses 24/7. The workflow can handle both text messages and attachments, automatically detects when human intervention is needed, and seamlessly transfers the conversation to a human admin.

## What this Workflow Does
This n8n workflow creates an intelligent Facebook Messenger chatbot that can understand and respond to customer messages in both English and Bengali. It automatically classifies incoming messages to determine if they require human assistance, processes attachments by identifying file types, generates appropriate responses using AI, and escalates conversations to human admins when necessary. The workflow maintains conversation context through memory and can reference external documents for more accurate responses.

## Key Features
- **Multi-language Support**: Automatically detects and responds in English or Bengali
- **Message Classification**: Determines if a message requires human intervention
- **Attachment Handling**: Identifies and processes different file types (images, documents, etc.)
- **AI-powered Responses**: Generates intelligent, context-aware responses using OpenAI
- **Admin Escalation**: Seamlessly transfers conversations to human agents when needed
- **Memory Management**: Maintains conversation context for more natural interactions
- **Document Integration**: Can reference external Google Docs for information
- **Webhook Verification**: Properly handles Facebook's webhook verification process

## Requirements
- Facebook Page with Messenger functionality
- Facebook Graph API credentials
- OpenAI API credentials
- Google Docs API credentials (optional)
- n8n Instance (self-hosted or cloud)
- Admin Facebook user ID for escalation

## Workflow Components
### 1. Webhook Setup
- **Webhook**: Receives incoming messages from Facebook Messenger
- **If3**: Verifies webhook subscription requests
- **Respond to Webhook**: Completes the verification process

### 2. Message Processing
- **If**: Determines if the message contains text or attachments
- **Classify text**: Analyzes text messages to determine if human intervention is needed
- **AI Agent1**: Identifies attachment types

### 3. AI Response Generation
- **AI Agent**: Generates intelligent responses to user messages
- **OpenAI Chat**: Powers the AI Agent with language model capabilities
- **Think**: Ensures responses match the user's language and tone
- **Memory**: Maintains conversation context
- **HTTP**: Enables external data retrieval
- **Google Docs**: Allows referencing external documentation

### 4. Escalation Logic
- **If2**: Determines if escalation is needed based on classification
- **Edit Fields1**: Prepares data for escalation messages
- **Wait3**: Adds delay before sending messages

### 5. Message Delivery
- **Admin Message**: Notifies admin when escalation is needed
- **User Message**: Confirms to user that their message was forwarded
- **Admin Message1**: Notifies admin about attachments
- **User Replay Message**: Sends AI-generated responses to users

## Notes
- The workflow uses a custom session key for memory management
- Admin ID should be updated to match your Facebook admin user ID
- The system is configured to respond in both English and Bengali
- Webhook verification requires a specific verify token (set to "admin" in this example)
- The workflow includes appropriate delays to prevent rate limiting

## Ideal Use Cases
- Customer service automation for e-commerce stores
- Lead qualification and initial response
- After-hours customer support
- Information dissemination for organizations
- Appointment scheduling and basic inquiries
- Product information and recommendation requests

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Webhook, Facebook Graph API, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
