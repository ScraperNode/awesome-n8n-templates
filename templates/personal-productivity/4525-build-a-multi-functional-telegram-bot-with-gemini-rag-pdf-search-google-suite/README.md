# ⚡ Build a multi-functional Telegram bot with Gemini, RAG PDF search & Google Suite

> ⚡ **1,590 views** · ⚡ [Personal Productivity](../)

## Description

## The Ultimate Beginner's Guide to an AI-Powered Telegram Assistant (PDF, Brave search & Google Suite)

This comprehensive workflow bundle is designed as a powerful starter kit, enabling you to build a multi-functional AI assistant on Telegram. It seamlessly integrates AI-powered voice interactions, an intelligent PDF document search using a Retrieval-Augmented Generation (RAG) system, and automates various Google Suite tasks like calendar management and document generation. Perfect for beginners looking to explore advanced AI and automation capabilities.

## Disclaimer
This template is designed for self-hosted n8n instances.


## 🚀 Key Features
*   **Telegram Bot Interface:** Interact with your AI assistant using both text and voice commands through Telegram.
*   **AI Voice Bot:**
    *   Transcribes user voice messages using OpenAI Whisper.
    *   Processes requests with an AI agent powered by Google Gemini.
    *   Responds with AI-synthesized voice using Replicate API.
*   **PDF RAG System:**
    *   Index PDF documents from Google Drive via Telegram commands.
    *   Utilizes Mistral AI for Optical Character Recognition (OCR) on PDFs.
    *   Stores document content and embeddings in a Qdrant vector database.
    *   Answers questions about your documents using Google Gemini, based on retrieved context.
*   **Google Suite Automation:**
    *   Manage Google Calendar: Create events, find upcoming holidays, and list birthdays.
    *   Google Drive: Search for PDF files and manage document templates.
    *   Google Docs: Automatically generate invoices from templates.
*   **Intelligent Web Search:** Employs Brave Search for fetching real-time information from the web.
*   **Versatile AI Agent:** Leverages Google Gemini with a suite of tools including a calculator, date & time utilities, and custom integrations (e.g., example Airbnb tools).
*   **Command-Driven Functionality:** Easily trigger specific actions using Telegram commands like `/help`, `/pdf`, `/rag`, `/invoice`, `/chat`, `/brave`, and `/birthday`.

## ⚙️ How It Works
The workflow is initiated by messages or commands sent to your Telegram bot. A central `Switch` node directs the flow based on the input received.

## 1. Telegram Interaction & Command Routing
*   A **Telegram Trigger** node listens for new messages (text or voice).
*   A "typing..." indicator is sent to Telegram for better user experience.
*   The **Switch** node parses the message content and routes it to the appropriate sub-workflow based on predefined commands (e.g., `/pdf`, `/rag`, `/voice`) or general chat.

## 2. AI Voice Bot Functionality
*   For voice messages (or if the voice path is triggered):
    *   The voice file is downloaded from Telegram.
    *   **OpenAI Whisper** transcribes the audio into text.
    *   The transcribed text is fed to an **AI Agent** (powered by Google Gemini and equipped with various tools and memory).
    *   The AI Agent's text response is then sent to the **Replicate API** to generate a natural-sounding voice.
    *   The generated audio response is sent back to the user on Telegram.

## 3. PDF RAG System with Mistral OCR & Qdrant
*   **Indexing PDFs (via `/qdrant &lt;Google_Drive_File_ID&gt;` command):**
    *   The specified PDF is downloaded from Google Drive.
    *   The PDF is uploaded to **Mistral AI** for OCR processing.
    *   The extracted text (in markdown format) is retrieved.
    *   The text is split into manageable chunks.
    *   **OpenAI Embeddings** are generated for each chunk.
    *   These chunks and their embeddings are stored in a **Qdrant** vector collection.
    *   A confirmation message is sent to Telegram.
*   **Querying PDFs (via `/rag &lt;your_question&gt;` command):**
    *   The user's question is processed by a **RetrievalQA Chain**.
    *   This chain uses Google Gemini as the Language Model and retrieves relevant document chunks from Qdrant based on semantic similarity (embeddings).
    *   Google Gemini then generates a concise answer based on the user's question and the retrieved contextual information from the documents.
    *   The answer is sent back to the user on Telegram.
*   **Searching PDFs in Drive (via `/pdf &lt;search_term&gt;` command):**
    *   Searches your Google Drive for PDF files matching the provided search term.
    *   Sends a list of found PDF files (name and ID) to the user on Telegram, allowing them to easily identify files for indexing with `/qdrant`.

## 4. AI Chat & Task Automation (General Chat & `/chat` command)
*   Handles general text messages or transcribed voice inputs that are not specific commands.
*   An **AI Agent** (Google Gemini) processes these inputs.
*   The agent is equipped with tools such as:
    *   **Google Calendar Tools:** To create events, find the next public holiday, or list upcoming birthdays.
    *   **Brave Search Tool:** To search the internet for information.
    *   **Calculator Tool:** For mathematical computations.
    *   **Date & Time Utility:** For handling and formatting dates.
    *   **Example Airbnb Tools:** Demonstrates extensibility for custom tool integrations.
*   The agent utilizes a "Think Node" process for reasoning and **Window Buffer Memory** to maintain conversational context.
*   Responses are formulated and sent back to the user on Telegram.

