# 🔧 Create stunning AI images directly from WhatsApp with Gemini

> ⚡ **1,652 views** · 🔧 [Miscellaneous](../)

## Description

## 📱🤖 Create Stunning AI Images Directly from WhatsApp with Gemini

This workflow transforms your WhatsApp into a personal AI image generation studio. Simply send a text message with your idea, and this bot will use the advanced prompt engineering capabilities of Gemini 2.5 Pro to craft a detailed, artistic prompt. It then uses Gemini 2.0 Flash to generate a high-quality image from that prompt and sends it right back to your chat.

It's a powerful yet simple way to bring your creative ideas to life, all from the convenience of your favorite messaging app\!

### What this workflow does

  - **Listens for WhatsApp Messages**: The workflow starts automatically when you send a message to your connected WhatsApp number.
  - **Enhances Your Idea with AI**: It takes your basic text (e.g., "a knight on a horse") and uses Gemini 2.5 Pro to expand it into a rich, detailed prompt perfect for image generation (e.g., "A cinematic, full-body shot of a stoic knight in gleaming, ornate silver armor, riding a powerful black warhorse through a misty, ancient forest. The scene is lit by ethereal morning sunbeams piercing the canopy, creating dramatic volumetric lighting and long shadows. Photorealistic, 8K, ultra-detailed, award-winning fantasy concept art.").
  - **Generates a Unique Image**: It sends this enhanced prompt to the Google Gemini 2.0 Flash image generation API.
  - **Prepares the Image**: The API returns the image in Base64 format, and the workflow instantly converts it into a binary file.
  - **Sends it Back to You**: The final, high-quality image is sent directly back to you in the same WhatsApp chat.

### Nodes Used

  - **🟢 WhatsApp Trigger**: The entry point that listens for incoming messages.
  - **🧠 LangChain Chain (LLM)**: Uses Gemini 2.5 Pro for advanced prompt engineering.
  - **➡️ HTTP Request**: Calls the Google Gemini 2.0 Flash API to generate the image.
  - **🔄 Convert to File**: Converts the Base64 image data into a sendable file format.
  - **💬 WhatsApp**: Sends the final image back to the user.

### Prerequisites

To use this workflow, you will need:

  - An **n8n instance**.
  - A **WhatsApp Business Account** connected to n8n. You can find instructions on how to set this up in the [n8n docs](https://docs.n8n.io/integrations/builtin/credentials/whatsapp/).
  - A **Google Gemini API Key**. You can get one for free from [Google AI Studio](https://aistudio.google.com/app/apikey).

### How to use this workflow

1.  **Get your Google Gemini API Key**: Visit the [Google AI Studio](https://aistudio.google.com/app/apikey) and create a new API key.
2.  **Configure the Gemini 2.5 Pro Node**:
      - In the n8n workflow, select the **Gemini 2.5 Pro** node.
      - Under 'Connect your account', click 'Create New' to add a new credential.
      - Paste your Gemini API key from the previous step and save.
3.  **Configure the Generate Image (HTTP Request) Node**:
      - Select the **Generate Image** node.
      - In the properties panel on the right, find the **Query Parameters** section.
      - In the 'Value' field for the `key` parameter, replace `"Your API Key"` with your actual Google Gemini API Key.
4.  **Connect WhatsApp**:
      - Select the **WhatsApp Trigger** node.
      - Follow the instructions to connect your WhatsApp Business Account credential. If you haven't created one, the node will guide you through the process.
5.  **Activate and Test**:
      - Save the workflow using the button at the top right.
      - Activate the workflow using the toggle switch.
      - Send a message to your connected WhatsApp number (e.g., "A futuristic city in the style of Van Gogh"). The bot will process your request and send a stunning AI-generated image right back to you\!

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Basic LLM Chain, Structured Output Parser, Convert to File, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
