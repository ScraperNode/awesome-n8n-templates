# 🎫 AI-powered email replies with spam filtering & FAQ lookup using GPT-4o mini & Pinecone

> ⚡ **1,849 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n workflow automates the handling of incoming emails. It detects and filters out spam, searches a knowledge base (FAQ) stored in a Pinecone vector database, and sends a reply using Gmail — all powered by an AI model (GPT-4o mini).

How It Works
1. Receiving Emails

- The Gmail Trigger node checks a Gmail inbox every hour.

- When a new email arrives, it starts the workflow.

2. Fetching Full Email Content

- The get_message node retrieves all the details of the message: sender, subject, text, message ID, etc.

3. Spam Filtering

- The Spam checker node uses GPT-4o mini to classify the email as either "spam" or "no spam".

- It detects not only classic spam but also automated messages (e.g. from Google or Microsoft).

- If marked as "spam", the workflow ends and nothing is processed.

4. Conditional Filter

- The If node checks the spam result.

- Only "no spam" emails proceed to the AI Agent.

5. AI-Based Reply

- The AI Agent node generates a response based on:

	- The email content

	- A system prompt defining the assistant’s behavior (polite, professional, under the name “Total AI Solutions”)

	- Information retrieved from the Pinecone Vector Store, which contains FAQs

- The AI is instructed to always check the vector store before replying.

- The AI prepares both the subject and the body of the reply.

6. Sending the Reply

- The Gmail node sends the reply to the original sender.

- It uses the original email's ID to keep the thread intact.

7. Language Model

- The OpenAI Chat Model node provides GPT-4o mini as the language engine for generating responses.

8. Memory Support

- The Simple Memory node maintains short-term context, helpful in multi-turn conversations.

9. Knowledge Base (FAQ)

- The Pinecone Vector Store node connects to a Pinecone index (faqmattabott) containing vectorized FAQ content.

- Vectors are created using the Embeddings OpenAI node.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
