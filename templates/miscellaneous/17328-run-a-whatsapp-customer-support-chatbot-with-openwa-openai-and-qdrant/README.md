# 🔧 Run a WhatsApp customer support chatbot with OpenWA, OpenAI and Qdrant

> ⚡ **286 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow builds a WhatsApp customer-support chatbot using OpenWA and OpenAI, enriched with Qdrant RAG knowledge and optional Gmail escalation to a human agent, plus a manual knowledge-base ingestion flow that loads documents from Google Drive and indexes them into Qdrant.

## How it works
1. Triggers when an incoming WhatsApp message is received via the OpenWA webhook.
2. Checks whether the incoming message type is text and immediately replies via OpenWA if it is not.
3. Extracts key message metadata (sender, chat ID, body, timestamp, session ID) and passes the text to an OpenAI-powered support agent with per-chat conversation memory.
4. When needed, the agent uses a Qdrant-backed RAG tool (OpenAI embeddings + Qdrant vector search) and a calculator tool to answer accurately, and it can escalate by sending an email via Gmail.
5. Cleans the agent’s reply text and sends the final response back to the WhatsApp chat via OpenWA.
6. On the manual trigger, optionally creates/clears the Qdrant collection, downloads files from a specified Google Drive folder, converts/splits them into chunks, generates OpenAI embeddings, and inserts them into Qdrant for later retrieval.

## Setup
1. Set up OpenWA (self-hosted) and add the OpenWA API credentials in n8n, then configure the OpenWA webhook to point to the workflow’s OpenWA Trigger endpoint and set the correct session ID.
2. Add an OpenAI API credential and select the chat model(s) and embeddings model used by the agent and Qdrant retrieval.
3. Provision Qdrant, add Qdrant API credentials, create/update the target collection name in both the retrieval and insertion steps, and replace the QDRANTURL placeholders in the HTTP requests.
4. Add Google Drive OAuth credentials, set the folder ID containing your knowledge-base documents, and run the manual ingestion flow to populate Qdrant.
5. Add Gmail OAuth2 credentials and confirm the support email recipient address used for escalation.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I'll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, Google Drive, DebugHelper, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
