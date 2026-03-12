# 📱 Personalized email automation using Google Docs, Pinecone, GPT-4o and Gmail

> ⚡ **1,535 views** · 📱 [Social Media & Email Marketing](../)

## Description

**What Problem Does This Solve?** 🛠️
This workflow automates the process of extracting information from a Google Doc, storing it in a Pinecone vector database, and using it to personalize and send emails based on user input via chat. It eliminates the manual steps of gathering recipient data, writing messages, and dispatching emails providing a fully automated, intelligent communication system.

Perfect for teams that need to:

* Maintain dynamic contact lists

* Personalize bulk or contextual email outreach

* Use chat interfaces to trigger intelligent email actions

---
**Target Audience:**
Sales teams, marketing departments, HR staff, startup founders, or anyone looking to automate AI-powered communication workflows.

---

**What Does It Do?** 🌟
* Extracts content from a Google Docs document (e.g., a list of contacts or structured notes)

* Splits, embeds, and stores that content in Pinecone for semantic search

* Listens for incoming chat messages using n8n's chatTrigger

* Uses LangChain agents with OpenAI to:

   * Search Pinecone for contextually relevant information (e.g., email addresses)

   * Compose personalized emails based on instructions

* Sends emails using the Gmail API, triggered dynamically from the AI output
---
**Key Features** 📋
* Google Docs integration for live document data

* Embedding & vector search with Pinecone for AI lookups

* Custom LangChain agents with tool calling logic (search + send)

* Full support for OpenAI models (GPT-4o)

* Personalized email generation with dynamic name and message filling

* Modular design: plug-and-play with other tools like CRMs, Notion, etc.

---

**Setup Instructions**

**Prerequisites** 
* **n8n Instance:** Self-hosted or cloud instance

* **Google Docs Account:** For reading input content

* **Pinecone Account:** For storing document data semantically

* **OpenAI Account:** For generating embeddings and messages

* **Gmail Account:** With Gmail OAuth2 credentials for sending emails

---

**Installation Steps** 📦

**1. Import the Workflow**
Import the provided JSON files into your n8n instance.

 **2.Configure Credentials**
Go to **n8n &gt; Credentials**, and set up:

* **Google Docs API**

* **OpenAI API**

* **Pinecone API**

* **Gmail OAuth2**

**3. Set Your Pinecone Index & Namespace**
Ensure you have a working Pinecone index (e.g., n8ndocs) and namespace (e.g., docsmail).

**4. Test the Full Flow**

* Run the Google Docs → Pinecone embedding workflow to prepare data.

* Send a message to the chatTrigger endpoint (e.g., "Send an offer to User").

* Check the execution log to verify correct tool usage and Gmail delivery.

---

**How It Works** 🔍

**1. Data Preparation:**

* Google Doc content is fetched and chunked.

* OpenAI embeddings are created.

* Data is stored in Pinecone under a specific namespace.

**2. Chat Trigger:**

* A webhook captures chat input.

* The LangChain agent interprets the user request.

* The agent uses two tools:

   * Vectorstore_mails: Retrieves relevant emails via Pinecone vector search

   * send_mail: Uses an internal n8n sub-workflow to send Gmail messages

**3. Mail Generation & Delivery:**

* Email is personalized using recipient info (name/email from Pinecone)

* Message follows a clean, friendly format with clear subject and closing

* Delivered via Gmail integration

## 🔗 Nodes Used

Google Docs, Execute Workflow Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
