# 🔬 Email parser for RAG agent powered by Gmail and Mem0

> ⚡ **831 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**Alternatively, you can delete the community node and use the HTTP node instead.
**
Most email agent templates are fundamentally broken. They're stateless—they have no long-term memory. An agent that can't remember past conversations is just a glorified auto-responder, not an intelligent system.

This workflow is Part 1 of building a truly agentic system: creating the brain.

Before you can have an agent that replies intelligently, you need a knowledge base for it to draw from. This system uses a sophisticated parser to automatically read, analyze, and structure every incoming email. It then logs that intelligence into a persistent, long-term memory powered by mem0.


### The Problem This Solves

Your inbox is a goldmine of client data, but it's unstructured, and manually monitoring it is a full-time job. This constant, reactive work prevents you from scaling. This workflow solves that "system problem" by creating an "always-on" engine that automatically processes, analyzes, and structures every incoming email, turning raw communication into a single source of truth for growth.

---

### How It Works

This is an autonomous, multi-stage intelligence engine. It runs in the background, turning every new email into a valuable data asset.

1.  **Real-Time Ingest & Prep:** The system is kicked off by the **Gmail Trigger**, which constantly watches your inbox. The moment a new email arrives, the workflow fires. That email is immediately passed to the **Set Target Email** node, which strips it down to the essentials: the sender's address, the subject, and the core text of the message (I prefer using the plain text or HTML-as-text for reliability). While this step is optional, it's a good practice for keeping the data clean and orderly for the AI.

2.  **AI Analysis (The Brain):** The prepared text is fed to the core of the system: the **AI Agent**. This agent, powered by the **LLM of your choice** (e.g., GPT-4), reads and understands the email's content. It's not just reading; it's performing analysis to:
    * Extract the core message.
    * Determine the sentiment (Positive, Negative, Neutral).
    * Identify potential red flags.
    * Pull out key topics and keywords.
    * The agent uses **Window Buffer Memory** to recall the last 10 messages within the same conversation thread, giving it the context to provide a much smarter analysis.

3.  **Quality Control (The Parser):** We don't trust the AI's first draft blindly. The analysis is sent to an **Auto-fixing Output Parser**. If the initial output isn't in a perfect JSON format, a second **Parsing LLM** (e.g., Mistral) automatically corrects it. This is our "twist" that guarantees your data is always perfectly structured and reliable.

4.  **Create a Permanent Client Record:** This is the most critical step. The clean, structured data is sent to **mem0**. The analysis is now logged against the **sender's email address**. This moves beyond just tracking conversations; it builds a complete, historical intelligence file on every person you communicate with, creating an invaluable, long-term asset.

**Optional Use:** For back-filling historical data, you can disable the Gmail Trigger and temporarily connect a **Gmail "Get Many"** node to the `Set Target Email` node to process your backlog in batches.

---

### Setup Requirements

To deploy this system, you'll need the following:
* An active **n8n** instance.
* **Gmail** API credentials.
* An API key for your primary LLM (e.g., **OpenAI**).
* An API key for your parsing LLM (e.g., **Mistral AI**).
* An account with **mem0.ai** for the memory layer.

## 🔗 Nodes Used

HTTP Request, Gmail Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
