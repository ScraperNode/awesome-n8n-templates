# 💬 Multi-language Telegram RAG chatbot with supervisor AI & automated Google Drive pipeline

> ⚡ **431 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## **N8N Hybrid RAG Chatbot with Multiple AI Agents**

One of the most powerful system in the market, this template creates a sophisticated, multi-agent hybrid RAG (Retrieval-Augmented Generation) chatbot that can handle diverse user queries by routing them to a “Supervisor AI agent”. The Supervisor agent will then send the request to “Expert AI agents”, agents specializing in specific domains. In addition, this system automates data ingestion from various sources (including websites and Google Drive), processes and stores the information in a vector database, and interacts with users through Telegram in multiple languages.

For more powerful n8n templates, visit our website at [aiautomationpro.org](https://aiautomationpro.org/).

![Hybrid_RAG_Chatbot.png](fileId:1801)
![3phase RAG Chatbot.png](fileId:1802)
![Workflows_Diagram.png](fileId:1803)
![Hybrid_RAG_Chatbot_n8n_template_multi_agent.jpeg](fileId:1799)![Hybrid_RAG_Chatbot_n8n_template_overview.jpeg](fileId:1800)


### **Who’s it for?**

This template is ideal for:

* **Developers and Businesses** looking to build a powerful, knowledge-based chatbot for customer support, internal knowledge management, or lead generation.  
* **AI Enthusiasts** who want to explore advanced concepts like multi-agent systems, RAG, and automated data pipelines.  
* **n8n Users** who want to build a scalable and customizable AI solution that integrates multiple services.

### **Key Features**

* **Multi-Agent Architecture:** Utilizes a supervisor agent to route queries to specialized agents for different domains (e.g., Products, News, Academy).  
* **Automated Data Ingestion:** Automatically scrapes data from websites and syncs new or updated files from Google Drive.  
* **Retrieval-Augmented Generation (RAG):** Enriches the chatbot's knowledge by retrieving relevant information from a Supabase vector store and a Postgres database.  
* **Telegram Integration:** Provides a seamless, multi-language chat interface for users to interact with the bot.  
* **Dynamic Data Handling:** Automatically processes and embeds data from various sources like Google Docs, PDFs, and Word documents.  
* **Data Management:** Keeps the knowledge base up-to-date by automatically handling document creation, updates, and deletions.

### **How it works**

The workflow is divided into three main parts: data ingestion, data management, and the chat interface.

1. **Data Ingestion & Processing:**  
   * **Web Scraping:** The workflow fetches URLs from a Google Sheet, scrapes the content using Crawl4ai, cleans it with an AI agent, and saves it to a Google Doc.  
   * **Google Drive Sync:** It monitors specific Google Drive folders for new or updated files (Google Docs, PDFs, Word documents).  
   * **Embedding & Storage:** The content from these sources is then chunked, converted into vector embeddings using OpenAI, and stored in a Supabase vector database for efficient retrieval.  
2. **Data Deletion:**  
   * A scheduled trigger periodically checks a Google Sheet for records marked as "deleted."  
   * It then removes the corresponding data from the Supabase vector store and deletes the file from Google Drive to ensure the chatbot's knowledge remains current.  
3. **Chat Interface & Logic (Telegram):**  
   * **User Input:** The chatbot receives user messages via a Telegram trigger.  
   * **Language Detection:** It first detects the language of the query and translates it to English if necessary.  
   * **Supervisor Agent:** A central "Supervisor" AI agent analyzes the user's query.  
   * **Agent Routing:** Based on the query, the Supervisor delegates the task to the most appropriate specialized agent:  
     * **News AI Agent:** Handles questions about current events.  
     * **Product AI Agent:** Answers queries about product details from a Postgres database.  
     * **Academy AI Agent:** Responds to questions about courses and educational content.  
   * **Response Generation:** The selected agent processes the query, retrieves the necessary information using RAG, generates a response, and translates it back to the user's original language before sending it via Telegram.

### **Requirements**

To use this template, you will need accounts and credentials for the following services:

* n8n  
* OpenAI  
* Supabase (for vector storage)  
* Google Workspace (Google Drive, Google Sheets, Google Docs)  
* Telegram Bot  
* Postgres Database  
* Crawl4AI

### **Step-by-step Setup**

1. **Configure Credentials:** Add your API keys and credentials for all the required services (OpenAI, Supabase, Google, Telegram, Postgres) in the n8n Credentials section.  
2. **Set up Google Drive:** Create two folders in your Google Drive: one for documents scraped from websites and another for manual document uploads. Note the folder IDs.  
3. **Set up Google Sheets:**  
   * Clone the Google Sheet template, or create a Google Sheet with two tabs: Website Links and Manual Documents.  
   * In the Website Links tab, add columns for Link, Category Code, Is Scraped, and Is Deleted.  
   * In the Manual Documents tab, add columns for Document ID, Title, Category Code, and Is Deleted.  
4. **Set up Supabase:**  
   * Create a new project in Supabase.  
   * Run the provided SQL script to create the documents table for vector storage.  
5. **Set up Postgres:**  
   * Set up a Postgres database (in Supabase).  
   * Run the provided SQL script to create the products table to store product details.  
6. **Configure the Main Workflow:**  
   * Open the AIAutomationPro Ultimate RAG Chatbot main workflow.  
   * Update the Google Drive, Google Sheets, Supabase, and Postgres nodes with your specific Folder IDs, Sheet Names, and table names.  
   * Link the three sub-workflows (News AI Agent, Product AI Agent, Academy AI Agent) in the corresponding Workflow Tool nodes.  
7. **Activate Workflows:** Activate the main workflow and all three sub-flow workflows.  
8. **Start Chatting:** Send a message to your Telegram bot to start interacting with your new RAG chatbot.

### **How to Customize the Workflow**

* **Add More Agents:** You can create new sub-workflows with specialized agents for different topics (e.g., a "Finance AI Agent"). Simply add a new Workflow Tool node in the main flow and update the Supervisor Agent's system prompt to include the new agent's capabilities.  
* **Change Data Sources:** Modify the data ingestion part of the workflow to pull data from other sources like Notion, HubSpot, or a CRM by adding the relevant n8n nodes.  
* **Adjust the AI Model:** You can switch to a different LLM by replacing the OpenAI Chat Model nodes.  
* **Modify Prompts:** Fine-tune the system prompts in the Agent nodes to alter the personality, instructions, or output format of the chatbot and its specialized agents.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