## 5. Google Automations
*   **Invoice Generation (via `/invoice` command):**
    *   Copies a predefined Google Docs invoice template from your Google Drive.
    *   Populates the new document with details (client name, items, etc. – currently uses placeholder data from an 'Edit Fields' node, which can be customized to parse input from the command).
    *   Converts the populated Google Doc into a PDF file.
    *   Sends the generated PDF invoice to the user via Telegram.
*   **Calendar Management (via AI Agent or specific commands like `/birthday`):**
    *   The `/birthday` command fetches upcoming birthdays from a specified Google Calendar.
    *   The AI Agent can also interact with Google Calendar to create events or retrieve information based on natural language requests.

## 6. Web Search (via `/brave &lt;query&gt;` command or AI Agent)
*   Performs a web search using the Brave Search API.
*   Returns a list of search results, including titles and URLs, to the user on Telegram.

## 7. Help Command (`/help`)
*   Provides the user with a formatted list of all available Telegram commands and their basic usage instructions.

## 🛠️ Setup Steps & Credentials
To get this workflow bundle up and running, you'll need to configure several credentials:

1.  **Telegram:**
    *   Create a new bot via `@BotFather` on Telegram to obtain a **Bot Token**.
    *   Add this token to the `Telegram Trigger` node and all `Telegram` (sender) nodes in the workflow.
2.  **OpenAI:**
    *   Obtain an API Key from [platform.openai.com](https://platform.openai.com).
    *   Create an `OpenAI` credential.
    *   Use this credential in the `Convert audio to text` (OpenAI node for Whisper transcription) and all `Embeddings OpenAI` nodes (for RAG system).
3.  **Replicate API (Text-to-Speech):**
    *   Sign up at [replicate.com](https://replicate.com) and get your API token.
    *   Create an `HTTP Bearer Auth` credential using this token.
    *   Assign this credential to the `Call Replicate API` (HTTP Request) node.
4.  **Google Gemini (PaLM API):**
    *   Get an API key from Google AI Studio or Google Cloud Console.
    *   Create a `Google Gemini(PaLM) Api` credential.
    *   Assign it to all `Google Gemini Chat Model` nodes.
5.  **Qdrant (Vector Database):**
    *   Set up a Qdrant instance (either cloud-hosted or self-managed).
    *   Note your Qdrant instance URL and API Key (if security is enabled).
    *   Create a `QdrantApi` credential with these details.
    *   Assign it to the `Qdrant Vector Store` nodes.
    *   For the `Refresh collection` node (an HTTP Request node used to clear the collection for `/pdf` command demo), create an `HTTP Header Auth` credential with your Qdrant API key if required by your instance.
6.  **Mistral AI (PDF OCR):**
    *   Obtain an API key from [console.mistral.ai](https://console.mistral.ai).
    *   Create a `Mistral Cloud API` credential.
    *   Assign this to the `Mistral Upload`, `Mistral Signed URL`, and `Mistral DOC OCR` (HTTP Request) nodes.
7.  **Google Drive & Google Docs:**
    *   Ensure the Google Drive API and Google Docs API are enabled in your Google Cloud Console project.
    *   Set up OAuth 2.0 credentials (Client ID and Client Secret).
    *   Create `Google Drive OAuth2 Api` and `Google Docs OAuth2 Api` credentials.
    *   Assign these to the respective `Google Drive` and `Google Docs` nodes throughout the workflow.
    *   *Important:* Configure relevant Folder IDs (for PDF search, invoice template source, invoice output) and the invoice template Document ID in the Google Drive and Google Docs nodes.
8.  **Google Calendar:**
    *   Enable the Google Calendar API in your Google Cloud Console project.
    *   Set up OAuth 2.0 credentials.
    *   Create a `Google Calendar OAuth2 Api` credential.
    *   Assign it to the `Google CalendarTool` and `Google Calendar` nodes.
    *   Specify the correct calendar names or IDs in the nodes (e.g., for birthdays, holidays, new event creation).
9.  **Brave Search:**
    *   Get a Brave Search API key from their developer portal.
    *   Create a `Brave Search API` credential.
    *   Assign it to the `Brave Search` nodes and tools.
10. **(Optional) Airbnb MCP Client:**
    *   The workflow includes example nodes for Airbnb MCP tools. If you intend to use or expand these, set up the corresponding `MCP Client API` credentials.

## 💡 Customization & Learning
This "Beginner Bundle" is not just a ready-to-use solution but also a fantastic learning resource:

*   **Explore AI Agent Prompts:** Dive into the `AI Agent` nodes to see how prompts are structured to guide the LLM's behavior, including the "Think Node" process and character guidance for robust messaging.
*   **Modify Toolsets:** Easily add or remove tools for the AI agent to expand its capabilities.
*   **Invoice Customization:** Adapt the `Edit Fields` node and the Google Docs template to match your invoicing needs. You can extend it to parse invoice details directly from the Telegram command.
*   **RAG Parameters:** Experiment with chunk sizes, overlap, and different embedding models in the RAG pipeline.
*   **Extend Commands:** Add new commands and corresponding functionalities by expanding the main `Switch` node and building out new automation paths.

By setting up and dissecting this workflow, beginners can gain a practical understanding of building complex, AI-driven applications, integrating various services, and managing different data flows.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Google Calendar, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
