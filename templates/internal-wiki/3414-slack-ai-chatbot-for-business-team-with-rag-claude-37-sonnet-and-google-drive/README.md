# 📖 Slack AI chatbot for business team with RAG, Claude 3.7 Sonnet and Google Drive

> ⚡ **9,756 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Imagine having an **AI chatbot on Slack** that seamlessly integrates with your company’s workflow, **automating repetitive requests**. No more digging through emails or documents to find answers about IT requests, company policies, or vacation days—just ask the bot, and it will instantly provide the right information.  

With its **24/7 availability**, the chatbot ensures that team members get immediate support without waiting for a colleague to be online, making assistance faster and more efficient.  

Moreover, this AI-powered bot serves as a **central hub for internal communication**, allowing everyone to quickly access procedures, documents, and company knowledge without searching manually. A simple Slack message is all it takes to get the information you need, enhancing productivity and collaboration across teams.

-----

#### **How It Works**  
1. **Slack Trigger**: The workflow starts when a user mentions the AI bot in a Slack channel. The trigger captures the message and forwards it to the AI Agent.  
2. **AI Agent Processing**:  
   - The AI Agent, powered by Anthropic's Claude 3.7 Sonnet model, processes the query.  
   - It uses **Retrieval-Augmented Generation (RAG)** to fetch relevant information from the company’s internal knowledge base stored in Qdrant (a vector database).  
   - A **Simple Memory** buffer retains recent conversation context (last 10 messages) for continuity.  
3. **Knowledge Retrieval**:  
   - The RAG tool searches Qdrant’s vector store using OpenAI embeddings to find the most relevant document chunks (top 10 matches).  
4. **Response Generation**:  
   - The AI synthesizes the retrieved data into a concise, structured response (1-2 sentences for the answer, 2-3 supporting details, and a source citation).  
   - The response is formatted in Slack-friendly markdown (bullet points, blockquotes) and sent back to the user.  

---  

#### **Set Up Steps**  
1. **Prepare Qdrant Vector Database**:  
   - Create a Qdrant collection via HTTP request (`Create collection` node).  
   - Optionally, refresh/clear the collection (`Refresh collection` node) before adding new documents.  
2. **Load Company Documents**:  
   - Fetch files from a Google Drive folder (`Get folder` → `Download Files`).  
   - Process documents: Split text into chunks (`Token Splitter`) and generate embeddings (`Embeddings OpenAI2`).  
   - Store embeddings in Qdrant (`Qdrant Vector Store1`).  
3. **Configure Slack Bot**:  
   - Create a Slack bot via Slack API with required permissions
   - Add the bot to the desired Slack channel and note the `channelId` for the workflow.  
4. **Deploy AI Components**:  
   - Connect the AI Agent to Anthropic’s model, RAG tool, and memory buffer.  
   - Ensure OpenAI embeddings are configured for both RAG and document processing.  
5. **Test & Activate**:  
   - Use the manual trigger (`When clicking ‘Test workflow’`) to validate document ingestion.  
   - Activate the workflow to enable real-time Slack interactions.  

----

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, AI Agent, Embeddings OpenAI, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
