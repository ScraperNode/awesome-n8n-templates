# 🔍 Smart knowledge base with Google Docs, Discord & GPT-4o-mini

> ⚡ **397 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

🧠 MCP Memory Core: AI-Powered Knowledge Base
Store, retrieve, and act on organizational memories using Google Docs + Discord. Part of the MCP ecosystem.

### Advanced toolchain with multi-platform integration

🔍 What It Does

    📚 Save Memories: Log conversations, decisions, or code snippets to a Google Doc (timestamped).

    🔍 Retrieve Memories: Fetch past context for AI agents or workflows.

    📤 Auto-Send Updates: Push memories to Discord channels/DMs via GPT-4o-mini formatting.

    🤖 MCP-Compatible: Works with your existing GitHub/Discord MCP workflows.

🚀 Key Features

    🌐 Multi-Trigger: Use via:

        save_memory / retrieve_memory API routes.

        Discord mentions via MCP Server integration.

    🔐 Secure Storage: Memories live in your Google Docs (no third-party DB).

    🧩 Modular Design: Swap Google Docs for Notion/Airtable with minimal changes.

    🤖 AI Cleanup: GPT-4o-mini reformats raw data into Discord-friendly messages.

⚙️ Use Cases

    Team Knowledge Base: Archive meeting notes accessible via Discord commands.

    AI Context Window: Give bots long-term memory for better issue resolution.

    Audit Trail: Track project decisions with timestamps.

🛠️ Setup Guide

    📝 Configure Google Docs:

        In "Edit Fields", set sheet_id to your Google Doc URL.

    🤖 Discord Permissions:

        Update discord_server_id, discord_channel_id, and discord_user_id.

    🔗 Link to MCP:

        Use the MCP Server Trigger node to connect to existing workflows.

    🧠 Customize AI:

        Tweak the AI Agent prompt for different formatting styles.

Works great with the $1 GitHub MCP Server template!

## 🔗 Nodes Used

Google Docs, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
