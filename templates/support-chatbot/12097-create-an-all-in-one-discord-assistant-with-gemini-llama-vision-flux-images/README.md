# 💬 Create an all-in-one Discord assistant with Gemini, Llama Vision & Flux images

> ⚡ **129 views** · 💬 [Support Chatbots](../)

## Description

This n8n template demonstrates how to build **O'Carla**, an advanced all-in-one Discord AI assistant. It intelligently handles natural conversations, professional image generation, and visual file analysis within a single server integration.

Use cases are many: Deploy a smart community manager that remembers past interactions, an on-demand artistic tool for your members, or an AI that can "read" and explain uploaded documents and images!

## Good to know
* **API Costs:** Each interaction costs vary depending on the model used (Gemini vs. OpenRouter). Check your provider's dashboard for updated pricing.
* **Infrastructure:** This workflow requires a separate Discord bot script (e.g., Node.js) to forward events to the n8n Webhook. It is recommended to host the bot using **PM2** for 24/7 uptime.

## How it works
1. **Webhook Trigger:** Receives incoming data (text and attachments) from your Discord bot.
2. **Intent Routing:** The workflow uses conditional logic to detect if the user wants an image (via keyword `gambar:`), a vision analysis (via attachments), or a standard chat.
3. **Multi-Model Intelligence:**
   * **Gemini 2.5:** Powers rapid and high-quality general chat reasoning.
   * **Llama 3.2 Vision (via OpenRouter):** Specifically used to describe and analyze images or text-based files.
   * **Flux (via Pollinations):** Uses a specialized AI Agent to refine prompts and generate professional-grade images.
4. **Contextual Memory:** A 50-message buffer window ensures O'Carla maintains the context of your conversation based on your Discord User ID.
5. **Clean UI Output:** Generated image links are automatically shortened via **TinyURL** to keep the Discord chat interface tidy.

## How to use
1. Connect your **Google Gemini** and **OpenRouter** API keys in the respective nodes.
2. Replace the Webhook URL in your bot script with this workflow's **Production Webhook URL**.
3. Type `gambar: [your prompt]` in Discord to generate images.
4. Upload an image or file to Discord to trigger the AI Vision analysis.

## Requirements
* n8n instance (Self-hosted or Cloud).
* Google Gemini API Key.
* OpenRouter API Key.
* Discord Bot Token and hosting environment.

## Customising this workflow
O'Carla is highly flexible. You can change her personality by modifying the **System Message** in the Agent nodes, adjust the memory window length, or swap the LLM models to specialized ones like Claude 3.5 or GPT-4o.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Simple Memory, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
