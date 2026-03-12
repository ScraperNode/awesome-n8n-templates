# 📖 AI-powered company documents Q&A assistant with Google Drive and GPT-4 mini

> ⚡ **159 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Company Knowledge Base Assistant

## Who's it for

This workflow is designed for companies looking to onboard new employees and interns efficiently. It's perfect for HR teams, team leaders, and organizations that want to provide instant access to company knowledge without manual intervention. Whether you're a startup or an established company, this assistant helps your team find answers quickly from your existing documentation.

## What it does

This AI-powered chatbot automatically learns from your company documents stored in Google Drive and provides accurate, contextual answers to employee questions. The system continuously monitors a designated Drive folder, processes new documents, and makes them instantly searchable through a conversational interface.

Key features:
- Automatic document ingestion from Google Drive
- Intelligent search across all company documents
- Conversational interface with memory
- Source citation for answers
- Real-time updates when new documents are added

## How it works

The workflow has two main components:

**Document Processing Pipeline**: Monitors your Google Drive folder every minute for new files. When a document is added, it's automatically downloaded, split into searchable chunks, converted into vector embeddings, and stored in an in-memory knowledge base.

**Chat Interface**: Users send questions via webhook, the AI agent searches the knowledge base for relevant information, maintains conversation history for context, and returns accurate answers with source citations.

## Requirements

- Google Drive account with OAuth2 credentials
- Google Service Account for document downloads
- OpenAI API key for embeddings and chat model
- Designated Google Drive folder for company documents

## Setup Instructions

1. **Configure Google Drive**:
   - Set up Google Drive OAuth2 credentials in the "Watch Company Docs Folder" node
   - Set up Google Service Account credentials in the "Fetch New Document" node
   - Select your company documents folder in the trigger node

2. **Configure OpenAI**:
   - Add your OpenAI API key to both embedding nodes
   - The workflow uses GPT-4 Mini for cost-effective responses

3. **Upload Your Documents**:
   - Add company handbooks, policies, procedures, and FAQs to the designated Drive folder
   - Documents will be automatically processed within minutes

4. **Test the Chat Interface**:
   - The webhook endpoint accepts POST requests with this format:
   ```json
   {
     "data": "Your question here",
     "session_id": "unique-user-id"
   }
   ```

5. **Integrate with Your Tools**:
   - Connect the webhook to Slack, Teams, or your internal chat platform
   - Each user gets their own conversation history via session_id

## How to customize

- **Change check frequency**: Adjust polling interval in "Watch Company Docs Folder" from every minute to hourly or daily
- **Adjust chunk size**: Modify the "Split into Searchable Chunks" node to change how documents are segmented
- **Increase context**: Change `topK` parameter in "Search Company Documents" to retrieve more relevant sections
- **Extend memory**: Adjust `contextWindowLength` in "Conversation History" to remember more previous messages
- **Switch AI model**: Replace GPT-4 Mini with GPT-4 or other models based on your accuracy needs
- **Add filters**: Modify the system prompt to focus on specific departments or document types
- **Custom responses**: Update the system message in "Company Knowledge Assistant" to match your company's tone

## Tips for best results

- Use clear, descriptive file names for documents in Drive
- Organize documents by department or topic in subfolders
- Include FAQ documents with common questions and answers
- Regularly update outdated documents to maintain accuracy
- Monitor the assistant's responses and refine the system prompt as needed

---

## 🔗 Nodes Used

Webhook, Google Drive, Google Drive Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
