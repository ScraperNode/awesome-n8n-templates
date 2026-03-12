# 🎬 AI image generation & editing with Google Gemini and Telegram Bot

> ⚡ **1,220 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

*   Creators, designers, and developers exploring AI-powered image generation.
*   Automation enthusiasts who want to integrate image creation into n8n workflows.
*   Telegram bot builders looking to add visual AI capabilities.
*   Marketers or freelancers automating creative content workflows.

## What problem is this workflow solving?

Creating AI images usually requires multiple tools and manual setup. This workflow removes the complexity by:

*   Connecting Nano Banana (AI image model) directly to n8n.
*   Allowing image generation via Telegram chatbot.
*   Providing a no-code setup that is fully automated and scalable.

## What this workflow does

This workflow demonstrates how to generate AI images using Nano Banana and n8n, with an integrated Telegram chatbot interface.  
The process includes:

1.  Connecting Gemini Nano Banana to n8n.
2.  Automating image generation requests triggered from Telegram.
3.  Returning AI-generated images back to the user.
4.  Allowing customization of prompts and styles dynamically.

By the end, you’ll have a fully functional automation to generate and send AI-created images through Telegram — no coding required.

## Setup

1.  **Create accounts:**

*   Sign up on [n8n.io](https://n8n.io/) and ensure you have Telegram Bot API access.
*   Connect your Nano Banana or Gemini API endpoint.

3.  **Set up your Telegram Bot:**

*   Use BotFather to create a new bot and get the token.
*   Add the “Telegram Trigger” node in n8n.

5.  **Configure Nano Banana connection:**

*   Add an HTTP Request node for Nano Banana API.
*   Insert your API key and prompt parameters.

7.  **Handle responses:**

*   Parse the AI-generated image output.
*   Send the image file back to the Telegram user.

9.  **Test and Deploy:**

*   Run a sample image prompt.
*   Verify that Telegram returns the correct generated image.

## How to customize this workflow to your needs

*   Modify prompts or styles to fit different artistic use cases.
*   Add conditional logic for image size, aspect ratio, or filters.
*   Integrate with Google Drive or Notion for image storage.
*   Schedule automatic image generation for campaigns or content creation.
*   Expand with OpenAI or Stability AI for hybrid workflows.

## Notes

*   Nano Banana API may have rate limits depending on usage.
*   Ensure your Telegram bot has permission to send files and images.
*   You can host this workflow on n8n Cloud or self-hosted setups.

Want A Video Tutorial on How to Setup This Automation:

 [https://youtu.be/0s6ZdU1fjc4](https://youtu.be/0s6ZdU1fjc4)

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Telegram Trigger, Google Drive, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
