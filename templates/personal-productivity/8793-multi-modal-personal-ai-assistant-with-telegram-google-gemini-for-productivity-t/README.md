# ⚡ Multi-modal personal AI assistant with Telegram & Google Gemini for productivity tools

> ⚡ **2,258 views** · ⚡ [Personal Productivity](../)

## Description

# Automate Your Life: The Ultimate AI Assistant in Telegram (Powered by Google Gemini)
Transform your Telegram messenger into a powerful, multi-modal personal or team assistant. This n8n workflow creates an intelligent agent that can understand text, voice, images, and documents, and take action by connecting to your favorite tools like Google Calendar, Gmail, Todoist, and more.

At its core, a powerful Manager Agent, driven by Google Gemini, interprets your requests, orchestrates a team of specialized sub-agents, and delivers a coherent, final response, all while maintaining a persistent memory of your conversations.

**Key Features**

🧠 **Intelligent Automation**: Uses Google Gemini as a central "Manager Agent" to understand complex requests and delegate tasks to the appropriate tool.

🗣️ **Multi-Modal Input**: Interact naturally by sending text, voice notes, photos, or documents directly into your Telegram chat.

🔌 **Integrated Toolset**: Comes pre-configured with agents to manage your memory, tasks, emails, calendar, research, and project sheets.

🗂️ **Persistent Memory**: Leverages Airtable as a knowledge base, allowing the assistant to save and recall personal details, company information, or past conversations for context-rich interactions.

⚙️ **Smart Routing**: Automatically detects the type of message you send and routes it through the correct processing pipeline (e.g., voice is transcribed, images are analyzed).

🔄 **Conversational Context**: Utilizes a window buffer to maintain short-term memory, ensuring follow-up questions and commands are understood within the current conversation.

# How It Works
1. The **Telegram Trigger** node acts as the entry point, receiving all incoming messages (text, voice, photo, document).

2. A **Switch** node intelligently routes the message based on its type:

- **Voice**: The audio file is downloaded and transcribed into text using a voice-to-text service.

- **Photo**: The image is downloaded, converted to a base64 string, and prepared for visual analysis.

- **Document**: The file is routed to a document handler that extracts its text content for processing.

- **Text**: The message is used as-is.

3. A **Merge** node gathers the processed input into a unified prompt.

4. The **Manager Agent** receives this prompt. It analyzes the user's intent and orchestrates one or more specialized agents/tools:

- memory_base **(Airtable)**: For saving and retrieving information from your long-term knowledge base.

- todo_and_task_manager **(Todoist)**: To create, assign, or check tasks.

- email_agent **(Gmail)**: To compose, search, or send emails.

- calendar_agent **(Google Calendar)**: To schedule events or check your agenda.

- research_agent **(Wikipedia/Web Search)**: To look up information.

- project_management **(Google Sheets)**: To provide updates on project trackers.

5. After executing the required tasks, the Manager Agent formulates a final response and sends it back to you via the Telegram node.

# Setup Instructions
Follow these steps to get your AI assistant up and running.

1. **Telegram Bot:**
- Create a new bot using the BotFather in Telegram to get your Bot Token.
- In the n8n workflow, configure the Telegram Trigger node's webhook.
- Add your Bot Token to the credentials in all Telegram nodes.
- For proactive messages, replace the **chatId** placeholders with your personal Telegram Chat ID.

2. **Google Gemini AI:**
- In the Google Gemini nodes, add your credentials by providing your Google Gemini API key.

3. **Airtable Knowledge Base:**
- Set up an Airtable base to act as your assistant's long-term memory.
- In the memory_base nodes (Airtable nodes), configure the credentials and provide the Base ID and Table ID.

4. **Google Workspace APIs:**
- Connect your Google account credentials for Gmail, Google Calendar, and Google Sheets.
- In the relevant nodes, specify the Document/Sheet IDs you want the assistant to manage.

5. **Connect Other Tools:**
- Add your credentials for Todoist and any other integrated tool APIs.

6. **Configure Conversational Memory:**
- This workflow is designed for multi-user support. Verify that the Session Key in the "Window Buffer Memory" nodes is correctly set to a unique user identifier from Telegram (e.g., {{ $json.chat.id }}). This ensures conversations from different users are kept separate.

7. **Review Schedule Triggers:**
- Check any nodes designed to run on a schedule (e.g., "At a regular time"). Adjust their cron expressions, times, and timezone to fit your needs (e.g., for daily summaries).

8. **Test the Workflow:**
- Activate the workflow.
- Send a text message to your bot (e.g., "Hello!").

# Estimated Setup Time
- **30–60 minutes:** If you already have your API keys, account credentials, and service IDs (like Sheet IDs) ready.

- **2–3 hours:** For a complete, first-time setup, which includes creating API keys, setting up new spreadsheets or Airtable bases, and configuring detailed permissions.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger, AI Agent, Simple Memory, Wikipedia

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
