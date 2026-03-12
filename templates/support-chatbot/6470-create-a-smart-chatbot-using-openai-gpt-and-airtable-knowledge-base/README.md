# 💬 Create a smart chatbot using OpenAI GPT and Airtable knowledge base

> ⚡ **111 views** · 💬 [Support Chatbots](../)

## Description

This workflow creates an intelligent chatbot that uses your Airtable database as a knowledge base. The AI agent can automatically query your Airtable records to provide accurate, contextual responses based on your stored data.

![AI Chatbot with Airtable Integration.jpg](fileId:1865)

## Who's it for

This template is perfect for:
* Support teams who want to automate responses using their knowledge base
* Content creators managing media libraries in Airtable  
* Businesses looking to deploy AI chatbots with custom data sources
* Anyone who wants to make their Airtable data conversationally accessible

## How it works

The workflow combines OpenAI's language model with Airtable's database capabilities to create a smart chatbot. When users ask questions, the AI agent automatically determines which Airtable records are relevant and uses that data to generate helpful responses. The system maintains conversation history for natural, contextual interactions.

## How to set up

1. **Add your credentials:**
   - Configure your **Airtable Personal Access Token** in the Airtable Database node
   - Set up your **OpenAI API** credentials in the OpenAI Chat Model node

2. **Configure your Airtable connection:**
   - Click the **Airtable Database** node
   - Select your Base and Table containing your knowledge base data
   - The AI will automatically determine relevant records - no need to specify Record IDs

3. **Customize the AI model:**
   - Open the **OpenAI Chat Model** node
   - Choose your preferred model (GPT-4, GPT-3.5-turbo, etc.)
   - Adjust token limits if needed

4. **Test the chatbot:**
   - Click the **Chat** button to start a conversation
   - Ask questions related to your Airtable data

5. **Optional - Make it public:**
   - Enable public access in the Chat Trigger node
   - Embed the provided code into your website

## Requirements

- n8n instance (cloud or self-hosted)
- Airtable account with data you want to query
- OpenAI API key with available credits
- Airtable Personal Access Token

## How to customize the workflow

**Change the AI Provider:**
You can replace the OpenAI Chat Model with other providers like Anthropic Claude, Google Gemini, or local models by swapping the language model node.

**Adjust Context Window:**
Modify the "Remember Chat History" node to increase or decrease how many previous messages the AI remembers (default is 10 interactions).

**Update System Instructions:**
Edit the Smart AI Agent's system message to change how the assistant behaves or add specific instructions for your use case.

**Connect Multiple Tables:**
Add additional Airtable Database nodes to give the AI access to multiple tables or bases.

**Add More Tools:**
Extend the AI agent with additional tools like web search, email sending, or integration with other services.

## Workflow Structure

```
Chat Trigger → Smart AI Agent ← OpenAI Chat Model
                     ↓
              Airtable Database
                     ↑
           Remember Chat History
```

The Smart AI Agent orchestrates the conversation, deciding when to query Airtable and how to use the retrieved data in responses. The memory buffer ensures natural conversation flow by maintaining context across interactions.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
