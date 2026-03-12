# 📖 Create an AI Telegram bot using Google Drive, Qdrant, and OpenAI GPT-4.1

> ⚡ **345 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### How it works
This workflow creates an intelligent Telegram bot with a knowledge base powered by Qdrant vector database. The bot automatically processes documents uploaded to Google Drive, stores them as embeddings, and uses this knowledge to answer questions in Telegram. It consists of two independent flows: **document processing** (Google Drive → Qdrant) and **chat interaction** (Telegram → AI Agent → Telegram).

### Step-by-step

**Document Processing Flow:**
* **New File Trigger:** The workflow starts when the **New File Trigger** node detects a new file created in the specified Google Drive folder (polling every 15 minutes).
* **Download File:** The **Download File** (Google Drive) node downloads the detected file from Google Drive.
* **Text Splitting:** The **Split Text into Chunks** node splits the document text into chunks of 3000 characters with 300 character overlap for optimal embedding.
* **Load Document Data:** The **Load Document Data** node processes the binary file data and prepares it for vectorization.
* **OpenAI Embeddings:** The **OpenAI Embeddings** node generates vector embeddings for each text chunk.
* **Insert into Qdrant:** The **Insert into Qdrant** node stores the embeddings in the Qdrant vector database collection.
* **Move to Processed Folder:** After successful processing, the **Move to Processed Folder** (Google Drive) node moves the file to a "Qdrant Ready" folder to keep files organized.

**Telegram Chat Flow:**
* **Telegram Message Trigger:** The **Telegram Message Trigger** node receives new messages from the Telegram bot.
* **Filter Authorized User:** The **Filter Authorized User** node checks if the message is from an authorized chat ID (26899549) to restrict bot access.
* **AI Agent Processing:** The **AI Agent** receives the user's message text and processes it using the fine-tuned GPT-4.1 model with access to the Qdrant knowledge base tool.
* **Qdrant Knowledge Base:** The **Qdrant Knowledge Base** node retrieves relevant information from the vector database to provide context for the AI agent's responses.
* **Conversation Memory:** The **Conversation Memory** node maintains conversation history per chat ID, allowing the bot to remember context.
* **Send Response to Telegram:** The **Send Response to Telegram** node sends the AI-generated response back to the user in Telegram.

### Set up steps
Estimated set up time: 15 minutes

1. **Google Drive Setup:**
   * Add your Google Drive OAuth2 credentials to the **New File Trigger**, **Download File**, and **Move to Processed Folder** nodes.
   * Create two folders in your Google Drive: one for incoming files and one for processed files.
   * Copy the folder IDs from the URLs and update them in the **New File Trigger** (folderToWatch) and **Move to Processed Folder** (folderId) nodes.

2. **Qdrant Setup:**
   * Add your Qdrant API credentials to the **Insert into Qdrant** and **Qdrant Knowledge Base** nodes.
   * Create a collection in your Qdrant instance (e.g., "Test-youtube-adept-ecom").
   * Update the collection name in both Qdrant nodes.

3. **OpenAI Setup:**
   * Add your OpenAI API credentials to the **OpenAI Chat Model** and **OpenAI Embeddings** nodes.
   * (Optional) Replace the fine-tuned model ID in **OpenAI Chat Model** with your own model or use a standard model like `gpt-4-turbo`.

4. **Telegram Setup:**
   * Create a Telegram bot via [@BotFather](https://t.me/botfather) and obtain the bot token.
   * Add your Telegram bot credentials to the **Telegram Message Trigger** and **Send Response to Telegram** nodes.
   * Update the authorized chat ID in the **Filter Authorized User** node (replace `26899549` with your Telegram user ID).

5. **Customize System Prompt (Optional):**
   * Modify the system message in the **AI Agent** node to customize your bot's personality and behavior.
   * The current prompt is configured for an n8n automation expert creating social media content.

6. **Activate the Workflow:**
   * Toggle "Active" in the top-right to enable both the Google Drive trigger and Telegram trigger.
   * Upload a document to your Google Drive folder to test the document processing flow.
   * Send a message to your Telegram bot to test the chat interaction flow.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
