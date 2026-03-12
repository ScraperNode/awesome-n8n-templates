# 📖 Build an All-Source Knowledge Assistant with Claude, RAG, Perplexity, and Drive

> ⚡ **8,492 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# 📜 Detailed n8n Workflow Description

## Main Flow

The workflow operates through a three-step process that handles incoming chat messages with intelligent tool orchestration:

1. **Message Trigger**: The `When chat message received` node triggers whenever a user message arrives and passes it directly to the `Knowledge Agent` for processing.

2. **Agent Orchestration**: The `Knowledge Agent` serves as the central orchestrator, registering a comprehensive toolkit of capabilities:
   - **LLM Processing**: Uses `Anthropic Chat Model` with the *claude-sonnet-4-20250514* model to craft final responses
   - **Memory Management**: Implements `Postgres Chat Memory` to save and recall conversation context across sessions
   - **Reasoning Engine**: Incorporates a `Think` tool to force internal chain-of-thought processing before taking any action
   - **Semantic Search**: Leverages `General knowledge` vector store with OpenAI embeddings (1536-dimensional) and Cohere reranking for intelligent content retrieval
   - **Structured Queries**: Provides `structured data` Postgres tool for executing queries on relational database tables
   - **Drive Integration**: Includes `search about any doc in google drive` functionality to locate specific file IDs
   - **File Processing**: Connects to `Read File From GDrive` sub-workflow for fetching and processing various file formats
   - **External Intelligence**: Offers `Message a model in Perplexity` for accessing up-to-the-minute web information when internal knowledge proves insufficient

3. **Response Generation**: After invoking the `Think` process, the agent intelligently selects appropriate tools based on the query, integrates results from multiple sources, and returns a comprehensive Markdown-formatted answer to the user.

## Persistent Context Management

The workflow maintains conversation continuity through `Postgres Chat Memory`, which automatically logs every user-agent exchange. This ensures long-term context retention without requiring manual intervention, allowing for sophisticated multi-turn conversations that build upon previous interactions.

## Semantic Retrieval Pipeline

The semantic search system operates through a sophisticated two-stage process:

- **Embedding Generation**: `Embeddings OpenAI` converts textual content into high-dimensional vector representations
- **Relevance Reranking**: `Reranker Cohere` reorders search hits to prioritize the most contextually relevant results
- **Knowledge Integration**: Processed results feed into the `General knowledge` vector store, providing the agent with relevant internal knowledge snippets for enhanced response accuracy

## Google Drive File Processing

The file reading capability handles multiple formats through a structured sub-workflow:

1. **Workflow Initiation**: The agent calls `Read File From GDrive` with the selected `fileId` parameter
2. **Sub-workflow Activation**: `When Executed by Another Workflow` node activates the dedicated file processing sub-workflow
3. **Operation Validation**: `Operation` node confirms the request type is `readFile`
4. **File Retrieval**: `Download File1` node retrieves the binary file data from Google Drive
5. **Format-Specific Processing**: `FileType` node branches processing based on MIME type:
   - **PDF Files**: Route through `Extract from PDF` → `Get PDF Response` to extract plain text content
   - **CSV Files**: Process via `Extract from CSV` → `Get CSV Response` to obtain comma-delimited text data
   - **Image Files**: Analyze using `Analyse Image` with GPT-4o-mini to generate visual descriptions
   - **Audio/Video Files**: Transcribe using `Transcribe Audio` with Whisper for text transcript generation
6. **Content Integration**: The extracted text content returns to `Knowledge Agent`, which seamlessly weaves it into the final response

## External Search Capability

When internal knowledge sources prove insufficient, the workflow can access current public information through `Message a model in Perplexity`, ensuring responses remain accurate and up-to-date with the latest available information.

## Design Highlights

The workflow architecture incorporates several key design principles that enhance reliability and reusability:

- **Forced Reasoning**: The mandatory `Think` step significantly reduces hallucinations and prevents tool misuse by requiring deliberate consideration before action
- **Template Flexibility**: The design is intentionally generic—organizations can replace **[your company]** placeholders with their specific company name and integrate their own credentials for immediate deployment
- **Documentation Integration**: Sticky notes throughout the canvas serve as inline documentation for workflow creators and maintainers, providing context without affecting runtime performance

## System Benefits

With this comprehensive architecture, the assistant delivers powerful capabilities including long-term memory retention, semantic knowledge retrieval, multi-format file processing, and contextually rich responses tailored specifically for users at **[your company]**. The system balances sophisticated AI capabilities with practical business requirements, creating a robust foundation for enterprise-grade conversational AI deployment.

## 🔗 Nodes Used

Google Drive, Execute Workflow Trigger, AI Agent, Embeddings OpenAI, Anthropic Chat Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
