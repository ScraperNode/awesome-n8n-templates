# 🎫 Retrieve and answer Gmail email queries with Llama 3.2, mxbai-embed, and Qdrant

> ⚡ **447 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Self-Hosted**

This workflow provides a complete end-to-end system for automatically managing your inbox by reading incoming questions, matching them to approved guidelines, and sending consistent, 24/7 replies. By combining local AI processing with an automated retrieval-augmented generation (RAG) pipeline, it ensures fast resolution times without compromising data privacy or incurring ongoing AI API costs.

## Who is this for?

This is designed for **University Admissions, Student Support Teams, Customer Service Staff**, or **professionals in any industry** who are overwhelmed by their inboxes and spend countless hours answering repetitive questions. It is particularly useful for any organization looking to automate routine FAQs across various fields, maintaining personalized, human-like, and threaded email conversations while keeping data completely in-house.

## 🛠️ Tech Stack

- **n8n**: For workflow orchestration of both the ingestion pipeline and response automation.
- **Docker & Docker Compose**: For containerizing and orchestrating the n8n and Qdrant services locally.
- **Google Drive**: To host and trigger updates from the approved FAQ knowledge base.
- **Gmail**: For real-time incoming email triggers and threaded outbound replies.
- **Qdrant**: For self-hosted vector database storage and similarity matching.
- **LM Studio**: To host the local AI models via an OpenAI-compatible API for two primary tasks:
  - **Embedding Generation**: Uses the `mxbai-embed-large-v1` model to convert FAQ data and incoming questions into high-dimensional vectors for semantic matching.
  - **Response Generation**: Uses the `llama-3.2-3b-instruct` model to process the retrieved context and craft a polite, personalized HTML email reply.

## ✨ How it works

1. **Knowledge Base Ingestion**: The workflow automatically detects updates to a specific FAQ JSON file in **Google Drive**, converts the Q&A pairs into vector embeddings using the local `mxbai` model, and stores them in **Qdrant**.
2. **Email Trigger**: The resolution pipeline kicks off instantly when a new incoming email arrives via the **Gmail** trigger.
3. **Semantic Search**: The incoming question is converted to an embedding using the `mxbai-embed-large-v1` model and checked against the Qdrant database to retrieve the top 3 most relevant FAQ answers, enforcing a minimum 0.7 similarity threshold for quality control.
4. **LLM Response Generation**: The **OpenAI** node (pointing to **LM Studio**) processes the retrieved context and the student's email using the `llama-3.2-3b-instruct` model to craft a polite, personalized HTML email response.
5. **Threaded Reply**: The **Gmail** node sends the generated response directly back into the original email thread, exactly like a human would.

## 📋 Requirements

- **Docker** and **Docker Compose** installed to run n8n and Qdrant locally.
- **LM Studio** running a local server on port `1234`.
- **mxbai-embed-large-v1** (GGUF) and **llama-3.2-3b-instruct** (GGUF) models loaded in LM Studio.
- **Google Cloud Console** account with Gmail and Google Drive APIs enabled.
- An FAQ JSON file properly formatted and hosted in Google Drive.

## 🚀 How to set up

1. **Prepare your Local AI**:
   - Open **LM Studio**, download both the embedding and LLM models.
   - Start the Local Server on port `1234`. 
   - Note your machine's local IP address (e.g., `192.168.1.50`).
2. **Spin up Services**:
   - Clone the repository and configure the `.env` file with your `QDRANT_COLLECTION` name.
   - Run `docker compose up -d` to start the n8n and Qdrant containers.
3. **Import the Workflow**:
   - Open n8n at `http://localhost:5678` and import the provided JSON workflow file.
4. **Link Services**:
   - Update the **Google Drive** nodes with the File ID of your FAQ JSON document.
   - Update the embedding and AI nodes with your local IP address in the Base URL.
5. **Test and Activate**:
   - Execute the ingestion pipeline manually to populate Qdrant.
   - Toggle the workflow to **Active**.
   - Send a test email to your connected Gmail address to verify the automated reply.

## 🔑 Credential Setup

To run this workflow, you must configure the following credentials in n8n:

- **Google (Gmail & Drive)**:
  - Create new **Gmail OAuth2 API** and **Google Drive OAuth2 API** credentials.
  - Enter your **Client ID** and **Client Secret** obtained from the Google Cloud Console (the same credentials can be used for both).
- **Qdrant API**:
  - Create a new **Qdrant API** credential.
  - **REST URL**: Set this to `http://host.docker.internal:6333`.
  - Leave the API key blank for the self-hosted Docker setup.
- **OpenAI API (Local)**:
  - Create a new **OpenAI API** credential for connecting to LM Studio.
  - **API Key**: Enter any placeholder text (e.g., `lm-studio`).
  - **Base URL**: Set this to your machine's local IP address (e.g., `http://&lt;LM_STUDIO_IP&gt;:1234/v1`) to ensure n8n can connect to the local AI server from within the Docker network.

## ⚙️ How to customize

- **Refine Response Tone**: Update the System Message in the AI node to change the personality, signature, or formatting rules of the generated email reply.
- **Switch to Cloud AI**: If you prefer not to host models locally, swap out the local **LM Studio** connection for external APIs like **OpenAI (GPT-4o)**, **Anthropic (Claude)**, or **Cohere** for both embeddings and text generation.
- **Change Embedding Models**: While the workflow uses a local model by default, anyone can easily swap the embedding nodes to use alternative models like **OpenAI (`text-embedding-3-small`)** or **Google Gemini (`text-embedding-004`)** if desired.
- **Adjust Similarity Threshold**: Modify the semantic search threshold (default `0.7`) in the Qdrant node to be stricter or more lenient depending on your knowledge base accuracy.
- **Alternative Triggers & Channels**: Replace the Gmail nodes with **Outlook / Microsoft 365**, **Zendesk**, **Intercom**, or **Slack** to resolve queries across different communication platforms.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Google Drive Trigger, Gmail Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
