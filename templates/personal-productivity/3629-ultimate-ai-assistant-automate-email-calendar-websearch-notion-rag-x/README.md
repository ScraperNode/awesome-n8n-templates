# ⚡ Ultimate AI assistant: Automate email, calendar, webSearch, Notion,  RAG & X

> ⚡ **2,697 views** · ⚡ [Personal Productivity](../)

## Description

This is an ultimate AI assistant: **Handle emails, schedule meetings, search the web, take notes, post to social media, and retrieve information from your knowledge base**, all through simple Telegram commands **(text, voice, or image)**. 

## What is included:

- 1 Ready-to-use n8n workflow file (`.json`)
- 4 Instructional videos demonstrating how to connect n8n with:
    - Google Products (Gmail, Calendar, Sheets)
    - Telegram
    - Pinecone Vector Store
    - Notion

## Who is this for?

This workflow is ideal for:

- Individuals seeking to automate personal and professional tasks.
- Professionals needing efficient management of emails, calendars, and contacts.
- Content creators or researchers requiring quick information retrieval and drafting capabilities.
- Anyone wanting a centralized AI assistant.

## What problem is this workflow solving?

Managing numerous digital tasks across different platforms can be time-consuming and fragmented. This workflow consolidates control into Telegram, leveraging AI to understand your needs and automate actions across email, calendar, contacts, web search, note-taking (Notion), social media (X), and your personal knowledge base (Pinecone RAG), saving you time and effort. It ensures tasks are handled correctly using a built-in verification step.

## What this workflow does:

This workflow acts as a central AI Agent that:

1. **Receives Input via Telegram:** Accepts text messages, voice notes (transcribes them using OpenAI), or images (analyzes them using OpenAI).
2. **Understands Requests:** Uses an AI Agent (powered by models like GPT) to interpret the user's instructions.
3. **Orchestrates Tools:** Selects and uses the appropriate tools based on the request:
    - **Email (Gmail):** Send, read, reply, draft, and label emails.
    - **Calendar (Google Calendar):** Create, get, update, and delete events, managing attendees if needed.
    - **Contacts (Google Sheets):** Look up and add contact information.
    - **Web Search (Tavily):** Search the internet for up-to-date information.
    - **Knowledge Retrieval (Pinecone):** Query your personal vector database (RAG).
    - **Note Taking (Notion):** Create notes in a specified Notion database.
    - **Social Media (X/Twitter):** Post tweets directly to X.
4. **Maintains Context:** Uses Window Buffer Memory to remember recent interactions.
5. **Ensures Accuracy:** Employs a "Think" tool to double-check tool usage and task completion.
6. **Responds via Telegram:** Sends the results or confirmation back to the user in the Telegram chat.

## Setup:

1. **Telegram:** Connect your Telegram bot credentials.
2. **AI Model:** Connect your OpenAI API key.
3. **Email:** Connect your Gmail account.
4. **Calendar:** Connect your Google Calendar account.
5. **Contacts:** Connect your Google Sheets account.
6. **Knowledge Base (RAG):** Connect Pinecone.
7. **Note Taking:** Connect Notion and configure Notion Database.
8. **Web Search:** Add Tavily API key.
9. **Social Media:** Connect your X (Twitter) account.

*(Refer to the included videos for detailed setup guidance)*

## How to customize this workflow:

- **AI Prompts:** Modify the system messages and prompts within the "AI Agent" node.
- **AI Models:** Swap out the language model.
- **Tools:** Add, remove, or replace tool nodes.

## Category:

Automation, AI Agent, Personal Assistant, Productivity, Task Management, Telegram

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
