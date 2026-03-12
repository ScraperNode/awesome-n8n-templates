# 💬 Build a Telegram Q&A bot with Linkup web search, GPT-4.1 & Mistral voice

> ⚡ **277 views** · 💬 [Support Chatbots](../)

## Description

Create a Telegram bot that answers questions using AI-powered web search from **Linkup** and an LLM agent (GPT-4.1).

This template handles both **text** and **voice** messages (voice transcribed via a Mistral model by default), routes queries through an agent that can call a Linkup tool to fetch up-to-date information from the web, and returns concise, Telegram-friendly replies. A security switch lets you restrict use to a single Telegram username for private testing, or remove the filter to make the bot public.

## Who is this for?

* **Anyone needing quick answers:** Build a personal assistant that can look up current events, facts, and general knowledge on the web.
* **Support & ops teams:** Provide quick, web-sourced answers to user questions without leaving Telegram.
* **Developers & automation engineers:** Use this as a reference for integrating agents, transcription, and web search tools inside n8n.
* **No-code builders:** Quickly deploy a chat interface that uses Linkup for accurate, source-backed answers from the web.

## What it does / What problem does this solve?

* **Provides accurate, source-backed answers:** Routes queries to **Linkup** so replies are grounded in up-to-date web search results instead of the LLM's static knowledge.
* **Handles voice & text transparently:** Accepts Telegram voice messages, transcribes them (via the **Mistral** API node by default), and treats transcripts the same as typed text.
* **Simple agent + tool architecture:** Uses a **LangChain AI Agent** with a **Web search** tool to separate reasoning from information retrieval.
* **Privacy control:** Includes a **Myself?** filter to restrict access to a specific Telegram username for safe testing.

## How it works

1.  **Trigger:** **Telegram Trigger** receives incoming messages (text or voice).
2.  **Route:** **Message Router** detects voice vs text. Voice files are fetched with **Get Audio File**.
3.  **Transcribe:** **Mistral transcribe** receives the audio file and returns a transcript; the transcript or text is normalized into **preset_user_message** and consolidated in **Consolidate user message**.
4.  **Agent:** **AI Agent** (GPT-4.1-mini configured) runs with a system prompt that instructs it to call the **Web search** tool when up-to-date knowledge is required.
5.  **Respond:** The agent output is sent back to the user via **Telegram answer**.

## How to set up

1.  **Create a Linkup account:** Sign up at [https://linkup.so](https://linkup.so) to get your API key. They offer a free tier with monthly credits.
2.  **Add credentials in n8n:** Configure **Telegram API**, **OpenAI** (or your LLM provider), and **Mistral Cloud** credentials in n8n.
3.  **Configure Linkup tool:** In the **Web search** node, find the "Headers" section. In the `Authorization` header, replace `Bearer &lt;your-linkup-api-key&gt;` with your actual Linkup API Key.
4.  **Set Telegram privacy (optional):** Edit the **Myself?** **If** node and replace `&lt;Replace with your Telegram username&gt;` with your username to restrict access. Remove the node to allow public use.
5.  **Adjust transcription (optional):** Swap the **Mistral transcribe** HTTP node for another provider (OpenAI, Whisper, etc.).
6.  **Connect LLM:** In **OpenAI Chat Model** node, add your OpenAI API key (or configure another LLM node) and ensure the **AI Agent** node references this model.
7.  **Activate workflow:** Activate the workflow and test by messaging your bot in Telegram.

## Requirements

* An n8n instance (cloud or self-hosted)
* A **Telegram Bot** token added in n8n credentials
* A **Linkup** account and **API Key**
* An LLM provider account (OpenAI or equivalent) for the **OpenAI Chat Model** node
* A **Mistral** API key (or other transcription provider) for voice transcription

## How to take it further

* **Add provenance & sources:** Parse Linkup responses and include short citations or source links in the agent replies.
* **Rich replies:** Use Telegram media (images, files) or inline keyboards to create follow-up actions (open web pages, request feedback, escalate to humans).
* **Multi-user access control:** Replace the single-username filter with a list or role-based access system (Airtable or Google Sheets lookup) to allow multiple trusted users.
* **Logging & analytics:** Save queries and agent responses to **Airtable** or **Google Sheets** for monitoring, quality checks, and prompt improvement.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
