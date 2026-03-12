# 📖 AI chatbot with OpenAI GPT-4.1-Mini and Supabase database knowledge base

> ⚡ **136 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow creates an intelligent chatbot that uses your Supabase database as a knowledge base. The AI agent can automatically query your Supabase tables to provide accurate, contextual responses based on your stored data.

![AI Chatbot Supabase Database Website Embed.jpg](fileId:1887)

## Who's it for

This template is perfect for:
* Developers building applications with Supabase backend
* Teams using Supabase for real-time data management
* Organizations wanting PostgreSQL-powered AI chatbots
* Startups leveraging Supabase's Firebase alternative ecosystem
* Teams needing scalable, real-time database integration with AI

## How it works

The workflow combines OpenAI's language model with Supabase's PostgreSQL database capabilities to create a smart chatbot. When users ask questions, the AI agent automatically determines which Supabase records are relevant and uses that data to generate helpful responses. The system maintains conversation history for natural, contextual interactions.

## How to set up

1. **Add your credentials:**
   - Configure your **Supabase** project URL and API key in the Supabase Database node
   - Set up your **OpenAI API** credentials in the OpenAI Chat Model node

2. **Configure your Supabase connection:**
   - Click the **Supabase Database** node
   - Select your Supabase table containing your knowledge base data
   - The AI will automatically determine relevant records - no need to specify individual record IDs

3. **Customize the AI model:**
   - Open the **OpenAI Chat Model** node
   - Choose your preferred model (GPT-4, GPT-3.5-turbo, etc.)
   - Adjust token limits if needed

4. **Test the chatbot:**
   - Click the **Chat** button to start a conversation
   - Ask questions related to your Supabase data

5. **Optional - Make it public:**
   - Enable public access in the Chat Trigger node
   - Embed the provided code into your website

## Requirements

- n8n instance (cloud or self-hosted)
- Supabase project with tables containing your knowledge base data
- OpenAI API key with available credits
- Supabase API key with appropriate read permissions

## How to customize the workflow

**Change the AI Provider:**
You can replace the OpenAI Chat Model with other providers like Anthropic Claude, Google Gemini, or local models by swapping the language model node.

**Adjust Context Window:**
Modify the "Remember Chat History" node to increase or decrease how many previous messages the AI remembers (default is 10 interactions).

**Update System Instructions:**
Edit the Smart AI Agent's system message to change how the assistant behaves or add specific instructions for your use case.

**Connect Multiple Tables:**
Add additional Supabase Database nodes to give the AI access to multiple tables within your Supabase project.

**Add Real-time Features:**
Leverage Supabase's real-time capabilities by integrating webhooks or subscriptions to keep your chatbot data current.

**Add More Tools:**
Extend the AI agent with additional tools like web search, email sending, or integration with other services.

## Workflow Structure

```
Chat Trigger → Smart AI Agent ← OpenAI Chat Model
                     ↓
              Supabase Database
                     ↑
           Remember Chat History
```

The Smart AI Agent orchestrates the conversation, deciding when to query Supabase and how to use the retrieved data in responses. The memory buffer ensures natural conversation flow by maintaining context across interactions.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
