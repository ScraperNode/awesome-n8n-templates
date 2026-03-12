# ⚡ Personal portfolio CV  Rag chatbot - with conversation store and email summary

> ⚡ **4,551 views** · ⚡ [Personal Productivity](../)

## Description

## Personal Portfolio CV Rag Chatbot - with Conversation Store and Email Summary


### Target Audience
This template is perfect for:

Individuals looking to create a working professional and interactive personal portfolio chatbot. 

Developers interested in integrating RAG Chatbot functionality with conversation storage.
 

### 1. Description
Create a stunning Personal Portfolio CV with integrated RAG Chatbot capabilities, including conversation storage and daily email summaries.

### 2.Features:

#### Training: Setup Ingestion stage
Upload your CV to Google Drive and let the Drive trigger updates to read your resume cv and convert it into your vector database (RAG purpose). Modify any parts as needed.

#### Chat & Track:
 Use any frontend/backend interface to call the chat API and chat history API.

#### Reporting Daily Chat Conversations:
 Receive daily automatic summaries of chat conversations. Data stored via NocoDB.

### 3.Setup Guide:
 
#### Step-by-Step Instructions:

Ensure all credentials are ready. Follow the notes provided.

1. Ingestion:
Upload your CV to Google Drive.
The Drive triggers RAG update in your vector database. You can change the folder name, files and indexname of the vector database accordingly.
2. Chat:
Use any frontend/backend interface to call the chat API (refer to the notes for details) .

[optional] Use any frontend/backend interface to call the update chat history API (refer to the notes for details).

3.Tracking Chat:

Get daily automatic summaries of chat conversations.Format email conversations report as you like.

You are ready to go!

## 🔗 Nodes Used

Webhook, Google Drive, Gmail, NocoDB, Google Drive Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
