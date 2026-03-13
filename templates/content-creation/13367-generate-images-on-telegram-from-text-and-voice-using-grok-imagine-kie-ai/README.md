# 🎬 Generate Images on Telegram 🤖🖼️ from Text and Voice using Grok Imagine & Kie AI

> ⚡ **158 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow creates an **AI-powered Telegram bot** that allows users to generate and modify images using **Grok Imagine models** via the [Kie AI API](https://kie.ai?ref=188b79f5cb949c9e875357ac098e1ff5).

---

### Key Advantages

#### 1. ✅ Multi-Modal Input Support

Users can interact using:

* Text
* Voice
* Images

This makes the bot highly flexible and user-friendly.

#### 2. ✅ Intelligent AI Orchestration

Instead of directly calling APIs, the workflow uses an AI agent that:

* Understands intent
* Enhances prompts
* Chooses the correct tool automatically

This dramatically improves output quality.

#### 3. ✅ Fully Automated Image Pipeline

From user input to final image delivery:

* Upload
* Processing
* Generation
* Result retrieval
* Delivery via Telegram

Everything is automated end-to-end.

#### 4. ✅ Asynchronous & Scalable Architecture

The use of:

* Webhook callbacks
* Wait nodes
* Task polling

Prevents timeouts and supports longer image generation tasks.

#### 5. ✅ Secure Access Control

The Telegram ID validation ensures:

* Only authorized users can access the workflow.

#### 6. ✅ Modular & Extendable Design

The workflow is built with:

* Tool-based architecture
* Separate image generation workflows
* Clear orchestration logic

This makes it easy to extend with:

* Video generation
* Style presets
* Advanced editing tools
* Multi-user support


#### 7. ✅ Production-Ready Structure

The workflow includes:

* Error handling guidelines
* Structured system prompts
* Memory handling
* Clear separation of concerns

This makes it suitable for:

* Creative agencies
* AI SaaS products
* Marketing automation
* Telegram-based AI services

---

### How it works

This workflow creates a Telegram bot that uses AI to generate and transform images through Grok Imagine models, with support for text, voice, and image inputs.

1. **Telegram Input Handling**: Users interact with the bot by sending messages, voice notes, or images. The workflow authenticates users based on their Telegram ID.

2. **Input Processing**:
   - **Text messages** → Directly sent to the AI agent
   - **Voice messages** → Transcribed using OpenAI Whisper, then converted to text
   - **Images** → Downloaded from Telegram, uploaded to an FTP server (BunnyCDN), and the public URL is generated

3. **AI Agent Decision Making**: The "Grok Imagine Agent" (powered by Grok 4.1 Fast model) analyzes user input and determines whether to:
   - Generate a new image from text description (text-to-image)
   - Transform an existing image using a prompt (image-to-image)

4. **Tool Execution**: The agent calls specialized workflow tools that trigger image generation via Kie.ai API:
   - **Text-to-Image**: Creates images from text prompts using "grok-imagine/text-to-image" model
   - **Image-to-Image**: Modifies existing images using "grok-imagine/image-to-image" model

5. **Async Processing**: The workflow uses Wait nodes to handle asynchronous image generation, polling Kie.ai for results via task IDs.

6. **Result Delivery**: Once images are generated, they're sent back to the user through Telegram messages.

---

### Setup Steps

1. **Telegram Configuration**:
   - Create a Telegram Bot via BotFather to get a bot token
   - Add your Telegram user ID in the "Code" node (replace XXX)
   - Configure Telegram credentials in n8n with your bot token

2. **API Credentials**:
   - **OpenRouter**: Sign up at OpenRouter.ai, get API key for Grok 4.1 Fast access
   - **Kie.ai**: Register at [Kie.ai for free](https://kie.ai?ref=188b79f5cb949c9e875357ac098e1ff5) API key to access image generation models
   - **OpenAI**: Set up OpenAI API key for voice transcription (Whisper model)

3. **FTP Server Setup**:
   - Configure FTP server ([BunnyCDN](https://bunny.net?ref=0pfu5rh4tp) recommended) for image hosting
   - Update FTP credentials in n8n
   - Set the public URL path in the "Set Image Url" node (replace XXX)

4. **Workflow Configuration**:
   - Import the JSON workflow into n8n
   - Update all credential references to match your accounts
   - Verify webhook URLs are properly configured for callback handling
   - Test the workflow and activate when ready

5. **Optional Customizations**:
   - Adjust the system prompt in the "Grok Imagine Agent" node for different behavior
   - Modify image aspect ratios or other parameters in the HTTP Request nodes
   - Add additional tools for more functionality

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, FTP, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
