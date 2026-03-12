# 🔬 Synchronize Slack status updates with Pinecone, Google Sheets & GPT-4o

> ⚡ **97 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Streamline client onboarding and lay the groundwork for future Retrieval-Augmented Generation (RAG) capabilities by automatically transforming Slack messages into structured data using GPT-4o, Google Sheets, and Pinecone—all orchestrated within n8n. 

Perfect for teams setting up new client workspaces or preparing project data, this template listens to onboarding updates in Slack, retrieves the client’s latest files, and intelligently merges new information with existing records—ensuring a seamless, organized handoff and persistent data integrity for future AI-powered retrieval.

**Setup Instructions**

**Connect Slack**
- Set up a bot with access to channels:history, app_mentions:read, and users.profile:read.
- Paste your channel ID into the Slack Trigger node.

**Set Up Google Sheets**
- Prepare a sheet that stores basic user metadata like names, emails, IDs, etc.
- Connect your Google Sheets account via OAuth2 and point the template to your doc.

**Configure Pinecone**
- Create a Pinecone project with a vector index named n8n (or update accordingly).
- Connect using your Pinecone API key and environment.

**Integrate OpenAI or Azure OpenAI**
- Use GPT-4o or GPT-4 via OpenAI or Azure.
- Provide your API credentials in the AzureOpenAI nodes.

**Optional: Enable Cohere Reranking**
- Add Cohere API credentials to enhance document relevance for retrieval steps.

**Test the Workflow**
- Mention the bot in your Slack channel or send a direct message.
- Watch it pull prior records, merge your message intelligently, and sync to both systems.

**How It Works (Key Steps)**

**Trigger:** Listens for Slack messages or mentions related to client onboarding or project setup.

**User & Client Profile Fetch:** Retrieves the sender’s and client’s profiles using the Slack API.

**ID Resolution:** GPT-4o identifies and matches client and user IDs across Google Sheets and Pinecone.

**Previous File Retrieval:** Pulls the most recent client onboarding documents or status from Pinecone.

**AI-Powered Merge:** Combines new onboarding messages with existing client files—preserving all relevant data and structure for future RAG use.

**Validation & Schema Matching:** Output is parsed and automatically fixed to align with your onboarding or project data schema.

**Update Storage:** Saves the updated client document back to Pinecone, building a robust vector database ready for future RAG workflows.

**Best For**
- Teams onboarding new clients and needing a structured, automated process
- Solution architects or data engineers preparing data infrastructure for RAG solutions
- Project managers tracking client setup tasks and documentation
- Organizations building a vector database to support future AI-powered document retrieval and knowledge management

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Google Drive Trigger, AI Agent, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
