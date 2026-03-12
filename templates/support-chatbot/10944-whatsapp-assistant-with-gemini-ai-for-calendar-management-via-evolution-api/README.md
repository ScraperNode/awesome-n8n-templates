# 💬 WhatsApp assistant with Gemini AI for calendar management via Evolution API

> ⚡ **1,027 views** · 💬 [Support Chatbots](../)

## Description

## AI Agent that uses MCP Server to execute actions requested via Evolution API.
 This workflow receives messages and media from WhatsApp via the Evolution API, converts the content into structured inputs, and forwards them to an AI Agent capable of triggering MCP tools to execute external actions.

### 🔧  **How it works**
- A **Webhook** receives messages sent to WhatsApp via the **Evolution API**.
- The **"Message Type"** node detects and forwards the received media. It handles the types `Text`, `Image`, `Audio`, and `Document`. If it is another media type, the fallback forwards a "media not supported" message to the user.
- The message goes to the system where it retrieves the **Base64** of the media.
- The media is converted into **Binary File(s)** and a Gemini node will generate a text input for the agent.
- The **AI Agent** receives the structured input and calls the appropriate **MCP Tool**. In this example, only one **MCP Server** was configured.
- The AI ​​Agent generates the output and sends it to the user.

### 🗒️ Requirements
- Evolution API Account, with the instance configured.
- Gemini API.
- Google Calendar API.
- MCP Server (Internal or external, whichever you prefer) configured and with a URL to link to the MCP Tool.

### ✔️ How to set up
- **Configure the Evolution API webhook**
    - Copy the webhook URL generated in the first node.
    - In the Evolution API panel, go to the instance &gt; webhook &gt; paste the URL into the corresponding field.
- **Configure Google Calendar credentials**
    - In n8n, go to *Credentials → Create New* and select **Google Calendar OAuth2**.
    - Select this credential in all Google Calendar MCP nodes (Get, Create, Update, Delete).
- **Enable MCP Server nodes**
    - Copy the MCP Server URL and paste it into the “**Endpoint** field of the MCP Tool.
- **Configure Evolution API nodes**
    - In all Evolution API nodes, you need to fill in the “**instance** field with the name of your Evolution API instance.

### 🦾 how to adapt it?
- **Customize or extend the MCP Tools**
    - You can add new MCP tools (e.g., Google Sheets, Notion, ClickUp).
    - Only the agent prompt needs to be updated; the workflow structure remains the same.
- I opted to use simple memory, but if you want the agent to remember the entire conversation, I recommend changing the memory type; as it is, it will only remember the last 8 messages.
- If you're going to use a tool like Chatwoot or TypeBot, simply change the webhook URL and pay attention to the objects that the switch (Message Type) uses.

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, Convert to File, Google Gemini Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
