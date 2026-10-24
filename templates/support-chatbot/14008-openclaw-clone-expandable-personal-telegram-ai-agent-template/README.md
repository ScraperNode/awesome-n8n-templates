# 💬 OpenClaw Clone 🦞: Expandable Personal Telegram AI Agent Template

> ⚡ **6,627 views** · 💬 [Support Chatbots](../)

## Description

This workflow implements an **advanced AI automation agent (OpenClaw Agent)** that interacts with users through Telegram and integrates multiple AI models, external tools, and cloud services to automate complex tasks.

I've described my basic idea in [this video](https://www.youtube.com/watch?v=DCo_HsLQ1aY).

**VERY IMPORTANT**:
By adapting the system prompt, inserting subworkflows or mcp servers and adjusting with webhooks many of the [workflows I have developed on this page](https://n8n.io/creators/n3witalia/) it is possible to potentially extend the template infinitely.


The agent can autonomously decide which tools to use to complete the request. It has access to multiple integrations, including:

* Gmail (read, send, reply, draft emails)
* Google Calendar (create, delete, check availability)
* Google Drive, Docs, Sheets, and Slides
* Web search and web scraping tools
* RAG (Retrieval-Augmented Generation) using a vector database [Here how set up](https://n8n.io/workflows/7647)
* Image and video analysis tools
* Mathematical calculator tools
* Custom sub-workflows and MCP integrations

The system also includes **persistent chat memory stored in PostgreSQL**, allowing the AI to remember previous interactions and maintain conversation context.

Finally, the workflow generates a response and sends it back to the user via Telegram. If the input was voice-based, the response can also be converted into **audio and returned as a voice message**.

An **escalation mechanism** allows the system to transfer the conversation to a human operator when needed.

---

### Key Advantages

#### 1. ✅ Multimodal Interaction

The workflow supports **text, voice, and image inputs**, allowing users to interact with the system naturally.

#### 2. ✅ AI-Powered Automation

The integrated AI agent can autonomously decide which tools to use to solve tasks, reducing manual intervention and enabling intelligent automation.

#### 3.✅  Deep Integration with Google Workspace

The workflow can manage emails, documents, spreadsheets, presentations, and calendar events directly through AI commands.

#### 4. ✅ Retrieval-Augmented Knowledge (RAG)

The system can access external knowledge sources through a vector database, improving response accuracy and enabling knowledge-based answers.

#### 5. ✅ Persistent Memory

Conversation history is stored in PostgreSQL, allowing the agent to maintain context and provide more relevant responses over time.

#### 6. ✅ Web Intelligence

Built-in web search and scraping capabilities allow the agent to gather real-time information from the internet.

#### 7. ✅ Voice Response Capability

The system can generate audio responses, creating a more natural conversational experience.

#### 8. ✅ Modular and Scalable Architecture

The workflow is highly modular, allowing new tools, agents, and services to be added easily.

#### 9. ✅ Human Escalation

When automation is not sufficient, the system can escalate the conversation to a human operator.

#### 10. ✅ Fully Automated Digital Assistant

Overall, the workflow acts as a **fully autonomous AI assistant capable of performing complex operational tasks across multiple platforms.**



---

### How it works

This workflow is a comprehensive Telegram-based AI orchestrator that simulates an OpenClaw-style multi-agent architecture. When a user sends a message to the Telegram bot, the workflow:

1. **Receives and authorizes** the message through a Telegram trigger, checking if the user ID matches an authorized user (configured in the Code node)

2. **Routes different content types** using a Switch node that detects whether the incoming message contains text, voice, or images:
   - **Text messages**: Directly passed to the orchestrator
   - **Voice messages**: Downloaded and transcribed using OpenAI's audio transcription
   - **Images**: Downloaded, uploaded to an FTP server, and transformed into a URL for processing

3. **Feeds the processed input** (text, transcribed voice, or image URL with caption) into the "OpenClaw Agents" node - an AI agent configured with Gemini as the language model and Postgres for chat memory

4. **Orchestrates specialized sub-agents** through the main AI agent, which can delegate tasks to multiple tools:
   - Research and web search (Perplexity AI)
   - Web scraping (ScrapeGraphAI)
   - Google services (Gmail, Drive, Docs, Sheets, Slides, Calendar)
   - RAG (Qdrant vector store with Cohere reranker)
   - Image/Video generation (via sub-workflow)
   - Calculator
   - Telegram communication tools

5. **Handles response delivery** based on the original message type:
   - If the original message was voice, the workflow generates an audio response using OpenAI TTS and sends it back as audio
   - Otherwise, sends a text response via Telegram

6. **Includes escalation capabilities** through a human-in-the-loop tool for situations requiring human intervention

---

### Set up steps

1. **Configure Telegram Bot**
   - Create a Telegram bot via BotFather to get a bot token
   - Set up Telegram credentials in n8n
   - Replace `XXX` in the Code node with your authorized Telegram user ID

2. **Set up API Keys and Credentials**
   - **OpenAI**: API key for audio transcription and text-to-speech
   - **Google Gemini**: API key for the main language model
   - **Google Cloud**: OAuth2 credentials for all Google services (Gmail, Drive, Calendar, Docs, Sheets, Slides)
   - **Perplexity AI**: API key for research and web search
   - **ScrapeGraphAI**: API key for web scraping
   - **Cohere**: API key for reranker functionality
   - **PostgreSQL**: Database connection for chat memory

3. **Configure External Services**
   - **Qdrant**: Set up vector database for RAG functionality
   - **FTP Server**: Configure FTP credentials and path (replace `/XXX/` in Upload image node with actual path and domain in Set Image Url node)

4. **Configure Webhooks and Endpoints**
   - Set the Telegram webhook URL to point to your n8n instance
   - The workflow includes multiple MCP endpoints that need proper configuration

5. **Review and Adjust Parameters**
   - Check all nodes with placeholder values (marked with `XXX`)
   - Verify language settings (Italian is set for transcription)
   - Review the system prompt in the OpenClaw Agents node and customize if needed
   - Ensure all tool descriptions match your use case

6. **Test and Activate**
   - Run the workflow in inactive mode first to test with sample inputs
   - Check that all connections between nodes are correct
   - Activate the workflow when everything is verified

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Webhook, Telegram, Telegram Trigger, FTP, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
