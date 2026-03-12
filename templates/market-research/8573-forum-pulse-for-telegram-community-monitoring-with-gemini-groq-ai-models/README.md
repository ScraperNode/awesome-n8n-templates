# 📊 Forum pulse for Telegram: community monitoring with Gemini & Groq AI models

> ⚡ **341 views** · 📊 [Market Research & Insights](../)

## Description

# ForumPulse for n8n – Daily Pulse & On-demand Deep Dives

**Author:** Nguyen Thieu Toan  
**Category:** Community & Knowledge Automation  
**Tags:** Telegram, Reddit, n8n Forum, AI Summarization, Gemini, Groq

---

## How it works

ForumPulse is an AI-powered assistant that keeps you connected to the latest discussions around **n8n**.  
The workflow integrates **Reddit (r/n8n)** and the **n8n Community Forum**, fetches trending and recent posts, and uses **Gemini/Groq AI models** to generate clean, structured summaries.  

It works in two complementary modes:

1. **Daily Pulse (Automated Digest):**  
   Runs on schedule (default: 8:00 AM) to gather highlights and deliver a concise summary directly to your Telegram.

2. **On-demand Deep Dive (Interactive):**  
   Listens to Telegram queries in real-time, detects intent (search, deep dive, open link, or chat), and provides summaries, comments, and insights for any chosen post.  

When AI intent detection confidence drops below `0.7`, the bot automatically asks for clarification before proceeding—ensuring accuracy and transparency.

---

## Step-by-step

### 1. Setup & Prerequisites
- **n8n instance** (cloud or self-hosted).  
- **Telegram Bot** (created via BotFather).  
- **MongoDB** (optional, for persistent memory).  
- **API keys** for Gemini and Groq.  
- **Your Telegram user ID** (to receive replies).  

⚠️ Replace all test credentials and tokens with your own. Never commit real secrets into exported templates.

---

### 2. Daily Pulse Automation
- **Schedule Trigger** runs the workflow every morning at the configured time.  
- **Reddit + Forum Search** collects hot/new topics.  
- **Merge Results** combines both sources into a unified dataset.  
- **AI Summarizer Overview** condenses the results into a short, engaging digest.  
- **Telegram Output** delivers the digest, automatically split into safe chunks under 2000 characters.

---

### 3. On-demand Interaction
- **Telegram Trigger** listens for incoming messages.  
- **Intent Analysis (AI Agent)** classifies the query as *Search | Open Link | Deep Dive | Chitchat*.  
- **Confidence Gate**: if confidence &lt; 0.7, sends a clarification prompt to the user.  
- **Branch by Intent**:  
  - *Search*: Query Reddit/Forum with filters.  
  - *Open Link*: Fetch details of a specific post.  
  - *Deep Dive*: Retrieve comments and metadata.  
  - *Chitchat*: Respond conversationally.  
- **AI Summarizer** structures the output, highlighting trends, issues, and takeaways.  
- **Telegram Delivery** formats and sends the reply, respecting HTML tags and message length.

---

### 4. Deep Dive Details
- **Post Extraction** fetches titles, authors, timestamps, and stats.  
- **Comment Parsing** organizes replies into structured data.  
- **Merge Post + Comments** builds a complete context package.  
- **Summarizer** produces detailed, actionable insights.  

---

### 5. Error Handling & Safety
- **Confidence Check** prevents wrong answers by requiring clarification.  
- **Error Paths** handle API downtime or unexpected formats gracefully.  
- **Auto Chunking** avoids Telegram’s message length cap (2000 chars).  
- **Safe Defaults** ensure fallback queries when inputs are missing or unclear.

---

## Customization Options

- **Sources**: Add or replace platforms by editing HTTP Request nodes.  
- **Schedule**: Change the cron time in the Schedule Trigger (e.g., 7:30 AM).  
- **Filters**: Adjust default sort order, time ranges, and result limits.  
- **AI Persona**: Reword the `systemMessage` in AI Agent nodes to change tone (professional, casual, emoji-rich).  
- **Languages**: Auto-detects user language, but you can force English or Vietnamese by editing prompt settings.  
- **Memory**: Enable MongoDB nodes for persistent user context across sessions.  
- **Integrations**: Extend beyond Telegram—send digests to Slack, Discord, or email.  
- **Models**: Swap Gemini/Groq with other supported LLMs for experimentation.  

---

✨ Crafted by **Nguyen Thieu Toan** with a focus on clarity, reliability, and community-driven insights.  
This workflow is not just functional - it reflects a design philosophy: automation should feel natural, transparent, and genuinely useful.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Execute Sub-workflow, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
