# 💬 Build RAG-powered support agent for Jira issues using Pinecone and OpenAI

> ⚡ **477 views** · 💬 [Support Chatbots](../)

## Description

## Load Jira open issues with comments into Pinecone + RAG Agent (Direct Tool or MCP)

## Who’s it for  
This workflow is designed for support teams, data engineers, and AI developers who want to centralize Jira issue data into a vector database.  
It collects open issues and their associated comments, converts them into embeddings, and loads them into Pinecone for semantic search, retrieval-augmented generation (RAG), or AI-powered support bots.  
It’s also published as an **MCP tool**, so external applications can query the indexed issues directly.  

## How it works  
The workflow automates Jira issue extraction, comment processing, and vector storage in Pinecone. Importantly, the Pinecone index is **recreated at every run** so that it always reflects the current set of unresolved tickets.  

1. **Trigger** – A schedule trigger runs the workflow at defined times (e.g., 8, 11, 14, and 17 on weekdays).  
2. **Issue extraction with pagination** – Calls the Jira REST API to fetch open issues matching a JQL query (unresolved cases created in the last year).  
   - Pagination is fully handled: issues are retrieved in batches of 25, and the workflow continues iterating until all open issues are loaded.  
3. **Data transformation** – Extracts key fields (issue ID, key, summary, description, product, customer, classification, status, registration date).  
4. **Comments integration** – Fetches all comments for each issue, filters out empty/irrelevant ones (images, dots, empty markdown), and merges them with the issue data.  
5. **Text cleaning** – Converts HTML descriptions into clean plain text for processing.  
6. **Embedding generation** – Uses the OpenAI Embeddings node to vectorize text.  
7. **Vector storage with index recreation** – Loads embeddings and metadata into Pinecone under the `jira` namespace and the `openissues` index. The namespace is cleared at every run to ensure the index contains only unresolved tickets.  
8. **Document chunking** – Splits long issue texts into smaller chunks (512 tokens, 50 overlap) for better embedding quality.  
9. **MCP publishing** – Exposes the Pinecone index as an MCP tool (`openissues`), enabling external systems to query Jira issues semantically.

## How to set up  
1. **Jira** – Configure a Jira account and generate a token. Update the Jira node with credentials and adjust the JQL query if needed.  
2. **OpenAI** – Set up an OpenAI API key for embeddings. Configure embedding dimensions (default: 512).  
3. **Pinecone** – Create an index (e.g., `openissues`) with matching dimensions (512). Configure Pinecone API credentials and namespace (`jira`).  
   - The index will be cleared automatically at every run before reloading unresolved issues.  
4. **Schedule** – Adjust the cron expression in the Schedule Trigger to fit your update frequency.  
5. **Optional MCP** – If you want to query Jira issues via MCP, configure the MCP trigger and tool nodes.  

## Requirements  
- Jira account with API access and permissions to read issues and comments.  
- OpenAI API key with access to the embedding model.  
- Pinecone account with an index created (dimensions = 512).  
- n8n instance with credentials set up for Jira, OpenAI, and Pinecone.  

## How to customize the workflow  
- **JQL query**: Modify it to control which issues are extracted (e.g., by project, type, or time window).  
- **Pagination size**: Adjust the `maxResults` parameter (default 25) if you want larger or smaller batches per iteration.  
- **Metadata fields**: Add or remove fields in the “Extract Relevant Info” code node.  
- **Chunk size**: Adjust chunk size/overlap in the Document Chunker for different embedding strategies.  
- **Embedding model**: Switch to a different embedding provider if preferred.  
- **Vector store**: Replace Pinecone with another supported vector database if needed.  
- **Downstream use**: Extend with notifications, dashboards, or AI assistants that consume the vector data.
---------------  

## AI Chatbot for Jira open tickets with SLA insights

### Who’s it for  
This workflow is designed for commercial teams, customer support, and service managers who need quick, conversational access to unresolved Jira tickets.  
It enables them to check whether a client has open issues, see related details, and understand SLA implications without manually browsing Jira.  

### How it works  
- **Chat interface** – Provides a web-based chat that team members can use to ask natural language questions such as:  
  - *“Are there any issues from client ACME?”*  
  - *“Do we have tickets that have been open for a long time?”*  
- **AI Agent** – Powered by OpenAI, it interprets questions and queries the Pinecone vector store (`openissues` index, `jira` namespace).  
- **Memory** – Maintains short-term chat history for more natural conversations.  
- **Ticket retrieval** – Uses Pinecone embeddings (dimension = 512) to fetch unresolved tickets enriched with metadata:  
  - Issue key, description, customer, product, severity color, status, AM contract type, and SLA.  
- **SLA integration** – Service levels (Basic, Advanced, Full Service, with optional Fast Support) are provided via the SLA node. The agent explains which SLA applies based on ticket severity, registration date, and contract type.  
- **AI response** – Returns a friendly, collaborative summary of all tickets found, including:  
  - Ticket identifier  
  - Description  
  - Customer and product  
  - Severity level (Red, Yellow, Green, White)  
  - Ticket status  
  - Contract level and SLA explanation  

### Setup  
1. Configure Jira → Pinecone index (`openissues`, 512 dimensions) already populated with unresolved tickets.  
2. Provide OpenAI API credentials.  
3. Ensure the SLA node includes the correct service-level definitions.  
4. Adjust chat branding (title, subtitle, CSS) if desired.  

### Requirements  
- Jira account with API access.  
- Pinecone account with an index (`openissues`, dimensions = 512).  
- OpenAI API key.  
- n8n instance with LangChain and chatTrigger nodes enabled.  

### How to customize  
- Change the SLA node text if your service levels differ.  
- Adjust the chat interface design (colors, title, subtitle).  
- Expand metadata in Pinecone (e.g., add project type, priority, or assigned team).  
- Train with additional examples in the system message to refine AI behavior.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
