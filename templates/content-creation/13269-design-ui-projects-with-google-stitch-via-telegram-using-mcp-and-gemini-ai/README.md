# 🎬 Design UI projects 🎨🖼️ with Google Stitch via Telegram using MCP and Gemini AI

> ⚡ **1,731 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow implements an **AI-powered design and prototyping assistant** that integrates **Telegram**, **Google Gemini**, and **Google Stitch (MCP)** to enable conversational UI generation and project management.

Supported actions include:

* Creating new design projects
* Retrieving existing projects
* Listing projects and screens
* Fetching individual screens
* Generating new UI screens directly from text descriptions

---

### Key Advantages

#### 1. ✅ Conversational Design Workflow

Design and UI prototyping can be driven entirely through natural language. Users can create screens, explore layouts, or manage projects simply by chatting, without opening design tools.

#### 2. ✅ Tight Integration with Google Stitch

By leveraging the Stitch MCP API, the workflow provides direct access to structured design capabilities such as screen generation, project management, and UI exploration, avoiding manual API calls or custom scripting.

#### 3. ✅ Intelligent Tool Selection

The AI agent does not blindly call APIs. It first analyzes the user request, determines the required level of fidelity and intent, and then selects the most appropriate Stitch function or combination of functions.

#### 4. ✅ Multi-Channel Support

The workflow supports both generic chat triggers and Telegram, making it flexible for internal tools, demos, or production chatbots.

#### 5. ✅ Security and Access Control

Telegram access is restricted to a specific user ID, and execution only happens when a dedicated command is used. This prevents accidental or unauthorized usage.

#### 6. ✅ Context Awareness with Memory

The inclusion of conversational memory allows the agent to maintain context across interactions, enabling iterative design discussions rather than isolated commands.

#### 7. ✅ Production-Ready Output Formatting

Responses are automatically converted into Telegram-compatible HTML, ensuring clean, readable, and well-formatted messages without manual post-processing.

#### 8. ✅ Extensible and Modular Architecture

The workflow is highly modular: additional Stitch tools, AI models, or communication channels can be added with minimal changes, making it future-proof and easy to extend.

---


### **How It Works**

This workflow functions as a Telegram-powered AI agent that leverages Google Stitch's MCP (Model Context Protocol) tools for design, UI generation, and product prototyping. It combines conversational AI, tool-based actions, and web search capabilities.

1.  **Trigger & Authorization**: The workflow is activated by an incoming message from a configured Telegram bot. A code node first checks the sender's Telegram User ID against a hardcoded value (`xxx`) to restrict access. Only authorized users can proceed.
2.  **Command Parsing**: An `IF` node filters messages, allowing the agent to proceed only if the message text starts with the command `/stitch`. This ensures the agent is only invoked intentionally.
3.  **Query Preparation**: The `/stitch` prefix is stripped from the message text, and the cleaned query, along with the user's ID (used as a session identifier), is passed to the main agent.
4.  **AI Agent Execution**: The core "Google Stitch Agent" node is an LLM-powered agent (using Google Gemini) equipped with:
    *   **Tools**: Access to several Google Stitch MCP functions (`create_project`, `get_project`, `list_projects`, `list_screens`, `get_screen`, `generate_screen_from_text`) and a Perplexity web search tool.
    *   **Memory**: A conversation buffer window to maintain context within a session.
    *   **System Prompt**: Instructs the agent to intelligently select and use the appropriate Stitch tools based on the user's design-related request (e.g., generating screens from text, managing projects). It is directed to use web search when necessary for additional context.
5.  **Response Processing & Delivery**: The agent's text output (in Markdown) is passed through another LLM chain ("From MD to HTML") that converts it to Telegram-friendly HTML. Finally, the formatted response is sent back to the user via the Telegram bot.

---

### **Set Up Steps**

To make this workflow operational, you need to configure credentials and update specific nodes:

1.  **Telegram Bot Configuration**:
    *   In the **"Code"** node (`id: 08bfae9e...`), replace `xxx` in the condition `$input.first().json.message.from.id !== xxx` with your actual Telegram User ID. This ensures only you can trigger the agent.
    *   Ensure the **"Telegram Trigger"** and **"Send a text message"** nodes have valid Telegram Bot credentials configured.

2.  **Google Stitch API Setup**:
    *   Obtain an API key from [Google Stitch](https://stitch.withgoogle.com/docs/mcp/setup).
    *   Configure the **HTTP Header Auth** credential named **"Google Stitch"** (referenced by all MCP tool nodes: `Create Project`, `Get Project`, etc.).
    *   Set the Header Auth with:
        *   **Name**: `X-Goog-Api-Key`
        *   **Value**: Your actual Google Stitch API Key (`YOUR-API-KEY`).

3.  **AI Model & Tool Credentials**:
    *   Verify the credentials for the **Google Gemini Chat Model** nodes are correctly set up for API access.
    *   Verify the credentials for the **Perplexity API** node ("Search on web") are configured if web search functionality is required.

4.  **Activation**:
    *   Once all credentials are configured, set the workflow to **Active**. The Telegram webhook will be registered, and the workflow will listen for authorized messages containing the `/stitch` command.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
