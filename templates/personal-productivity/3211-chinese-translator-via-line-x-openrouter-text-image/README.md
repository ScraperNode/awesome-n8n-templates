# ⚡ Chinese translator via Line x OpenRouter (Text & Image)

> ⚡ **1,085 views** · ⚡ [Personal Productivity](../)

## Description

This workflow template, "Chinese Translator via Line x OpenRouter (Text & Image)" is designed to provide seamless Chinese translation services directly within the LINE messaging platform. By integrating with OpenRouter.ai and advanced language models like Qwen, this workflow translates text or images containing Chinese characters into pinyin and English translations, making it an invaluable tool for language learners, travelers, and businesses operating in multilingual environments.

## This template is ideal for:
- Language Learners: Who want to practice Chinese by receiving instant translations of text or images.
- Travelers: Looking for quick translations of Chinese signs, menus, or documents while abroad.
- Educators: Teaching Chinese language courses and needing tools to assist students with translations.
- Businesses: Operating in multilingual markets and requiring efficient communication tools.
- Automation Enthusiasts: Seeking to build intelligent chatbots that can handle language translation tasks.

## What Problem Does This Workflow Solve?
Translating Chinese text or images into English and pinyin can be challenging, especially for beginners or those without access to reliable translation tools. This workflow solves that problem by:
- Automatically detecting and translating text or images containing Chinese characters.
Providing accurate translations in both pinyin and English for better comprehension.
- Supporting multiple input formats (text, images) to cater to diverse user needs.
Sending replies directly to users via the LINE messaging platform , ensuring accessibility and ease of use.

## What This Workflow Does
1) **Receive Messages via LINE Webhook**
The workflow is triggered when a user sends a message (text, image, or other types) to the LINE bot.
2) **Display Loading Animation**
A loading animation is displayed to reassure the user that their request is being processed.
3) **Route Input Types**
The workflow uses a Switch node to determine the type of input (text, image, or unsupported formats).
- If the input is text , it is sent to the OpenRouter.ai API for translation.
- If the input is an image , the workflow extracts the image content, converts it to base64, and sends it to the API for translation.
- Unsupported formats trigger a polite response indicating the limitation.
4) **Translate Content Using OpenRouter.ai**
The workflow leverages Qwen models from OpenRouter.ai to generate translations:
- For text inputs, it provides Chinese characters , pinyin , and English translations .
- For images, it extracts and translates using the qwen-VL model which can take images
5) **Reply with Translations**
The translated content is formatted and sent back to the user via the LINE Reply API.

## Setup Guide
**Pre-Requisites**
- Access to the LINE Developers Console to configure your webhook and channel access token.
- An OpenRouter.ai account with credentials to access Qwen models.
- Basic knowledge of APIs, webhooks, and JSON formatting.

**Step-by-Step Setup**
1) Configure the LINE Webhook:
Go to the LINE Developers Console and set up a webhook to receive incoming messages.
Copy the Webhook URL from the Line Webhook node and paste it into the LINE Console.
Remove any "test" configurations when moving to production.
2) Set Up OpenRouter.ai:
Create an account on OpenRouter.ai and obtain your API credentials.
Connect your credentials to the OpenRouter nodes in the workflow.
3) Test the Workflow:
Simulate sending text or images to the LINE bot to verify that translations are processed and replied correctly.

## How to Customize This Workflow to Your Needs 
- Add More Languages: Extend the workflow to support additional languages by modifying the API calls.
- Enhance Image Processing: Integrate more advanced OCR tools to improve text extraction from complex images.
- Customize Responses: Modify the reply format to include additional details, such as grammar explanations or cultural context.
- Expand Use Cases: Adapt the workflow for specific industries, such as tourism or e-commerce, by tailoring the translations to relevant vocabulary.

## Why Use This Template?
- Real-Time Translation: Provides instant translations of text and images, improving user experience and accessibility.
- Multimodal Support: Handles both text and image inputs, catering to diverse user needs.
- Scalable: Easily integrate into existing systems or scale to support multiple users and workflows.
- Customizable: Tailor the workflow to suit your specific audience or industry requirements.

## 🔗 Nodes Used

HTTP Request, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
