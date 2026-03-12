# ⚡ Chinese translator via Line x OpenRouter

> ⚡ **1,140 views** · ⚡ [Personal Productivity](../)

## Description

The Chinese Translator workflow automates the translation of text into Chinese characters, pinyin, and English translations via Line Messaging API. This workflow leverages OpenRouter.ai to call advanced language models such as Qwen for accurate translations and ensures smooth user interaction by providing loading animations and timely replies.

## Purpose
This workflow aims to 
- Provide users with real-time translations of input text into Chinese characters, pinyin, and English
- Deliver seamless user experience through interactive features like loading animations and quick reply messages
- Enable easy integration with Line Messaging API for scalable deployment
 
## Key Features
- Real-Time Translation : Translates user-inputted text instantly using OpenRouter.ai's standardized API.
- Comprehensive Output : Delivers Chinese characters, pinyin, and English translations for each word or phrase.
- Interactive User Experience : Incorporates loading animations to inform users that the workflow is processing their request.
- Line Integration : Utilizes Line Webhooks and Reply APIs to facilitate communication between users and the translation service.

## Data Flow
1. **Receiving Input**
Node: Line Webhook
Captures incoming messages from Line users.
Extracts the text content and reply token from the webhook payload.
2. **Loading Animation**
Node: Line Loading Animation
Sends a loading animation back to the user, indicating that the workflow is processing the request.
Enhances user experience by providing immediate feedback.
3. **Translation Processing**
Node: Use OpenRouter
Sends the extracted text to OpenRouter.ai's API, utilizing the Qwen model for translation.
Requests Chinese characters, pinyin, and English translations for the input text.
4. **Sending Response**
Node: Line Reply
Formats the translation results into a readable text message.
Sends the translated text back to the user via Line's Reply API.

## Setup Instructions
**Prerequisites**
- Line Developer Account : Create a Line channel to obtain necessary credentials for webhooks and messaging.
- OpenRouter.ai Account : Set up an account and configure access to utilize their language models.

**Steps to Configure**
- Set Up Line Webhook :
Navigate to the Line Developers Console and create a new webhook URL.
Copy the generated webhook URL and paste it into the Line Webhook node in n8n.
- Configure OpenRouter.ai :
Obtain API credentials from OpenRouter.ai and integrate them into the Use OpenRouter node within the workflow.
- Adjust Workflow Settings :
Ensure the timezone is set to Asia/Bangkok .
Verify that all nodes are correctly connected and configured with appropriate credentials.

## Intended Audience
This workflow is ideal for:
- Language Learners : Seeking quick translations and pronunciation guides for Chinese language studies.
- Travelers : Looking to communicate effectively while traveling in Chinese-speaking regions.
- Businesses : Aiming to provide multilingual support to customers and clients.

## Benefits
- Enhanced Learning : Provides comprehensive translations, including pinyin, aiding in language acquisition.
- User-Friendly Interface : Real-time loading animations and prompt replies ensure a smooth user experience.
- Scalable Deployment : Easily integrates with Line's extensive user base for widespread accessibility.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
