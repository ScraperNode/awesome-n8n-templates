# ⚡ Stacey – your Telegram AI assistant (powered by MCP, Gemini & Google tools)

> ⚡ **1,204 views** · ⚡ [Personal Productivity](../)

## Description

&gt; This n8n template builds **Stacey**, an AI assistant that runs inside Telegram. Stacey listens to your messages, understands what you want using AI, and intelligently routes commands to MCP-connected tools — like Gmail, Google Calendar, a blog writer, and more.
&gt;
&gt; For optimal performance, we recommend using **OpenAI’s GPT-4o** model. In this template, **Google Gemini** is used as a free alternative.

---

## 💡 Who is this for?

This workflow is designed for:

* AI tool creators and automation builders
* Entrepreneurs who want an intelligent Telegram assistant
* Support and scheduling teams who use Google tools
* Agencies that build & resell AI automations
* Users looking to automate everyday actions like emails, scheduling, blog writing, and contact lookups

---

## 🧠 What this workflow does

* Listens to Telegram messages (text and voice)
* Transcribes audio using Whisper (optional)
* Uses **Stacey**, an AI agent powered by **Gemini** (or GPT-4o if you upgrade), to:

  * Understand the user's intent
  * Choose the correct tool using MCP logic
  * Execute tasks using Gmail, Google Calendar, blog writer, and more
* Responds to the user naturally with confirmations and outputs

---

## ⚙️ Prerequisites

Before using this workflow, make sure you have:

* A self-hosted or cloud-based **n8n instance**
* A **Telegram Bot Token** from [@BotFather](https://t.me/botfather)
* **Google OAuth2 credentials** for:

  * Gmail
  * Google Calendar
* Optional: **OpenAI or Whisper API key** for voice transcription
* Optional: **Tavily API key** for live web search
* Gemini (Google AI) is preconfigured in the template but can be swapped

---

## 🚀 Step-by-Step Setup

### ✅ Step 1: Add Required Credentials in n8n

Go to **Settings → Credentials** and add:

* **Telegram API**: Your bot token from BotFather
* **Google OAuth2**:

  * Gmail: Scope `https://www.googleapis.com/auth/gmail.modify`
  * Calendar: Scope `https://www.googleapis.com/auth/calendar`
* **Gemini / Palm API**: Used for the language model
* (Optional) **OpenAI Whisper**: For voice transcription
* (Optional) **Tavily**: For real-time internet searches

---

### ✅ Step 2: Import the Workflow

1. Go to n8n
2. Click **Workflows → Import from File**
3. Upload `ai_assistant.json`
4. Connect your saved credentials to the correct nodes:

   * Telegram Trigger & Sender
   * Gmail, Calendar, Tavily, Gemini, Whisper


✅ Step 2.5: Import the Content Creator Sub-Workflow

The Content Creator is implemented as a modular sub-workflow and invoked through the Map Server as part of the MCP logic.

To set it up:

Go to Workflows → Import from File
Upload content_creator_tool.json (provided in your files)
Save it with a name like “Content Creator Tool”
🔗 Integration with MCP:

This tool is triggered via the MCP Map Server using an Execute Workflow node
The AI agent chooses this tool when the user request involves writing blog posts, emails, product descriptions, etc.
Make sure the tool ID or name in the Map Server matches what the AI agent uses in its logic
You can customize this sub-workflow to:

Adjust writing prompts (e.g., tone, format, target audience)
Add branching for different content types (e.g., blog vs. email)
Send outputs directly to Gmail, Google Docs, or Sheets
---

### ✅ Step 3: Set Up Your Telegram Bot

1. Talk to [@BotFather](https://t.me/botfather)
2. Use `/newbot` to create a bot and get your token
3. Paste this token into:

   * `Telegram Trigger` node (`Telegram Trigger1`)
   * `Telegram Send Message` node (`Response1`)
4. Make sure your bot’s privacy is set correctly (use `/setprivacy`)

---

### ✅ Step 4: Customize Your Assistant’s Personality

1. Open the **“AI Agent”** node
2. In the `systemMessage` field, you'll find a prompt that defines Stacey:

   * Her role is to **delegate** user requests to the right MCP tool
   * Includes examples, tone, rules, and logic
3. You can customize Stacey’s:

   * Name
   * Behavior
   * Supported tools

---

### ✅ Step 5: Define Your MCP Tools (if extending)

This template includes:

* `Send Email`
* `Reply to Email`
* `Get Emails`
* `Label Emails`
* `Create/Update/Delete Events`
* `Content Creator`
* `Search Web with Tavily`
* `Calculator`

To extend:

* Add a new tool node
* Link it to `MCP Server Trigger`
* Reference it in the prompt in `AI Agent` node

---

### ✅ Step 6: Test the Workflow

Open Telegram and message your bot:

* “Send an email to John about the new budget”
* “Schedule a meeting Friday at 3 PM with Alex”
* “Write a blog post about solar energy”
* “What’s in my inbox?”
* “Translate this message” (if extended with translation tools)

The bot will:

* Interpret the intent
* Ask for any missing data
* Trigger the right tool
* Send confirmation via Telegram

---

## ✨ Customization Ideas

### ✏️ Add Voice Transcription

* Enable the `Download File` and `Transcribe` nodes
* Requires OpenAI Whisper API key

### 🧠 Upgrade to GPT-4o

* Replace the Gemini node with an OpenAI Chat node
* Connect GPT-4o for improved reasoning and language understanding

### 🧩 Add More Tools

* Notion, Slack, Salesforce, Hubspot, WhatsApp, and more can be added
* Just route them via MCP and update the AI prompt

---

## 🧪 Troubleshooting

**Telegram not responding?**

* Ensure correct bot token and webhook connection
* Make sure the bot is not in privacy mode if needed

**Gmail actions not working?**

* Double-check your OAuth scopes
* Ensure Gmail API is enabled in your Google Cloud project

**AI not responding or behaving poorly?**

* Consider upgrading to OpenAI GPT-4o for better reasoning
* Revisit and refine your system prompt

---

## 🧾 Summary

* Name: **Stacey – AI Telegram Assistant**
* Built with: n8n + Gemini + Google + MCP Logic
* Telegram acts as the front-end
* Gemini or GPT-4o powers intelligence
* MCP routes user intent to the right tool
* Fully extensible and no-code friendly

---

## 🌟 Credits & License

Created by **David Olusola**
Free to use, modify, and resell with attribution.
If this helped you, please **rate the template** or follow me on the n8n Creator Page.

---

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Calculator, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
