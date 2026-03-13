# ⚡ Process voice, images & documents with GPT-4o, MongoDB & Gmail tools

> ⚡ **841 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## What it does

This n8n workflow creates a cutting-edge, multi-modal AI Memory Assistant designed to capture, understand, and intelligently recall your personal or business information from diverse sources. It automatically processes voice notes, images, documents (like PDFs), and text messages sent via Telegram. Leveraging GPT-4o for advanced AI processing (including visual analysis, document parsing, transcription, and semantic understanding) and MongoDB Atlas Vector Search for persistent and lightning-fast recall, this assistant acts as an external brain. Furthermore, it integrates with Gmail, allowing the AI to send and search emails as part of its memory and response capabilities. This end-to-end solution blurprint provides a powerful starting point for personal knowledge management and intelligent automation.

## How it works


#### 1. Multi-Modal Input Ingestion 🗣️📸📄💬

Your memories begin when you send a voice note, an image, a document (e.g., PDF), or a text message to your Telegram bot. The workflow immediately identifies the input type.

#### 2. Advanced AI Content Processing 🧠✨

Each input type undergoes specialized AI processing by GPT-4o:

1. Voice notes are transcribed into text using OpenAI Whisper.

2. Images are visually analyzed by GPT-4o Vision, generating detailed textual descriptions.

3. Documents (PDFs) are processed for text extraction, leveraging GPT-4o for robust parsing and understanding of content and structure. Unsupported document types are gracefully handled with a user notification.

4. Text messages are directly forwarded for further processing.

This phase transforms all disparate input formats into a unified, rich textual representation.

#### 3. Intelligent Memory Chunking & Vectorization ✂️🏷️➡️🔢

The processed content (transcriptions, image descriptions, extracted document text, or direct text) is then fed back into GPT-4o. The AI intelligently chunks the information into smaller, semantically coherent pieces, extracts relevant keywords and tags, and generates concise summaries. Each of these enhanced memory chunks is then converted into a high-dimensional vector embedding using OpenAI Embeddings.

#### 4. Persistent Storage & Recall (MongoDB Atlas Vector Search) 💾🔍

These vector embeddings, along with their original content, metadata, and tags, are stored in your MongoDB Atlas cluster, which is configured with Atlas Vector Search. This allows for highly efficient and semantically relevant retrieval of memories based on user queries, forming the core of your "smart recall" system.

#### 5. AI Agent & External Tools (Gmail Integration) 🤖🛠️

When you ask a question, the AI Agent (powered by GPT-4o) acts as the central intelligence. It uses the MongoDB Chat Memory to maintain conversational context and, crucially, queries the MongoDB Atlas Vector Search store to retrieve relevant past memories. The agent also has access to Gmail tools, enabling it to send emails on your behalf or search your past emails to find information or context that might not be in your personal memory store.

#### 6. Smart Response Generation & Delivery 💬➡️📱

Finally, using the retrieved context from MongoDB and the conversational history, GPT-4o synthesizes a concise, accurate, and contextually aware answer. This response is then delivered back to you via your Telegram bot.

## How to set it up (~20 Minutes)

Getting this powerful workflow running requires a few key configurations and external service dependencies.

**Telegram Bot Setup:**

1. Use BotFather in Telegram to create a new bot and obtain its API Token.

2. In your n8n instance, add a new Telegram API credential. Give it a clear name (e.g., "My AI Memory Bot") and paste your API Token.

**OpenAI API Key Setup:**

1. Log in to your OpenAI account and generate a new API key.

2. Within n8n, create a new OpenAI API credential. Name it appropriately (e.g., "My OpenAI Key for GPT-4o") and paste your API key. This credential will be used by the OpenAI Chat Model (GPT-4o for processing, chunking, and RAG), Analyze Image, and Transcribe Audio nodes.

**MongoDB Atlas Setup:**

1. If you don't have one, create a free-tier or paid cluster on MongoDB Atlas.
2. Create a database and a collection within your cluster to store your memory chunks and their vector embeddings.

3. Crucially, configure an Atlas Vector Search index on your chosen collection. This index will be on the field containing your embeddings (e.g., embedding field, type knnVector). Refer to MongoDB Atlas documentation for detailed instructions on creating vector search indexes.

4. In n8n, add a new MongoDB credential. Provide your MongoDB Atlas connection string (ensure it includes your username, password, and database name), and give it a clear name (e.g., "My Atlas DB"). This credential will be used by the MongoDB Chat Memory node and for any custom HTTP requests you might use for Atlas Vector Search insertion/querying.

**Gmail Account Setup:**

1. Go to Google Cloud Console, enable the Gmail API for your project, and configure your OAuth consent screen.

2. Create an OAuth 2.0 Client ID for a Desktop app (or Web application, depending on your n8n setup and redirect URI). Download the JSON credentials.

3. In n8n, add a new Gmail OAuth2 API credential. Follow the n8n instructions to configure it using your Google Client ID and Client Secret, and authenticate with your Gmail account, ensuring it has sufficient permissions to send and search emails.

**External API Services:**

1. If your Extract from File node relies on an external service for robust PDF/DocX text extraction, ensure you have an API key and the service is operational. The current flow uses ConvertAPI.

2. Add the necessary credential (e.g., ConvertAPI) in n8n.

## How you could enhance it ✨

This workflow offers numerous avenues for advanced customization and expansion:

1. Expanded Document Type Support: Enhance the "Document Processing" section to handle a wider range of document types beyond just PDFs (e.g., .docx, .xlsx, .pptx, markdown, CSV) by integrating additional conversion APIs or specialized parsing libraries (e.g., using a custom code node or dedicated third-party services like Apache Tika, Unstructured.io).

2. Fine-tuned Memory Chunks & Metadata: Implement more sophisticated chunking strategies for very long documents, perhaps based on semantic breaks or document structure (headings, sections), to improve recall accuracy. Add more metadata fields (e.g., original author, document date, custom categories) to your MongoDB entries for richer filtering and context.

3. Advanced AI Prompting: Allow users to dynamically set parameters for their memory inputs (e.g., "This is a high-priority meeting note," "This image contains sensitive information") which can influence how GPT-4o processes, tags, and stores the memory, or how it's retrieved later.

4. n8n Tool Expansion for Proactive Actions: Significantly expand the AI Agent's capabilities by providing it with access to a wider range of n8n tools, moving beyond just information retrieval and email


5. External Data Source Integration (APIs): Expand the AI Agent's tools to query other external APIs (e.g., weather, stock prices, news, CRM systems) so it can provide real-time information relevant to your memories.

## Getting Assistance & More Resources

Need assistance setting this up, adapting it to a unique use case, or exploring more advanced customizations? Don't hesitate to reach out! You can contact me directly at nanabrownsnr@gmail.com. Also, feel free to check out my **[Youtube Channel](https://www.youtube.com/@InnovationAndAutomation)** where I discuss other n8n templates, as well as Innovation and automation solutions.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
