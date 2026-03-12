# 🎫 Automated product email support with GPT-4.1, Pinecone RAG, and Gmail

> ⚡ **343 views** · 🎫 [Ticket Management & Triage](../)

## Description

Description
This workflow is built for e-commerce store owners, customer support teams, and retail businesses who want to provide instant, intelligent email support without hiring additional staff. If you're tired of manually responding to customer inquiries, searching through product catalogs, and copying information into emails, this automation will transform your support process.
It turns your inbox into a smart AI-powered support system that reads, understands, and responds to customer questions about your store products while you focus on growing your business.
How it works / What it does:

This n8n automation completely transforms how you handle customer email inquiries using AI and Retrieval-Augmented Generation (RAG) technology.

Here's a simple breakdown of how it works:

- Monitor your Gmail inbox using the Gmail Trigger node, which checks every minute for new customer emails (excluding emails sent by you).
- Assess if a reply is needed with an AI-powered classification system. The workflow uses GPT-4.1 with a structured JSON parser to determine whether incoming emails are genuine customer inquiries about your men's clothing store that require a response.
- Filter relevant emails through the If Needs Reply node, which only passes emails that need attention to the AI Agent, preventing unnecessary processing.
- Generate intelligent responses using an AI Agent powered by GPT-4.1-nano. The agent uses a friendly, professional tone and starts each email with "Dear" and ends with "Best regards" to maintain proper email etiquette.
- Search your knowledge base with a Vector Store RAG tool connected to Pinecone. The AI Agent queries your men's clothing product database using OpenAI embeddings to find accurate, up-to-date information about prices, features, and product details.
- Send personalized replies automatically through the Gmail node, which responds directly to the original email thread with clear, concise, and empathetic answers to customer questions.

Once everything is set up, the system runs on autopilot and provides 24/7 customer support without any manual intervention.

How to set up:

Follow these steps to get your AI-powered email support system running:

- Import the JSON file into your n8n instance.
- Add your API credentials:
	1. Gmail OAuth2 credentials for reading and sending emails
	2. OpenAI API key for the AI Agent and embeddings
	3. Pinecone API credentials for vector storage


- Set up your Pinecone vector database:

	1. Create a Pinecone index. 
	2. Create a namespace.
	3. Upload your store data to the vector store


- Configure the Gmail Trigger node to monitor the correct email account.
- Customize the AI Agent's system message to match your brand voice and support policies.
- Activate the workflow to enable automatic monitoring and responses.

Requirements:

Before running the workflow, make sure you have the following:

- An n8n account or instance (self-hosted or n8n Cloud)
- A Gmail account for receiving and sending customer emails
- OpenAI API access for the AI Agent and embeddings (GPT-4.1 and GPT-4.1-nano models)
- A Pinecone account with a configured vector database containing your product information
- Your store data, product catalog prepared and uploaded to Pinecone

How to customize the workflow:

This workflow is flexible and can be customized to fit your business needs. Here's how you can tailor it:

- Adjust the response style by modifying the system message in the AI Agent node. You can make it more casual, formal, or brand-specific.
- Add response length controls by updating the system message instructions.
- Currently set to keep responses short and concise, you can adjust this for more detailed explanations.
- Change the polling frequency in the Gmail Trigger node. The default is every minute, but you can adjust it to check more or less frequently based on your email volume.
- Filter specific types of emails by modifying the filters in the Gmail Trigger and "Assess if message needs a reply" nodes to handle specific subjects, senders, or keywords.
- Connect to different email platforms by replacing the Gmail nodes with other email services like Outlook, IMAP, or customer support platforms.
- Add human-in-the-loop approval by inserting a webhook or notification node before the Gmail reply node, allowing manual review before sending responses.
- Implement response tracking by adding database nodes to log all AI-generated responses for quality control and training purposes.
- Add multi-language support by incorporating translation nodes or configuring the AI Agent to detect and respond in the customer's language.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
