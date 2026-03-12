# 🎬 Create social media content from Telegram with AI

> ⚡ **13,070 views** · 🎬 [Content Creation & Video](../)

## Description

**Description:**

## Create Social Media Content from Telegram with AI

This n8n workflow empowers you to effortlessly generate social media content and captivating image prompts, all powered by AI. Simply send a topic request through Telegram (as a voice or text message), and watch as the workflow conducts research, crafts engaging social media posts, and creates detailed image prompts ready for use with your preferred AI art generation tool.

### What does this workflow do?

This workflow streamlines the content creation process by automating research, social media content generation, and image prompt creation, triggered by a simple Telegram message.

### Who is this for?

* **Social Media Managers:** Quickly generate engaging content and image ideas for various platforms.
* **Content Creators:** Overcome writer's block and discover fresh content ideas with AI assistance.
* **Marketing Teams:** Boost productivity by automating social media content research and drafting.
* **Anyone** looking to leverage AI for efficient and creative social media content creation.

### Benefits

* **Effortless Content and Image Prompt Generation:** Automate the creation of social media posts and detailed image prompts.
* **AI-Powered Creativity:** Leverage the power of LLMs to generate original content ideas and captivating image prompts.
* **Increased Efficiency:** Save time and resources by automating the research and content creation process.
* **Voice-to-Content:** Use voice messages to request content, making content creation even more accessible.
* **Enhanced Engagement:** Create high-quality, attention-grabbing content that resonates with your audience.

### How it Works

1.  **Receive Request:** The workflow listens for incoming voice or text messages on Telegram containing your content request.
2.  **Process Voice (if necessary):** If the message is a voice message, it's transcribed into text using OpenAI's Whisper API.
3.  **AI Takes Over:** The AI agent, powered by an OpenAI Chat Model and SerpAPI, conducts online research based on your request.
4.  **Content and Image Prompt Generation:** The AI agent generates engaging social media content and a detailed image prompt based on the research.
5.  **Image Generation (Optional):** You can use the generated image prompt with your preferred AI art generation tool (e.g., DALL-E, Stable Diffusion) to create a visual.
6.  **Output:** The workflow provides you with the social media content and the detailed image prompt, ready for you to use or refine.

### n8n Nodes Used

* Telegram Trigger
* Switch
* Telegram (for fetching voice messages)
* OpenAI (Whisper API for voice-to-text)
* Set (for preparing variables)
* AI Agent (with OpenAI Chat Model and SerpAPI tool)
* HTTP Request (for optional image generation)
* Extract from File (for optional image processing)
* Set (for final output)

### Prerequisites

* Active n8n instance
* Telegram account with a bot
* OpenAI API key
* SerpAPI account
* Hugging Face API key (if you want to generate images within the workflow)

### Setup

1.  Import the workflow JSON into your n8n instance.
2.  Configure the Telegram Trigger node with your Telegram bot token.
3.  Set up the OpenAI and SerpAPI credentials in the respective nodes.
4.  If you want to generate images directly within the workflow, configure the HTTP Request node with your Hugging Face API key.
5.  Test the workflow by sending a voice or text message to your Telegram bot with a topic request.

This workflow combines the convenience of Telegram with the power of AI to provide a seamless content creation experience. Start generating engaging social media content today!

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
