# 🎬 AI speech coach & generator using Telegram, Open AI and Gemini

> ⚡ **1,971 views** · 🎬 [Content Creation & Video](../)

## Description

### Description
This n8n workflow acts as your personal AI speechwriting coach, directly accessible through Telegram. It listens to your spoken or typed drafts, provides insightful feedback on clarity, engagement, structure, and content, and iteratively refines your message based on your updates. Once you're ready, it synthesizes a brand-new speech or talk incorporating all the improvements and your accumulated ideas. This tool streamlines the speechwriting process, offering on-demand AI assistance to help you craft impactful and well-structured presentations.

### How it Works
Input via Telegram: You interact with the workflow by sending your speech drafts or talking points directly to a designated Telegram bot.
AI Feedback: The workflow processes your input using AI models (OpenAI and/or Google Gemini) to analyze various aspects of your speech and provides constructive feedback via Telegram.
Iterative Refinement: You can then send updated versions of your speech to the bot, receiving further feedback to guide your revisions.
Speech Synthesis: When you send the command to "generate speech," the workflow compiles all your previous input and the AI's feedback to synthesize a new, improved speech or talk, which is then sent back to you via Telegram.
New Speech Cycle: By sending the command "new speech," the workflow clears its memory, allowing you to start the process anew for a different topic.
### Set Up Steps (Takes Approximatly 5 Minutes)
**Step 1: Create a Telegram Bot and Obtain its ID**
Open the Telegram application and search for "BotFather". Start a chat with BotFather by clicking "Start" or sending the /start command. Create a new bot by sending the command /newbot. Follow BotFather's instructions to choose a name and username for your bot. Once your bot is created, BotFather will provide you with an API token. Keep this token secure as it's required to connect your n8n workflow to your bot.

**Step 2: Obtain an OpenAI API Key**
Go to the OpenAI website (https://platform.openai.com/) and sign up for an account if you don't already have one.
Navigate to the API keys section (usually under your profile settings or a "Developers" tab). Click on "Create new secret key". Copy the generated API key and store it securely. You will need to provide this key to your n8n workflow to access OpenAI's language models.

**Step 3: Obtain a Google Gemini LLM API Key** 
Go to the Google Cloud AI Platform or Google AI Studio website (the specific platform may vary depending on the current Google AI offerings; search for "Google AI API"). Sign up or log in with your Google account. Follow the instructions to enable the Gemini API and create an API key. This might involve creating a project if you haven't already. Copy the generated API key and store it securely. You can then configure your n8n workflow to utilize Google Gemini's language models as well.

### Customization Options
This n8n workflow offers significant flexibility, below are a few options:
1. Modify AI prompts to tailor feedback and generation for presentations, storytelling, interviews, sales pitches, academic talks, and creative writing.
2. Switch the interface from Telegram to Slack, WhatsApp, or even a web interface by replacing the relevant n8n nodes.
3. Integrate analysis for sentiment, keyword density, pacing (with voice input), and filler word detection by adjusting the workflow.
4. Connect to external data sources to provide context to the AI for more targeted feedback and generation.

This adaptability allows you to re use this workflow for a wide range of specific use cases and communication environments.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Chat Memory Manager, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
