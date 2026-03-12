# 📖 Dynamic MongoDB knowledge base chatbot with OpenAI GPT

> ⚡ **112 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow creates an intelligent chatbot that uses your MongoDB database as a knowledge base. The AI agent can automatically query your MongoDB collections to provide accurate, contextual responses based on your stored documents and data.

![63shots_so 1.jpg](fileId:1892)

## Who's it for

This template is perfect for:
* Developers using MongoDB for document-based data storage
* Organizations with complex, nested data structures in MongoDB
* Teams managing large-scale applications with MongoDB Atlas
* Businesses wanting to leverage NoSQL flexibility for AI chatbots
* Companies with existing MongoDB infrastructure and expertise

## How it works

The workflow combines OpenAI's language model with MongoDB's document database capabilities to create a smart chatbot. When users ask questions, the AI agent automatically constructs MongoDB queries to find relevant documents and uses that data to generate helpful responses. The system maintains conversation history for natural, contextual interactions.

## How to set up

1. **Add your credentials:**
   - Configure your **MongoDB** connection string and credentials in the MongoDB Database Lookup node
   - Set up your **OpenAI API** credentials in the OpenAI Chat Model node

2. **Configure your MongoDB connection:**
   - Click the **MongoDB Database Lookup** node
   - Specify your MongoDB collection containing your knowledge base data
   - The AI will automatically construct queries to find relevant documents

3. **Customize the AI model:**
   - Open the **OpenAI Chat Model** node
   - Choose your preferred model (GPT-4, GPT-3.5-turbo, etc.)
   - Adjust token limits if needed

4. **Test the chatbot:**
   - Click the **Chat** button to start a conversation
   - Ask questions related to your MongoDB data

5. **Optional - Make it public:**
   - Enable public access in the Chat Trigger node
   - Embed the provided code into your website

## Requirements

- n8n instance (cloud or self-hosted)
- MongoDB instance (self-hosted, MongoDB Atlas, or other MongoDB service)
- OpenAI API key with available credits
- MongoDB user credentials with read permissions on target collections

## How to customize the workflow

**Change the AI Provider:**
You can replace the OpenAI Chat Model with other providers like Anthropic Claude, Google Gemini, or local models by swapping the language model node.

**Adjust Context Window:**
Modify the "Remember Chat History" node to increase or decrease how many previous messages the AI remembers (default is 10 interactions).

**Update System Instructions:**
Edit the Smart AI Agent's system message to change how the assistant behaves or add specific instructions for your use case.

**Connect Multiple Collections:**
Add additional MongoDB Database Lookup nodes to give the AI access to multiple collections within your MongoDB database.

**Optimize Query Performance:**
Create appropriate indexes on your MongoDB collections to improve query performance for frequently accessed data.

**Add More Tools:**
Extend the AI agent with additional tools like web search, email sending, or integration with other services.

## Workflow Structure

```
Chat Trigger → Smart AI Agent ← OpenAI Chat Model
                     ↓
           MongoDB Database Lookup
                     ↑
           Remember Chat History
```

The Smart AI Agent orchestrates the conversation, deciding when to query MongoDB and how to use the retrieved documents in responses. The memory buffer ensures natural conversation flow by maintaining context across interactions.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
