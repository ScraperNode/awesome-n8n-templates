# 💬 Customer support & lead collection chatbot with RAG, GPT-4o, Sheets & Telegram

> ⚡ **719 views** · 💬 [Support Chatbots](../)

## Description

Who’s it for

This template is designed for small and medium businesses, startups, and agencies that want to automate customer inquiries, provide instant support, and capture leads without losing valuable conversations. It’s especially useful for teams that get many repetitive questions about products, services, or locations but don’t want to miss out on collecting contact details for follow-up.

What it does / How it works

The workflow creates a 24/7 AI-powered chatbot that answers company-related questions and collects customer information. It uses:
	•	GPT-4o for natural conversations
	•	Pinecone Vector Store for Retrieval-Augmented Generation (RAG) with your company knowledge base
	•	Google Sheets to store structured lead data
	•	Telegram to instantly notify your team

When a customer asks about products, services, or hours, the AI answers using the Pinecone database. Afterwards, it politely asks for their name, email, phone number, and interest. The details are saved to Google Sheets and your team receives a Telegram message with a summary.

How to set up
	1.	Connect your OpenAI account.
	2.	Create a Pinecone index with company FAQs, documents, or policies.
	3.	Link your Google Sheet with columns: Name, Email, Phone, Interested in.
	4.	Add your Telegram bot token and chat/group ID.
	5.	Replace [INSERT_YOUR_COMPANY_NAME_HERE] in the system prompt with your company name.

Requirements
	•	OpenAI API key
	•	Pinecone account
	•	Google Sheets access
	•	Telegram bot & chat ID

How to customize
	•	Change the system prompt to match your brand’s tone.
	•	Update the Pinecone namespace and embeddings model if needed.
	•	Add extra fields in Google Sheets (e.g., “Budget” or “Preferred product”).
	•	Extend the flow with CRM integrations or automated email follow-ups.

With this setup, you get a smart, RAG-powered chatbot that not only answers questions but also turns every conversation into a potential lead.

## 🔗 Nodes Used

AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Pinecone Vector Store, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
