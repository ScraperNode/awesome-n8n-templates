# 🔬 Create a personal property inventory with Notion and Anthropic Claude

> ⚡ **110 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What it does
An AI model identifies, describes, and give an estimated value range of a personal property item based on pictures of the item.

## How it works
1. One of more images, and an optional description, are posted to a n8n webhook. Note that the images should be of the same item. Submitting multiple images of different items will result in unpredictable output.
2. The input is validated.
3. The images and optional description are sent to an AI model, currently set to Anthropic's Claude Sonnet 4.6, for analysis.
4. The model identifies the item in the image(s) and returns various properties, including name, description, and high and low value estimates.
5. The AI model's output, along with the original images, are saved in a Notion database.

## Requirements
- An AI provider account, such as OpenAI, Anthropic, Gemini. As configured the template uses Anthropic, but any image-capable model should work.
- A Notion account with a compatible database. 
  
## How to use
- Configure authentication for your AI provider and the webhook header authentication.
- iOS users can download a shortcut [here](https://www.icloud.com/shortcuts/c4fdf2c0f784466cbf737133a4bbf2c3) that allow you to submit images from your photo library using the share sheet. You'll need to update the shortcut with your webhook url and webhook header authentication secret. Both are set in the 'Get contents of' shortcut node. When submitting images the Description input can be used to provide clarifying information, such a model number, to help the AI model correctly identify the item.
- Configure a Notion database with the appropriate columns. A starter template is available [here](https://purplesquirreltechnology.notion.site/personal-propery-inventory-template).
- Configure Notion authentication in n8n and check that column mappings are correct in the Notion node


## Customization
- Edit system message to fine tune output requirements.
- Use a form trigger to accept images and description from desktop/laptop systems.

## 🔗 Nodes Used

HTTP Request, Webhook, Notion, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
